import React from "react";

export const Registro = () => {
    return (
      <React.Fragment>
      <div className="containerLogin">
          <div className="h2Login">
              <h2> LOGIN </h2>
          </div>
          <form className="formLogin" onSubmit={handleSubmit}>
              <div className="col-12 row">
                  <div>
                      <label>Email:</label>
                      <input 
                      type="email"
                      value={email}
                      onChange={(event) => setEmail(event.target.value)}
                      />
                  </div>

                  <div>
                      <label>Password:</label>
                      <input 
                      type="password"
                      value={password}
                      onChange={(event) => setPassword(event.target.value)}
                      />
                  </div>
              </div>
              <div className="buttonLogin">
                  <button type="submit"> Login </button>
              </div>
          </form>    
      </div>   
       </React.Fragment>
    )
}