import React, { useContext } from "react";
import { Link } from "react-router-dom";
import { Context } from "../store/appContext";
import albondigaT from "../../img/albondigasTocino.jpg";



export const AlbondigasTocino = () => {
	const { store, actions } = useContext(Context);

	return (
		<div className="container-fluid   d-flex flex-column justify-content-center" style={{ minHeight: "100vh" }}>
                    <div className="row border-bottom border-2 pb-4 border-danger py-5">
                        <div className="col-md-6">
                        <img src={albondigaT} className="img-fluid  rounded-circle" style={{maxWidth: "50rem", maxHeight: "50rem"}}/>
                        </div>
                        <div className="col-md-6 text-center d-flex flex-column justify-content-center">
                    <h1><strong>Albóndigas con Tocino</strong></h1>
                    <p><strong>Ingredientes</strong></p>
                    
                    <p>1 Taza de puré de tomate natural.</p>
                    <p>6 Jitomates.</p>
                    <p>2 Chiles chipotle adobados . </p>
                    <p>1 Chile ancho sin semillas y remojado en agua caliente.</p>
                    <p> 3/4 De taza de agua .</p>
                    <p> 2 Cubos de Concentrado de Tomate con Pollo . </p>
                    <p> 300 Gramos de carne molida de res . </p>
                    <p>300 Gramos de tocino frito y picado finamente . </p>
                    <p>1 Huevo ligeramente batido . </p>
                    <p>2 Cucharadas de cebolla picada finamente.  </p>
                    <p>1/4 Cucharadita de comino molido.  </p>
                    <p>1/2 Cucharadita de sal con cebolla en polvo.  </p>
                    <p>3 Cucharadas de pan molido .  </p>
                    <p>1 Paquete de queso tipo manchego cortado en cubos.  </p>
                    <p>2 Cucharadas de aceite vegetal.  </p>
                    <p>2 Cucharadas de perejil desinfectado y picado finamente.</p>
                   
<div className="container">
<div className="card text-white bg-success mb-3" >
<div className="card-body">
<h1><strong>Pasos</strong></h1>
                    <p><strong>Licúa</strong></p>
                    <p>
                    1. Para la salsa, licúa el puré de tomate con los jitomates, los chiles, el agua y el Concentrado de Tomate con Pollo; cuela. . 

</p>
<p><strong>Forma</strong></p>
<p>2. Para las albóndigas, mezcla la carne de res con el tocino, el huevo, la cebolla, el comino, la sal con cebolla y el pan molido. Forma bolitas, ahuécalas y rellénalas con los cubos de queso tipo manchego; cierra y forma las albóndigas con tus manos.  </p>
<p><strong>Cocina</strong></p>
<p>
3.Calienta el aceite, fríelas hasta que doren ligeramente, agrega la salsa y cocina de 8 a 10 minutos moviendo ocasionalmente. Sirve, decora con un poco de perejil y ofrece. 
</p>
</div>
</div>
</div>

                    

<div className="container">
<div className="card text-white bg-danger mb-3" >
<div className="card-body">
<h3><strong>Informacion nutricional</strong></h3>
<p>  517.4 kcal = 2,163kj /por porción
</p>
<p><strong>Carbohidratos:</strong>  16.4 g <strong>Energía:</strong>  517.4 kcal</p>  
<p><strong>Grasas:</strong>   34.6 g  <strong>Fibras:</strong>   3.1 g</p> 
<p><strong>Proteinas:</strong>  35.3 g <strong>Grasas saturadas:</strong> 14.2 g</p> 
<p><strong>Sodio:</strong>  2078.1 mg <strong>Azucares:</strong>  5.8 g </p> 
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