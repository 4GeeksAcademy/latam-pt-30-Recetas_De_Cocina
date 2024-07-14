import React from "react";
import { Link } from "react-router-dom";

export const Navbar = () => {
	return (
		<nav className="navbar navbar-expand-lg navbar-dark bg-dark">
			<div className="container">
				<Link to="/">
				<span className="navbar-brand mb-0 h1 ms-5">
					<img src="https://factoryfy.es/wp-content/uploads/dise%C3%B1o-logo-blog-cocina.jpg" className="card-img-top" style={{maxWidth: "7rem", maxHeight: "7rem"}}/>
				</span>
				</Link>
				<div className="ml-auto">
					<Link to="/demo">
						<button className="btn btn-secondary ">Iniciar Sesión</button>
					</Link>
				</div>
			</div>
		</nav>
	);
};
