import React, { useContext } from "react";
import { Link } from "react-router-dom";
import { Context } from "../store/appContext";
import hamburguesatocino from "../../img/hamburguesatocino.jpg";


export const HamburguesaTocino = () => {
	const { store, actions } = useContext(Context);

	return (
		<div className="container-fluid   d-flex flex-column justify-content-center" style={{ minHeight: "100vh" }}>
                    <div className="row border-bottom border-2 pb-4 border-danger py-5">
                        <div className="col-md-6">
                        <img src={hamburguesatocino} className="img-fluid  rounded-circle" style={{maxWidth: "50rem", maxHeight: "50rem"}}/>
                        </div>
                        <div className="col-md-6 text-center d-flex flex-column justify-content-center">
                    <h1><strong>Hamburguesa de tocino</strong></h1>
                    <p><strong>Ingredientes</strong></p>
                    
                    <p>  500 Gramos de carne de res, molida .</p>
                    <p>1 Cucharada de Salsa Inglesa.</p>
                    <p>1 Cucharada de Jugo MAGGI. </p>
                    <p>1 Huevo .</p>
                    <p>3 Cucharadas de pan molido .</p>
                    <p> 2 Ramitas de perejil fresco, desinfectado y picado finamente. </p>
                    <p> 200 Gramos de queso tipo manchego, rallado . </p>
                    <p>4 Cucharadas de mayonesa . </p>
                    <p>4 Bollos para hamburguesa, calientes . </p>
                    <p>8 Rodajas de tocino, frito.  </p>
                    <p>4 Rodajas de piña.  </p>
                    <p>4 Hojas de lechuga italiana, desinfectada .</p>
                    <p>8 Aros de cebolla, fritos y calientes.</p>
                    <p>1/4 Taza de rajas de chile en vinagre .</p>

                    

<div className="container">
<div className="card text-white bg-success mb-3" >
<div className="card-body">
<h1><strong>Pasos</strong></h1>
                    
                    <p>
                    1.  Para las hamburguesas, mezcla la carne, la Salsa Inglesa, el Jugo MAGGI, el huevo, el pan molido y el perejil. Forma 4 bolitas del mismo tamaño, aplástalas con tus manos y ásalas en un poco de aceite por ambos lados hasta que doren ligeramente. 
</p>
<p>
2.  Coloca un poco de queso sobre cada carne y cocina hasta que se funda. Unta la mayonesa en los bollos. 
</p>

<p>
3.  Coloca en los bollos la carne, el tocino, la lechuga, los aros de cebolla y las rajas de chile; ofrece. 
</p>
</div>
</div>
</div>

                    

<div className="container">
<div className="card text-white bg-danger mb-3" >
<div className="card-body">
<h3><strong>Informacion nutricional</strong></h3>
<p> 1352.2 kcal = 4kj /por porción   </p>
<p><strong>Carbohidratos:</strong>  32.6 g <strong>Energía:</strong> 1352.2 kcal</p>  
<p><strong>Grasas:</strong> 120.9 g<strong>Fibras:</strong>3.9 g</p> 
<p><strong>Proteinas:</strong> 33.2 g <strong>Grasas saturadas:</strong>51.5 g</p> 
<p><strong>Sodio:</strong> 1013 mg<strong>Azucares:</strong> 9.6 g</p> 
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