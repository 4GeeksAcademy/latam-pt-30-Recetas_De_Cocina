import React, { useState, useEffect, useContext } from "react";
import { Link, useNavigate, useParams } from "react-router-dom";
import { getDayName, getDecodeId } from "../utils/utils";
import { Context } from "../store/appContext";

export const AgregarPlan = () => {

  const { dia, categoria } = useParams();
  const { store, actions } = useContext(Context);
  const [recetas, setRecetas] = useState(null);
  const [usuarioId, setUsuarioId] = useState(null)
  const navigate = useNavigate()

  useEffect(() => {
    const token = sessionStorage.getItem("token");

    if (token) {
      const decodedToken = getDecodeId(token);
      setUsuarioId(decodedToken.sub)
      const url = `https://legendary-space-enigma-675vrxw7556f4r4r-3001.app.github.dev/api/plato/${categoria}`;
      fetch(url)
        .then(response => response.json())
        .then(data => {
          setRecetas(data);
          console.log(data)
        })
    }
  }, [])


  const handleAddRecipe = async (receta_id) => {
    const response = await fetch("https://legendary-space-enigma-675vrxw7556f4r4r-3001.app.github.dev/api/plansemanal", {
      method: "POST",
      headers: {
        "Content-Type": "application/json"
      },
      body: JSON.stringify({ 'usuario_id': usuarioId, 'comida_id': receta_id, dia })
    });

    if (response.ok) {
      navigate(`/Dia/${dia}`)
    }
  }


  if (!recetas) {
    return (
      <div className="container">
        <div className="text-center mt-5">
          <header className="text-center py-5">
            <h1><strong>Cargando...</strong></h1>
          </header>
        </div>
      </div>
    )
  } else {
    return (
      <div className="container">
        <div className="text-center mt-5">
          <header className="text-center py-5">
            <h1><strong>{recetas.categoria}</strong></h1>
          </header>
          <div className="container my-5">
            <div className="row">
              {
                recetas.list.map((receta, index) => (
                  <div className="col-md-3 mt-4">
                    <div className={index % 2 == 0 ? "text-light bg-dark card bg-secondary" : "text-light bg-success card bg-secondary"}>
                      <div className="card-body">
                        <h5 className="card-title"><strong>{receta.nombre}</strong></h5>
                        <p>
                          {receta.imagen ?
                            <img src={receta.imagen} className="img-fluid rounded-circle" style={{ maxWidth: "17rem", maxHeight: "17rem" }} />
                            :
                            <img src={receta} className="img-fluid rounded-circle" style={{ maxWidth: "17rem", maxHeight: "17rem" }} />
                          }
                        </p>
                        <p className="card-text">Receta de {receta.nombre}.</p>
                        <button
                          className={index % 2 == 0 ? "btn btn-secondary bg-success" : "btn btn-secondary bg-dark"}
                          onClick={() => handleAddRecipe(receta.id)}>
                          Agregar receta
                        </button>
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
      </div >
    );
  }
};
