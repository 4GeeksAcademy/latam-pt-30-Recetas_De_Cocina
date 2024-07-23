import React, { useState, useEffect, useContext } from "react";
import { Link } from "react-router-dom";

import { Context } from "../store/appContext";

export const RecetaFavorita = () => {
	const { store, actions } = useContext(Context);

	return (
		<div className="container-fluid">
			<div className="text-center mt-5">
			 <header className="text-center py-5">
             <h1><strong>Recetas favoritas</strong></h1>
             </header>
		</div>

        
        
			<br />
			<Link to="/">
				<button className="btn btn-secondary bg-dark">Regresar</button>
			</Link>
		</div>
        
	);
};