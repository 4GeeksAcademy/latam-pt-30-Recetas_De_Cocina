import React, { useContext } from "react";
import { Link } from "react-router-dom";
import { Context } from "../store/appContext";
import papagratinada from "../../img/PapaGratinada.jpg";


export const PapaGratinada = () => {
	const { store, actions } = useContext(Context);

	return (
		<div className="container-fluid   d-flex flex-column justify-content-center" style={{ minHeight: "100vh" }}>
                    <div className="row border-bottom border-2 pb-4 border-danger py-5">
                        <div className="col-md-6">
                        <img src={papagratinada} className="img-fluid  rounded-circle" style={{maxWidth: "50rem", maxHeight: "50rem"}}/>
                        </div>
                        <div className="col-md-6 text-center d-flex flex-column justify-content-center">
                    <h1><strong>Papa gratinada al pastor</strong></h1>
                    <p><strong>Ingredientes</strong></p>
                    
                    <p>1 Cucharada de Aceite de maíz .</p>
                    <p>1/2 Cebolla fileteada  .</p>
                    <p>1 Cucharada de Ajo picado finamente . </p>
                    <p>500 Gramos de Milanesa de cerdo cortada en cubos.</p>
                    <p> 3 Chiles guajillo sin semillas y remojados en agua caliente.</p>
                    <p> 1 Chile chipotle adobado  . </p>
                    <p> 1/4 Taza de Vinagre de manzana  . </p>
                    <p>3/4 Taza de Agua . </p>
                    <p>1 Cubo de Concentrado de Tomate con Pollo </p>
                    <p>4 Papas medianas.   </p>
                    <p>4 Cucharadas de Aceite de maíz.  </p>
                    <p>4 Cucharadas de Jugo maggi. </p>
                    <p>4 Cucharadas de Salsa Tipo Inglesa. </p>
                    <p>1/2 Paquete de Queso tipo manchego rallado (100 g) . </p>
                    <p>1 Taza de Piña miel cortada en cubos . </p>
                    <p>1/4 Cucharada de Cebolla picada finamente . </p>
                    <p>5 Ramitas de Cilantro fresco desinfectado y picado finamente . </p>


<div className="container">
<div className="card text-white bg-success mb-3" >
<div className="card-body">
<h1><strong>Pasos</strong></h1>
                    <p><strong>Cocina</strong></p>
                    <p>
                    1.  Horno precalentado a 180 °C.
2.  Para el pastor, calienta una cucharada de aceite y fríe la cebolla hasta que este transparente, añade el ajo, la milanesa de cerdo y cocina hasta que dore ligeramente. Licúa los chiles, el vinagre, el agua y el Concentrado de Tomate con Pollo , vierte lo que licuaste a la mezcla anterior y cocina por 5 minutos o hasta que espese ligeramente.

</p>
<p><strong>Hornea</strong></p>
<p>3.  Coloca las papas de manera individual en papel aluminio, añade a cada papa 1 cucharada de aceite, 1 cucharada de Jugo MAGGI® y 1 cucharada de Salsa Tipo Inglesa , envuélvelas y hornéalas a 180 °C de 45 a 50 minutos. </p>
<p><strong>Sirve</strong></p>
<p>
4.  Retira del horno y con ayuda de un tenedor forma un hueco al centro de las papas, rellénalas con un poco de pastor y queso tipo manchego; hornéalas hasta que el queso gratine. Sirve y decora con la piña, la cebolla y el cilantro. Ofrece. 
</p>
</div>
</div>
</div>

                    

<div className="container">
<div className="card text-white bg-danger mb-3" >
<div className="card-body">
<h3><strong>Informacion nutricional</strong></h3>
<p> 638.6 kcal = 2,674kj /por porción
</p>
<p><strong>Carbohidratos:</strong>  24.1 g <strong>Energía:</strong>   638.6 kcal</p>  
<p><strong>Grasas:</strong>    49.2 g <strong>Fibras:</strong>   3.2 g</p> 
<p><strong>Proteinas:</strong> 25.3 g  <strong>Grasas saturadas:</strong>    17 g </p> 
<p><strong>Sodio:</strong>  2597.8 mg   <strong>Azucares:</strong>    8.9 g </p> 
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