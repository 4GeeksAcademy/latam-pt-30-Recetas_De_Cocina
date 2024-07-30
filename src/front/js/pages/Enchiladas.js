import React, { useContext } from "react";
import { Link } from "react-router-dom";
import { Context } from "../store/appContext";
import enchiladas from "../../img/enchiladas.jpg";


export const Enchiladas = () => {
    const { store, actions } = useContext(Context);

    return (
        <div className="container-fluid   d-flex flex-column justify-content-center" style={{ minHeight: "100vh" }}>
            <div className="row border-bottom border-2 pb-4 border-danger py-5">
                <div className="col-md-6">
                    <img src={enchiladas} className="img-fluid  rounded-circle" style={{ maxWidth: "50rem", maxHeight: "50rem" }} />
                </div>
                <div className="col-md-6 text-center d-flex flex-column justify-content-center">
                    <h1><strong>Enchiladas Suizas</strong></h1>
                    <p><strong>Ingredientes</strong></p>

                    <p>500 Gramos de Tomates verdes cocidos .</p>
                    <p>1 Chile serrano cocido .</p>
                    <p>2 Dientes de Ajo. </p>
                    <p>1/4 Pieza de Cebolla.</p>
                    <p> 1 Cucharada de Consomé de pollo en polvo .</p>
                    <p> 1 Lata de Leche Evaporada (1 1/2 tazas) . </p>
                    <p> 1/2 Taza de Queso parmesano en polvo . </p>
                    <p>6 Ramitas de Cilantro fresco desinfectadas . </p>
                    <p>1 Cucharada de Fécula de maíz </p>
                    <p>1/4 Taza de Agua  </p>
                    <p>1 Pechuga de pollo cocida y deshebrada  </p>
                    <p>12 Tortillas de maíz. </p>
                    <p>1/4 Taza de Aceite de maíz . </p>
                    <p>200 Gramos de Queso tipo manchego rallado . </p>
                    <p>1/2 Cebolla morada picada finamente. </p>
                    <p>1 Envase de Media Crema refrigerada (190 g). </p>


                    <div className="container">
                        <div className="card text-white bg-success mb-3" >
                            <div className="card-body">
                                <h1><strong>Pasos</strong></h1>
                                <p><strong>Licúa</strong></p>
                                <p>
                                    1.  Licúa los tomates verdes con el chile serrano,
                                    2 dientes de ajo, ¼ pieza de cebolla, el consomé de pollo,
                                    la Leche Evaporada, el queso parmesano y 6 ramas de cilantro;
                                    calienta a fuego medio durante 5 minutos. Disuelve la fécula de maíz en el agua,
                                    agrega a la salsa y calienta por 5 minutos más o hasta que espese ligeramente,
                                    moviendo constantemente para evitar que se pegue.
                                </p>
                                <p><strong>Fríe</strong></p>
                                <p>2.  Calienta un poco de aceite en una sartén y fríe ligeramente las tortillas sin que endurezcan,
                                    retira y coloca sobre papel absorbente. Rellena las tortillas con pollo, sirve 3 piezas en un plato y baña con la salsa.</p>
                                <p><strong>Sirve</strong></p>
                                <p>
                                    3. Coloca un poco de queso sobre las enchiladas,
                                    cubre con plástico adherente y calienta en el microondas por 30 segundos o hasta que el queso esté fundido. Decora con un poco de cebolla morada y Media Crema.
                                </p>
                            </div>
                        </div>
                    </div>



                    <div className="container">
                        <div className="card text-white bg-danger mb-3" >
                            <div className="card-body">
                                <h3><strong>Informacion nutricional</strong></h3>
                                <p>948.3 kcal = 3,966kj /por porción /por porción</p>
                                <p><strong>Carbohidratos:</strong>  46.2 g <strong>Energía:</strong>  948.3 kcal</p>
                                <p><strong>Grasas:</strong>   57 g   <strong>Fibras:</strong>   5.1 g</p>
                                <p><strong>Proteinas:</strong> 62.6 g  <strong>Grasas saturadas:</strong>    26.4 g </p>
                                <p><strong>Sodio:</strong>  1114.3 mg   <strong>Azucares:</strong>    18.6 g </p>
                            </div>
                        </div>
                    </div>

                    <p></p>

                    <Link to="/comidas">
                        <button className="btn btn-secondary bg-dark">Regresar</button>
                    </Link>

                </div>
            </div>
        </div>
    );
};
