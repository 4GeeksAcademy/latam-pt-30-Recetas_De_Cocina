import React, { useContext } from "react";
import { Link } from "react-router-dom";
import { Context } from "../store/appContext";
import alambrechamp from "../../img/alambrechampi.jpg";



export const AlamebreChampi = () => {
	const { store, actions } = useContext(Context);

	return (
		<div className="container-fluid   d-flex flex-column justify-content-center" style={{ minHeight: "100vh" }}>
                    <div className="row border-bottom border-2 pb-4 border-danger py-5">
                        <div className="col-md-6">
                        <img src={alambrechamp} className="img-fluid  rounded-circle" style={{maxWidth: "50rem", maxHeight: "50rem"}}/>
                        </div>
                        <div className="col-md-6 text-center d-flex flex-column justify-content-center">
                    <h1><strong>Alambre de champiñones</strong></h1>
                    <p><strong>Ingredientes</strong></p>
                    
                    <p>1 Paquete de tocino de pavo picado (250 g) .</p>
                    <p>1 Cebolla cortada en cubos .</p>
                    <p>1 1/2 Taza de champiñones desinfectados y fileteados . </p>
                    <p>1 1/2 Tazas de setas desinfectadas y cortadas en cubos .</p>
                    <p> 5 Cucharadas de Jugo MAGGI.</p>
                    <p> 1/2 Cucharadita de sal con ajo en polvo . </p>
                    <p> 1 Pimiento verde cortado en tiras . </p>
                    <p>1 Pimiento rojo cortado en tiras . </p>
                    <p>1 Paquete de queso tipo manchego rallado (100 g)  </p>
                    <p> 12 Tortillas de maíz calientes  </p>
                   
<div className="container">
<div className="card text-white bg-success mb-3" >
<div className="card-body">
<h1><strong>Pasos</strong></h1>
                    <p><strong>Fríe</strong></p>
                    <p>
    1.   En una sartén, fríe el tocino y retira el exceso de grasa, agrega la cebolla y cocina hasta que esté transparente. Añade los champiñones, las setas, el Jugo MAGGI®, la sal con ajo y cocina por 5 minutos. .
</p>
<p><strong>Gratina</strong></p>
<p>2.  Agrega los pimientos, mezcla y fríe por 2 minutos más. Cubre con el queso tipo manchego, tapa y deja gratinar unos minutos.</p>
<p><strong>¡Está listo!</strong></p>
<p>
    3. Ofrece con las tortillas y salsa de tu preferencia.
</p>
</div>
</div>
</div>

                    

<div className="container">
<div className="card text-white bg-danger mb-3" >
<div className="card-body">
<h3><strong>Informacion nutricional</strong></h3>
<p>  204.7 kcal = 858kj /por porción
</p>
<p><strong>Carbohidratos:</strong>  8.9 g <strong>Energía:</strong>204.7 kcal</p>  
<p><strong>Grasas:</strong>   	13.3 g   <strong>Fibras:</strong>  2.7 g</p> 
<p><strong>Proteinas:</strong>  14.3 g  <strong>Grasas saturadas:</strong>    6.3 g </p> 
<p><strong>Sodio:</strong>  954.4 mg </p> 
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
