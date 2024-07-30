import React, { useContext } from "react";
import { Link } from "react-router-dom";
import { Context } from "../store/appContext";




export const BebidasDetails = () => {
	const { store, actions } = useContext(Context);
    const { uid } = useParams();

    useEffect(() => {
        actions.getBebidasDetails(uid);
    }, [uid]);

    const Bebidas = store.bebidasdetails;
    const properties = store.singleBebidasDetails;

    if (!Bebidas) return <div>Loading...</div>;


	return (
		<div className="container-fluid   d-flex flex-column justify-content-center" style={{ minHeight: "100vh" }}>
                    <div className="row border-bottom border-2 pb-4 border-danger py-5">
                        <div className="col-md-6">
                        <img src={``} alt="Bebidas" className="img-fluid rounded" />
                        </div>
                        <div className="col-md-6 text-center d-flex flex-column justify-content-center">
                    <h1><strong>{properties.name}</strong></h1>
                    <p><strong>{Bebidas.description}</strong></p>
                    
                    


<div className="container">
<div className="card text-white bg-success mb-3" >
<div className="card-body">
<h1><strong>{Bebidas.pasos}</strong></h1>
                    
</div>
</div>
</div>

                    

<div className="container">
<div className="card text-white bg-danger mb-3" >
<div className="card-body">
<h3><strong>{Bebidas.infonutri}</strong></h3>

</div>
</div>
</div>

<p></p>

<Link to="/bebidas">
				<button className="btn btn-secondary bg-dark">Regresar</button>
			</Link>

                </div>
                </div>
                </div>
	);
};