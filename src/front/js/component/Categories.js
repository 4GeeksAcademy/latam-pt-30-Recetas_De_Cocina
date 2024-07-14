import React from 'react';

const Categories = () => (
  <div className="container my-5">
    <div className="row">
      <div className="col-md-3">
        <div className="card">
          <div className="card-body">
            <h5 className="card-title">Postres</h5>
            <p className="card-text">Deliciosos postres para cada ocasión.</p>
            <a href="#" className="btn btn-primary">Ver recetas</a>
          </div>
        </div>
      </div>
      <div className="col-md-3">
        <div className="card">
          <div className="card-body">
            <h5 className="card-title">Desayunos</h5>
            <p className="card-text">Comienza tu día con energía.</p>
            <a href="#" className="btn btn-primary">Ver recetas</a>
          </div>
        </div>
      </div>
      <div className="col-md-3">
        <div className="card">
          <div className="card-body">
            <h5 className="card-title">Almuerzos</h5>
            <p className="card-text">Recetas para una comida completa.</p>
            <a href="#" className="btn btn-primary">Ver recetas</a>
          </div>
        </div>
      </div>
      <div className="col-md-3">
        <div className="card">
          <div className="card-body">
            <h5 className="card-title">Recetas Keto</h5>
            <p className="card-text">Recetas bajas en carbohidratos.</p>
            <a href="#" className="btn btn-primary">Ver recetas</a>
          </div>
        </div>
      </div>
    </div>
  </div>
);

export default Categories;