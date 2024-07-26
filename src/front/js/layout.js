import React from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import ScrollToTop from "./component/scrollToTop";
import { BackendURL } from "./component/backendURL";
import { Signup } from "./pages/Signup";
import { Login } from "./pages/Login";
import { Private } from "./pages/Private";



import { Home } from "./pages/home";
import { Demo } from "./pages/demo";
import { Single } from "./pages/single";
import { Hotcakes } from "./pages/Hotcakes"
import { Panfrances } from "./pages/Pan-frances"
import { Flannapolitano } from "./pages/FlanNapolitano"
import { Carlota } from "./pages/Carlota"
import { Brownie } from "./pages/Brownie"
import { ArrozConLeche } from "./pages/ArrozConLeche"
import { TresLeches } from "./pages/TresLeches";
import { Chilaquiles } from "./pages/Chilaquiles";
import { Enchiladas } from "./pages/Enchiladas";
import { PastaMarinera } from "./pages/PastaMarinera";
import { PapaGratinada } from "./pages/PapaGratinada";
import { AlamebreChampi } from "./pages/AlambredeChamp";
import { SalmonMantequilla } from "./pages/SalmonMante";
import { SardinaMexicana } from "./pages/Sardina-mexicana";
import { AlbondigasTocino } from "./pages/AlbondigasTocino";
import { PapasFritasMX } from "./pages/PapasFritasMx";
import { PalomitasChocolate } from "./pages/Palomitas-choco";
import { AlitasSalsaMango } from "./pages/AlitasMango";
import { BotanaDeCarnes } from "./pages/BotanaCarnes";
import { PizzaHawaiana } from "./pages/PizzaHawaiana";
import { Pizzamargarita } from "./pages/PizzaMargarita";
import { PizzaChicago } from "./pages/PizzaChicago";
import { PizzaParrillera } from "./pages/PizzaParrillera";
import { PizzaBurguer } from "./pages/PizzaBurguer";
import { HamburguesaTocino } from "./pages/HamburguesaTocino";
import { TortaPavo } from "./pages/TortaPavo";
import { HotDogPolaco } from "./pages/Hotdogpolaco";
import { PiñaColada } from "./pages/PiñaColada";
import { CheladaNorteña } from "./pages/CheladaNorteña";
import { AguaHorchata } from "./pages/AguaHorchata";
import { CoctelTomateTamarindo } from "./pages/CoctelTomate";
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



import { LasañaConChampiñones  } from "./pages/LasañaConChamp";
import { Desayunos } from "./pages/Desayunos";
import { Snacks } from "./pages/Snacks";
import { Pizzas } from "./pages/Pizzas";
import { FastFood } from "./pages/FastFood";
import { Bebidas } from "./pages/Bebidas";

import { Comidas } from "./pages/Comidas";
import { Cenas} from "./pages/Cenas";
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
                        <Route element={<Signup/>} path="/signup" />
                        <Route element={<Login/>} path="/login" />
                        <Route element={<Private/>} path="/private" />
                        <Route element={<Demo />} path="/demo" />
                        <Route element={<Chilaquiles />} path="/Chilaquiles" />
                        <Route element={<Enchiladas />} path="/enchiladas" />
                        <Route element={<PastaMarinera />} path="/PastaM" />
                        <Route element={<PapaGratinada />} path="/Papagratinada" />
                        <Route element={<AlamebreChampi />} path="/alambre" />
                        <Route element={<SalmonMantequilla />} path="/salmonMantequilla" />
                        <Route element={<SardinaMexicana />} path="/sardinamex" />
                        <Route element={<AlbondigasTocino />} path="/albondigaToci" />
                        <Route element={<Snacks />} path="/snacks" />
                        <Route element={<PapasFritasMX />} path="/papasfritasmx" />
                        <Route element={<PalomitasChocolate />} path="/palomitaschoco" />
                        <Route element={<AlitasSalsaMango />} path="/Alitasmango" />
                        <Route element={<BotanaDeCarnes />} path="/botanacarnes" />
                        <Route element={<Pizzas />} path="/pizzas" />
                        <Route element={<PizzaHawaiana />} path="/pizzahawaiana" />
                        <Route element={<Pizzamargarita />} path="/pizzamargarita" />
                        <Route element={<PizzaChicago />} path="/pizzachicago" />
                        <Route element={<PizzaParrillera />} path="/pizzaparrillera" />
                        <Route element={<FastFood />} path="/fastfood" />
                        <Route element={<PizzaBurguer />} path="/pizzaburguer" />
                        <Route element={<HamburguesaTocino />} path="/hamburguesatocino" />
                        <Route element={<TortaPavo />} path="/tortapavo" />
                        <Route element={<HotDogPolaco />} path="/hotdogpolaco" />
                        <Route element={<Bebidas />} path="/bebidas" />
                        <Route element={<PiñaColada />} path="/pinacolada" />
                        <Route element={<CheladaNorteña />} path="/cheladanortena" />
                        <Route element={<AguaHorchata />} path="/aguahorchata" />
                        <Route element={<CoctelTomateTamarindo />} path="/cocteltomatetamarindo" />
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
                        
                        
                        
                        <Route element={<LasañaConChampiñones  />} path="/lasagnaC" />
                        <Route element={<Hotcakes />} path="/Hotcakes" />
                        <Route element={<Flannapolitano  />} path="/FlanNapolitano" />
                        <Route element={<Carlota  />} path="/carlota" />
                        <Route element={<Brownie  />} path="/brownie" />
                        <Route element={<ArrozConLeche  />} path="/Arrozconleche" />
                        <Route element={<TresLeches />} path="/TresLeches" />
                        <Route element={<Panfrances />} path="/Panfrances" />
                        <Route element={<Omelettes/>} path="/omelette" />
                        <Route element={<Desayunos />} path="/desayunos" />
                        <Route element={<Cenas />} path="/cenas" />
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
