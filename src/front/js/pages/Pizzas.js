import React, { useState, useEffect, useContext } from "react";
import { Link } from "react-router-dom";
import pizzahawa from "../../img/pizzahawaiana.jpg";
import pizzamarga from "../../img/Pizzamargarita.jpg";
import alitasman from "../../img/alitasmango.jpg";
import botanacarnes from "../../img/botana-carnes.jpg";

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
            <Link to="/palomitaschoco">
            <a href="#" className="btn btn-secondary bg-dark ">Ver recetas</a>
            </Link>
          </div>
        </div>
      </div>
      <div className="col-md-3">
        <div className="card bg-secondary text-light bg-dark">
          <div className="card-body">
          <h5 className="card-title"><strong>Alitas con salsa de mango</strong></h5>
            <p>
				<img src={alitasman} className="img-fluid rounded-circle" style={{maxWidth: "13rem", maxHeight: "10.5rem"}} />
			</p>
            <p className="card-text">Receta de Alitas con salsa de mango.</p>
            <Link to="/Alitasmango">
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
