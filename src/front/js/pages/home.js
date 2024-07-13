import React, { useContext } from "react";
import { Context } from "../store/appContext";
import recetasImageUrl from "../../img/recetas.jpeg";
import "../../styles/home.css";

export const Home = () => {
	const { store, actions } = useContext(Context);

	return (
		<div className="text-center mt-5">
			<h1>Recetas de concina</h1>
			<p>
				<img src={recetasImageUrl} />
			</p>
			<div className="alert alert-info bg-dark text-light">
			<h3>cargando recetas...</h3>
			</div>
			
		</div>
	);
};
