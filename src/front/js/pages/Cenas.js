import React, { useState, useEffect, useContext } from "react";
import { Link } from "react-router-dom";
import alambrechamp from "../../img/alambrechampi.jpg";
import salmon from "../../img/salmon.jpg";
import SardinaMx from "../../img/sardinas-la-mexicana.jpg";
import albondigaT from "../../img/albondigasTocino.jpg";

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
				<img src={alambrechamp} className="img-fluid rounded-circle" style={{maxWidth: "18rem", maxHeight: "9rem"}} />
			</p>
            <p className="card-text">Salmón con Mantequilla de Cilantro.</p>
            <Link to="/alambre">
            <a href="#" className="btn btn-secondary bg-success">Ver receta</a>
            </Link>
          </div>
        </div>
      </div>
      <div className="col-md-3">
        <div className="card bg-secondary text-light bg-success">
          <div className="card-body">
          <h5 className="card-title"><strong>Salmón con Mantequilla de Cilantro </strong></h5>
            <p>
				<img src={salmon} className="img-fluid rounded-circle" style={{maxWidth: "9rem", maxHeight: "20rem"}} />
			</p>
            <p className="card-text">Receta de Salmón con Mantequilla de Cilantro.</p>
            <Link to="/salmonMantequilla">
            <a href="#" className="btn btn-secondary bg-dark ">Ver recetas</a>
            </Link>
          </div>
        </div>
      </div>
      <div className="col-md-3">
        <div className="card bg-secondary text-light bg-dark">
          <div className="card-body">
          <h5 className="card-title"><strong>Sardina a la Mexicana</strong></h5>
            <p>
				<img src={SardinaMx} className="img-fluid rounded-circle" style={{maxWidth: "12rem", maxHeight: "11rem"}} />
			</p>
            <p className="card-text">Receta de Sardina a la Mexicana.</p>
            <Link to="/sardinamex">
            <a href="#" className="btn btn-secondary bg-success ">Ver recetas</a>
            </Link>
          </div>
        </div>
      </div>
      <div className="col-md-3">
        <div className="card bg-secondary text-light bg-success">
          <div className="card-body">
          <h5 className="card-title"><strong>Albondigas con tocino</strong></h5>
            <p>
				<img src={albondigaT} className="img-fluid rounded-circle" style={{maxWidth: "15rem", maxHeight: "15rem"}} />
			</p>
            <p className="card-text">Receta de albondigas con tocino.</p>
            <Link to="/albondigaToci">
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