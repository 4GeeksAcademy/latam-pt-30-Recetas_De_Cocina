import React from "react";

export const Registro = () => {
    return (
        <form id="formsign" class="col-3">
  <div class="mb-3">
    <label for="exampleInputEmail1" class="form-label">Correo electrónico</label>
    <input type="email" class="form-control" id="exampleInputEmail1" aria-describedby="emailHelp"/>
    <div id="emailHelp" class="form-text">Nunca compartiremos su correo electrónico con nadie más.</div>
  </div>
  <div class="mb-3">
    <label for="exampleInputPassword1" class="form-label">Contraseña</label>
    <input type="password" class="form-control" id="exampleInputPassword1"/>
    </div>
  <button type="submit" class="btn btn-primary">Enviar</button>
</form>
    )
}