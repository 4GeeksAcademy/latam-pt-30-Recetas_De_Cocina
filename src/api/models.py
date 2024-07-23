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
    platos = db.Column(db.String(50))

class Plato(db.Model):
    
    id = db.Column(db.Integer, primary_key=True)
    nombre = db.Column(db.String(50))
    
    

class Ingredientes(db.Model):
    
    id = db.Column(db.Integer, primary_key=True)
    nombre = db.Column(db.String(250), nullable=False)
    cantidad = db.Column(db.Float, nullable=False)

class Pasos(db.Model):
    
    id = db.Column(db.Integer, primary_key=True)
    description = db.Column(db.String(50))

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

    
    
