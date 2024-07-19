import React, { useContext } from "react";
import { Link } from "react-router-dom";
import { Context } from "../store/appContext";
import tortapavo from "../../img/tortapavo.jpg";



export const TortaPavo = () => {
	const { store, actions } = useContext(Context);

	return (
		<div className="container-fluid   d-flex flex-column justify-content-center" style={{ minHeight: "100vh" }}>
                    <div className="row border-bottom border-2 pb-4 border-danger py-5">
                        <div className="col-md-6">
                        <img src={tortapavo} className="img-fluid  rounded-circle" style={{maxWidth: "50rem", maxHeight: "50rem"}}/>
                        </div>
                        <div className="col-md-6 text-center d-flex flex-column justify-content-center">
                    <h1><strong>Torta de pavo</strong></h1>
                    <p><strong>Ingredientes</strong></p>
                    
                    <p>  1 Cucharada de Aceite de maíz.</p>
                    <p> 1/2 Cebolla fileteada .</p>
                    <p> 2 Tazas de Pavo deshebrado . </p>
                    <p> 1 Taza de Cátsup .</p>
                    <p> 1/2 Taza de Azúcar mascabado.</p>
                    <p> 2 Cucharadas de Salsa Tipo Inglesa. </p>
                    <p> 3 Cucharadas de Jugo MAGGI. </p>
                    <p> 1 Cucharada de Vinagre de manzana . </p>
                    <p> 1/2 Taza de Miel de abeja . </p>
                    <p> 1 Cucharadita de Chile chipotle molido .  </p>
                    <p> 1/4 Col morada fileteada.</p>
                    <p> 1/4 Col fileteada.</p>
                    <p> 1 Envase de Media Crema.</p>
                    <p> 1 Cucharada de Mayonesa .</p>
                    <p>Sal al gusto .</p>
                    <p> Pimienta negra molida .</p>
                    <p> 6 Panes .</p>

                    

<div className="container">
<div className="card text-white bg-success mb-3" >
<div className="card-body">
<h1><strong>Pasos</strong></h1>
                    <p><strong>Calienta</strong></p>
                    <p>
                    
    1.  Calienta el aceite y fríe la cebolla hasta que esté ligeramente transparente, agrega el pavo y mezcla.
 
</p>

<p><strong>Mezcla</strong></p>
<p>
2.  Para la salsa, mezcla la cátsup, el azúcar moscabada, la Salsa Tipo Inglesa, el Jugo MAGGI, el vinagre de manzana, la miel de abeja y el chile chipotle. Agrega al pavo deshebrado, mezcla y cocina por 5 minutos a fuego medio. 
     </p>
<p><strong>Sirve</strong></p>
<p>
3.  Para la ensalada de col, mezcla la col morada, la col, la Media Crema, la mayonesa, la sal y la pimienta. Sirve en cada uno de los panes un poco del pavo preparado y de la ensalada de col. Ofrece. 
</p>
</div>
</div>
</div>

                    

<div className="container">
<div className="card text-white bg-danger mb-3" >
<div className="card-body">
<h3><strong>Informacion nutricional</strong></h3>
<p> 677.5 kcal = 2,837kj /por porción </p>
<p><strong>Carbohidratos:</strong> 102.7 g <strong>Energía:</strong> 	677.5 kcal</p>  
<p><strong>Grasas:</strong>16.8 g <strong>Fibras:</strong> 4 g</p> 
<p><strong>Proteinas:</strong>   32 g <strong>Grasas saturadas:</strong> 6.8 g</p> 
<p><strong>Sodio:</strong>1438 mg<strong>Azucares:</strong>44.8 g</p> 
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