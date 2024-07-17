import React, { useState, useEffect, useContext } from "react";
import { Link } from "react-router-dom";
import enchiladas from "../../img/enchiladas.jpg";
import lasaña from "../../img/Lasaña.jpg";
import Omelette from "../../img/omelette.jpg";
import PanFrances from "../../img/pan frances.jpg";

import { Context } from "../store/appContext";

export const Comidas = () => {
	const { store, actions } = useContext(Context);

	return (
		<div className="container">
			<div className="text-center mt-5">
			 <header className="text-center py-5">
             <h1><strong>Comidas</strong></h1>
             </header>
			<div className="container my-5">
    <div className="row">
      <div className="col-md-3">
        <div className="card bg-secondary text-light bg-dark" >
          <div className="card-body">
            <h5 className="card-title"><strong>Enchiladas suizas</strong></h5>
            <p>
				<img src={ enchiladas} className="img-fluid rounded-circle" style={{maxWidth: "15rem", maxHeight: "15rem"}} />
			</p>
            <p className="card-text">Receta de Enchiladas suizas.</p>
            <Link to="/enchiladas">
            <a href="#" className="btn btn-secondary bg-success">Ver receta</a>
            </Link>
          </div>
        </div>
      </div>
      <div className="col-md-3">
        <div className="card bg-secondary text-light bg-success">
          <div className="card-body">
          <h5 className="card-title"><strong>Lasaña con champiñones</strong></h5>
            <p>
				<img src={lasaña} className="img-fluid rounded-circle" style={{maxWidth: "10rem", maxHeight: "10rem"}} />
			</p>
            <p className="card-text">Receta de Lasaña con champiñones.</p>
            <Link to="/Lasaña">
            <a href="#" className="btn btn-secondary bg-dark ">Ver recetas</a>
            </Link>
          </div>
        </div>
      </div>
      <div className="col-md-3">
        <div className="card bg-secondary text-light bg-dark">
          <div className="card-body">
          <h5 className="card-title"><strong>Omelette</strong></h5>
            <p>
				<img src={Omelette} className="img-fluid rounded-circle" style={{maxWidth: "15rem", maxHeight: "15rem"}} />
			</p>
            <p className="card-text">Receta de comida Omelette.</p>
            <Link to="/Omelette">
            <a href="#" className="btn btn-secondary bg-success ">Ver recetas</a>
            </Link>
          </div>
        </div>
      </div>
      <div className="col-md-3">
        <div className="card bg-secondary text-light bg-success">
          <div className="card-body">
          <h5 className="card-title"><strong>Pan Francés</strong></h5>
            <p>
				<img src={PanFrances} className="img-fluid rounded-circle" style={{maxWidth: "15rem", maxHeight: "15rem"}} />
			</p>
            <p className="card-text">Receta de pan Francés.</p>
            <Link to="/Panfrances">
            <a href="#" className="btn btn-secondary bg-dark ">Ver recetas</a>
            </Link>
          </div>
        </div>
      </div>
    </div>
  </div>
			
			
		</div>
			<br />
			<Link to="/">
				<button className="btn btn-secondary bg-dark">Ver mas</button>
			</Link>
		</div>
	);
};