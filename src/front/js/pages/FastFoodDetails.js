import React, { useContext } from "react";
import { Link } from "react-router-dom";
import { Context } from "../store/appContext";




export const FastFoodDetails = () => {
	const { store, actions } = useContext(Context);
    const { uid } = useParams();

    useEffect(() => {
        actions.getFastFoodDetails(uid);
    }, [uid]);

    const fastfood = store.fastfooddetails;
    const properties = store.singleFastFoodDetails;

    if (!fastfood) return <div>Loading...</div>;


	return (
		<div className="container-fluid   d-flex flex-column justify-content-center" style={{ minHeight: "100vh" }}>
                    <div className="row border-bottom border-2 pb-4 border-danger py-5">
                        <div className="col-md-6">
                        <img src={``} alt="fastfood" className="img-fluid rounded" />
                        </div>
                        <div className="col-md-6 text-center d-flex flex-column justify-content-center">
                    <h1><strong>{properties.name}</strong></h1>
                    <p><strong>{fastfood.description}</strong></p>
                    
                    


<div className="container">
<div className="card text-white bg-success mb-3" >
<div className="card-body">
<h1><strong>{fastfood.pasos}</strong></h1>
                    
</div>
</div>
</div>

                    

<div className="container">
<div className="card text-white bg-danger mb-3" >
<div className="card-body">
<h3><strong>{fastfood.infonutri}</strong></h3>

</div>
</div>
</div>

<p></p>

<Link to="/">
				<button className="btn btn-secondary bg-dark">Regresar</button>
			</Link>

                </div>
                </div>
                </div>
	);
};