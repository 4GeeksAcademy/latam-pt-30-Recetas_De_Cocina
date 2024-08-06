import React, { useState, useEffect, useContext } from "react";
import { Link, useLocation, useParams } from "react-router-dom";
import FlanNapolitano from "../../img/FlanNapolitano.jpg";
import carlota from "../../img/carlota.jpg";
import brownie from "../../img/brownie.jpg";
import Arrozconleche from "../../img/Arrozconleche.jpg";
import tresleches from "../../img/tresleches.jpg";
import { Context } from "../store/appContext";
import favo from "../../img/favo.png";
import recetasImageUrl from "../../img/recetas.jpeg";

export const Plato = () => {
	const { id } = useParams();
	const [plato, setPlato] = useState(null);

	useEffect(() => {
		const url = `https://legendary-space-enigma-675vrxw7556f4r4r-3001.app.github.dev/api/plato/info/${id}`;
		fetch(url)
			.then(response => response.json())
			.then(data => {
				setPlato(data);
				console.log('data', data)
			})
	}, [])


	const handleGoback = () => {
		window.history.back();
	}

	if (!plato) {
		return (
			<div className="container-fluid   d-flex flex-column justify-content-center" style={{ minHeight: "100vh" }}>
				<div className="row border-bottom border-2 pb-4 border-danger py-5">
					<div className="col-md-6">
						Cargando ...
					</div>
				</div>
			</div>
		)
	} else {
		return (
			<div className="container-fluid   d-flex flex-column justify-content-center" style={{ minHeight: "100vh" }}>
				<div className="row border-bottom border-2 pb-4 border-danger py-5">
					<div className="col-md-6">
						{plato ?
							< img src={plato.imagen} className="img-fluid  rounded-circle" style={{ maxWidth: "50rem", maxHeight: "50rem" }} />
							:
							<img src={recetasImageUrl} className="img-fluid rounded-circle" style={{ maxWidth: "17rem", maxHeight: "17rem" }} />
						}

					</div>
					<div className="col-md-6 text-center d-flex flex-column justify-content-center">
						<h1><strong>{plato.nombre}</strong></h1>
						<p><strong>Ingredientes</strong></p>
						{plato.ingredientes.map(ingrediente => (
							<p>{ingrediente.cantidad + " " + ingrediente.nombre}</p>
						))}



						<div className="container">
							<div className="card text-white bg-success mb-3" >
								<div className="card-body">

									<h1><strong>Pasos</strong></h1>
									{plato.pasos.map(paso => (
										<p>{paso.numero_de_paso + ". " + paso.description}</p>
									))}

								</div>
							</div>
						</div>

						<div className="container">
							<div className="card text-white bg-danger mb-3" >
								<div className="card-body">
									<h3><strong>Informacion nutricional</strong></h3>
									<p><strong>Azucares:</strong> {plato.nutricion.azucares} </p>
									<p><strong>Calorias:</strong> {plato.nutricion.calorias} </p>
									<p><strong>Carbohidratos:</strong> {plato.nutricion.carbohidratos} </p>
									<p><strong>Energia:</strong> {plato.nutricion.energia} </p>
									<p><strong>Fibra:</strong> {plato.nutricion.fibra} </p>
									<p><strong>Grasa:</strong> {plato.nutricion.grasa} </p>
									<p><strong>Grasas saturadas:</strong> {plato.nutricion.grasas_saturadas} </p>
									<p><strong>Proteina:</strong> {plato.nutricion.proteina} </p>
									<p><strong>Sodio:</strong> {plato.nutricion.sodio} </p>
									<p><strong>Grasa:</strong> {plato.nutricion.grasa} </p>
								</div>
							</div>
						</div>
						<div className="w-100 d-flex justify-content-end flex-column p-4">
							<button className="btn btn-outline-success" type="button">
								{plato.favorito ?
									<i class="fa-solid fa-heart"></i>
									:
									<i class="fa-solid fa-heart-circle-xmark"></i>
								}
							</button>
							<button className="mt-5 btn btn-secondary bg-dark" onClick={() => handleGoback()}>Regresar</button>
						</div>
					</div>
				</div>
			</div>
		);
	};
}

