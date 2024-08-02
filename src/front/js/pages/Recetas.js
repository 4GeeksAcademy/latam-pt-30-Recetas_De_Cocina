import React, { useState, useEffect, useContext } from "react";
import { Link, useLocation, useNavigate } from "react-router-dom";
import FlanNapolitano from "../../img/FlanNapolitano.jpg";
import recetasImageUrl from "../../img/recetas.jpeg";
import carlota from "../../img/carlota.jpg";
import brownie from "../../img/brownie.jpg";
import Arrozconleche from "../../img/Arrozconleche.jpg";
import tresleches from "../../img/tresleches.jpg";
import { Context } from "../store/appContext";
import favo from "../../img/favo.png";

export const Recetas = () => {
	const location = useLocation();
	const navigate = useNavigate();
	const categoria = location.state.categoria_nombre;
	const platos = location.state.platos;

	const handlerRedirect = (plato) => {
		navigate('/plato', { state: plato })
	}

	return (
		<div className="container">
			<div className="text-center mt-5">
				<header className="text-center py-5">
					<h1><strong>{categoria}</strong></h1>
				</header>
				<div className="container my-5">
					<div className="row">
						{platos.map((plato, index) => (
							<div className="col-md-3 mt-4">
								<div className={index % 2 == 0 ? "text-light bg-dark card bg-secondary" : "text-light bg-success card bg-secondary"}>
									<div className="card-body">
										<h5 className="card-title"><strong>{plato.nombre}</strong></h5>

										<p>
											{/*<img src={FlanNapolitano} className="img-fluid rounded-circle" style={{ maxWidth: "13rem", maxHeight: "13rem" }} />*/}

											{plato.imagen ?
												<img src={require(`../../img/plato/${plato.imagen}`).default} className="img-fluid rounded-circle" style={{ maxWidth: "17rem", maxHeight: "17rem" }} />
												:
												<img src={recetasImageUrl} className="img-fluid rounded-circle" style={{ maxWidth: "17rem", maxHeight: "17rem" }} />
											}
										</p>
										<p className="card-text">Receta de {plato.nombre}.</p>
										<button className={index % 2 == 0 ? "btn btn-secondary bg-success" : "btn btn-secondary bg-dark"} onClick={() => handlerRedirect(plato)}>Ver receta</button>
									</div>
								</div>
							</div>
						))
						}
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