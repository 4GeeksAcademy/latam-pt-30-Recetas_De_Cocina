import React, { useContext, useEffect, useState } from "react";
import { Link, Navigate, useNavigate } from "react-router-dom";
import { Context } from "../store/appContext";
import recetasImageUrl from "../../img/recetas.jpeg";
import recetasImageUr2 from "../../img/recetas 2.jpeg";
import recetasImageUr3 from "../../img/recetas 3.jpg";
import recetasPostres from "../../img/postres.jpg";
import recetasDesayunos from "../../img/Desayunos.jpeg";
import recetasAlmuerzos from "../../img/almuerzos.jpg";
import calendario from "../../img/calendario.png";
import recetascena from "../../img/cena.jpg";
import formulario from "../../img/crearecets.jpg";
import favo from "../../img/favo.png";
import "../../styles/home.css";
import get from "../utils/data";

export const Home = () => {
  const { store, actions } = useContext(Context);
  const [categorias, setCategorias] = useState([]);


  useEffect(() => {
    fetch('https://legendary-space-enigma-675vrxw7556f4r4r-3001.app.github.dev/api/categorias')
      .then(response => response.json())
      .then(data => {
        setCategorias(data);        
      })
  }, [])


  return (
    <div className=" container-fluid  text-center mt-5">
      <header className="text-center py-5">
        <h1><strong>Recetas de cocina</strong></h1>
      </header>
      <div className="row align-items-center">
        <div className="col">
          <img src={recetasImageUr2} className="img-fluid rounded-circle" style={{ maxWidth: "20rem", maxHeight: "20rem" }} />
          <h3><strong>Deliciosas</strong></h3>
        </div>
        <div className="col">

          <img src={recetasImageUrl} className="img-fluid rounded-circle" style={{ maxWidth: "20rem", maxHeight: "20rem" }} />
          <h3><strong>Recetas</strong></h3>

        </div>
        <div className="col">

          <img src={recetasImageUr3} className="img-fluid rounded-circle" style={{ maxWidth: "20rem", maxHeight: "20rem" }} />
          <h3><strong>Culinarias</strong></h3>

        </div>

        <p></p>
        <p></p>

        <div className="card-group">
          <div className="card card border-success mb-3">
            <div className="card-header border-success text-success"><h4 className="card-title"><strong>Plan semanal</strong></h4></div>
            <p></p>
            <img src={calendario} className="mx-auto" alt="Card image cap" style={{ maxWidth: "9rem", maxHeight: "9rem" }} />
            <p></p>
            <div className="card-body text-success">
              <p className="card-text"><strong>Aqui podras crear tu plan seamanal para tus comidas dependiedo de tus gustos, dieta y alimentación nutricional.</strong></p>
              <Link to="/plansemanal">
                <button className="btn btn-outline-success my-2 my-sm-0" type="submit"><i className="fa-regular fa-calendar"></i></button>
              </Link>
            </div>
          </div>
          <div className="card card border-success mb-3">
            <div className="card-header border-success text-success"><h4 className="card-title"><strong>Crea tu receta</strong></h4></div>
            <img src={formulario} className="mx-auto" alt="Card image cap" style={{ maxWidth: "10rem", maxHeight: "10rem" }} />
            <div className="card-body text-success ">
              <p></p>
              <p className="card-text"><strong>Aqui podras crear y aportar tus propias recetas culinarias, ya sean desayunos, comidas o cenas, con los ingrdientes que mas te gusten.</strong>.</p>
              <Link to="/creareceta">
                <button className="btn btn-outline-success my-2 my-sm-0" type="submit"><i className="fa-solid fa-pen-to-square"></i></button>
              </Link>
            </div>
          </div>
          <div className="card card border-success mb-3">
            <div className="card-header border-success text-success"><h4 className="card-title"><strong>Recetas favoritas</strong></h4></div>
            <p></p>
            <img src={favo} className="mx-auto" alt="Card image cap" style={{ maxWidth: "10rem", maxHeight: "10rem" }} />
            <div className="card-body text-success">
              <p></p>
              <p className="card-text"><strong>Aqui podras entrar y visitar tus recetas favoritas cada vez que lo desees.</strong></p>
              <Link to="/recetafavorita">
                <button className="btn btn-outline-success my-2 my-sm-0" type="submit"><i className="fa-solid fa-heart"></i></button>
              </Link>
            </div>
          </div>
        </div>

        <p></p>
        <p></p>


      </div>
      <div className="container my-5">
        <div className="row">
          {categorias.map((categoria, index) => (
            <div className="col-md-3 mt-4">
              <div className={index % 2 == 0 ? "text-light bg-dark card bg-secondary" : "text-light bg-success card bg-secondary"}>
                <div className="card-body">
                  <h5 className="card-title"><strong>{categoria.nombre}</strong></h5>
                  {categoria.imagen ?
                    <img src={categoria.imagen} className="img-fluid rounded-circle" style={{ maxWidth: "17rem", maxHeight: "17rem" }} />
                    :
                    <img src={recetasImageUrl} className="img-fluid rounded-circle" style={{ maxWidth: "17rem", maxHeight: "17rem" }} />
                  }
                  <p className="card-text">Deliciosos {categoria.nombre} para cada ocasión.</p>
                  <Link to={`/recetas/${categoria.id}`}>
                    <button className={index % 2 == 0 ? "btn btn-secondary bg-success" : "btn btn-secondary bg-dark"}>
                      Ver recetas
                    </button>
                  </Link>
                </div>
              </div>
            </div>
          ))
          }
        </div>
      </div>

      <Link to="/demo">
        <button className="btn btn-secondary bg-dark">Ver mas</button>
      </Link>

    </div >
  );
};
