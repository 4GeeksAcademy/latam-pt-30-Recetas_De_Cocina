import React from "react";

import recipe from "../../img/recipe.png";

export const RecetaItem = ({receta}) => {
    return (
      <div className="col-md-4">
        
        <div className="card mb-3" style={{ backgroundColor: "#F9FBE7" }}>
          <div className="card-body">
          <img src = {recipe} className="card-img-top" alt="..." />
            <h4 className="card-title"><strong>{receta.nombre}</strong></h4>
            <div><strong>Ingredientes</strong></div>
            <p className="card-text">{receta.ingredientes}</p>
            <div><strong>Pasos</strong></div>
            <p className="card-text">{receta.Pasos}</p>
            <div><strong>Tiempo</strong></div>
            <p className="card-text">
              <small className="text-muted">Time: {receta.tiempo}min</small>
            </p>
          </div>
        </div>
      </div>
    );
  }

