from email.policy import default
from flask_sqlalchemy import SQLAlchemy

db = SQLAlchemy()

class User(db.Model):
    id = db.Column(db.Integer, primary_key=True)
    email = db.Column(db.String(120), unique=True, nullable=False)
    password = db.Column(db.String(80), unique=False, nullable=False)
    is_active = db.Column(db.Boolean(), unique=False, nullable=False)

    def __repr__(self):
        return f'<User {self.email}>'

    def serialize(self):
        return {
            "id": self.id,
            "email": self.email,
            # do not serialize the password, its a security breach
        }

        
        
class Categoria(db.Model):
    
    id = db.Column(db.Integer, primary_key=True)
    nombre = db.Column(db.String(250))
    plato = db.relationship('Plato', uselist=False, back_populates='categoria')

class Plato(db.Model):
    
    id = db.Column(db.Integer, primary_key=True)
    nombre = db.Column(db.String(250))
    categoria_id = db.Column(db.Integer, db.ForeignKey('categoria.id'))
    categoria = db.relationship('Categoria', back_populates='plato')
    ingredientes = db.relationship('Ingrediente', back_populates='plato')
    informacion_nutritiva = db.relationship('InformacionNutritiva', uselist=False, back_populates='plato')
    pasos = db.relationship('Paso', back_populates='plato')

class Ingrediente(db.Model):
    
    id = db.Column(db.Integer, primary_key=True)
    nombre = db.Column(db.String(250), nullable=False)
    cantidad = db.Column(db.String(250), nullable=False)
    plato_id = db.Column(db.Integer, db.ForeignKey('plato.id'))
    plato = db.relationship('Plato', back_populates='ingredientes')

class Paso(db.Model):
    
    id = db.Column(db.Integer, primary_key=True)
    numero_de_paso = db.Column(db.Integer)
    description = db.Column(db.String(500))
    plato_id = db.Column(db.Integer, db.ForeignKey('plato.id'))
    plato = db.relationship('Plato', back_populates='pasos')

class InformacionNutritiva(db.Model):
    
    id = db.Column(db.Integer, primary_key=True)
    calorias = db.Column(db.Float, nullable=False)
    carbohidratos = db.Column(db.Float, nullable=False)
    energia = db.Column(db.Float)
    grasa = db.Column(db.Float)
    proteina = db.Column(db.Float)
    fibra = db.Column(db.Float)
    azucares = db.Column(db.Float, nullable=False)
    grasas_saturadas = db.Column(db.Float)
    sodio = db.Column(db.Float)
    plato_id = db.Column(db.Integer, db.ForeignKey('plato.id'))
    plato = db.relationship('Plato', back_populates='informacion_nutritiva')
    
    
