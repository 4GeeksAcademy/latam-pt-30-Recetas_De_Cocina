import React, { useState, useEffect, useContext } from "react";
import { Link } from "react-router-dom";
import lun from "../../img/Lun.png";
import martes from "../../img/Martes.png";
import jueves from "../../img/Jueves.png";
import viernes from "../../img/viernes.png";
import sabado from "../../img/Sabado.png";
import Domingo from "../../img/Domingo.png";

import { Context } from "../store/appContext";

export const PlanSemanal = () => {
	const { store, actions } = useContext(Context);

	return (
		<div className="container-fluid">
			<div className="text-center mt-5">
			 <header className="text-center py-5">
             <h1><strong>Plan Semanal</strong></h1>
             </header>
		</div>

        <div class="card-group">
  <div class="card card border-success mb-3">


  <div class="card-header text-white bg-dark"><h4 class="card-title"><strong>Lunes</strong></h4></div>
  <p></p>
  <p></p>
  
    <div class="card-body  text-bg-dark">
    <img src={lun} className="mx-auto img-fluid rounded-circle" style={{maxWidth: "10rem", maxHeight: "15rem"}} />
    <p></p>
  <p></p>
      <p class="card-text"><strong>Desayuno, comida y cena del dia lunes.</strong></p>
      <Link to="/desayunos">
      <button class="btn btn-secondary bg-dark" type="submit"><i class="fa-regular fa-calendar"></i></button>
      </Link>
    </div>
  </div>
  <div class="card card border-success mb-3">
  <div class="card-header text-white bg-dark"><h4 class="card-title"><strong>Martes</strong></h4></div>
  <p></p>
  <p></p>
  

    <div class="card-body  text-bg-dark ">
    <img src={martes} className="mx-auto img-fluid rounded-circle" style={{maxWidth: "10rem", maxHeight: "13rem"}} />
    <p></p>
  <p></p>

      <p class="card-text"><strong>Desayuno, comida y cena del dia martes.</strong>.</p>
      <button class="btn btn-secondary bg-dark" type="submit"><i class="fa-regular fa-calendar"></i></button>
    </div>
  </div>


  <div class="card card border-success mb-3">
  <div class="card-header text-white bg-dark"><h4 class="card-title"><strong>Miercoles</strong></h4></div>
 
  <p></p>
  <p></p>
  
    <div class="card-body  text-bg-dark">
    <img src={martes} className="mx-auto img-fluid rounded-circle" style={{maxWidth: "10rem", maxHeight: "13rem"}} />
    <p></p>
    
      <p class="card-text"><strong>Desayuno, comida y cena del dia miercoles.</strong></p>
      <button class="btn btn-secondary bg-dark" type="submit"><i class="fa-regular fa-calendar"></i></button>
    </div>
  </div>


  <div class="card card border-success mb-3">
  <div class="card-header text-white bg-dark"><h4 class="card-title"><strong>Jueves</strong></h4></div>
  <p></p>
  <p></p>
  
    <div class="card-body  text-bg-dark">
    <img src={jueves} className="mx-auto img-fluid rounded-circle" style={{maxWidth: "10rem", maxHeight: "13rem"}} />
    <p></p>
      <p class="card-text"><strong>Desayuno, comida y cena del dia jueves.</strong></p>
      <button class="btn btn-secondary bg-dark" type="submit"><i class="fa-regular fa-calendar"></i></button>
    </div>
  </div>

  <div class="card card border-success mb-3">
  <div class="card-header text-white bg-dark"><h4 class="card-title"><strong>Viernes</strong></h4></div>
  <p></p>
  <p></p>
  
    <div class="card-body  text-bg-dark">
    <img src={viernes} className="mx-auto img-fluid rounded-circle" style={{maxWidth: "10rem", maxHeight: "13rem"}} />
    <p></p>
      <p class="card-text"><strong>Desayuno, comida y cena del dia viernes.</strong></p>
      <button class="btn btn-secondary bg-dark" type="submit"><i class="fa-regular fa-calendar"></i></button>
    </div>
  </div>

  <div class="card card border-success mb-3">
  <div class="card-header text-white bg-dark"><h4 class="card-title"><strong>Sabado</strong></h4></div>
  <p></p>
  <p></p>
  
    <div class="card-body  text-bg-dark">
    <img src={sabado} className="mx-auto img-fluid rounded-circle" style={{maxWidth: "10rem", maxHeight: "13rem"}} />
    <p></p>
      <p class="card-text"><strong>Desayuno, comida y cena del dia sabado.</strong></p>
      <button class="btn btn-secondary bg-dark" type="submit"><i class="fa-regular fa-calendar"></i></button>
    </div>
  </div>

  <div class="card card border-success mb-3">
  <div class="card-header text-white bg-dark"><h4 class="card-title"><strong>Domingo</strong></h4></div>
  <p></p>
  <p></p>
  
  <img src={Domingo} className="mx-auto img-fluid rounded-circle" style={{maxWidth: "10rem", maxHeight: "13rem"}} />
    <div class="card-body  text-bg-dark">
    <p></p>
      <p class="card-text"><strong>Desayuno, comida y cena del dia domingo.</strong></p>
      <button class="btn btn-secondary bg-dark" type="submit"><i class="fa-regular fa-calendar"></i></button>
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
