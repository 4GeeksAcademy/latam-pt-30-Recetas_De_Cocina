import React, { useState, useEffect, useContext } from "react";
import { Link, useNavigate } from "react-router-dom";

import { Context } from "../store/appContext";
import formulario from "../../img/crearecets.jpg";

export const CreaReceta = () => {
	const { store, actions } = useContext(Context);
	const [Platillo, setPlatillo] = useState("")
	const [Ingredientes, setIngrdientes] = useState("")
	const [Pasos, setPasos] = useState("")
	const [InfoNutri, setInfoNutri] = useState("")
	const [Image, setImage] = useState("")
	const Navigate = useNavigate();

	const createReceta = async () => {
        await actions.newReceta(Platillo, Ingredientes, Pasos, InfoNutri, Image)
        const newPlatillo = await actions.getPlatillos();

        
        Navigate("/", { newPlatillo });
    }



	return (
		<React.Fragment>
		<div className="container">
			<div className="text-center mt-5">
			 <header className="text-center py-5">
             <h1><strong>Crea tu receta</strong></h1>
			 <img src={formulario} class="mx-auto" alt="Card image cap" style={{maxWidth: "15rem", maxHeight: "15rem"}} />
             </header>

			 <div class="card border-success bg-dark text-white">
             <div class="card-body ">
				
			 <div className= "mb-3">
                    <label htmlFor="inputPlatillo" className="form-label"><h5><strong>Platillo</strong></h5></label>
                    <input required type="text" name="Platillo" className="form-control form-control-lg border-success" id="inputPlatillo" 
                        placeholder="Agrega nombre de Platillo" value={Platillo} onChange={(event) => {setPlatillo(event.target.value)}}/>
                </div>

				<div className="mb-3">
                    <label htmlFor="inputIngredientes" className="form-label"><h5><strong>Ingredientes</strong></h5></label>
                    <textarea required type="text" className="form-control form-control-lg border-success" id="Ingredientes"
                        placeholder="Agrega Ingredientes"  value={Ingredientes} onChange={(event) => {setIngrdientes(event.target.value)}}/>
                </div>

				<div className="mb-3">
                    <label htmlFor="inputPasos" className="form-label"><h5><strong>Pasos</strong></h5></label>
                    <textarea required type="text" className="form-control form-control-lg border-success" id="Pasos"
                        placeholder="Agrega Pasos de preparación" value={Pasos} onChange={(event) => {setPasos(event.target.value)}}/>
                </div>

				<div className="mb-3">
                    <label htmlFor="inputInfoNutri" className="form-label"><h5><strong>información nutricional</strong></h5></label>
                    <textarea required type="text" className="form-control form-control-lg border-success" id="InfoNutri"
                        placeholder="Agrega la información nutricional" value={InfoNutri} onChange={(event) => {setInfoNutri(event.target.value)}}/>
                </div>

				<div className="mb-3">
                    <label htmlFor="inputImage" className="form-label"><h5><strong>Importar imagen</strong></h5></label>
                    <input type="file" className="form-control form-control-lg border-success" id="Image"
                        placeholder="" value={Image} onChange={(event) => {setImage(event.target.value)}}/>
                </div>

				

				 <button  type="button" className="btn btn-success w-100"
                    onClick={createReceta}> 
                    Save
                 </button>
				 </div>
				 </div>
		</div>
		
		
			<br />
			<Link to="/">
				<button className="btn btn-secondary bg-dark">Regresar</button>
			</Link>
		</div>

		</React.Fragment>
        
	);
};
