import React, { useContext } from "react";
import { Link } from "react-router-dom";
import { Context } from "../store/appContext";
import hotcakes from "../../img/hot cakes.jpg";



export const Hotcakes = () => {
	const { store, actions } = useContext(Context);

	return (
		<div className="container-fluid   d-flex flex-column justify-content-center" style={{ minHeight: "100vh" }}>
                    <div className="row border-bottom border-2 pb-4 border-danger py-5">
                        <div className="col-md-6">
                        <img src={hotcakes} className="img-fluid  rounded-circle" style={{maxWidth: "50rem", maxHeight: "50rem"}}/>
                        </div>
                        <div className="col-md-6 text-center d-flex flex-column justify-content-center">
                    <h1><strong>Hot cakes</strong></h1>
                    <p><strong>Ingredientes</strong></p>
                    
                    <p>3/4 Taza de Leche Evaporada.</p>
                    <p>1 Huevo.</p>
                    <p>2 Cucharadas de mantequilla, fundida . </p>
                    <p>1 Cucharadita de esencia de vainilla .</p>
                    <p> 1 Taza de harina para hot cakes .</p>
                    <p> 2 Cucharadas de mantequilla. </p>
                    <p> 1/2 Taza de moras azules . </p>
                    <p>1/2 Taza de fresas, desinfectadas y cortadas en cuartos. </p>
                    <p>6 Hojas de menta, desinfectadas. </p>
                    <p> 1 Envase de Leche Condensada </p>


                    <div className="container">
<div className="card text-white bg-success mb-3" >
<div className="card-body">

<h1><strong>Pasos</strong></h1>
                    <p>
                    1.  Mezcla la Leche Evaporada con el huevo, 2 cucharadas de mantequilla fundida, la esencia de vainilla y la harina para hot cakes. 
</p>
<p>

2.  Calienta una sartén, agrega un poco de mantequilla y con ayuda de un cucharón vierte un poco de la mezcla para formar los hot cakes; cocina por ambos lados y repite el procedimiento con el resto de la preparación.

</p>

<p>
   

3.  Sirve los hot cakes, decora con moras azules, fresas, las hojas de menta y con un poco de Leche Condensada LA LECHERA® Sirve Fácil. Ofrece.


</p>


</div>
</div>
</div>

<div className="container">
<div className="card text-white bg-danger mb-3" >
<div className="card-body">
<h3><strong>Informacion nutricional</strong></h3>
<p>139.1 kcal = 582kj /por porción </p>
<p><strong>Carbohidratos:</strong> 15.4 g <strong>Energía:</strong>  139.1 kca</p>  
<p><strong>Grasas:</strong>  6.7 g <strong>Proteína:</strong>  4 g</p> 
<p><strong>Grasas saturadas:</strong> 4 g <strong>Sodio:</strong>  45.7 mg </p> 
</div>
</div>
</div>

<p></p>


<Link to="/desayunos">
				<button className="btn btn-secondary bg-dark">Regresar</button>
			</Link>

                </div>
                </div>
                </div>
	);
};
