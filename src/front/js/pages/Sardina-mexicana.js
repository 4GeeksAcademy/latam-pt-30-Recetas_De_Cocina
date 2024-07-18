import React, { useContext } from "react";
import { Link } from "react-router-dom";
import { Context } from "../store/appContext";
import SardinaMx from "../../img/sardinas-la-mexicana.jpg";



export const SardinaMexicana = () => {
	const { store, actions } = useContext(Context);

	return (
		<div className="container-fluid   d-flex flex-column justify-content-center" style={{ minHeight: "100vh" }}>
                    <div className="row border-bottom border-2 pb-4 border-danger py-5">
                        <div className="col-md-6">
                        <img src={SardinaMx} className="img-fluid  rounded-circle" style={{maxWidth: "50rem", maxHeight: "50rem"}}/>
                        </div>
                        <div className="col-md-6 text-center d-flex flex-column justify-content-center">
                    <h1><strong>Sardina a la Mexicana</strong></h1>
                    <p><strong>Ingredientes</strong></p>
                    
                    <p>1/2 Cebolla picada finamente.</p>
                    <p>6 Jitomates sin semillas y cortados en cubos.</p>
                    <p>3 Chiles serranos cortados en rodajas. </p>
                    <p>2 Limones (su jugo) .</p>
                    <p> 1 Cucharada de Jugo Maggi.</p>
                    <p> 3 Cucharadas de Salsa Tipo Inglesa. </p>
                    <p> 2 Latas de sardina en salsa de tomate limpias y desmenuzadas (425 g c/u). </p>
                    <p>5 Ramas de cilantro desinfectado y picado finamente. </p>
                    <p>Galletas saladas (186 g). </p>
                    <p>3 Cucharadas de Aceite de ajonjolí.  </p>
                    <p>1 Taza de Cilantro fresco desinfectado y picado finamente.  </p>
                    <p>1 Lata de Rebanadas de piña en almíbar escurrida (800 g) .  </p>
                   
<div className="container">
<div className="card text-white bg-success mb-3" >
<div className="card-body">
<h1><strong>Pasos</strong></h1>
                    <p><strong>Mezcla y sazona</strong></p>
                    <p>
                    1.  Mezcla la cebolla, el jitomate, los chiles, el jugo de limón, el Jugo Maggi, la Salsa Tipo Inglesa, la sardina y el cilantro. 

</p>
<p><strong>Refrigera</strong></p>
<p>2.  Cubre con plástico adherente y refrigera por 15 minutos.  </p>
<p><strong>¡A comer!</strong></p>
<p>
3. Sirve con las galletas y ofrece. 
</p>
</div>
</div>
</div>

                    

<div className="container">
<div className="card text-white bg-danger mb-3" >
<div className="card-body">
<h3><strong>Informacion nutricional</strong></h3>
<p> 82.7 kcal = 347kj /por porción
</p>
<p><strong>Carbohidratos:</strong>  4.3 g <strong>Energía:</strong> 82.7 kcal</p>  
<p><strong>Grasas:</strong>   3.6 g  <strong>Fibras:</strong>   0.8 g</p> 
<p><strong>Proteinas:</strong>  8.1 g <strong>Grasas saturadas:</strong>   0.5 g</p> 
<p><strong>Sodio:</strong>   249.3 mg <strong>Azucares:</strong> 2.1 g </p> 
</div>
</div>
</div>

<p></p>

<Link to="/cenas">
				<button className="btn btn-secondary bg-dark">Regresar</button>
			</Link>

                </div>
                </div>
                </div>
	);
};