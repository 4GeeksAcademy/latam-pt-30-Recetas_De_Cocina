import React, { useContext } from "react";
import { Link } from "react-router-dom";
import { Context } from "../store/appContext";
import carlota from "../../img/carlota.jpg";



export const Carlota = () => {
	const { store, actions } = useContext(Context);

	return (
		<div className="container-fluid   d-flex flex-column justify-content-center" style={{ minHeight: "100vh" }}>
                    <div className="row border-bottom border-2 pb-4 border-danger py-5">
                        <div className="col-md-6">
                        <img src={carlota} className="img-fluid  rounded-circle" style={{maxWidth: "50rem", maxHeight: "50rem"}}/>
                        </div>
                        <div className="col-md-6 text-center d-flex flex-column justify-content-center">
                    <h1><strong>Carlota de Limon</strong></h1>
                    <p><strong>Ingredientes</strong></p>
                    
                    <p>1 Lata de Leche Condensada.</p>
                    <p>1 Lata de Leche Evaporada.</p>
                    <p>1/4 Taza de Jugo de limón colado. </p>
                    <p>30 Galletas Marías.</p>
                    <p>1 Limón cortado en rodajas.</p>
                    <p>5 Galletas Marías troceadas. </p>
                    <p>1 Rama de Menta desinfectada. </p>
                    <p>1 Limón (su ralladura) . </p>
                    
                    
                    <div className="container">
<div className="card text-white bg-success mb-3" >
<div className="card-body">

<h1><strong>Pasos</strong></h1>

<p><strong>Licúa</strong></p>
                    <p>
                    1.   Licúa la Leche Condensada LA LECHERA® con la Leche Evaporada CARNATION® CLAVEL® y sin dejar de licuar, agrega poco a poco el jugo de limón. 
</p>

<p><strong>Agrega</strong></p>
<p>
2.  En un refractario cuadrado, coloca una capa de galletas, un poco de la mezcla de limón y repite hasta terminar con el resto de los ingredientes. Cubre con plástico adherente y refrigera por 1 hora o hasta que esté firme.
</p>

<p><strong>Decora</strong></p>
<p>
3.  Decora con las rodajas de limón, las galletas troceadas, las hojas de menta y la ralladura de limón. Ofrece. 
</p>
</div>
</div>
</div>

<div className="container">
<div className="card text-white bg-danger mb-3" >
<div className="card-body">
<h3><strong>Informacion nutricional</strong></h3>
<p> 253.5 kcal = 1,063kj /por porciónn
</p>
<p><strong>Carbohidratos:</strong> 42.4 g <strong>Energía:</strong> 253.5 kcal</p>  
<p><strong>Grasas:</strong>  6.5 g <strong>Proteína:</strong>  6.8 g  </p> 
<p><strong>Fibra:</strong>  0.7 g <strong>Azucares:</strong>   35 g </p> 
<p><strong>Grasas saturadas:</strong>   4.1 g <strong>Sodio:</strong>   138.1 mg</p>
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
