import React, { useState, useEffect, useContext } from "react";
import { Link, useNavigate } from "react-router-dom";

import { Context } from "../store/appContext";
import favo from "../../img/favo.png";
import recetasImageUrl from "../../img/recetas.jpeg";

export const RecetaFavorita = () => {

    const { store, actions } = useContext(Context);
    const [recetas, setRecetas] = useState([]);

    useEffect(() => {
        fetch('https://legendary-space-enigma-675vrxw7556f4r4r-3001.app.github.dev/api/recetafavoritas')
            .then(response => response.json())
            .then(data => {
                setRecetas(data);
            })
    }, [])


    return (
        <div className="container-fluid">
            <div className="text-center mt-5">
                <header className="text-center py-5">
                    <h1><strong>Recetas favoritas</strong></h1>
                    <img src={favo} class="mx-auto" alt="Card image cap" style={{ maxWidth: "10rem", maxHeight: "10rem" }} />
                </header>
            </div>
            <div className="container my-5">
                <div className="row">
                    {recetas.map((receta, index) => (
                        <div className="col-md-3 mt-4">
                            <div className={index % 2 == 0 ? "text-light bg-dark card bg-secondary" : "text-light bg-success card bg-secondary"}>
                                <div className="card-body">
                                    <h5 className="card-title"><strong>{receta.nombre}</strong></h5>

                                    <p>
                                        {/*<img src={FlanNapolitano} className="img-fluid rounded-circle" style={{ maxWidth: "13rem", maxHeight: "13rem" }} />*/}

                                        {receta.imagen ?
                                            <img src={receta.imagen} className="img-fluid rounded-circle" style={{ maxWidth: "17rem", maxHeight: "17rem" }} />
                                            :
                                            <img src={recetasImageUrl} className="img-fluid rounded-circle" style={{ maxWidth: "17rem", maxHeight: "17rem" }} />
                                        }
                                    </p>
                                    <p className="card-text">Receta de {receta.nombre}.</p>
                                    <Link to={`/plato/${receta.id}`}>
                                        <button className={index % 2 == 0 ? "btn btn-secondary bg-success" : "btn btn-secondary bg-dark"}>Ver receta</button>
                                    </Link>

                                </div>
                            </div>
                        </div>
                    ))
                    }

                </div>
            </div>
            <br />
            <Link to="/">
                <button className="btn btn-secondary bg-dark">Regresar</button>
            </Link>
        </div>

    );
};