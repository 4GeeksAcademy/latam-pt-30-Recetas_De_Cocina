import React, { useContext } from "react";
import { Link } from "react-router-dom";
import { Context } from "../store/appContext";
import papasfritasmx from "../../img/patatas-fritas-mexicanas.jpg";


export const PapasFritasMX = () => {
	const { store, actions } = useContext(Context);

	return (
		<div className="container-fluid   d-flex flex-column justify-content-center" style={{ minHeight: "100vh" }}>
                    <div className="row border-bottom border-2 pb-4 border-danger py-5">
                        <div className="col-md-6">
                        <img src={papasfritasmx} className="img-fluid  rounded-circle" style={{maxWidth: "50rem", maxHeight: "50rem"}}/>
                        </div>
                        <div className="col-md-6 text-center d-flex flex-column justify-content-center">
                    <h1><strong>Papa fritas a la mexicana</strong></h1>
                    <p><strong>Ingredientes</strong></p>
                    
                    <p>4 Tazas de agua  .</p>
                    <p>2 Cucharaditas de sal  .</p>
                    <p>1 Cucharadita de azúcar  . </p>
                    <p>4 Papas, peladas y cortadas en bastones .</p>
                    <p> 1 Cucharada de aceite de oliva .</p>
                    <p> 1/2 Cucharada de sal con cebolla, molida  . </p>
                    <p> 1 Cucharada de paprika . </p>
                    <p>1 Cebolla, cortada en cubos  . </p>
                    <p>2 Jitomates, cortados en cubos  </p>
                    <p>1 Chile jalapeño, picado finamente .   </p>
                    <p>1 Cucharada de Jugo MAGGI.  </p>
                    <p>2 Limones, su jugo. </p>
                    

<div className="container">
<div className="card text-white bg-success mb-3" >
<div className="card-body">
<h1><strong>Pasos</strong></h1>
                    
                    <p>
                    1.  Para las papas coloca el agua en un recipiente con la sal, el azúcar y con ayuda de un tenedor disuelve muy bien, agrega las papas y refrigera por 20 minutos, cuela las papas y con ayuda de papel absorbente sécalas muy bien. 

</p>

<p>2.  Cubre las papas con el aceite de oliva, agrega la sal con cebolla y la paprika, coloca algunas en la Freidora de Aire evitando que se encimen y programa la función de papas. . </p>

<p>
3.  Mezcla la cebolla con los jitomates, el chile jalapeño, el Jugo MAGGI y el jugo de limón hasta integrar por completo. Acompaña las papas con el pico de gallo y ofrece.  
</p>
</div>
</div>
</div>

                    

<div className="container">
<div className="card text-white bg-danger mb-3" >
<div className="card-body">
<h3><strong>Informacion nutricional</strong></h3>
<p> 76.9 kcal = 322kj /por porción 
</p>
<p><strong>Carbohidratos:</strong>   10.5 g <strong>Energía:</strong>  76.9 kcal</p>  
<p><strong>Grasas:</strong>4.2 g <strong>Fibras:</strong> 2.5 g</p> 
<p><strong>Proteinas:</strong>  1.5 g <strong>Grasas saturadas:</strong> 0.6 g </p> 
<p><strong>Sodio:</strong> 1796.6 mg   <strong>Azucares:</strong>  3.7 g </p> 
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