import React, { useState, useEffect, useContext } from "react";
import { Link } from "react-router-dom";
import FlanNapolitano from "../../img/FlanNapolitano.jpg";
import carlota from "../../img/carlota.jpg";
import brownie from "../../img/brownie.jpg";
import Arrozconleche from "../../img/Arrozconleche.jpg";
import tresleches from "../../img/tresleches.jpg";

import { Context } from "../store/appContext";

export const Postre = () => {
	const { store, actions } = useContext(Context);

	return (
		<div className="container">
			<div className="text-center mt-5">
			 <header className="text-center py-5">
             <h1><strong>Postres</strong></h1>
             </header>
			<div className="container my-5">
    <div className="row">
      <div className="col-md-3">
        <div className="card bg-secondary text-light bg-dark" >
          <div className="card-body">
            <h5 className="card-title"><strong>Flan Napolitano</strong></h5>
            <p>
				<img src={FlanNapolitano} className="img-fluid rounded-circle" style={{maxWidth: "13rem", maxHeight: "13rem"}} />
			</p>
            <p className="card-text">Receta de Flan Napolitano.</p>
            <Link to="/FlanNapolitano">
            <a href="#" className="btn btn-secondary bg-success">Ver receta</a>
            </Link>
          </div>
        </div>
      </div>
      <div className="col-md-3">
        <div className="card bg-secondary text-light bg-success">
          <div className="card-body">
          <h5 className="card-title"><strong>Carlota de Limon</strong></h5>
            <p>
				<img src={carlota} className="img-fluid rounded-circle" style={{maxWidth: "17rem", maxHeight: "18rem"}} />
			</p>
            <p className="card-text">Receta de Carlota de Limon.</p>
            <Link to="/carlota">
            <a href="#" className="btn btn-secondary bg-dark ">Ver recetas</a>
            </Link>
          </div>
        </div>
      </div>
      <div className="col-md-3">
        <div className="card bg-secondary text-light bg-dark">
          <div className="card-body">
          <h5 className="card-title"><strong>Brownie casero</strong></h5>
            <p>
				<img src={brownie} className="img-fluid rounded-circle" style={{maxWidth: "10.5rem", maxHeight: "10.5rem"}} />
			</p>
            <p className="card-text">Receta de Brownie casero.</p>
            <Link to="/brownie">
            <a href="#" className="btn btn-secondary bg-success ">Ver recetas</a>
            </Link>
          </div>
        </div>
      </div>
      <div className="col-md-3">
        <div className="card bg-secondary text-light bg-success">
          <div className="card-body">
          <h5 className="card-title"><strong>Arroz con leche</strong></h5>
            <p>
				<img src={Arrozconleche} className="img-fluid rounded-circle" style={{maxWidth: "13rem", maxHeight: "13rem"}} />
			</p>
            <p className="card-text">Receta de Arroz con leche.</p>
            <Link to="/Arrozconleche">
            <a href="#" className="btn btn-secondary bg-dark ">Ver recetas</a>
            </Link>
          </div>
        </div>
      </div>

      <div className="col-md-3 mt-4">
        <div className="card bg-secondary text-light bg-dark">
          <div className="card-body">
          <h5 className="card-title"><strong>Tres Leches</strong></h5>
            <p>
				<img src={tresleches} className="img-fluid rounded-circle" style={{maxWidth: "10.5rem", maxHeight: "10.5rem"}} />
			</p>
            <p className="card-text">Receta de Tres Leches.</p>
            <Link to="/TresLeches">
            <a href="#" className="btn btn-secondary bg-success ">Ver recetas</a>
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
