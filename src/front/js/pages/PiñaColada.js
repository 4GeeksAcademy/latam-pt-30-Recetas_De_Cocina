import React, { useContext } from "react";
import { Link } from "react-router-dom";
import { Context } from "../store/appContext";
import pinacolada from "../../img/pina-colada.png";



export const PiñaColada = () => {
	const { store, actions } = useContext(Context);

	return (
		<div className="container-fluid   d-flex flex-column justify-content-center" style={{ minHeight: "100vh" }}>
                    <div className="row border-bottom border-2 pb-4 border-danger py-5">
                        <div className="col-md-6">
                        <img src={pinacolada} className="img-fluid  rounded-circle" style={{maxWidth: "50rem", maxHeight: "50rem"}}/>
                        </div>
                        <div className="col-md-6 text-center d-flex flex-column justify-content-center">
                    <h1><strong>Piña colada</strong></h1>
                    <p><strong>Ingredientes</strong></p>
                    
                    <p>1 Lata de Leche Evaporada, fría.</p>
                    <p>2 Tazas de jugo de piña, frío .</p>
                    <p>1/2 Taza de crema de coco. </p>
                    <p>1 Taza de hielo.</p>
                    

                    <div className="container">
<div className="card text-white bg-success mb-3" >
<div className="card-body">

<h1><strong>Pasos</strong></h1>
                    <p>
                    1.  Licúa la Leche Evaporada, el jugo de piña y la crema de coco. 
</p>
<p>

2.  Vierte en vasos con un poco de hielo. 
</p>

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
<p> 296.5 kcal = 1,243kj /por porción
</p>
<p><strong>Carbohidratos:</strong>  44.7 g <strong>Energía:</strong>   296.5 kcal</p>  
<p><strong>Grasas:</strong>  10.9 g<strong>Proteína:</strong> 5.9 g</p> 
<p><strong>Grasas saturadas:</strong>  8.9 g <strong>Sodio:</strong>  113.2 mg </p> 
<p><strong>Fibra:</strong> 	0.3 g <strong>Azúcares:</strong>  40.6 g </p> 
</div>
</div>
</div>

<p></p>


<Link to="/bebidas">
				<button className="btn btn-secondary bg-dark">Regresar</button>
			</Link>

                </div>
                </div>
                </div>
	);
};
