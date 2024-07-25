"""
This module takes care of starting the API Server, Loading the DB and Adding the endpoints
"""
from flask import Flask, request, jsonify, url_for, Blueprint, render_template # type: ignore
from api.models import Paso, db, User, Plato
from api.utils import generate_sitemap, APIException
from flask_cors import CORS # type: ignore

api = Blueprint('api', __name__)

# Allow CORS requests to this API
CORS(api)


@api.route('/hello', methods=['POST', 'GET'])
def handle_hello():

    response_body = {
        "message": "Hello! I'm a message that came from the backend, check the network tab on the google inspector and you will see the GET request"
    }

    return jsonify(response_body), 200

@api.route("/signup", methods=["POST", 'GET'])
def registro():
    return 

 #primer plato
@api.route('/postres', methods=['POST'])
def create_plato():
    data = request.json
    if data.get("name") is None:
        return jsonify({"message": "name is required"}), 400

    new_receta = Plato(),
    new_is_active=True  
    db.session.add(new_receta)
    db.session.commit()

    return jsonify({
        "message": "Receta creada",
        "recipe_id": new_receta.id
    }), 201

@api.route('/postres', methods=['POST'])
def create_pasos():
    data = request.json
    if data.get("description") is None:
        return jsonify({"message": "description is required"}), 400

    new_description = Pasos(),
    new_is_active=True  
    db.session.add(new_description)
    db.session.commit()

    return jsonify({
        "message": "Receta creada",
        "recipe_id": new_description.id
    }), 201


  