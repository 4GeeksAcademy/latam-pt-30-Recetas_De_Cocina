import React, { useState, useEffect, useContext } from "react";
import { Link } from "react-router-dom";
import pizzahawa from "../../img/pizzahawaiana.jpg";
import pizzamarga from "../../img/Pizzamargarita.jpg";
import pizzachicago from "../../img/pizzachicago.jpg";
import pizzaparri from "../../img/pizzaparrillera.jpg";

import { Context } from "../store/appContext";

export const Pizzas = () => {
	const { store, actions } = useContext(Context);

	return (
		<div className="container">
			<div className="text-center mt-5">
			 <header className="text-center py-5">
             <h1><strong>Pizzas</strong></h1>
             </header>
			<div className="container my-5">
    <div className="row">
      <div className="col-md-3">
        <div className="card bg-secondary text-light bg-dark" >
          <div className="card-body">
            <h5 className="card-title"><strong>Pizza Hawaiana</strong></h5>
            <p>
				<img src={pizzahawa} className="img-fluid rounded-circle" style={{maxWidth: "15rem", maxHeight: "15rem"}} />
			</p>
            <p className="card-text">Receta de Pizza Hawaina.</p>
            <Link to="/pizzahawaiana">
            <a href="#" className="btn btn-secondary bg-success">Ver receta</a>
            </Link>
          </div>
        </div>
      </div>
      <div className="col-md-3">
        <div className="card bg-secondary text-light bg-success">
          <div className="card-body">
          <h5 className="card-title"><strong>Pizza Margarita</strong></h5>
            <p>
				<img src={pizzamarga} className="img-fluid rounded-circle" style={{maxWidth: "15rem", maxHeight: "15rem"}} />
			</p>
            <p className="card-text">Receta de Pizza Margarita.</p>
            <Link to="/pizzamargarita">
            <a href="#" className="btn btn-secondary bg-dark ">Ver recetas</a>
            </Link>
          </div>
        </div>
      </div>
      <div className="col-md-3">
        <div className="card bg-secondary text-light bg-dark">
          <div className="card-body">
          <h5 className="card-title"><strong>Pizza Chicago</strong></h5>
            <p>
				<img src={pizzachicago} className="img-fluid rounded-circle" style={{maxWidth: "15rem", maxHeight: "15rem"}} />
			</p>
            <p className="card-text">Receta de Pizza Chicago.</p>
            <Link to="/pizzachicago">
            <a href="#" className="btn btn-secondary bg-success ">Ver recetas</a>
            </Link>
          </div>
        </div>
      </div>
      <div className="col-md-3">
        <div className="card bg-secondary text-light bg-success">
          <div className="card-body">
          <h5 className="card-title"><strong>Pizza Prrillera</strong></h5>
            <p>
				<img src={pizzaparri} className="img-fluid rounded-circle" style={{maxWidth: "14rem", maxHeight: "14rem"}} />
			</p>
            <p className="card-text">Receta de Pizza Parrillera.</p>
            <Link to="/pizzaparrillera">
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
