"""
This module takes care of starting the API Server, Loading the DB and Adding the endpoints
"""
from flask import Flask, request, jsonify, url_for, Blueprint, render_template # type: ignore
from api.utils import generate_sitemap, APIException
from flask_cors import CORS # type: ignore
from api.models import Paso, db, User, Plato, Categoria,Ingrediente,InformacionNutritiva


api = Blueprint('api', __name__)

# Allow CORS requests to this API
CORS(api)

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