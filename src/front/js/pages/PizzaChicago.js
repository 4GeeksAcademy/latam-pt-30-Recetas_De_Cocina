import React, { useContext } from "react";
import { Link } from "react-router-dom";
import { Context } from "../store/appContext";
import pizzachicago from "../../img/pizzachicago.jpg";



export const PizzaChicago = () => {
	const { store, actions } = useContext(Context);

	return (
		<div className="container-fluid   d-flex flex-column justify-content-center" style={{ minHeight: "100vh" }}>
                    <div className="row border-bottom border-2 pb-4 border-danger py-5">
                        <div className="col-md-6">
                        <img src={pizzachicago} className="img-fluid  rounded-circle" style={{maxWidth: "50rem", maxHeight: "50rem"}}/>
                        </div>
                        <div className="col-md-6 text-center d-flex flex-column justify-content-center">
                    <h1><strong>Pizza Chicago</strong></h1>
                    <p><strong>Ingredientes</strong></p>
                    
                    <p> 1/2 Kilogramo de harina de trigo.</p>
                    <p>1/4 Taza de miel de abeja .</p>
                    <p> 1/4 Taza de aceite de oliva. </p>
                    <p> 1 Sobre de levadura (11 g).</p>
                    <p> 1/2 Cucharada de hierbas finas, secas.</p>
                    <p>  3/4 Taza de agua. </p>
                    <p>  500 Gramos de queso tipo manchego, rallado. </p>
                    <p> 100 Gramos de pepperoni . </p>
                    <p> 1 1/2 Tazas de salsa de tomate, para pizza . </p>
                    <p> 1/2 Taza de queso parmesano, rallado .  </p>
                    <p>5 C7ucharadas de Salsa Inglesa .</p>
                    

<div className="container">
<div className="card text-white bg-success mb-3" >
<div className="card-body">
<h1><strong>Pasos</strong></h1>
                    <p>

                    1.  Horno precalentado a 180 °C
</p>
<p>
2.  Para la masa, mezcla la harina con la miel, ¼ taza de aceite de oliva, la levadura, las hierbas finas y el agua poco a poco; amásala hasta que esté tersa, elástica y no se te pegue en los dedos. Colócala en un recipiente grande previamente engrasado, cubre con papel adherente y déjala reposar en un lugar tibio hasta que doble su volumen.      </p>
<p>
3.  Divide la masa en 2 partes iguales, con ayuda de un rodillo extiéndelas sobre una mesa enharinada hasta formar 2 círculos delgados. Cubre un molde para pastel de 24 cm de diámetro por 7 cm de alto, engrasado y enharinado con un círculo de masa; agrega el queso tipo manchego y el pepperoni hasta cubrir ¾ partes del molde. 
</p>
<p>

4.  Cubre con el otro círculo de masa y realiza algunos orificios con un tenedor, agrega la salsa sobre toda la superficie y hornea a 180 °C de 50 a 55 minutos; retira del horno y vierte el queso parmesano. Corta en rebanadas y sirve con la Salsa Inglesa.
</p>
</div>
</div>
</div>

                    

<div className="container">
<div className="card text-white bg-danger mb-3" >
<div className="card-body">
<h3><strong>Informacion nutricional</strong></h3>
<p>679.5 kcal = 2,845kj /por porción  </p>
<p><strong>Carbohidratos:</strong> 57 g <strong> Energía:</strong> 	679.5 kcal</p>  
<p><strong>Grasas:</strong> 36.4 g <strong> Fibras:</strong> 2.6 g</p> 
<p><strong>Proteinas:</strong> 30.4 g <strong> Grasas saturadas:</strong>17.2 g</p> 
<p><strong>Sodio:</strong>784.5 mg <strong> Azucares:</strong>9.2 g</p> 
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