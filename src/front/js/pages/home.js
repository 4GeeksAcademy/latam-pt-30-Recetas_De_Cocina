import React, { useContext } from "react";
import { Link } from "react-router-dom";
import { Context } from "../store/appContext";
import recetasImageUrl from "../../img/recetas.jpeg";
import recetasImageUr2 from "../../img/recetas 2.jpeg";
import recetasImageUr3 from "../../img/recetas 3.jpg";
import recetasPostres from "../../img/postres.jpg";
import recetasDesayunos from "../../img/Desayunos.jpeg";
import recetasAlmuerzos from "../../img/almuerzos.jpg";
import calendario from "../../img/calendario.png";
import recetascena from "../../img/cena.jpg";
import formulario from "../../img/crearecets.jpg";
import favo from "../../img/favo.png";
import "../../styles/home.css";

export const Home = () => {
	const { store, actions } = useContext(Context);

	return (
		<div className=" container-fluid  text-center mt-5">
			 <header className="text-center py-5">
             <h1><strong>Recetas de cocina</strong></h1>
             </header>
			 <div class="row align-items-center">
			 <div className="col">
								<img src={recetasImageUr2} className="img-fluid rounded-circle" style={{maxWidth: "20rem", maxHeight: "20rem"}}/>
                <h3><strong>Deliciosas</strong></h3>
							</div>
			<div className="col">
			
				<img src={recetasImageUrl} className="img-fluid rounded-circle" style={{maxWidth: "20rem", maxHeight: "20rem"}} />
        <h3><strong>Recetas</strong></h3>
		
			</div>
			<div className="col">
			
				<img src={recetasImageUr3} className="img-fluid rounded-circle" style={{maxWidth: "20rem", maxHeight: "20rem"}} />
        <h3><strong>Culinarias</strong></h3>
			
			</div>

      <p></p>
      <p></p>

      <div class="card-group">
  <div class="card card border-success mb-3">
  <div class="card-header border-success text-success"><h4 class="card-title"><strong>Plan semanal</strong></h4></div>
  <p></p>
  <img src={calendario} class="mx-auto" alt="Card image cap" style={{maxWidth: "9rem", maxHeight: "9rem"}} />
  <p></p>
    <div class="card-body text-success">
      <p class="card-text"><strong>Aqui podras crear tu plan seamanal para tus comidas dependiedo de tus gustos, dieta y alimentación nutricional.</strong></p>
      <Link to="/plansemanal">
      <button class="btn btn-outline-success my-2 my-sm-0" type="submit"><i class="fa-regular fa-calendar"></i></button>
      </Link>
    </div>
  </div>
  <div class="card card border-success mb-3">
  <div class="card-header border-success text-success"><h4 class="card-title"><strong>Crea tu receta</strong></h4></div>
  <img src={formulario} class="mx-auto" alt="Card image cap" style={{maxWidth: "10rem", maxHeight: "10rem"}} />
    <div class="card-body text-success ">
    <p></p>
      <p class="card-text"><strong>Aqui podras crear y aportar tus propias recetas culinarias, ya sean desayunos, comidas o cenas, con los ingrdientes que mas te gusten.</strong>.</p>
      <Link to="/creareceta">
      <button class="btn btn-outline-success my-2 my-sm-0" type="submit"><i class="fa-solid fa-pen-to-square"></i></button>
      </Link>
    </div>
  </div>
  <div class="card card border-success mb-3">
  <div class="card-header border-success text-success"><h4 class="card-title"><strong>Recetas favoritas</strong></h4></div>
  <p></p>
  <img src={favo} class="mx-auto" alt="Card image cap" style={{maxWidth: "10rem", maxHeight: "10rem"}} />
    <div class="card-body text-success">
    <p></p>
      <p class="card-text"><strong>Aqui podras entrar y visitar tus recetas favoritas cada vez que lo desees.</strong></p>
      <Link to="/recetafavorita">
      <button class="btn btn-outline-success my-2 my-sm-0" type="submit"><i class="fa-solid fa-heart"></i></button>
      </Link>
    </div>
  </div>
</div>

 <p></p>
      <p></p>


			</div>
			<div className="container my-5">
    <div className="row">
      <div className="col-md-3">
        <div className="card bg-secondary text-light bg-dark">
          <div className="card-body">
            <h5 className="card-title"><strong>Postres</strong></h5>
            <p>
				<img src={recetasPostres} className="img-fluid rounded-circle" style={{maxWidth: "17rem", maxHeight: "17rem"}} />
			</p>
            <p className="card-text">Deliciosos postres para cada ocasión.</p>
            <Link to="/postres">
            <a href="#" className="btn btn-secondary bg-success">Ver recetas</a>
            </Link>
          </div>
        </div>
      </div>
      <div className="col-md-3">
        <div className="card bg-secondary text-light bg-success">
          <div className="card-body">
          <h5 className="card-title"><strong>Desayunos</strong></h5>
            <p>
				<img src={recetasDesayunos} className="img-fluid rounded-circle" style={{maxWidth: "9.5rem", maxHeight: "10rem"}} />
			</p>
            <p className="card-text">Comienza tu día con energía.</p>
            <Link to="/desayunos">
            <a href="#" className="btn btn-secondary bg-dark ">Ver recetas</a>
            </Link>
          </div>
        </div>
      </div>
      <div className="col-md-3">
        <div className="card bg-secondary text-light bg-dark">
          <div className="card-body">
          <h5 className="card-title"><strong>Comidas</strong></h5>
            <p>
				<img src={recetasAlmuerzos} className="img-fluid rounded-circle" style={{maxWidth: "12.5rem", maxHeight: "13rem"}} />
			</p>
            <p className="card-text">Recetas para una comida completa.</p>
            <Link to="/comidas">
            <a href="#" className="btn btn-secondary bg-success">Ver recetas</a>
            </Link>
          </div>
        </div>
      </div>
      <div className="col-md-3">
        <div className="card bg-secondary text-light bg-success">
          <div className="card-body">
          <h5 className="card-title"><strong>Cenas</strong></h5>
            <p>
				<img src={recetascena} className="img-fluid rounded-circle" style={{maxWidth: "14rem", maxHeight: "14.5rem"}} />
			</p>
            <p className="card-text">Recetas de cenas deliciosas.</p>
            <Link to="/cenas">
            <a href="#" className="btn btn-secondary bg-dark">Ver recetas</a>
            </Link>
          </div>
        </div>
      </div>
    </div>
  </div>
			
  <Link to="/demo">
				<button className="btn btn-secondary bg-dark">Ver mas</button>
			</Link>
			
		</div>
	);
};
