import React, { useContext } from "react";
import { Link } from "react-router-dom";
import { Context } from "../store/appContext";
import Omelette from "../../img/omelette.jpg";



export const Omelettes = () => {
	const { store, actions } = useContext(Context);

	return (
		<div className="container-fluid   d-flex flex-column justify-content-center" style={{ minHeight: "100vh" }}>
                    <div className="row border-bottom border-2 pb-4 border-danger py-5">
                        <div className="col-md-6">
                        <img src={Omelette} className="img-fluid  rounded-circle" style={{maxWidth: "50rem", maxHeight: "50rem"}}/>
                        </div>
                        <div className="col-md-6 text-center d-flex flex-column justify-content-center">
                    <h1><strong>Omelette</strong></h1>
                    <p><strong>Ingredientes</strong></p>
                    
                    <p>3 Huevos .</p>
                    <p>1 Pizca de sal .</p>
                    <p>1 Pizca de pimienta negra molida. </p>
                    <p>2 Cucharadas de Leche Evaporada.</p>
                    <p> 1/4 Cucharadita de aceite vegetal .</p>
                    <p> 1/2 Taza de espinaca lavada y desinfectada . </p>
                    <p> 1/4 Taza de jitomates cherry, cortados por la mitad cortados por la mitad. </p>
                    <p>80 Gramos de queso panela, cortado en cubos cortado en cubos . </p>
                  
                    <div className="container">
<div className="card text-white bg-success mb-3" >
<div className="card-body">

<h1><strong>Pasos</strong></h1>

<p><strong>Bate los huevos</strong></p>
                    <p>
                    1.   Mezcla el huevo con la sal, la pimienta y la Leche Evaporada. 
</p>
<p><strong>Vierte en la sartén</strong></p>
<p>

2.  En una sartén chica, calienta el aceite y vierte el huevo batido, deja que se cocine ligeramente despegando las orillas poco a poco.

</p>

<p><strong>Agrega el relleno</strong></p>
<p>
3.  Agrega la espinaca, el jitomate y el queso, dobla la mitad del omelette para cerrar y cocina unos minutos más hasta dejarlo al término deseado. Sirve al momento y ofrece.
</p>
</div>
</div>
</div>

<div className="container">
<div className="card text-white bg-danger mb-3" >
<div className="card-body">
<h3><strong>Informacion nutricional</strong></h3>
<p>270.9 kcal = 1,134kj /por porción </p>
<p><strong>Carbohidratos:</strong>  6.8 g <strong>Energía:</strong>  270.9 kcal</p>  
<p><strong>Grasas:</strong>   17.2 g <strong>Fibra:</strong> 1 g</p> 
<p><strong>Grasas saturadas:</strong> 4 g <strong>Sodio:</strong>  45.7 mg </p>
<p><strong>Proteína:</strong>  21.4 g <strong>Azucares:</strong> 4.7 g </p>
</div>
</div>
</div>

<p></p>


<Link to="/desayunos">
				<button className="btn btn-secondary bg-dark">Regresar</button>
			</Link>

                </div>
                </div>
                </div>
	);
};
