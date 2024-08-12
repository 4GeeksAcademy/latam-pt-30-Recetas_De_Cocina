import React, { useState, useEffect, useContext } from "react";
import { Link, useParams } from "react-router-dom";
import { getDayName, getDecodeId } from "../utils/utils";
import { Context } from "../store/appContext";

export const Dia = () => {

  const { id } = useParams();
  const { store, actions } = useContext(Context);
  const [recetas, setRecetas] = useState([]);

  useEffect(() => {
    const token = sessionStorage.getItem("token");
    if (token) {
      const decodedToken = getDecodeId(token);
      const usuario_id = decodedToken.sub;
      const url = `https://legendary-space-enigma-675vrxw7556f4r4r-3001.app.github.dev/api/plansemanal/${usuario_id}/${id}`;
      fetch(url)
        .then(response => response.json())
        .then(data => {
          setRecetas(data || []);
        })
    }
  }, [])

  return (
    <div className="container-fluid" >
      <div className="text-center mt-5">
        <header className="text-center py-5">
          <h1><strong>{getDayName(id)}</strong></h1>
        </header>
      </div>

      <div className="row justify-content-md-center">
        <div className="col-3">
          <div className="card"  >

            <div className="card-body">
              <h5 className="card-title"><strong>Desayuno</strong></h5>
              <p className="card-text">Delicioso desayuno de este día.</p>
              {
                recetas.length > 0 && recetas?.find(x => x.categoria_nombre === 'Desayuno') ?
                  <Link to={`/plato/${recetas.find(x => x.categoria_nombre === 'Desayuno').plato_id}`} className="btn btn-success bg-dark">
                    {recetas?.find(x => x.categoria_nombre === 'Desayuno').plato_nombre}
                  </Link>
                  :
                  <Link to={`/agregarPlan/${id}/3`} className="btn btn-success bg-dark">
                    <i className="fa-solid fa-plus"></i>
                  </Link>
              }
            </div>
          </div>
        </div>
      </div>

      <div className="row justify-content-md-center">
        <div className="col-3">
          <div className="card"  >

            <div className="card-body">
              <h5 className="card-title"><strong>Comida</strong></h5>
              <p className="card-text">Deliciosa comida del día.</p>
              {
                recetas.length > 0 && recetas?.find(x => x.categoria_nombre === 'Comidas') ?
                  <Link to={`/plato/${recetas.find(x => x.categoria_nombre === 'Comidas').plato_id}`} className="btn btn-success bg-dark">
                    {recetas?.find(x => x.categoria_nombre === 'Comidas').plato_nombre}
                  </Link>
                  :
                  <Link to={`/agregarPlan/${id}/2`} className="btn btn-success bg-dark">
                    <i className="fa-solid fa-plus"></i>
                  </Link>
              }
            </div>
          </div>
        </div>
      </div>

      <div className="row justify-content-md-center">
        <div className="col-3">
          <div className="card"  >

            <div className="card-body">
              <h5 className="card-title"><strong>Cena</strong></h5>
              <p className="card-text">Deliciosa cena del día.</p>
              {
                recetas.length > 0 && recetas?.find(x => x.categoria_nombre === 'Cenas') ?
                  <Link to={`/plato/${recetas.find(x => x.categoria_nombre === 'Cenas').plato_id}`} className="btn btn-success bg-dark">
                    {recetas?.find(x => x.categoria_nombre === 'Cenas').plato_nombre}
                  </Link>
                  :
                  <Link to={`/agregarPlan/${id}/1`} className="btn btn-success bg-dark">
                    <i className="fa-solid fa-plus"></i>
                  </Link>
              }
            </div>
          </div>
        </div>
      </div>



      <br />
      <Link to="/plansemanal">
        <button className="btn btn-secondary bg-dark">Regresar</button>
      </Link>
    </div >

  );
};
