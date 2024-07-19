import React, { useState, useEffect, useContext } from "react";
import { Link } from "react-router-dom";
import pizzaburguer from "../../img/pizzaburger.jpg";
import hamburguesatocino from "../../img/hamburguesatocino.jpg";
import tortapavo from "../../img/tortapavo.jpg";
import botanacarnes from "../../img/botana-carnes.jpg";

import { Context } from "../store/appContext";

export const FastFood = () => {
	const { store, actions } = useContext(Context);

	return (
		<div className="container">
			<div className="text-center mt-5">
			 <header className="text-center py-5">
             <h1><strong>Fast Food</strong></h1>
             </header>
			<div className="container my-5">
    <div className="row">
      <div className="col-md-3">
        <div className="card bg-secondary text-light bg-dark" >
          <div className="card-body">
            <h5 className="card-title"><strong>Pizza Burguer</strong></h5>
            <p>
				<img src={pizzaburguer} className="img-fluid rounded-circle" style={{maxWidth: "15rem", maxHeight: "15rem"}} />
			</p>
            <p className="card-text">Receta de Pizza Burguer.</p>
            <Link to="/pizzaburguer">
            <a href="#" className="btn btn-secondary bg-success">Ver receta</a>
            </Link>
          </div>
        </div>
      </div>
      <div className="col-md-3">
        <div className="card bg-secondary text-light bg-success">
          <div className="card-body">
          <h5 className="card-title"><strong>Hamburguesa con tocino</strong></h5>
            <p>
				<img src={hamburguesatocino} className="img-fluid rounded-circle" style={{maxWidth: "13rem", maxHeight: "13rem"}} />
			</p>
            <p className="card-text">Receta de hamburguesa con tocino.</p>
            <Link to="/hamburguesatocino">
            <a href="#" className="btn btn-secondary bg-dark ">Ver recetas</a>
            </Link>
          </div>
        </div>
      </div>
      <div className="col-md-3">
        <div className="card bg-secondary text-light bg-dark">
          <div className="card-body">
          <h5 className="card-title"><strong>Torta de Pavo</strong></h5>
            <p>
				<img src={tortapavo} className="img-fluid rounded-circle" style={{maxWidth: "13rem", maxHeight: "10.5rem"}} />
			</p>
            <p className="card-text">Receta de torta de pavo.</p>
            <Link to="/tortapavo">
            <a href="#" className="btn btn-secondary bg-success ">Ver recetas</a>
            </Link>
          </div>
        </div>
      </div>
      <div className="col-md-3">
        <div className="card bg-secondary text-light bg-success">
          <div className="card-body">
          <h5 className="card-title"><strong>Botana de Carnes</strong></h5>
            <p>
				<img src={botanacarnes} className="img-fluid rounded-circle" style={{maxWidth: "13rem", maxHeight: "13rem"}} />
			</p>
            <p className="card-text">Receta de Botana de Carnes.</p>
            <Link to="/botanacarnes">
            <a href="#" className="btn btn-secondary bg-dark ">Ver recetas</a>
            </Link>
          </div>
        </div>
      </div>
    </div>
  </div>
			
			
		</div>
			<br />
			<Link to="/demo">
				<button className="btn btn-secondary bg-dark">Ver mas</button>
			</Link>
		</div>
	);
};