import React, { useState, useEffect, useContext } from "react";
import { Link } from "react-router-dom";

import { Context } from "../store/appContext";
import favo from "../../img/favo.png";

export const RecetaFavorita = () => {
	const { store, actions } = useContext(Context);

	return (
		<div className="container-fluid">
			<div className="text-center mt-5">
			 <header className="text-center py-5">
             <h1><strong>Recetas favoritas</strong></h1>
			 <img src={favo} class="mx-auto" alt="Card image cap" style={{maxWidth: "10rem", maxHeight: "10rem"}} />
             </header>
		</div>

        
        
			<br />
			<Link to="/">
				<button className="btn btn-secondary bg-dark">Regresar</button>
			</Link>
		</div>
        
	);
};