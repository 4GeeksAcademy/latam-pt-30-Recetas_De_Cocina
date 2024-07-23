import React, { useState, useEffect, useContext } from "react";
import { Link } from "react-router-dom";


import { Context } from "../store/appContext";

export const Domingo = () => {
	const { store, actions } = useContext(Context);

	return (
		<div className="container-fluid" >
			<div className="text-center mt-5">
			 <header className="text-center py-5">
             <h1><strong>Domingo</strong></h1>
             </header>
		</div>

        <div class="row justify-content-md-center">
        <div class="col-3">
        <div class="card"  >
        
  <div class="card-body">
    <h5 class="card-title"><strong>Desayuno</strong></h5>
    <p class="card-text">Dlicioso desayuno de este día.</p>
    <a href="#" class="btn btn-success bg-dark"><i class="fa-solid fa-plus"></i></a>
  </div>
  </div>
  </div>
</div>

<div class="row justify-content-md-center">
        <div class="col-3">
        <div class="card"  >
        
  <div class="card-body">
    <h5 class="card-title"><strong>Comida</strong></h5>
    <p class="card-text">Deliciosa comida del día.</p>
    <a href="#" class="btn btn-success bg-dark"><i class="fa-solid fa-plus"></i></a>
  </div>
  </div>
  </div>
</div>

<div class="row justify-content-md-center">
        <div class="col-3">
        <div class="card"  >
        
  <div class="card-body">
    <h5 class="card-title"><strong>Cena</strong></h5>
    <p class="card-text">Deliciosa cena del día.</p>
    <a href="#" class="btn btn-success bg-dark"><i class="fa-solid fa-plus"></i></a>
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
