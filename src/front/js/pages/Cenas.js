import React, { useState, useEffect, useContext } from "react";
import { Link } from "react-router-dom";
import alambrechamp from "../../img/AlambreChamp.jpg";
import lasaña from "../../img/Lasaña.jpg";
import pastamarinera from "../../img/pastamarinara.png";
import papagratinada from "../../img/PapaGratinada.jpg";

import { Context } from "../store/appContext";

export const Cenas = () => {
	const { store, actions } = useContext(Context);

	return (
		<div className="container">
			<div className="text-center mt-5">
			 <header className="text-center py-5">
             <h1><strong>Cenas</strong></h1>
             </header>
			<div className="container my-5">
    <div className="row">
      <div className="col-md-3">
        <div className="card bg-secondary text-light bg-dark" >
          <div className="card-body">
            <h5 className="card-title"><strong>Alambre de champiñones</strong></h5>
            <p>
				<img src={alambrechamp} className="img-fluid rounded-circle" style={{maxWidth: "16rem", maxHeight: "15rem"}} />
			</p>
            <p className="card-text">Receta de Alambre de champiñones.</p>
            <Link to="/alambre">
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
            <Link to="/lasagnaC">
            <a href="#" className="btn btn-secondary bg-dark ">Ver recetas</a>
            </Link>
          </div>
        </div>
      </div>
      <div className="col-md-3">
        <div className="card bg-secondary text-light bg-dark">
          <div className="card-body">
          <h5 className="card-title"><strong>Pasta Marinera</strong></h5>
            <p>
				<img src={pastamarinera} className="img-fluid rounded-circle" style={{maxWidth: "12rem", maxHeight: "11rem"}} />
			</p>
            <p className="card-text">Receta de Pasta Marinera.</p>
            <Link to="/PastaM">
            <a href="#" className="btn btn-secondary bg-success ">Ver recetas</a>
            </Link>
          </div>
        </div>
      </div>
      <div className="col-md-3">
        <div className="card bg-secondary text-light bg-success">
          <div className="card-body">
          <h5 className="card-title"><strong>Papa gratinada al pastor</strong></h5>
            <p>
				<img src={papagratinada} className="img-fluid rounded-circle" style={{maxWidth: "15rem", maxHeight: "15rem"}} />
			</p>
            <p className="card-text">Receta de papa gratinada.</p>
            <Link to="/Papagratinada">
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