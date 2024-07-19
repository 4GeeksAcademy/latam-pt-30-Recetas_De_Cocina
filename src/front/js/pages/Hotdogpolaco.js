import React, { useContext } from "react";
import { Link } from "react-router-dom";
import { Context } from "../store/appContext";
import hotdogpolaco from "../../img/hotdogpolaco.png";



export const HotDogPolaco = () => {
	const { store, actions } = useContext(Context);

	return (
		<div className="container-fluid   d-flex flex-column justify-content-center" style={{ minHeight: "100vh" }}>
                    <div className="row border-bottom border-2 pb-4 border-danger py-5">
                        <div className="col-md-6">
                        <img src={hotdogpolaco} className="img-fluid  rounded-circle" style={{maxWidth: "50rem", maxHeight: "50rem"}}/>
                        </div>
                        <div className="col-md-6 text-center d-flex flex-column justify-content-center">
                    <h1><strong>Hot Dog Polaco</strong></h1>
                    <p><strong>Ingredientes</strong></p>
                    
                    <p> 2 Cucharadas de mantequilla .</p>
                    <p>  2 Salchichas polacas .</p>
                    <p>  1 Cebolla fileteada . </p>
                    <p>  2 Cucharadas de ajo picado finamente  .</p>
                    <p> 2 Cucharadas de Salsa Tipo Inglesa.</p>
                    <p> 2 Cucharadas de Jugo MAGGI. </p>
                    <p>  2 Panes para hot dog . </p>
                    <p>  1/4 De taza de mayonesa. </p>
                    <p> 1/2 Taza de Miel de abeja. </p>
                    <p>  1/4 De taza de mostaza.  </p>
                    <p>  1/4 De taza de cátsup .</p>
                    <p>  200 Gramos de queso gouda rallado .</p>
                    

                    

<div className="container">
<div className="card text-white bg-success mb-3" >
<div className="card-body">
<h1><strong>Pasos</strong></h1>
                    <p><strong>Cocina las salchichas</strong></p>
                    <p>
                    1.  En una sartén caliente agrega la mantequilla; asa las salchichas hasta que doren ligeramente, retira y reserva. En la misma sartén agrega la cebolla con la Salsa Tipo Inglesa y el Jugo Maggi hasta que doren por completo.  
</p>

<p><strong>Prepara los hot dog</strong></p>
<p>
2.  Calienta los panes para hot dog; unta la mayonesa, coloca las salchichas con la mostaza, la cátsup, el queso y las cebollas. 
     </p>
<p><strong>Calienta</strong></p>
<p>
3.  Coloca los hot dog en una sartén; cocina con la tapa a fuego medio hasta que el queso se funda. 
</p>
</div>
</div>
</div>

                    

<div className="container">
<div className="card text-white bg-danger mb-3" >
<div className="card-body">
<h3><strong>Informacion nutricional</strong></h3>
<p>  379 kcal = 1,586kj /por porción  </p>
<p><strong>Carbohidratos:</strong> 10 g <strong>Energía:</strong> 379 kcal</p>  
<p><strong>Grasas:</strong>29.2 g  <strong>Fibras:</strong> 1 g</p> 
<p><strong>Proteinas:</strong>    19.3 g <strong>Grasas saturadas:</strong>  16 g</p> 
<p><strong>Sodio:</strong>1122.6 mg <strong>Azucares:</strong> 	3.5 g</p> 
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