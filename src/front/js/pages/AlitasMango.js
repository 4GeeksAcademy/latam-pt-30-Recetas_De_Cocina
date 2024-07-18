import React, { useContext } from "react";
import { Link } from "react-router-dom";
import { Context } from "../store/appContext";
import alitasman from "../../img/alitasmango.jpg";



export const AlitasSalsaMango = () => {
	const { store, actions } = useContext(Context);

	return (
		<div className="container-fluid   d-flex flex-column justify-content-center" style={{ minHeight: "100vh" }}>
                    <div className="row border-bottom border-2 pb-4 border-danger py-5">
                        <div className="col-md-6">
                        <img src={alitasman} className="img-fluid  rounded-circle" style={{maxWidth: "50rem", maxHeight: "50rem"}}/>
                        </div>
                        <div className="col-md-6 text-center d-flex flex-column justify-content-center">
                    <h1><strong>Alitas con Salsa de Mango</strong></h1>
                    <p><strong>Ingredientes</strong></p>
                    
                    <p>1 Kg de alitas de pollo limpias.</p>
                    <p>1/2 Taza de aceite de oliva  .</p>
                    <p>3 Cucharadas de ajo picado finamente. </p>
                    <p>2 Cucharadas de romero fresco. </p>
                    <p>2 Cucharadas de paprika en polvo. </p>
                    <p>1 Cucharada de tomillo seco, molido . </p>
                    <p>1 Cucharada de aceite vegetal. </p>
                    <p>1 1/2 Piezas de mangos. </p>
                    <p>1 Cucharada de canela molida. </p>
                    <p>2 Cucharadas de pimienta negra molida. </p>
                    <p>1/2 Cucharadita de nuez moscada molida . </p>
                    <p>1 Cucharadita de jengibre, picado . </p>
                    <p>1/2 Taza de azúcar . </p>
                    <p>1 Limón, su jugo. </p>
                    <p>5 Cucharadas de salsa de Soya. </p>
                    <p>Chile serrano. </p>
                    <p>5 Ramitas de cilantro desinfectado y deshojado. </p>
                    
                    <div className="container">
<div className="card text-white bg-success mb-3" >
<div className="card-body">

<h1><strong>Pasos</strong></h1>


                    <p>
                    
1.  Horno precalentado a 180 °C. 
</p>


<p>
2.  Para la marinada, mezcla las alitas, el aceite de oliva, el ajo, el romero, la paprika y el tomillo; cubre con plástico adherente y marina en refrigeración por 30 minutos. 
</p>

<p>
3.  Para la salsa de mango, calienta el aceite, agrega el mango, la canela, la pimienta, la nuez moscada, el jengibre, el azúcar, el jugo de limón y la Salsa de Soya; cocina hasta que espese ligeramente moviendo constantemente para evitar que se pegue. 
</p>

<p>
4.  Coloca las alitas en una charola con papel encerado y hornea a 180 °C por 35 minutos, con ayuda de unas pinzas, voltéalas y hornéalas por 25 minutos más. Barnízalas con un poco de la salsa de mango y hornéalas por 10 minutos; retira del horno. Sirve las alitas con la salsa de mango restante, decora con las rodajas de chile y el cilantro. Ofrece. 
</p>

</div>
</div>
</div>

<div className="container">
<div className="card text-white bg-danger mb-3" >
<div className="card-body">
<h3><strong>Informacion nutricional</strong></h3>
<p> 315.2 kcal = 1,318kj /por porción
</p>
<p><strong>Carbohidratos:</strong>   14.9 g <strong>Energía:</strong>   315.2 kcal</p>  
<p><strong>Grasas:</strong>   22 g <strong>Proteína:</strong>    15.3 g  </p> 
<p><strong>Fibra:</strong>   1.9 g <strong>Azucares:</strong>  11.1 g</p> 
<p><strong>Grasas saturadas:</strong>   4.5 g <strong>Sodio:</strong>   77 mg</p>
</div>
</div>
</div>

<p></p>


<Link to="/snacks">
				<button className="btn btn-secondary bg-dark">Regresar</button>
			</Link>

                </div>
                </div>
                </div>
	);
};