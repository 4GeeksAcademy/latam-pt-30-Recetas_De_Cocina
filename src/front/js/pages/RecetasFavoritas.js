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
		<div className="collapse">
                    <ul className="ms-auto">
                        <li className="item dropdown">
                            <button className="btn btn-secondary dropdown-toggle" type="button" id="favoritesDropdown" data-bs-toggle="dropdown" aria-expanded="false">
                                Favorites ({store.favorites.length})
                            </button>
                            <ul className="dropdown-menu dropdown-menu-end" aria-labelledby="favoritesDropdown">
                                {store.favorites.length > 0 ? (
                                    store.favorites.map((favorite, index) => (
                                        <li key={index} className="d-flex justify-content-between align-items-center">
                                            <Link className="dropdown-item" to={`/details/${favorite.type}/${favorite.uid}`}>
                                                {favorite.name}
                                            </Link>
                                            <button className="btn btn-outline-danger btn-sm" onClick={() => actions.removeFavorite(index)}>
                                                <i className="fas fa-trash-alt"></i>
                                            </button>
                                        </li>
                                    ))
                                ) : (
                                    <li><span className="dropdown-item">No favorites added</span></li>
                                )}
                            </ul>
                        </li>
                    </ul>
                </div>
        
        
			<br />
			<Link to="/">
				<button className="btn btn-secondary bg-dark">Regresar</button>
			</Link>
		</div>
        
	);
};