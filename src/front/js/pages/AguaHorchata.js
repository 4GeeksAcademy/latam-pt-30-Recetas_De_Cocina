import React, { useContext } from "react";
import { Link } from "react-router-dom";
import { Context } from "../store/appContext";
import horchata from "../../img/horchata.jpg";

export const AguaHorchata = () => {
	const { store, actions } = useContext(Context);

	return (
		<div className="container-fluid   d-flex flex-column justify-content-center" style={{ minHeight: "100vh" }}>
                    <div className="row border-bottom border-2 pb-4 border-danger py-5">
                        <div className="col-md-6">
                        <img src={horchata} className="img-fluid  rounded-circle" style={{maxWidth: "50rem", maxHeight: "50rem"}}/>
                        </div>
                        <div className="col-md-6 text-center d-flex flex-column justify-content-center">
                    <h1><strong>Agua de horchata</strong></h1>
                    <p><strong>Ingredientes</strong></p>
                    
                    <p> 1 Taza de Arroz.</p>
                    <p>1 Bolsa de Leche Condensada.</p>
                    <p>4 Cucharadas de MAGGI. </p>
                    <p>1 Envase de Leche Evaporada.</p>
                    <p> 4 Tazas de Agua .</p>
                    <p>1 Pieza de Canela en raja .</p>
                    <p> 2 Tazas de Hielo.</p>
                    <p>2 Cucharadas de Canela molida. </p>
                    

                    <div className="container">
<div className="card text-white bg-success mb-3" >
<div className="card-body">

<h1><strong>Pasos</strong></h1>
                    <p>
                    1.  Licúa el Arroz con la Leche Condensada, la Leche Evaporada, el agua y la canela.   
</p>
<p>

2.  Cuela y sirve en vasos con hielo.  
</p>

<p>
   

3.  Decora con canela molida. Ofrece y disfruta. 

</p>


</div>
</div>
</div>

<div className="container">
<div className="card text-white bg-danger mb-3" >
<div className="card-body">
<h3><strong>Informacion nutricional</strong></h3>
<p> 266.7 kcal = 1,117kj /por porción 
</p>
<p><strong>Carbohidratos:</strong>    42.6 g <strong>Energía:</strong> 266.7 kcal</p>  
<p><strong>Grasas:</strong>7.6 g  <strong>Proteína:</strong>   8.6 g</p> 
<p><strong>Grasas saturadas:</strong>    5 g <strong>Sodio:</strong>  156.1 mg</p> 
<p><strong>Fibra:</strong> 3.8 g <strong>Azúcares:</strong> 37.1 g </p> 
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
