import React, { useContext } from "react";
import { Link } from "react-router-dom";
import { Context } from "../store/appContext";
import salmon from "../../img/salmon.jpg";



export const SalmonMantequilla = () => {
    const { store, actions } = useContext(Context);

    return (
        <div className="container-fluid   d-flex flex-column justify-content-center" style={{ minHeight: "100vh" }}>
            <div className="row border-bottom border-2 pb-4 border-danger py-5">
                <div className="col-md-6">
                    <img src={salmon} className="img-fluid  rounded-circle" style={{ maxWidth: "50rem", maxHeight: "50rem" }} />
                </div>
                <div className="col-md-6 text-center d-flex flex-column justify-content-center">
                    <h1><strong>Salmón con Mantequilla de Cilantro </strong></h1>
                    <p><strong>Ingredientes</strong></p>

                    <p>1.6 Kilogramos de Lonja de salmón .</p>
                    <p>1/2 Cucharada de Sal.</p>
                    <p>4 Cucharadas de Jugo MAGGI. </p>
                    <p>4 Cucharadas de Salsa Tipo Inglesa.</p>
                    <p> 3 Cucharadas de Salsa de Soya.</p>
                    <p> 4 Dientes de Ajo picados finamente  . </p>
                    <p> 4 Cucharadas de Jengibre fresco picado finamente. </p>
                    <p>3 Cucharadas de Hojuelas de chile . </p>
                    <p>1 1/2 Barras de Mantequilla fundidas  (90 g c/u). </p>
                    <p>3 Cucharadas de Aceite de ajonjolí.  </p>
                    <p>1 Taza de Cilantro fresco desinfectado y picado finamente.  </p>
                    <p>1 Lata de Rebanadas de piña en almíbar escurrida (800 g) .  </p>

                    <div className="container">
                        <div className="card text-white bg-success mb-3" >
                            <div className="card-body">
                                <h1><strong>Pasos</strong></h1>
                                <p><strong>Marina</strong></p>
                                <p>
                                    1.  Horno precalentado a 200 °C.
                                    <p>
                                        2.  Sazona el salmón con la sal, el Jugo Maggi, la Salsa Tipo Inglesa y la Salsa de Soya; cubre con plástico adherente y refrigera por 3 horas.
                                    </p>
                                </p>
                                <p><strong>Mezcla</strong></p>
                                <p>3.  Para la mantequilla de cilantro, mezcla el ajo con el jengibre, las hojuelas de chile, la mantequilla fundida, el aceite de ajonjolí y el cilantro. </p>
                                <p><strong>Hornea</strong></p>
                                <p>
                                    4.  Coloca las rebanadas de piña en una charola con papel encerado y sobre ellas el salmón; con ayuda de una brocha unta la mezcla de mantequilla en el salmón y hornea a 200 °C de 35 a 40 minutos. Ofrece el salmón con una rebanada de piña.
                                </p>
                            </div>
                        </div>
                    </div>



                    <div className="container">
                        <div className="card text-white bg-danger mb-3" >
                            <div className="card-body">
                                <h3><strong>Informacion nutricional</strong></h3>
                                <p> 402 kcal = 1,682kj /por porción
                                </p>
                                <p><strong>Carbohidratos:</strong>  15 g <strong>Energía:</strong> 402 kcal</p>
                                <p><strong>Grasas:</strong>   22.7 g  <strong>Fibras:</strong>   0.8 g</p>
                                <p><strong>Proteinas:</strong>   33.8 g <strong>Grasas saturadas:</strong>  8.8 g</p>
                                <p><strong>Sodio:</strong>   615.8 mg <strong>Azucares:</strong>    11.6 g </p>
                            </div>
                        </div>
                    </div>

                    <p></p>

                    <Link to="/cenas">
                        <button className="btn btn-secondary bg-dark">Regresar</button>
                    </Link>

                </div>
            </div>
        </div>
    );
};