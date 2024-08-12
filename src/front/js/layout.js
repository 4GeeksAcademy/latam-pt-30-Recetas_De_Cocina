import React from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import ScrollToTop from "./component/scrollToTop";
import { BackendURL } from "./component/backendURL";
import { Signup } from "./pages/Signup";
import { Login } from "./pages/Login";
import { Private } from "./pages/Private";



import { Home } from "./pages/home";
import { Dia } from "./pages/Dia";
import { AgregarPlan } from "./pages/AgregarPlan";
import { Demo } from "./pages/demo";
import { Single } from "./pages/single";
import { PlanSemanal } from "./pages/PlanSemanal";
import { Lunes } from "./pages/Lunes";
import { Martes } from "./pages/Martes";
import { Miercoles } from "./pages/Miercoles";
import { Jueves } from "./pages/Jueves";
import { Viernes } from "./pages/Viernes";
import { Sabado } from "./pages/Sabado";
import { Domingo } from "./pages/Domingo";
import { CreaReceta } from "./pages/CreaReceta";
import { RecetaFavorita } from "./pages/RecetasFavoritas";
import { Recetas } from "./pages/Recetas";
import { Plato } from "./pages/Plato";
import { Desayunos } from "./pages/Desayunos";
import { Snacks } from "./pages/Snacks";
import { Comidas } from "./pages/Comidas";
import { Cenas } from "./pages/Cenas";
import { Postre } from "./pages/Postres";


import injectContext from "./store/appContext";
import { Navbar } from "./component/navbar";
import { Footer } from "./component/footer";



//create your first component
const Layout = () => {
    //the basename is used when your project is published in a subdirectory and not in the root of the domain
    // you can set the basename on the .env file located at the root of this project, E.g: BASENAME=/react-hello-webapp/
    const basename = process.env.BASENAME || "";

    if (!process.env.BACKEND_URL || process.env.BACKEND_URL == "") return <BackendURL />;

    return (
        <div>
            <BrowserRouter basename={basename}>
                <ScrollToTop>
                    <Navbar />
                    <Routes>
                        <Route element={<Home />} path="/" />
                        <Route element={<Signup />} path="/signup" />
                        <Route element={<Login />} path="/login" />
                        <Route element={<Private />} path="/private" />
                        <Route element={<Demo />} path="/demo" />

                        <Route element={<Snacks />} path="/snacks" />

                        <Route element={<PlanSemanal />} path="/plansemanal" />
                        <Route element={<Lunes />} path="/Lunes" />
                        <Route element={<Martes />} path="/Martes" />
                        <Route element={<Miercoles />} path="/Miercoles" />
                        <Route element={<Jueves />} path="/Jueves" />
                        <Route element={<Viernes />} path="/Viernes" />
                        <Route element={<Sabado />} path="/Sabado" />
                        <Route element={<Domingo />} path="/Domingo" />
                        <Route element={<CreaReceta />} path="/creareceta" />
                        <Route element={<RecetaFavorita />} path="/recetafavorita" />



                        <Route element={<Desayunos />} path="/desayunos" />
                        <Route element={<Cenas />} path="/cenas" />
                        <Route element={<Comidas />} path="/comidas" />
                        <Route element={<Postre />} path="/postres" />
                        <Route element={<Single />} path="/single/:theid" />
                        <Route element={<Recetas />} path="/recetas/:id" />
                        <Route element={<Plato />} path="/plato/:id" />
                        <Route element={<Dia />} path="/dia/:id" />
                        <Route element={<AgregarPlan />} path="agregarPlan/:dia/:categoria" />
                        <Route element={<h1>Not found!</h1>} />
                    </Routes>
                    <Footer />
                </ScrollToTop>
            </BrowserRouter>
        </div>
    );
};

export default injectContext(Layout);
