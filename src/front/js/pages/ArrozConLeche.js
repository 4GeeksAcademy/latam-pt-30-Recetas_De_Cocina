import React, { useContext } from "react";
import { Link } from "react-router-dom";
import { Context } from "../store/appContext";
import Arrozconleche from "../../img/Arrozconleche.jpg";



export const ArrozConLeche = () => {
	const { store, actions } = useContext(Context);

	return (
		<div className="container-fluid   d-flex flex-column justify-content-center" style={{ minHeight: "100vh" }}>
                    <div className="row border-bottom border-2 pb-4 border-danger py-5">
                        <div className="col-md-6">
                        <img src={Arrozconleche} className="img-fluid  rounded-circle" style={{maxWidth: "50rem", maxHeight: "50rem"}}/>
                        </div>
                        <div className="col-md-6 text-center d-flex flex-column justify-content-center">
                    <h1><strong>Arroz con leche</strong></h1>
                    <p><strong>Ingredientes</strong></p>
                    
                    <p>4 1/2 Tazas de agua.</p>
                    <p>1 Raja de canela.</p>
                    <p>1 Taza de arroz, remojado en agua caliente por 20 minutos y escurrido. </p>
                    <p>1 Lata de Leche Condensada.</p>
                    <p>1 Lata de Leche Evaporada.</p>
                    <p>1/2 Taza de pasas. </p>
                    <p>1 Cucharada de canela, molida . </p>
                     
                    <div className="container">
<div className="card text-white bg-success mb-3" >
<div className="card-body">

<h1><strong>Pasos</strong></h1>


                    <p>
                    1.Calienta el agua con la canela y cuando suelte el hervor, agrega el arroz; cocina durante 15 minutos o hasta que el arroz esté tierno.  
</p>


<p>
2. Vierte la Leche Condensada LA LECHERA®, la Leche Evaporada CARNATION® CLAVEL® y las pasas; mezcla y continúa la cocción a fuego bajo de 20 a 25 minutos hasta que espese ligeramente. 
</p>

<p>
3. Sirve tibio o frío y espolvorea con canela molida.  
</p>
</div>
</div>
</div>

<div className="container">
<div className="card text-white bg-danger mb-3" >
<div className="card-body">
<h3><strong>Informacion nutricional</strong></h3>
<p>  418 kcal = 1,749kj /por porción
</p>
<p><strong>Carbohidratos:</strong>  77.8 g <strong>Energía:</strong>  418 kcal</p>  
<p><strong>Grasas:</strong>   7.9 g <strong>Proteína:</strong>  10.4 g  </p> 
<p><strong>Fibra:</strong>  3.5 g <strong>Azucares:</strong>  49.7 g </p> 
<p><strong>Grasas saturadas:</strong>   4.7 g <strong>Sodio:</strong> 128.1 mg</p>
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
