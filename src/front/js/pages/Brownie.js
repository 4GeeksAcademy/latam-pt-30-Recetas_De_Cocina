import React, { useContext } from "react";
import { Link } from "react-router-dom";
import { Context } from "../store/appContext";
import brownie from "../../img/brownie.jpg";



export const Brownie = () => {
	const { store, actions } = useContext(Context);

	return (
		<div className="container-fluid   d-flex flex-column justify-content-center" style={{ minHeight: "100vh" }}>
                    <div className="row border-bottom border-2 pb-4 border-danger py-5">
                        <div className="col-md-6">
                        <img src={brownie} className="img-fluid  rounded-circle" style={{maxWidth: "50rem", maxHeight: "50rem"}}/>
                        </div>
                        <div className="col-md-6 text-center d-flex flex-column justify-content-center">
                    <h1><strong>Brownies caseros</strong></h1>
                    <p><strong>Ingredientes</strong></p>
                    
                    <p>1 Barra de Mantequilla fundida (90 g) .</p>
                    <p>1/4 Taza de Leche Condensada.</p>
                    <p>1 Huevo. </p>
                    <p>3/4 Taza de Alimento en Polvo para Preparar Bebida Sabor a Chocolate.</p>
                    <p>2/3 Taza de Harina de trigo pasada por un colador.</p>
                    <p>1/2 Cucharadita de Polvo para hornear. </p>
                    <p>1/2 Taza de Frambuesas. </p>
                    <p>1/4 Taza de Azúcar glass. </p>
                    <p>6 Hojas de Menta fresca desinfectadas. </p>
                    
                    
                    <div className="container">
<div className="card text-white bg-success mb-3" >
<div className="card-body">

<h1><strong>Pasos</strong></h1>

<p><strong>Mezcla</strong></p>
                    <p>
                    1. Horno precalentado a 180 °C. 
</p>
<p>
2. Mezcla la mantequilla con la Leche Condensada LA LECHERA®, el huevo, el Alimento en Polvo para Preparar Bebida Sabor a Chocolate MORELIA PRESIDENCIAL®, la harina y el polvo para hornear hasta integrar por completo. 
</p>
<p><strong>Hornea</strong></p>
<p>
3. Vierte en un molde cubierto con papel encerado y hornea a 180 °C de 25 a 30 minutos; deja enfriar. Desmolda, corta en cuadros, decora con las frambuesas, el azúcar glass y las hojas de menta. 
</p>
</div>
</div>
</div>

<div className="container">
<div className="card text-white bg-danger mb-3" >
<div className="card-body">
<h3><strong>Informacion nutricional</strong></h3>
<p> 323.4 kcal = 1,351kj /por porción
</p>
<p><strong>Carbohidratos:</strong>  43.5 g <strong>Energía:</strong>  323.4 kcal</p>  
<p><strong>Grasas:</strong>  14.4 g <strong>Proteína:</strong>  4.9 g </p> 
<p><strong>Fibra:</strong>  2.4 g <strong>Azucares:</strong>   27.8 g </p> 
<p><strong>Grasas saturadas:</strong>  	8.5 g <strong>Sodio:</strong> 65.5 mg</p>
</div>
</div>
</div>

<p></p>


<Link to="/postres">
				<button className="btn btn-secondary bg-dark">Regresar</button>
			</Link>

                </div>
                </div>
                </div>
	);
};
