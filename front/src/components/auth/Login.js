import React, { useState } from "react";
import { Link } from "react-router-dom";

const Login = (props) => {
  //State pare iniciar sesion

  const [usuario, guardarUsuario] = useState({
    correo: "",
    contrasena: "",
  });

  //Extraer usuario

  const { correo, contrasena } = usuario;

  const onChange = (e) => {
    guardarUsuario({
      ...usuario,
      [e.target.name]: e.target.value,
    });
  };

  //Cuando requiera iniciar sesión

  const handleLogin = (e) => {
    e.preventDefault();
  
  } 

  return (
    <div className="form-usuario">
      <div className="contenedor-form sombra-dark">
        <h1>Iniciar sesión</h1>

        <form onSubmit={handleLogin}>
          <div className="campo-form">
            <label htmlFor="email">Correo</label>
            <input
              type="email"
              id="correo"
              name="correo"
              placeholder="Tu correo"
              value={correo}
              onChange={onChange}
            />
          </div>
          <div className="campo-form">
            <label htmlFor="password">Contraseña</label>
            <input
              type="password"
              id="contrasena"
              name="contrasena"
              placeholder="Tu contraseña"
              value={contrasena}
              onChange={onChange}
            />
          </div>

          <div className="campo-form">
            <input
              type="submit"
              className="btn btn-primario btn-block"
              value="Iniciar Sesión"
            />
          </div>
        </form>

        <Link to={"/NuevaCuenta"} className="enlace-cuenta">
          Obtener cuenta nueva
        </Link>
      </div>
    </div>
  );
};

export default Login;
