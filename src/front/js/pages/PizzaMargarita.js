import React, { useContext } from "react";
import { Link } from "react-router-dom";
import { Context } from "../store/appContext";
import pizzamarga from "../../img/Pizzamargarita.jpg";


export const Pizzamargarita = () => {
	const { store, actions } = useContext(Context);

	return (
		<div className="container-fluid   d-flex flex-column justify-content-center" style={{ minHeight: "100vh" }}>
                    <div className="row border-bottom border-2 pb-4 border-danger py-5">
                        <div className="col-md-6">
                        <img src={pizzamarga} className="img-fluid  rounded-circle" style={{maxWidth: "50rem", maxHeight: "50rem"}}/>
                        </div>
                        <div className="col-md-6 text-center d-flex flex-column justify-content-center">
                    <h1><strong>Pizza Margarita</strong></h1>
                    <p><strong>Ingredientes</strong></p>
                    
                    <p>1 Lata de Media Crema.</p>
                    <p>1 Envase de Salsa de tomate para pizza (360 g).</p>
                    <p> 1 Cucharadita de Sal con ajo en polvo. </p>
                    <p> 1/2 Cucharadita de Ajo picado.</p>
                    <p>  1 Paquete de Pan árabe (450 g).</p>
                    <p>  1 Taza de Albahaca fresca desinfectada. </p>
                    <p>  3/4 Taza de Queso parmesano rallado. </p>
                    <p> 1/2 Paquete de Jitomates cherry partidos a la mitad . </p>
                    

<div className="container">
<div className="card text-white bg-success mb-3" >
<div className="card-body">
<h1><strong>Pasos</strong></h1>
                    <p><strong>Licúa</strong></p>
                    <p>
                    1.  Horno precalentado a 180 °C.
2.  Para la salsa, licúa la Media Crema con la salsa de tomate, la sal con ajo y el ajo.

</p>
<p><strong>Unta</strong></p>
<p>
3.  Para formar las pizzas, unta un poco de la salsa en cada pan árabe y reparte en cada una las hojas de albahaca, el queso parmesano y algunos jitomates cherry. 

     </p>
<p><strong>Hornea</strong></p>
<p>
4.  Hornea a 180 °C durante 15 minutos o hasta que la orilla del pan esté dorada y crujiente; ofrece. 

</p>
</div>
</div>
</div>

                    

<div className="container">
<div className="card text-white bg-danger mb-3" >
<div className="card-body">
<h3><strong>Informacion nutricional</strong></h3>
<p>200.1 kcal = 837kj /por porción</p>
<p><strong>Carbohidratos:</strong>   23.9 g <strong>Energía:</strong> 	200.1 kca</p>  
<p><strong>Grasas:</strong>  7.8 g <strong>Fibras:</strong> 1.6 g</p> 
<p><strong>Proteinas:</strong>8.6 g <strong>Grasas saturadas:</strong> 4.7 g</p> 
<p><strong>Sodio:</strong> 747.5 mg<strong>Azucares:</strong> 5.9 g</p> 
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