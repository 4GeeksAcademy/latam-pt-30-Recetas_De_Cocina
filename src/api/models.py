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

        
        
        
    """" 
    Class Categoria(Base)
    __tablename = "categoria"
    id = column(integer, primary_key=True)
    platos = column(string(50))

    Class Plato(Base)
    __tablename = "plato"
    id = column(integer, primary_key=True)
    nombre = column(string(50))
    

    Class Ingredientes(Base)
    __tablename = "ingredientes"
    id = column(integer, primary_key=True)
    nombre = column(String(250), nullable=False)
    cantidad = column(Float, nullable=False)

     Class Pasos(Base)
    __tablename = "pasos"
    id = column(integer, primary_key=True)
    description = column(string(50))

     Class InformacionNutritiva(Base)
    __tablename = "informacion_nutritiva"
    id = column(integer, primary_key=True)
    calorias = column(Float, nullable=False)
    carbohidratos = column(Float, nullable=False)
    energia = column(Float)
    grasa = column(Float)
    proteina = column(Float)
    fibra = column(Float)
    azucares = column(Float, nullable=False)
    grasas saturadas = column(Float)
    sodio = column(Float)

    
    
    """