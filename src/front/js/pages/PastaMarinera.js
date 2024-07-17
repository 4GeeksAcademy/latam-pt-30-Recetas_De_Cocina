import React, { useContext } from "react";
import { Link } from "react-router-dom";
import { Context } from "../store/appContext";
import pastamarinera from "../../img/pastamarinara.png";


export const PastaMarinera = () => {
	const { store, actions } = useContext(Context);

	return (
		<div className="container-fluid   d-flex flex-column justify-content-center" style={{ minHeight: "100vh" }}>
                    <div className="row border-bottom border-2 pb-4 border-danger py-5">
                        <div className="col-md-6">
                        <img src={pastamarinera} className="img-fluid  rounded-circle" style={{maxWidth: "50rem", maxHeight: "50rem"}}/>
                        </div>
                        <div className="col-md-6 text-center d-flex flex-column justify-content-center">
                    <h1><strong>Pasta Marinera</strong></h1>
                    <p><strong>Ingredientes</strong></p>
                    
                    <p>5 Piezas Jitomate y sin piel.</p>
                    <p>8 Piezas Chile guajillo sin semilla, remojado en agua caliente.</p>
                    <p>1 1/2 Taza Puré de tomate. </p>
                    <p>1 1/2 Taza Agua .</p>
                    <p> 2 Cucharadas Aceite de maíz.</p>
                    <p> 1/2 Cucharada Hierbas finas. </p>
                    <p> 1 Ramita Perejil fresco. </p>
                    <p>1 Cucharada Romero fresco . </p>
                    <p>500 Gramos Camarón congelado limpios. </p>
                    <p>400 Gramos Pasta spaquetti.   </p>
                    <p>2 Cucharadas Mantequilla.   </p>
                    <p>1 Cucharada de Sal . </p>
                    <p>2 Cubos Concentrado de Tomate con Pollo . </p>
                    <p>1 Cucharada de Cebolla en polvo . </p>
                    <p>6 Tazas Agua. </p>
                    


<div className="container">
<div className="card text-white bg-success mb-3" >
<div className="card-body">
<h1><strong>Pasos</strong></h1>
                    <p><strong>Licúa</strong></p>
                    <p>
    1. Licúa los tomates rojos con los chiles, el puré de tomate, los cubos de concentrado de tomate con pollo  la sal con cebolla en polvo y el agua. 
    Calienta el aceite y fríe la salsa; cocina por 10 minutos. 
    Incorpora las hierbas finas, la albahaca y el romero; continúa la cocción a fuego bajo por 15 minutos más. 
    Agrega la mitad de los camarones a la salsa y reserva. 
</p>
<p><strong>Calienta</strong></p>
<p>2. Mientras tanto, en una cacerola calienta el agua con la sal y, cuando rompa el hervor, cocina el espagueti hasta que esté “al dente” o firme; escúrrelo en un colador y reserva. .</p>
<p><strong>Cocina</strong></p>
<p>
    3. En una sartén calienta la mantequilla y saltea el espagueti con un poco de salsa y los camarones restantes. sirve bañando con la salsa caliente y espolvorea con perejil deshidratado. 
</p>
</div>
</div>
</div>

                    

<div className="container">
<div className="card text-white bg-danger mb-3" >
<div className="card-body">
<h3><strong>Informacion nutricional</strong></h3>
<p>425 kcal = 1,778kj /por porción</p>
<p><strong>Carbohidratos:</strong>  60.8 g<strong>Energía:</strong>  425 kcal</p>  
<p><strong>Grasas:</strong>    10.4 g  <strong>Fibras:</strong>   5 g</p> 
<p><strong>Proteinas:</strong>  22.1 g  <strong>Grasas saturadas:</strong>     3.4 g </p> 
<p><strong>Sodio:</strong>   1727.3 mg  <strong>Azucares:</strong>    7.2 g </p> 
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