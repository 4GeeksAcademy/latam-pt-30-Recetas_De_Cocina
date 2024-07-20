import React, { useContext, useState } from "react";
import { Link } from "react-router-dom";
import { Context } from "../store/appContext";
import tresleches from "../../img/tresleches.jpg";



export const TresLeches = () => {
    const { store, actions } = useContext(Context);
    const [showSteps, setShowSteps] = useState(false);
    const [showNutrition, setShowNutrition] = useState(false);

    return (
        <div className="container-fluid   d-flex flex-column justify-content-center" style={{ minHeight: "100vh" }}>
            <div className="row border-bottom border-2 pb-4 border-danger py-5">
                <div className="col-md-6">
                    <img src={tresleches} className="img-fluid  rounded-circle" style={{ maxWidth: "50rem", maxHeight: "50rem" }} />
                </div>
                <div className="col-md-6 text-center d-flex flex-column justify-content-center">
                    <h1><strong>Tres Leches</strong></h1>
                    <p><strong>Ingredientes</strong></p>

                    <p><strong>Para el bizcocho:</strong></p>
                    <p>1 Taza de azúcar. </p>
                    <p>5 Huevos. </p>
                    <p>1 Taza de harina. </p>
                    <p>1/2 Taza de leche. </p>
                    <p><strong>Para la mezcla de tres leches:</strong></p>
                    <p>1 Lata de Leche Evaporada.</p>
                    <p>1 Lata de Leche Condensada. </p>
                    <p>1 Taza de crema de leche. </p>
                    <p><strong>Para la mezcla de tres leches:</strong></p>
                    <p>1 Taza de crema para batir.</p>
                    <p>2 Cucharadas de azúcar. </p>

                    <div className="container">
                        <div className="card text-white bg-success mb-3" onClick={() => setShowSteps(!showSteps)} >
                            <div className="card-body">

                                <h1><strong>Pasos</strong></h1>
                                {showSteps && (
                                    <>
                                        <p>
                                            <p><strong>Preparar el bizcocho:</strong></p>
                                            1.Precalienta el horno a 180°C. Bate los huevos con el azúcar hasta que la mezcla esté esponjosa. Añade la harina y la leche, mezcla bien.
                                            Vierte la mezcla en un molde engrasado y hornea por 25-30 minutos.
                                        </p>


                                        <p>
                                            <p><strong>Preparar las tres leches:</strong></p>
                                            2. Mezcla la leche evaporada, leche condensada y la crema de leche.
                                        </p>

                                        <p>
                                            <p><strong>Remojar el bizcocho:</strong></p>
                                            3. Deja enfriar el bizcocho y hazle agujeros con un tenedor. Vierte la mezcla de tres leches sobre el bizcocho lentamente, permitiendo que absorba bien.
                                        </p>
                                        <p>
                                            <p><strong>Preparar la cobertura:</strong></p>
                                            4. Bate la crema para batir con el azúcar hasta que esté firme. Esparce sobre el bizcocho.
                                        </p>
                                        <p>
                                            <p><strong>Refrigerar y servir:</strong></p>
                                            5. Refrigera al menos 4 horas antes de servir.
                                        </p>
                                    </>
                                )}
                            </div>
                        </div>
                    </div>

                    <div className="container">
                        <div className="card text-white bg-danger mb-3" onClick={() => setShowNutrition(!showNutrition)}>
                            <div className="card-body">
                                <h3><strong>Informacion nutricional</strong></h3>
                                {showNutrition && (
                                    <>
                                        <p>  418 kcal = 1,749kj /por porción
                                        </p>
                                        <p><strong>Carbohidratos:</strong>  40 g <strong>Energía:</strong>  1045 kj</p>
                                        <p><strong>Grasas:</strong>   7,82 g <strong>Proteína:</strong>  5,2 g  </p>
                                        <p><strong>Fibra:</strong>  3.5 g <strong>Azucares:</strong>  33.75 g </p>
                                        <p><strong>Grasas saturadas:</strong>   4.38 g <strong>Sodio:</strong> 149 mg</p>
                                    </>
                                )}
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
