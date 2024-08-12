import React, { useState, useEffect } from "react";
import { RecetaItem } from "../component/RecetaItem";

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
		<div style={{ backgroundColor: "#DDF7E3", minHeight: "100vh", minWidth: "100vw" }}>
			<div className="d-flex justify-content-center">
				<div className="col-md-4">
					<h3>Formulario de recetas de cocina.</h3>
					<form onSubmit={handleAddReceta}>
						<label>Receta </label>
						<input
							type="text"
							name="nombre"
							value={receta.nombre}
							onChange={handleInputChange}
							placeholder="Nombre de la receta"
							className="form-control"
						/>
						<br />
						<label>Ingredientes </label>
						<textarea
							type="textarea"
							name="ingredientes"
							value={receta.ingredientes}
							onChange={handleInputChange}
							placeholder="Lista ingredientes"
							className="form-control"
						></textarea>
						<br />
                        <br />
						<label>Pasos </label>
						<textarea
							type="textarea"
							name="Pasos"
							value={receta.Pasos}
							onChange={handleInputChange}
							placeholder="Lista de pasos"
							className="form-control"
						></textarea>
						<br />
						<label>Tiempo </label>
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
							<button type="submit" className="btn btn-primary col-md-4">
								Agregar receta
							</button>
						</div>
					</form>
				</div>
			</div>
			<br />
			<div className="d-flex justify-content-center">
				<h2>Recetas Agregadas</h2>
			</div>
			<div className="container p-3">
				<div className="row">
					{recetasItems.map((rec, index) => (
						<RecetaItem key={index} receta={rec} />
					))}
				</div>
			</div>
		</div>
	);
};
