import React, { useState } from "react"
import { useContext } from "react"
import { Context } from "../store/appContext"
import { Link, useNavigate } from "react-router-dom"

export const Login = () => {
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("")
    const { actions } = useContext(Context)
    const navigate = useNavigate()


    const handleSubmit = async (event) => {
        event.preventDefault() 
        const success = await actions.login(email, password)
        if (success) {
            navigate("/private")
        } else {
            console.error("Failed to log in")
        }
    }
    
    return (
        <React.Fragment>
        <div className="container  my-5 ">
        <div className="row justify-content-center">
        <div className="col-md-3">
        <div class="card bg-dark text-white">
        <div class="card-body ">
            <div className="container-fluid  text-center">
            <div class="card-header"><h4><strong>Login</strong></h4></div>
            </div>
            <form className="formLogin" onSubmit={handleSubmit}>
                <div className="col row justify-content-center">
                    <div className="text-center">
                        <label>Email:</label>
                        <p></p>
                        <input 
                        type="email"
                        value={email}
                        onChange={(event) => setEmail(event.target.value)}
                        />
                    </div>
                    <p></p>
                    <div className="text-center">
                        <label>Password:</label>
                        <p></p>
                        <input 
                        type="password"
                        value={password}
                        onChange={(event) => setPassword(event.target.value)}
                        />
                    </div>
                </div>
                <p></p>
                <div className="buttonLogin text-center">
                    <button type="submit">Login</button>
                </div>
                
            </form>    
            </div>
				 </div>
                 </div>
				 </div>

                 <div className="buttonSignup text-center">
                    <Link to="/signup">Sign Up</Link>
                </div>
			

        </div>   


        
         </React.Fragment>
    )
}