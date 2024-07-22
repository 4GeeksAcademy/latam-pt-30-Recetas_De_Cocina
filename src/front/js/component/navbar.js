import React from "react";
import { Link } from "react-router-dom";


export const Navbar = () => {
	return (
		
		<nav className="navbar navbar-expand-lg navbar-dark bg-dark">
			<div className="container-fluid">
				<Link to="/">
				<span className="navbar-brand mb-0 h1 ms-5">
					<img src="https://factoryfy.es/wp-content/uploads/dise%C3%B1o-logo-blog-cocina.jpg" className="img-fluid rounded-circle" style={{maxWidth: "7rem", maxHeight: "7rem"}}/>
				</span>
				</Link>
				<form class="form-inline my-2 my-lg-0">
          <input class="form-control mr-sm-2" type="search" placeholder="Search" aria-label="Search"></input>
          <button class="btn btn-outline-success my-2 my-sm-0" type="submit">Search</button>
        </form>
				<div className="ml-auto">
					<Link to={'/signup'}>
					<button className="btn btn-primary">Registrarse</button>
					</Link>
					<Link to="">
						<button className="btn btn-secondary ">Iniciar Sesión</button>
					</Link>
				</div>
			</div>
		</nav>
		
	);
};
