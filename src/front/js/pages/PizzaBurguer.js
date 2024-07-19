import React, { useContext } from "react";
import { Link } from "react-router-dom";
import { Context } from "../store/appContext";
import pizzaburguer from "../../img/pizzaburger.jpg";


export const PizzaBurguer = () => {
	const { store, actions } = useContext(Context);

	return (
		<div className="container-fluid   d-flex flex-column justify-content-center" style={{ minHeight: "100vh" }}>
                    <div className="row border-bottom border-2 pb-4 border-danger py-5">
                        <div className="col-md-6">
                        <img src={pizzaburguer} className="img-fluid  rounded-circle" style={{maxWidth: "50rem", maxHeight: "50rem"}}/>
                        </div>
                        <div className="col-md-6 text-center d-flex flex-column justify-content-center">
                    <h1><strong>Pizza Burguer</strong></h1>
                    <p><strong>Ingredientes</strong></p>
                    
                    <p> 200 Gramos de carne molida de res.</p>
                    <p>1 Cucharada de Jugo MAGGI.</p>
                    <p>1 Cucharada de Salsa Tipo Inglesa. </p>
                    <p>2 Cucharadas de pan molido.</p>
                    <p>2 Cucharadas de aceite vegetal.</p>
                    <p> 1 Cucharadita de hierbas finas molidas. </p>
                    <p> 2 Tazas de queso tipo manchego rallado. </p>
                    <p>2 Cucharadas de mayonesa. </p>
                    <p>2 Bollos para hamburguesa calientes (24 g c/u). </p>
                    <p>1 Taza de papas a la francesa fritas.  </p>
                    <p>2 Cucharadas de cátsup.</p>
                    <p>2 Rebanadas de tocino frito.</p>
                    <p> 1/2 Paquete de pepperoni (50 g).</p>

                    

<div className="container">
<div className="card text-white bg-success mb-3" >
<div className="card-body">
<h1><strong>Pasos</strong></h1>
                    <p><strong>Prepara la carne</strong></p>
                    <p>
                    1.  Horno eléctrico precalentado a 180 °C 
</p>
<p>
2.  Mezcla la carne con el Jugo MAGGI, la Salsa Tipo Inglesa y el pan molido; cubre con plástico adherente y marina en refrigeración por 20 minutos; divide la mezcla en 2 partes iguales y con tus manos forma las hamburguesas.
</p>
<p><strong>Cocina</strong></p>
<p>
3.  Calienta el aceite y fríelas por ambos lados hasta que estén cocidas, coloca un ¼ taza de queso tipo manchego sobre la carne y cocina hasta que se funda. 
     </p>
<p><strong>Forma las hamburguesas</strong></p>
<p>
4.  Unta un poco de mayonesa sobre la tapa de los bollos, rellénalos con las papas, la cátsup, la carne y el tocino. Utiliza las bases del pan como tapas y añade el queso restante, el pepperoni y hornea a 180 °C por 5 minutos o hasta que el queso gratine; ofrece. 
</p>
</div>
</div>
</div>

                    

<div className="container">
<div className="card text-white bg-danger mb-3" >
<div className="card-body">
<h3><strong>Informacion nutricional</strong></h3>
<p> 1583.2 kcal = 4kj /por porción  </p>
<p><strong>Carbohidratos:</strong> 45.2 g <strong>Energía:</strong>1583.2 kcal</p>  
<p><strong>Grasas:</strong>  112.7 g <strong>Fibras:</strong>  2.6 g</p> 
<p><strong>Proteinas:</strong>  95.8 g <strong>Grasas saturadas:</strong> 58 g</p> 
<p><strong>Sodio:</strong> 3092.1 mg<strong>Azucares:</strong> 	8.6 g</p> 
</div>
</div>
</div>

<p></p>

<Link to="/fastfood">
				<button className="btn btn-secondary bg-dark">Regresar</button>
			</Link>

                </div>
                </div>
                </div>
	);
};