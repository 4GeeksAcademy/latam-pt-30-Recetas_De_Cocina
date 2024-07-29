"""
This module takes care of starting the API Server, Loading the DB and Adding the endpoints
"""
from unicodedata import category
from flask import Flask, request, jsonify, url_for, Blueprint, render_template # type: ignore
from api.utils import generate_sitemap, APIException
from flask_cors import CORS # type: ignore
from api.models import Paso, db, User, Plato, Categoria,Ingrediente,InformacionNutritiva
from flask_jwt_extended import JWTManager
from flask_jwt_extended import create_access_token



api = Blueprint('api', __name__)

# Allow CORS requests to this API
CORS(api)

#REGISTRO DE USUARIO
@api.route('/signup', methods=['POST'])
def create_user():
    data = request.json
    email = data.get('email')
    password = data.get('password')

    if None in [email, password]:
        return jsonify({"message": "email and password are required"}), 400
    
    user_already_exists = db.session.execute(db.select(User).filter_by(email=email)).one_or_none()
    if user_already_exists:
        return jsonify({"message": "invalid email"}), 400

    new_user = User(email=email, password=password, is_active=True)
    try:
        db.session.add(new_user)
        db.session.commit()
    except Exception as error:
        print(error)
        db.session.rollback()
        return jsonify({"message": "DB error"}), 500
    
    return jsonify ({"message":"User registered succesfully"}), 200

#INICIO DE SESION DEL USUARIO
@api.route('/login', methods=['POST'])
def login():
    data = request.json
    email = data.get('email')
    password = data.get('password')

    if not email or not password:
        return jsonify({"message": "email and password are required"}), 400
    
    user = User.query.filter_by(email=email).first()

    if user is None or user.password != password:
        return jsonify({"message": "invalid credentials"}), 401
    
    token = create_access_token(identity=user.id)

    return jsonify({"token": token}), 201

@api.route('/recetas', methods=['POST'])
def create_receta():
    data = request.json
    
    # Verificar que los datos necesarios están presentes
    required_fields = ["nombre", "categoria", "ingredientes", "pasos", "informacion_nutritiva"]
    for field in required_fields:
        if field not in data:
            return jsonify({"message": f"{field} is required"}), 400
    
    try:
        # Crear la categoría si no existe
        categoria = Categoria.query.filter_by(nombre=data["categoria"]).first()
        if not categoria:
            categoria = Categoria(nombre=data["categoria"])
            db.session.add(categoria)
            db.session.commit()

        # Crear el plato
        new_plato = Plato(nombre=data["nombre"], categoria_id=categoria.id)
        db.session.add(new_plato)
        db.session.commit()

        # Crear los ingredientes
        for ing in data["ingredientes"]:
            ingrediente = Ingrediente(nombre=ing["nombre"], cantidad=ing["cantidad"], plato_id=new_plato.id)
            db.session.add(ingrediente)

        # Crear los pasos
        for paso in data["pasos"]:
            nuevo_paso = Paso(numero_de_paso=paso["numero_de_paso"], description=paso["description"], plato_id=new_plato.id)
            db.session.add(nuevo_paso)

        # Crear la información nutritiva
        info_nutritiva = InformacionNutritiva(
            calorias=data["informacion_nutritiva"]["calorias"],
            carbohidratos=data["informacion_nutritiva"]["carbohidratos"],
            energia=data["informacion_nutritiva"]["energia"],
            grasa=data["informacion_nutritiva"]["grasa"],
            proteina=data["informacion_nutritiva"]["proteina"],
            fibra=data["informacion_nutritiva"]["fibra"],
            azucares=data["informacion_nutritiva"]["azucares"],
            grasas_saturadas=data["informacion_nutritiva"]["grasas_saturadas"],  
            sodio=data["informacion_nutritiva"]["sodio"],
            plato_id=new_plato.id
        )
        
        db.session.add(info_nutritiva)
        db.session.commit()

        return jsonify({"message": "Receta creada", "recipe_id": new_plato.id}), 201

    except Exception as e:
        db.session.rollback()
        return jsonify({"message": "Error creating receta", "error": str(e)}), 500
    
    

