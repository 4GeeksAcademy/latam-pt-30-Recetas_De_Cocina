import React, { useContext } from "react";
import { Link } from "react-router-dom";
import { Context } from "../store/appContext";
import palomitaschoco from "../../img/palomitas-choco.jpg";



export const PalomitasChocolate = () => {
	const { store, actions } = useContext(Context);

	return (
		<div className="container-fluid   d-flex flex-column justify-content-center" style={{ minHeight: "100vh" }}>
                    <div className="row border-bottom border-2 pb-4 border-danger py-5">
                        <div className="col-md-6">
                        <img src={palomitaschoco} className="img-fluid  rounded-circle" style={{maxWidth: "50rem", maxHeight: "50rem"}}/>
                        </div>
                        <div className="col-md-6 text-center d-flex flex-column justify-content-center">
                    <h1><strong>Palomitas sabor chocolate</strong></h1>
                    <p><strong>Ingredientes</strong></p>
                    
                    <p>2 Barras de Chocolate.</p>
                    <p>3 Cucharadas de mantequilla fundida .</p>
                    <p>1/2 Taza de maíz palomero . </p>
                    
                    <div className="container">
<div className="card text-white bg-success mb-3" >
<div className="card-body">

<h1><strong>Pasos</strong></h1>

<p><strong>Vierte en una olla</strong></p>
                    <p>
                    1.   En una olla agrega la mantequilla con el Chocolate . 
</p>

<p><strong>Añade el maíz</strong></p>
<p>
2. Agrega el maíz palomero y tapa.
</p>

<p><strong>Cocina</strong></p>
<p>
3. Cocina hasta que las palomitas revienten por completo. 
</p>
</div>
</div>
</div>

<div className="container">
<div className="card text-white bg-danger mb-3" >
<div className="card-body">
<h3><strong>Informacion nutricional</strong></h3>
<p> 267.1 kcal = 1,117kj /por porción
</p>
<p><strong>Carbohidratos:</strong>  27.6 g <strong>Energía:</strong>  267.1 kcall</p>  
<p><strong>Grasas:</strong>   16 g <strong>Proteína:</strong>   4.6 g  </p> 
<p><strong>Fibra:</strong>   4.4 g <strong>Azucares:</strong>    10.5 g</p> 
<p><strong>Grasas saturadas:</strong>  9 g <strong>Sodio:</strong>   19.4 mg</p>
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