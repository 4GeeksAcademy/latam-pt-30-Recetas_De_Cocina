import React, { useContext } from "react";
import { Link } from "react-router-dom";
import { Context } from "../store/appContext";
import PanFrances from "../../img/pan frances.jpg";



export const Panfrances = () => {
	const { store, actions } = useContext(Context);

	return (
		<div className="container-fluid   d-flex flex-column justify-content-center" style={{ minHeight: "100vh" }}>
                    <div className="row border-bottom border-2 pb-4 border-danger py-5">
                        <div className="col-md-6">
                        <img src={PanFrances} className="img-fluid  rounded-circle" style={{maxWidth: "50rem", maxHeight: "50rem"}}/>
                        </div>
                        <div className="col-md-6 text-center d-flex flex-column justify-content-center">
                    <h1><strong>Pan Francés</strong></h1>
                    <p><strong>Ingredientes</strong></p>
                    
                    <p>3 Huevos .</p>
                    <p>1 Lata de Leche Evaporada.</p>
                    <p>1 Cucharadita de esencia de vainilla . </p>
                    <p>20 Rebanadas de pan de caja sin orillas .</p>
                    <p> 4 Cucharadas de mantequilla .</p>
                    <p> 1 Taza de azúcar. </p>
                    <p>1 1/2 Cucharadas de canela molida. </p>
                    
                    <div className="container">
<div className="card text-white bg-success mb-3" >
<div className="card-body">

<h1><strong>Pasos</strong></h1>

<p><strong>Mezclar</strong></p>
                    <p>
                    1.  Mezcla la Leche Evaporada con los huevos y la esencia de vainilla; humedece cada rebanada de pan en la mezcla. 
</p>
<p><strong>Freír</strong></p>
<p>

2.  En una sartén, calienta un poco de mantequilla y fríe las rebanadas de pan por ambos lados hasta que estén doradas.

</p>

<p><strong>Mezclar/presentación</strong></p>
<p>
3. Mezcla en un tazón el azúcar con la canela y espolvorea cada rebanada de pan por ambos lados. Acompaña con frutas y ofrece.
</p>
</div>
</div>
</div>

<div className="container">
<div className="card text-white bg-danger mb-3" >
<div className="card-body">
<h3><strong>Informacion nutricional</strong></h3>
<p>319.1 kcal = 1,335kj /por porción  </p>
<p><strong>Carbohidratos:</strong> 49.9 g<strong>Energía:</strong> 319.1 kcal</p>  
<p><strong>Grasas:</strong> 9.8 g<strong>Fibra:</strong>  2.1 g</p> 
<p><strong>Grasas saturadas:</strong> 5.1 g <strong>Sodio:</strong>   	303.3 mg </p>
<p><strong>Proteína:</strong>   8.4 g<strong>Azucares:</strong> 26.8 g </p>
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
