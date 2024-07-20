import React, { useContext } from "react";
import { Link } from "react-router-dom";
import { Context } from "../store/appContext";
import cocteltomate from "../../img/coteltomate.jpg";

export const CoctelTomateTamarindo = () => {
	const { store, actions } = useContext(Context);

	return (
		<div className="container-fluid   d-flex flex-column justify-content-center" style={{ minHeight: "100vh" }}>
                    <div className="row border-bottom border-2 pb-4 border-danger py-5">
                        <div className="col-md-6">
                        <img src={cocteltomate} className="img-fluid  rounded-circle" style={{maxWidth: "50rem", maxHeight: "50rem"}}/>
                        </div>
                        <div className="col-md-6 text-center d-flex flex-column justify-content-center">
                    <h1><strong>Coctel de tomate con tamarindo</strong></h1>
                    <p><strong>Ingredientes</strong></p>
                    
                    <p> 1 Cucharada Salsa Tipo Inglesa .</p>
                    <p>1 Botella cóctel de tomate y almeja (950 ml) .</p>
                    <p>1/2 Taza concentrado de tamarindo . </p>
                    <p>1 Limón, su jugo .</p>
                    <p> 2 Cucharadas de chamoy líquido  .</p>
                    <p>1 Cucharada Sazonador Líquido Maggi.</p>
                    <p> 2 Cucharadas de chile en polvo con limón .</p>
                    <p>1 Taza de hielos . </p>
                    

                    <div className="container">
<div className="card text-white bg-success mb-3" >
<div className="card-body">

<h1><strong>Pasos</strong></h1>
                    <p>
                    1.  Mezcla la Salsa Tipo Inglesa con el cóctel de tomate y almeja, el concentrado de tamarindo, el jugo de limón, el chamoy líquido y el Jugo Maggi.
</p>
<p>

2.  Sirve en tarros, previamente escarchados con chile en polvo, agrega hielos y ofrece.   
</p>

</div>
</div>
</div>

<div className="container">
<div className="card text-white bg-danger mb-3" >
<div className="card-body">
<h3><strong>Informacion nutricional</strong></h3>
<p> 156.5 kcal = 657kj /por porción 
</p>
<p><strong>Carbohidratos:</strong>    35.7 g <strong>Energía:</strong>  156.5 kcal</p>  
<p><strong>Grasas:</strong> 1.1 g  <strong>Proteína:</strong>   2.2 g</p> 
<p><strong>Grasas saturadas:</strong>   0.1 g <strong>Sodio:</strong>  1450.6 mg</p> 
<p><strong>Fibra:</strong>  2.6 g <strong>Azúcares:</strong>  	13.1 g </p> 
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
