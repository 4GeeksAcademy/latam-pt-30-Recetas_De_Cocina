import React, { useContext } from "react";
import { Link } from "react-router-dom";
import { Context } from "../store/appContext";
import pizzahawa from "../../img/pizzahawaiana.jpg";


export const PizzaHawaiana = () => {
	const { store, actions } = useContext(Context);

	return (
		<div className="container-fluid   d-flex flex-column justify-content-center" style={{ minHeight: "100vh" }}>
                    <div className="row border-bottom border-2 pb-4 border-danger py-5">
                        <div className="col-md-6">
                        <img src={pizzahawa} className="img-fluid  rounded-circle" style={{maxWidth: "50rem", maxHeight: "50rem"}}/>
                        </div>
                        <div className="col-md-6 text-center d-flex flex-column justify-content-center">
                    <h1><strong>Pizza Hawaiana</strong></h1>
                    <p><strong>Ingredientes</strong></p>
                    
                    <p>3 Cucharadas de aceite de oliva.</p>
                    <p>2 Jitomates cortados en cubos y sin semillas.</p>
                    <p>2 Tazas de puré de tomate natural. </p>
                    <p>2 Cubos de Concentrado de Tomate con Pollo.</p>
                    <p> 1/2 Taza de agua.</p>
                    <p> 1 Cucharadita de hierbas finas molidas. </p>
                    <p> 200 Gramos de masa para pizza. </p>
                    <p>200 Gramos de queso tipo manchego rallado . </p>
                    <p>100 Gramos de jamón cortado en cubos. </p>
                    <p>1 Taza de piña en almíbar cortada en cubos.  </p>
                    <p>4 Cucharadas de Salsa Tipo Inglesa.</p>
                    <p>4 Cucharadas de Jugo Maggi.</p>
                    

<div className="container">
<div className="card text-white bg-success mb-3" >
<div className="card-body">
<h1><strong>Pasos</strong></h1>
                    <p><strong>Prepara la salsa de tomate</strong></p>
                    <p>
                    1.  Para la salsa, calienta el aceite de oliva, agrega los jitomates, el puré de tomate, el Concentrado de Tomate con Pollo, ½ taza de agua y 1 cucharadita de hierbas finas; cocina hasta que espese ligeramente. 

</p>
<p><strong>Forma la base</strong></p>
<p>
2.  Para la pizza, extiende la masa formando un círculo; colócalo en una sartén y cocina por ambos lados por 2 minutos. Extiende la salsa sobre la superficie, añade el queso, el jamón y la piña; cocina por 10 minutos a fuego bajo. 
     </p>
<p><strong>Prepara a tu gusto</strong></p>
<p>
3.  Coloca en una tabla, corta en rebanadas y ofrece con la Salsa Tipo Inglesa.
</p>
</div>
</div>
</div>

                    

<div className="container">
<div className="card text-white bg-danger mb-3" >
<div className="card-body">
<h3><strong>Informacion nutricional</strong></h3>
<p>214.3 kcal = 895kj /por porción </p>
<p><strong>Carbohidratos:</strong>   19.5 g <strong>Energía:</strong> 214.3 kcal</p>  
<p><strong>Grasas:</strong>  11.9 g <strong>Fibras:</strong> 2.8 g</p> 
<p><strong>Proteinas:</strong>  9.7 g <strong>Grasas saturadas:</strong> 4.6 g</p> 
<p><strong>Sodio:</strong> 1239.4 mg<strong>Azucares:</strong> 5.9 g</p> 
</div>
</div>
</div>

<p></p>

<Link to="/pizzas">
				<button className="btn btn-secondary bg-dark">Regresar</button>
			</Link>

                </div>
                </div>
                </div>
	);
};