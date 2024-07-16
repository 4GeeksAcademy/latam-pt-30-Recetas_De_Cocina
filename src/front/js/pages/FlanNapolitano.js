import React, { useContext } from "react";
import { Link } from "react-router-dom";
import { Context } from "../store/appContext";
import FlanNapolitano from "../../img/FlanNapolitano.jpg";



export const Flannapolitano = () => {
	const { store, actions } = useContext(Context);

	return (
		<div className="container-fluid   d-flex flex-column justify-content-center" style={{ minHeight: "100vh" }}>
                    <div className="row border-bottom border-2 pb-4 border-danger py-5">
                        <div className="col-md-6">
                        <img src={FlanNapolitano} className="img-fluid  rounded-circle" style={{maxWidth: "50rem", maxHeight: "50rem"}}/>
                        </div>
                        <div className="col-md-6 text-center d-flex flex-column justify-content-center">
                    <h1><strong>Flan Napolitano</strong></h1>
                    <p><strong>Ingredientes</strong></p>
                    
                    <p>3/4 De taza de azúcar refinada.</p>
                    <p>1 Lata de Leche Condensada.</p>
                    <p>1 Lata de Leche Evaporada. </p>
                    <p>1 Paquete de queso crema a temperatura ambiente.</p>
                    <p>5 Huevos .</p>
                    <p>1 Cucharada de esencia de vainilla. </p>
                    
                    
                    <div className="container">
<div className="card text-white bg-success mb-3" >
<div className="card-body">

<h1><strong>Pasos</strong></h1>

<p><strong>Calienta</strong></p>
                    <p>
                    1.  Horno precalentado a 180 °C. 
</p>

<p>

2.  Vierte el azúcar en una flanera y calienta a fuego medio para que se forme el caramelo; ladea con cuidado el molde para cubrir la superficie y las paredes.

</p>

<p><strong>Cocina</strong></p>
<p>
3.  Licúa la Leche Condensada con la Leche Evaporada, el queso crema, los huevos y la esencia de vainilla. Vierte la preparación en la flanera y tapa con papel aluminio sellando las orillas. Coloca en un recipiente y cocina a baño María en el horno a 180 °C durante 1 1/2 horas. 
</p>

<p><strong>Sirve</strong></p>
<p>

4.  Retira del fuego y deja enfriar por completo; desmolda y sirve.

</p>
</div>
</div>
</div>

<div className="container">
<div className="card text-white bg-danger mb-3" >
<div className="card-body">
<h3><strong>Informacion nutricional</strong></h3>
<p> 266.9 kcal = 1,117kj /por porción
</p>
<p><strong>Carbohidratos:</strong> 34.8 g <strong>Energía:</strong> 266.9 kcal</p>  
<p><strong>Grasas:</strong> 10.8 g <strong>Proteína:</strong>   7.4 g  </p> 
<p><strong>Grasas saturadas:</strong>  6.1 g <strong>Sodio:</strong>  	139 mg </p>
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
