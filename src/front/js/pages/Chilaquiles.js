import React, { useContext } from "react";
import { Link } from "react-router-dom";
import { Context } from "../store/appContext";
import chilaquilesverdes from "../../img/chilaquiles-verdes.jpg";



export const Chilaquiles = () => {
	const { store, actions } = useContext(Context);

	return (
		<div className="container-fluid   d-flex flex-column justify-content-center" style={{ minHeight: "100vh" }}>
                    <div className="row border-bottom border-2 pb-4 border-danger py-5">
                        <div className="col-md-6">
                        <img src={chilaquilesverdes} className="img-fluid rounded-circle" style={{maxWidth: "20rem", maxHeight: "20rem"}}/>
                        </div>
                        <div className="col-md-6 text-center d-flex flex-column justify-content-center">
                    <h1>Chilaquiles Verdes</h1>
                    <p>Ingredientes</p>
                    <p>
                        
    600 Gramos de tomates verdes cocidos
    1/4 De pieza de cebolla mediana, cocida
    2 Dientes de ajo cocidos
    2 Chiles serrano cocidos
    1 1/2 Tazas de agua
    5 Ramas de cilantro desinfectado
    1 1/2 Cucharadas de consomé de pollo en polvo
    1 Cucharada de aceite vegetal
    1 Bolsa de totopos (350 g)
    1 Pechuga de pollo cocida y deshebrada (500 g)
    1 Envase de Media Crema NESTLÉ® refrigerada (190 g)
    200 Gramos de queso fresco desmoronado

                    </p>

                    <h1><strong>Pasos</strong></h1>
                    <p><strong>Prepara la salsa</strong></p>
                    <p>
    1.  Para la salsa, licúa los tomates con la cebolla, los ajos, los chiles, el agua, el cilantro y el consomé de pollo. Calienta el aceite, vierte lo que licuaste y cocina hasta que hierva moviendo ocasionalmente.
</p>
<p><strong>Mezclalo con los totopos</strong></p>
<p>2.  Agrega los totopos a la salsa y mezcla suavemente para que absorban un poco de salsa.</p>
<p><strong>Prepara tus chilaquiles</strong></p>
<p>
    3.  Sirve los chilaquiles y baña con un poco más de salsa. Añade el pollo, la Media Crema  y el queso. Ofrece.
</p>

                </div>
                </div>
                </div>
	);
};
