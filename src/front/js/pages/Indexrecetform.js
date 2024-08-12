import React from "react";
import ReactDOM from "react-dom/client";
import React, { useState, useEffect, useContext } from "react";
import { Link, useNavigate } from "react-router-dom";

import { RecetaForm } from "../pages/FormReceta";

//ReactDOM.render(<App />, document.getElementById("root"));
const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
    <RecetaForm/>
);