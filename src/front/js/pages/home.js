import React, { useContext } from "react";
import { Context } from "../store/appContext";
import recetasImageUrl from "../../img/recetas.jpeg";
import recetasImageUr2 from "../../img/recetas 2.jpeg";
import recetasImageUr3 from "../../img/recetas 3.jpg";
import "../../styles/home.css";

export const Home = () => {
	const { store, actions } = useContext(Context);

	return (

		<div className="text-center mt-5">
			 <header className="text-center py-5">
             <h1><strong>Recetas de cocina</strong></h1>
             </header>
			 <div class="row align-items-center">
			 <div className="col">
								<img src={recetasImageUr2} style={{maxWidth: "20rem", maxHeight: "20rem"}}/>
							</div>
			<div className="col">
			<p>
				<img src={recetasImageUrl} style={{maxWidth: "20rem", maxHeight: "20rem"}} />
			</p>
			</div>
			<div className="col">
			<p>
				<img src={recetasImageUr3} style={{maxWidth: "20rem", maxHeight: "20rem"}} />
			</p>
			</div>
			</div>
			<div className="container my-5">
    <div className="row">
      <div className="col-md-3">
        <div className="card">
          <div className="card-body">
            <h5 className="card-title">Postres</h5>
            <p className="card-text">Deliciosos postres para cada ocasión.</p>
            <a href="#" className="btn btn-secondary bg-dark">Ver recetas</a>
          </div>
        </div>
      </div>
      <div className="col-md-3">
        <div className="card">
          <div className="card-body">
            <h5 className="card-title">Desayunos</h5>
            <p className="card-text">Comienza tu día con energía.</p>
            <a href="#" className="btn btn-secondary bg-dark ">Ver recetas</a>
          </div>
        </div>
      </div>
      <div className="col-md-3">
        <div className="card">
          <div className="card-body">
            <h5 className="card-title">Almuerzos</h5>
            <p className="card-text">Recetas para una comida completa.</p>
            <a href="#" className="btn btn-secondary bg-dark ">Ver recetas</a>
          </div>
        </div>
      </div>
      <div className="col-md-3">
        <div className="card">
          <div className="card-body">
            <h5 className="card-title">Recetas Keto</h5>
            <p className="card-text">Recetas bajas en carbohidratos.</p>
            <a href="#" className="btn btn-secondary bg-dark">Ver recetas</a>
          </div>
        </div>
      </div>
    </div>
  </div>
			
			
		</div>
	);
};
