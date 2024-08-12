import React, { useContext, useEffect, useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import cheff from "../../img/cheff.jpeg";
import { Context } from "../store/appContext";

export const Navbar = () => {

	const [hasSession, setSession] = useState(false);
	const { store, actions } = useContext(Context);
	const navigate = useNavigate()

	useEffect(() => {
		const token = sessionStorage.getItem("token");
		if (token) {
			setSession(true);
		}
	}, [])


	const handleSession = (hasSession) => {
		if (hasSession) {
			actions.logout();
			setSession(false);
		}
		navigate('/login')
	}
	return (
		<nav className="navbar navbar-expand-lg navbar-dark bg-dark">
			<div className="container-fluid">
				<Link to="/">
					<span className="navbar-brand mb-0 h1 ms-5">
						<img src={cheff} className="img-fluid rounded-circle" style={{ maxWidth: "7rem", maxHeight: "7rem" }} />
					</span>
				</Link>
				<form class="form-inline my-2 my-lg-0">
					<input class="form-control mr-sm-2" type="search" placeholder="Search" aria-label="Search"></input>
					<button class="btn btn-outline-success my-2 my-sm-0" type="submit">Search</button>
				</form>
				<div className="ml-auto">
					<button className="btn btn-secondary" onClick={() => handleSession(hasSession)}>{hasSession ? 'Cerrar sesión' : 'Iniciar sesión'}</button>
				</div>
			</div>
		</nav>

	);
};
