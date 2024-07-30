import React, { useContext, useState, useEffect } from "react";
import { Link } from "react-router-dom";
import { Context } from "../store/appContext";
import FlanNapolitano from "../../img/FlanNapolitano.jpg";



export const Flannapolitano = () => {
    const { store, actions } = useContext(Context);
    const idPlato = 19;
    const [pasos, setPasos] = useState([]);
    const [ingredientes, setIngredientes] = useState([]);
    const [nutricion, setNutricion] = useState({});

    useEffect(() => {
        fetch(`https://legendary-space-enigma-675vrxw7556f4r4r-3001.app.github.dev/api/plato/${idPlato}`)
            .then(response => response.json())
            .then(data => {
                console.log(data[0]);
                setIngredientes(data[0].ingredientes);
                setPasos(data[0].pasos);
                setNutricion(data[0].informacion_nutritiva);

            })

    }, [])
    return (
        <div className="container-fluid   d-flex flex-column justify-content-center" style={{ minHeight: "100vh" }}>
            <div className="row border-bottom border-2 pb-4 border-danger py-5">
                <div className="col-md-6">
                    <img src={FlanNapolitano} className="img-fluid  rounded-circle" style={{ maxWidth: "50rem", maxHeight: "50rem" }} />
                </div>
                <div className="col-md-6 text-center d-flex flex-column justify-content-center">
                    <h1><strong>Flan Napolitano</strong></h1>
                    <p><strong>Ingredientes</strong></p>
                    {ingredientes.map(ingrediente => (
                        <p>{ingrediente.cantidad + " " + ingrediente.nombre}</p>
                    ))}



                    <div className="container">
                        <div className="card text-white bg-success mb-3" >
                            <div className="card-body">

                                <h1><strong>Pasos</strong></h1>
                                {pasos.map(paso => (
                                    <p>{paso.numero_de_paso + ". " + paso.description}</p>
                                ))}

                            </div>
                        </div>
                    </div>

                    <div className="container">
                        <div className="card text-white bg-danger mb-3" >
                            <div className="card-body">
                                <h3><strong>Informacion nutricional</strong></h3>

                                <p><strong>Azucares:</strong> {nutricion.azucares} </p>
                                <p><strong>Calorias:</strong> {nutricion.calorias} </p>
                                <p><strong>Carbohidratos:</strong> {nutricion.carbohidratos} </p>
                                <p><strong>Energia:</strong> {nutricion.energia} </p>
                                <p><strong>Fibra:</strong> {nutricion.fibra} </p>
                                <p><strong>Grasa:</strong> {nutricion.grasa} </p>
                                <p><strong>Grasas saturadas:</strong> {nutricion.grasas_saturadas} </p>
                                <p><strong>Proteina:</strong> {nutricion.proteina} </p>
                                <p><strong>Sodio:</strong> {nutricion.sodio} </p>
                                <p><strong>Grasa:</strong> {nutricion.grasa} </p>




                            </div>
                        </div>
                    </div>

                    <p></p>


                    <Link to="/postres">
                        <button className="btn btn-secondary bg-dark">Regresar</button>
                    </Link>

                </div>
            </div>
        </div>
    );
};
