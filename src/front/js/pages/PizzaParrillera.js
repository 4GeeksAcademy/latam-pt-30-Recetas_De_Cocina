import React, { useContext } from "react";
import { Link } from "react-router-dom";
import { Context } from "../store/appContext";
import pizzaparri from "../../img/pizzaparrillera.jpg";


export const PizzaParrillera = () => {
	const { store, actions } = useContext(Context);

	return (
		<div className="container-fluid   d-flex flex-column justify-content-center" style={{ minHeight: "100vh" }}>
                    <div className="row border-bottom border-2 pb-4 border-danger py-5">
                        <div className="col-md-6">
                        <img src={pizzaparri} className="img-fluid  rounded-circle" style={{maxWidth: "50rem", maxHeight: "50rem"}}/>
                        </div>
                        <div className="col-md-6 text-center d-flex flex-column justify-content-center">
                    <h1><strong>Pizza Parrillera</strong></h1>
                    <p><strong>Ingredientes</strong></p>
                    
                    <p>3 Cucharadas de aceite de oliva.</p>
                    <p>1/2 Pieza Cebolla picada.</p>
                    <p>2 Cucharadas Ajo picado. </p>
                    <p>2 Piezas Jitomate cortado en cubos y sin semilla.</p>
                    <p>2 Tazas Puré de tomate natural .</p>
                    <p>1 Cubo Concentrado de Tomate con Pollo . </p>
                    <p> 1/4 Cucharadita Orégano seco molido. </p>
                    <p> 1/4 Cucharadita Pimienta negra molida. </p>
                    <p> 1 Taza Agua. </p>
                    <p> 10 Hojas Albahaca fresca desinfectada.  </p>
                    <p>500 Gramos Masa para pizza .</p>
                    <p>3 Cucharadas Jugo MAGGI.</p>
                    <p>3 Cucharadas Salsa Tipo Inglesa .</p>
                    <p> 3 Cucharadas Ajo picado .</p>
                    <p> 900 Gramos Arrachera .</p>
                    <p> 4 Piezas Hongo portobello fileteado.</p>
                    <p> 2 Piezas Pimiento amarillo cortado en bastones .</p>
                    <p> 10 Piezas Cebolla cambray cortada en mitades .</p>
                    <p> 1 Paquete Chistorra (500 g) cortada en rodajas y asada .</p>
                    <p>  1 Paquete Queso tipo manchego rallado (400 g)  .</p>


                    

<div className="container">
<div className="card text-white bg-success mb-3" >
<div className="card-body">
<h1><strong>Pasos</strong></h1>
                    <p><strong>Calienta</strong></p>
                    <p>
                    1.  Horno precalentado a 180 °C.
                    <p>
2.  Para la salsa, calienta el aceite y fríe la cebolla hasta que esté transparente, añade 2 cucharadas de ajo y cocina hasta que dore. Agrega el jitomate con el puré de tomate y cuece hasta que cambie de color; vierte el Concentrado de Tomate con Pollo, el orégano, la pimienta, el agua y las hojas de albahaca; cocina hasta que espese, moviendo constantemente para evitar que se pegue. Extiende la masa para pizza con ayuda de un rodillo sobre una superficie enharinada, colócala en una charola previamente engrasada y enharinada, pica con un tenedor y vierte la salsa cubriendo toda la superficie. Hornea a 180 °C por 25 minutos y reserva.
</p>
</p>
<p><strong>Mezcla</strong></p>
<p>
3.  Para la arrachera, mezcla 3 cucharadas de Jugo MAGGI con 3 cucharadas de Salsa Tipo Inglesa, 3 cucharadas de ajo picado y marina la arrachera por 15 minutos; calienta una sartén con grill y ásala por ambos lados, corta en tiras y reserva. En una sartén caliente, asa los portobellos con los pimientos y las cebollas cambray; sazona con Jugo MAGGI y la Salsa Tipo Inglesa al gusto. 

     </p>
<p><strong>Hornea</strong></p>
<p>
.  Coloca la arrachera, la chistorra, los portobellos, los pimientos, la cebolla morada, las cebollas de cambray y el queso tipo manchego sobre la pizza y hornea a 180 °C por 20 minutos más o hasta que gratine. Ofrece. 
</p>
</div>
</div>
</div>

                    

<div className="container">
<div className="card text-white bg-danger mb-3" >
<div className="card-body">
<h3><strong>Informacion nutricional</strong></h3>
<p> 452.3 kcal = 1,891kj /por porción  </p>
<p><strong>Carbohidratos:</strong> 30.5 g <strong>Energía:</strong> 452.3 kcal</p>  
<p><strong>Grasas:</strong> 24.6 g <strong>Fibras:</strong>  5.1 g</p> 
<p><strong>Proteinas:</strong> 31.1 g <strong>Grasas saturadas:</strong>9.2 g</p> 
<p><strong>Sodio:</strong>  986.3 mg<strong>Azucares:</strong> 5.2 g</p> 
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