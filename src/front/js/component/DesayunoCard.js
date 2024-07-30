import React, { useState, useEffect, useContext } from "react";
import { Link } from "react-router-dom";
import recetasSnacks from "../../img/Snacks.jpg";
import recetasPizzas from "../../img/pizzas.png";
import recetasFastfood from "../../img/fastfood.jpg";
import recetasCocteleria from "../../img/cocteleria.jpg";

import { Context } from "../store/appContext";

export const DesayunoCard = () => {
	const { store, actions } = useContext(Context);

	return (
		<div className="container">
			<div className="text-center mt-5">
			 <header className="text-center py-5">
             <h1><strong>Mas recetas de cocina</strong></h1>
             </header>
			<div className="container my-5">
    <div className="row">
      <div className="col-md-3">
        <div className="card bg-secondary text-light bg-success" >
          <div className="card-body">
            <h5 className="card-title"><strong>Snacks</strong></h5>
            <p>
				<img src={recetasSnacks} className="img-fluid rounded-circle" style={{maxWidth: "17rem", maxHeight: "17rem"}} />
			</p>
            <p className="card-text">Deliciosos Snacks para botanear.</p>
            <Link to="/snacks">
            <a href="#" className="btn btn-secondary bg-dark">Ver recetas</a>
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
