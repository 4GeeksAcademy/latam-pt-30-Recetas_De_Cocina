import React, { useState, useEffect, useContext } from "react";
import { Link } from "react-router-dom";


import { Context } from "../store/appContext";

export const Miercoles = () => {
	const { store, actions } = useContext(Context);

	return (
		<div className="container-fluid" >
			<div className="text-center mt-5">
			 <header className="text-center py-5">
             <h1><strong>Miercoles</strong></h1>
             </header>
		</div>

        <div className="row justify-content-md-center">
        <div className="col-3">
        <div className="card"  >
        
  <div className="card-body">
    <h5 className="card-title"><strong>Desayuno</strong></h5>
    <p className="card-text">Dlicioso desayuno de este día.</p>
    <a href="#" className="btn btn-success bg-dark"><i className="fa-solid fa-plus"></i></a>
  </div>
  </div>
  </div>
</div>

<div className="row justify-content-md-center">
        <div className="col-3">
        <div className="card"  >
        
  <div className="card-body">
    <h5 className="card-title"><strong>Comida</strong></h5>
    <p className="card-text">Deliciosa comida del día.</p>
    <a href="#" className="btn btn-success bg-dark"><i className="fa-solid fa-plus"></i></a>
  </div>
  </div>
  </div>
</div>

<div className="row justify-content-md-center">
        <div className="col-3">
        <div className="card"  >
        
  <div className="card-body">
    <h5 className="card-title"><strong>Cena</strong></h5>
    <p className="card-text">Deliciosa cena del día.</p>
    <a href="#" className="btn btn-success bg-dark"><i className="fa-solid fa-plus"></i></a>
  </div>
  </div>
  </div>
</div>


        
			<br />
			<Link to="/plansemanal">
				<button className="btn btn-secondary bg-dark">Regresar</button>
			</Link>
		</div>
        
	);
};
