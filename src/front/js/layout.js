import React from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import ScrollToTop from "./component/scrollToTop";
import { BackendURL } from "./component/backendURL";


import { Home } from "./pages/home";
import { Demo } from "./pages/demo";
import { Single } from "./pages/single";
import { Hotcakes } from "./pages/Hotcakes"
import { Panfrances } from "./pages/Pan-frances"
import { Flannapolitano } from "./pages/FlanNapolitano"
import { Carlota } from "./pages/Carlota"
import { Brownie } from "./pages/Brownie"
import { ArrozConLeche } from "./pages/ArrozConLeche"
import { Chilaquiles } from "./pages/Chilaquiles";
import { Enchiladas } from "./pages/Enchiladas";

import { LasañaConChampiñones  } from "./pages/LasañaConChamp";
import { Desayunos } from "./pages/Desayunos";
import { Comidas } from "./pages/Comidas";
import { Postre } from "./pages/Postres";
import { Omelettes } from "./pages/Omelette";


import injectContext from "./store/appContext";
import { Navbar } from "./component/navbar";
import { Footer } from "./component/footer";


//create your first component
const Layout = () => {
    //the basename is used when your project is published in a subdirectory and not in the root of the domain
    // you can set the basename on the .env file located at the root of this project, E.g: BASENAME=/react-hello-webapp/
    const basename = process.env.BASENAME || "";

    if(!process.env.BACKEND_URL || process.env.BACKEND_URL == "") return <BackendURL/ >;

    return (
        <div>
            <BrowserRouter basename={basename}>
                <ScrollToTop>
                    <Navbar />
                    <Routes>
                        <Route element={<Home />} path="/" />
                        <Route element={<Demo />} path="/demo" />
                        <Route element={<Chilaquiles />} path="/Chilaquiles" />
                        <Route element={<Enchiladas />} path="/enchiladas" />
                        
                        <Route element={<LasañaConChampiñones  />} path="/lasañaC" />
                        <Route element={<Hotcakes />} path="/Hotcakes" />
                        <Route element={<Flannapolitano  />} path="/FlanNapolitano" />
                        <Route element={<Carlota  />} path="/carlota" />
                        <Route element={<Brownie  />} path="/brownie" />
                        <Route element={<ArrozConLeche  />} path="/Arrozconleche" />
                        <Route element={<Panfrances />} path="/Panfrances" />
                        <Route element={<Omelettes/>} path="/omelette" />
                        <Route element={<Desayunos />} path="/desayunos" />
                        <Route element={<Comidas />} path="/comidas" />
                        <Route element={<Postre />} path="/postres" />
                        <Route element={<Single />} path="/single/:theid" />
                        <Route element={<h1>Not found!</h1>} />
                    </Routes>
                    <Footer />
                </ScrollToTop>
            </BrowserRouter>
        </div>
    );
};

export default injectContext(Layout);
