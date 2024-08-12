import React, { useState, useEffect } from "react";
import { RecetaItem } from "../component/RecetaItem";
import formulario from "../../img/crearecets.jpg";

export const RecetaForm = () => {
	const [receta, setReceta] = useState({
		nombre: "",
		ingredientes: "",
        Pasos: "",
		tiempo: "",
	});
	const [recetasItems, setRecetasItems] = useState([]);

	const handleInputChange = (e) => {
		const { name, value } = e.target;
		setReceta({ ...receta, [name]: value });
	};

	const handleAddReceta = (e) => {
		e.preventDefault();
		if (
			receta.nombre.trim() !== "" &&
			receta.ingredientes.trim() !== "" &&
            receta.Pasos.trim() !== "" &&
			receta.tiempo.trim() !== ""
		) {
			setRecetasItems([...recetasItems, receta]);
			setReceta({
				nombre: "",
				ingredientes: "",
                Pasos: "",
				tiempo: "",
			});
		}
	};

    const handleDelete = (id) => {
        const nuevasRecetas = recetas.filter((recetadelete) => recetadelete.delete !== id);
        setRecetasItems(nuevasRecetas);
      };

	useEffect(() => {
		let data = localStorage.getItem("lrecetas");
		if (data) {
			setRecetasItems(JSON.parse(data));
		}
	}, []);

	useEffect(() => {
		localStorage.setItem("lrecetas", JSON.stringify(recetasItems));
	}, [recetasItems]);

    

	return (
		<div >
			<div className="d-flex justify-content-center">
				<div className="col-md-4 text-center">
                <header className="text-center py-5">
             <h1><strong>Crea tu receta</strong></h1>
			 <img src={formulario} class="mx-auto" alt="Card image cap" style={{maxWidth: "15rem", maxHeight: "15rem"}} />
             </header>
             <div class="card border-success bg-dark text-white">
             <div class="card-body ">
					<form onSubmit={handleAddReceta}>
						<label><strong>Receta </strong></label>
						<input
							type="text"
							name="nombre"
							value={receta.nombre}
							onChange={handleInputChange}
							placeholder="Nombre de la receta"
							className="form-control"
						/>
						<br />
						<label><strong>Ingredientes</strong> </label>
						<textarea
							type="textarea"
							name="ingredientes"
							value={receta.ingredientes}
							onChange={handleInputChange}
							placeholder="Lista ingredientes"
							className="form-control"
						></textarea>
						<br />
						<label><strong>Pasos</strong> </label>
						<textarea
							type="textarea"
							name="Pasos"
							value={receta.Pasos}
							onChange={handleInputChange}
							placeholder="Lista de pasos"
							className="form-control"
						></textarea>
						<br />
						<label><strong>Tiempo</strong> </label>
						<input
							type="number"
							name="tiempo"
							value={receta.tiempo}
							onChange={handleInputChange}
							placeholder="Tiempo minutos"
							className="form-control"
						/>
						<br />
						<div className="d-flex justify-content-center">
							<button type="submit" className="btn text-white bg-success col-md-4">
								Agregar receta
							</button>
						</div>
					</form>
				</div>
                </div>
                </div>
			</div>
			<br />
			<div className="d-flex justify-content-center">
				<h2>Recetas Agregadas</h2>
			</div>
			<div className="container p-3">
				<div className="row">
					{recetasItems.map((rec, index) => (
						<RecetaItem key={index} receta={rec}  onDelete={handleDelete} />
                         
					))}
				</div>
			</div>
		</div>
	);
};
