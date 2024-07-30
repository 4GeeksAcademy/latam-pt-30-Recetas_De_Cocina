import React, { useContext } from "react";
import { Link } from "react-router-dom";
import { Context } from "../store/appContext";




export const DesayunoDetails = () => {
	const { store, actions } = useContext(Context);
    const { uid } = useParams();

    useEffect(() => {
        actions.getDesayunosDetails(uid);
    }, [uid]);

    const desayunos = store.desayunosdetails;
    const properties = store.singleDesayunosDetails;

    if (!desayunos) return <div>Loading...</div>;


	return (
		<div className="container-fluid   d-flex flex-column justify-content-center" style={{ minHeight: "100vh" }}>
                    <div className="row border-bottom border-2 pb-4 border-danger py-5">
                        <div className="col-md-6">
                        <img src={``} alt="Desayunos" className="img-fluid rounded" />
                        </div>
                        <div className="col-md-6 text-center d-flex flex-column justify-content-center">
                    <h1><strong>{properties.name}</strong></h1>
                    <p><strong>{desayunos.description}</strong></p>
                    
                    


<div className="container">
<div className="card text-white bg-success mb-3" >
<div className="card-body">
<h1><strong>{desayunos.pasos}</strong></h1>
                    
</div>
</div>
</div>

                    

<div className="container">
<div className="card text-white bg-danger mb-3" >
<div className="card-body">
<h3><strong>{desayunos.infonutri}</strong></h3>

</div>
</div>
</div>

<p></p>

<Link to="/desayunos">
				<button className="btn btn-secondary bg-dark">Regresar</button>
			</Link>

                </div>
                </div>
                </div>
	);
};