@api.route('/recetas', methods=['GET'])
def get_recetas():
    try:
        # Obtener todas las recetas
        platos = Plato.query.all()
        all_recipes = []

        for plato in platos:
            # Obtener la categoría del plato
            categoria = Categoria.query.get(plato.categoria_id)

            # Obtener los ingredientes del plato
            ingredientes = Ingrediente.query.filter_by(plato_id=plato.id).all()
            ingredientes_list = [{"nombre": ing.nombre, "cantidad": ing.cantidad} for ing in ingredientes]

            # Obtener los pasos del plato
            pasos = Paso.query.filter_by(plato_id=plato.id).all()
            pasos_list = [{"numero_de_paso": paso.numero_de_paso, "description": paso.description} for paso in pasos]

            # Obtener la información nutritiva del plato
            info_nutritiva = InformacionNutritiva.query.filter_by(plato_id=plato.id).first()
            if info_nutritiva:
                info_nutritiva_dict = {
                    "calorias": info_nutritiva.calorias,
                    "carbohidratos": info_nutritiva.carbohidratos,
                    "energia": info_nutritiva.energia,
                    "grasa": info_nutritiva.grasa,
                    "proteina": info_nutritiva.proteina,
                    "fibra": info_nutritiva.fibra,
                    "azucares": info_nutritiva.azucares,
                    "grasas_saturadas": info_nutritiva.grasas_saturadas,
                    "sodio": info_nutritiva.sodio
                }
            else:
                info_nutritiva_dict = {}

            # Crear el diccionario de la receta
            recipe_dict = {
                "nombre": plato.nombre,
                "categoria": categoria.nombre,
                "ingredientes": ingredientes_list,
                "pasos": pasos_list,
                "informacion_nutritiva": info_nutritiva_dict
            }

            all_recipes.append(recipe_dict)

        return jsonify(all_recipes), 200

    except Exception as e:
        return jsonify({"message": "Error retrieving recetas", "error": str(e)}), 500
    
@api.route('/categorias', methods=['GET'])
def get_categorias():
    try:
        categorias = Categoria.query.all()
        categorias_list = []
        for categoria in categorias:
            categorias_list.append({
                'id': categoria.id,
                'nombre': categoria.nombre
            })
        return jsonify(categorias_list), 200
    except Exception as e:
        return jsonify({"message": "Error fetching categorias", "error": str(e)}), 500
    
    
@api.route('/plato/<int:plato_id>', methods=['GET'])
def get_plato(plato_id):
    try:
        plato = Plato.query.get(plato_id)
        all_recipes = []
        

            # Obtener los ingredientes del plato
        ingredientes = Ingrediente.query.filter_by(plato_id=plato.id).all()
        ingredientes_list = [{"nombre": ing.nombre, "cantidad": ing.cantidad} for ing in ingredientes]

            # Obtener los pasos del plato
        pasos = Paso.query.filter_by(plato_id=plato.id).all()
        pasos_list = [{"numero_de_paso": paso.numero_de_paso, "description": paso.description} for paso in pasos]

            # Obtener la información nutritiva del plato
        info_nutritiva = InformacionNutritiva.query.filter_by(plato_id=plato.id).first()
        if info_nutritiva:
                info_nutritiva_dict = {
                    "calorias": info_nutritiva.calorias,
                    "carbohidratos": info_nutritiva.carbohidratos,
                    "energia": info_nutritiva.energia,
                    "grasa": info_nutritiva.grasa,
                    "proteina": info_nutritiva.proteina,
                    "fibra": info_nutritiva.fibra,
                    "azucares": info_nutritiva.azucares,
                    "grasas_saturadas": info_nutritiva.grasas_saturadas,
                    "sodio": info_nutritiva.sodio
                }
        else:
                info_nutritiva_dict = {}

            # Crear el diccionario de la receta
        recipe_dict = {
                "nombre": plato.nombre,
                "ingredientes": ingredientes_list,
                "pasos": pasos_list,
                "informacion_nutritiva": info_nutritiva_dict
            }

        all_recipes.append(recipe_dict)

        return jsonify(all_recipes), 200
    except Exception as e:
        return jsonify({"message": "Error fetching categorias", "error": str(e)}), 500
    


    #DELETE
@api.route('/plato/<int:plato_id>', methods=['DELETE'])
def delete_plato(plato_id):
    try:
        # Buscar el plato por id
        plato = Plato.query.get(plato_id)
        if not plato:
            return jsonify({"message": "Plato not found"}), 404

        # Eliminar el plato
        db.session.delete(plato)
        db.session.commit()
        return jsonify({"message": "Plato deleted successfully"}), 200

    except Exception as e:
        db.session.rollback()
        return jsonify({"message": "Error deleting plato", "error": str(e)}), 500 
