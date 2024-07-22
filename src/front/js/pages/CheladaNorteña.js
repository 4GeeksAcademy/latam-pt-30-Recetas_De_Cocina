import React, { useContext } from "react";
import { Link } from "react-router-dom";
import { Context } from "../store/appContext";
import cheladanorteña from "../../img/cheladanorteña.jpg";


export const CheladaNorteña = () => {
	const { store, actions } = useContext(Context);

	return (
		<div className="container-fluid   d-flex flex-column justify-content-center" style={{ minHeight: "100vh" }}>
                    <div className="row border-bottom border-2 pb-4 border-danger py-5">
                        <div className="col-md-6">
                        <img src={cheladanorteña} className="img-fluid  rounded-circle" style={{maxWidth: "50rem", maxHeight: "50rem"}}/>
                        </div>
                        <div className="col-md-6 text-center d-flex flex-column justify-content-center">
                    <h1><strong>Chelada Norteña</strong></h1>
                    <p><strong>Ingredientes</strong></p>
                    
                    <p> 1/4 Taza de jugo de limón .</p>
                    <p>1/2 Cucharada de salsa picante con chile Tabasco  .</p>
                    <p>4 Cucharadas de MAGGI. </p>
                    <p>1 Cucharadita de sal .</p>
                    <p> 1/4 Cucharadita de pimienta negra, molida.</p>
                    <p>3/4 Taza de cóctel de tomate y almeja, frío.</p>
                    <p>1/2 Taza de hielo.</p>
                    <p>2 Tazas de cerveza clara y fría. </p>
                    <p> 1 Taza de carne, seca . </p>
                    <p>2 Bastones de apio, desinfectados . </p>
                    <p>2 Rodajas de limón. </p>

                    <div className="container">
<div className="card text-white bg-success mb-3" >
<div className="card-body">

<h1><strong>Pasos</strong></h1>
                    <p>
                    1.  Mezcla el jugo de limón, la salsa picante, la MAGGI, la sal, la pimienta y el cóctel de tomate.  
</p>
<p>

2.  En 4 tarros escarchados con chile en polvo, vierte un poco del hielo, añade un poco de la mezcla anterior y agrega la cerveza sin alcohol; mezcla. 
</p>

<p>
   

3.  Coloca la carne seca, el apio y decora con las rodajas de limón; ofrece.  

</p>


</div>
</div>
</div>

<div className="container">
<div className="card text-white bg-danger mb-3" >
<div className="card-body">
<h3><strong>Informacion nutricional</strong></h3>
<p> 246.6 kcal = 1,033kj /por porción 
</p>
<p><strong>Carbohidratos:</strong>   24.4 g <strong>Energía:</strong> 246.6 kcal</p>  
<p><strong>Grasas:</strong>   1.6 g <strong>Proteína:</strong>  17.7 g</p> 
<p><strong>Grasas saturadas:</strong>   0.5 g <strong>Sodio:</strong>  2828.3 mg </p> 
<p><strong>Fibra:</strong> 	 1.6 g <strong>Azúcares:</strong>  	6.1 g </p> 
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
