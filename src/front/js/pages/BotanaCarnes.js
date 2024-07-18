import React, { useContext } from "react";
import { Link } from "react-router-dom";
import { Context } from "../store/appContext";
import botanacarnes from "../../img/botana-carnes.jpg";



export const BotanaDeCarnes = () => {
	const { store, actions } = useContext(Context);

	return (
		<div className="container-fluid   d-flex flex-column justify-content-center" style={{ minHeight: "100vh" }}>
                    <div className="row border-bottom border-2 pb-4 border-danger py-5">
                        <div className="col-md-6">
                        <img src={botanacarnes} className="img-fluid  rounded-circle" style={{maxWidth: "50rem", maxHeight: "50rem"}}/>
                        </div>
                        <div className="col-md-6 text-center d-flex flex-column justify-content-center">
                    <h1><strong>Botana de Carnes</strong></h1>
                    <p><strong>Ingredientes</strong></p>
                    
                    <p>2 Cucharadas de Aceite de maíz .</p>
                    <p>1/2 Cebolla fileteada.</p>
                    <p>1 Paquete de Salchichas botaneras (500 g). </p>
                    <p>4 Rebanadas gruesas de Jamón de pierna cortadas en cubos (300 g). </p>
                    <p>1 Taza de Piña miel cortada en cubos. </p>
                    <p>3 Cucharadas de Salsa de Soya. </p>
                    <p>1/2 Cucharadita de Sal con cebolla en polvo. </p>
                    
                    
                    <div className="container">
<div className="card text-white bg-success mb-3" >
<div className="card-body">

<h1><strong>Pasos</strong></h1>

<p><strong>Fríe</strong></p>

                    <p>
                    
                    1.  Calienta el aceite y fríe la cebolla hasta que esté transparente.  
</p>


<p><strong>Cocina</strong></p>

<p>
2.  Añade las salchichas, el jamón, la piña, la Salsa de Soya y la sal con cebolla; cocina por 5 minutos. 
</p>


<p><strong>Sirve</strong></p>


<p>
3.  Ofrece.
</p>


</div>
</div>
</div>

<div className="container">
<div className="card text-white bg-danger mb-3" >
<div className="card-body">
<h3><strong>Informacion nutricional</strong></h3>
<p> 489.4 kcal = 2,046kj /por porción 
</p>
<p><strong>Carbohidratos:</strong>   10.9 g <strong>Energía:</strong> 489.4 kcal </p>  
<p><strong>Grasas:</strong>  42 g <strong>Proteína:</strong>  18.5 g  </p> 
<p><strong>Fibra:</strong>   1 g <strong>Azucares:</strong>  7.4 g</p> 
<p><strong>Grasas saturadas:</strong>   15.3 g <strong>Sodio:</strong> 1471.5 mg</p>
</div>
</div>
</div>

<p></p>


<Link to="/snacks">
				<button className="btn btn-secondary bg-dark">Regresar</button>
			</Link>

                </div>
                </div>
                </div>
	);
};