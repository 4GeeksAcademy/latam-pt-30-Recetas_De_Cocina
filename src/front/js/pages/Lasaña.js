import React, { useContext } from "react";
import { Link } from "react-router-dom";
import { Context } from "../store/appContext";
import lasaña from "../../img/Lasaña.jpg";


export const LasañaC = () => {
	const { store, actions } = useContext(Context);

	return (
		<div className="container-fluid   d-flex flex-column justify-content-center" style={{ minHeight: "100vh" }}>
                    <div className="row border-bottom border-2 pb-4 border-danger py-5">
                        <div className="col-md-6">
                        <img src={lasaña} className="img-fluid  rounded-circle" style={{maxWidth: "50rem", maxHeight: "50rem"}}/>
                        </div>
                        <div className="col-md-6 text-center d-flex flex-column justify-content-center">
                    <h1><strong>Lasaña con champiñones</strong></h1>
                    <p><strong>Ingredientes</strong></p>
                    
                    <p>1 1/2 Taza de Puré de tomate.</p>
                    <p>3 Cucharadas de Aceite vegetal.</p>
                    <p>2 Cucharadas de salsa de soya. </p>
                    <p>2 Cucharadas de Salsa Tipo Inglesa.</p>
                    <p> 1 Cucharada de Consomé de pollo en polvo  .</p>
                    <p> 1 1/2 Tazas de Agua. </p>
                    <p> 500 Gramos de Carne molida de res. </p>
                    <p>1 Taza de Champiñones limpios y rebanados. </p>
                    <p>1 1/2 Tazas de Queso tipo manchego rallado. </p>
                    <p>1 Cucharadita de Ajo en polvo.  </p>
                    <p>9 Hojas de Pasta para lasaña.  </p>
                    

<div className="container">
<div className="card text-white bg-success mb-3" >
<div className="card-body">
<h1><strong>Pasos</strong></h1>
                    <p><strong>Calienta</strong></p>
                    <p>
    1.Horno Precalentado a 180 °C. 

</p>
<p>2.Para la salsa, calienta el puré de tomate con el agua y agrega el consomé de pollo, ajo en polvo y la sal. Mueve constantemente y cocina por 10 minutos o hasta que espese un poco.</p>

<p><strong>Agrega</strong></p>
<p>3.  Para el relleno, calienta el aceite y agrega la carne con el Jugo MAGGI®, la Salsa Tipo Inglesa CROSSE & BLACKWELL® y los champiñones. Mezcla y cocina hasta que la carne esté cocida. </p>
<p><strong>Hornea</strong></p>
<p>
4.  En un refractario engrasado con un poco de aceite, 
coloca una capa de láminas de lasaña, una de relleno y una de salsa. Repite el procedimiento hasta terminar con todos los ingredientes. 
Por último cubre con una capa de queso. 
Cubre el refractario con plástico adherente y hornea por 10 minutos o hasta que la pasta esté tierna. Ofrece. 
</p>
</div>
</div>
</div>

                    

<div className="container">
<div className="card text-white bg-danger mb-3" >
<div className="card-body">
<h3><strong>Informacion nutricional</strong></h3>
<p>758.7 kcal = 3,176kj /por porción</p>
<p><strong>Carbohidratos:</strong>   43.1 g <strong>Energía:</strong>   758.7 kcal</p>  
<p><strong>Grasas:</strong> 40 g <strong>Fibras:</strong>  4 g</p> 
<p><strong>Proteinas:</strong>  56.4 g  <strong>Grasas saturadas:</strong>  20.3 g </p> 
<p><strong>Sodio:</strong>  2404.1 mg   <strong>Azucares:</strong>     10.9 g </p> 
</div>
</div>
</div>

<p></p>

<Link to="/comidas">
				<button className="btn btn-secondary bg-dark">Regresar</button>
			</Link>

                </div>
                </div>
                </div>
	);
};
