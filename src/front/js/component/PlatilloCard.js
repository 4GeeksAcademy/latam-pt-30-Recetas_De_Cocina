import React, { useState, useEffect, useContext } from "react";
import { Link } from "react-router-dom";


import { Context } from "../store/appContext";

export const PlatilloCard = ({ item, type }) => {
	const { store, actions } = useContext(Context);

  const getImageUrl = () => {
    if (type === "") {
        return ``;
    } else if (type === "") {
        return ``;
    } else if (type === "") {
        return ``;
    }
    return "https://via.placeholder.com/200";
};


const isFavorite = store.favorites.some(fav => fav.uid === item.uid && fav.type === type);

const handleFavoriteClick = () => {
    if (isFavorite) {
        const index = store.favorites.findIndex(fav => fav.uid === item.uid && fav.type === type);
        actions.removeFavorite(index);
    } else {
        actions.getFavorite({ name: item.name, uid: item.uid, type });
    }
};


	return (
		
			<div className="container my-5">
    <div className="row">
      <div className="col-md-3">
        <div className="card bg-secondary text-light bg-success" >
          <div className="card-body">
            <h5 className="card-title"><strong>{item.name}</strong></h5>
            <p>
				<img src={getImageUrl()} className="card-img-top" alt={item.name} />
			</p>
            <p className="card-text">Deliciosos Snacks para botanear.</p>
            <Link to={`/details/${type}/${item.uid}`}>
            <a href="#" className="btn btn-secondary bg-dark">Ver recetas</a>
            </Link>
            <button 
                        className={`btn ${isFavorite ? "btn-warning" : "btn-outline-warning"}`}
                        onClick={handleFavoriteClick}
                    >
                        <i className={`fas fa-star ${isFavorite ? "text-warning" : ""}`}></i>
                    </button>
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
