import React, { useState, useContext } from "react";
import { Link } from "react-router-dom";
import alertacontext from '../../context/alerta/alertacontext'

const NuevaCuenta = () => {

  // extraer los valores del context
  const Alertacontext = useContext(alertacontext);
  const { alerta, mostrarAlerta } = Alertacontext;

  // Guardar usuario

  const [usuario, guardarUsuario] = useState({
    correo: "",
    contrasena: "",
    nombre: "",
    appa: "",
    apma: "",
    telefono: "",
    fecha_nacimiento: "",
    confirmar: "",
    direccion: "",
    sexo: "",
    foto: "",
  });

  //Extraer usuario y sus atributos

  const {
    correo,
    contrasena,
    nombre,
    appa,
    apma,
    telefono,
    fecha_nacimiento,
    direccion,
    sexo,
    confirmar,
    foto,
  } = usuario;

  const onChange = (e) => {
    guardarUsuario({
      ...usuario,
      [e.target.name]: e.target.value,
    });
  };

  //Cuando requiera iniciar sesión

  const onsubmit = (e) => {
    e.preventDefault();
    const data = new FormData(e.target);
    fetch("http://localhost:5000/database/pacienteNuevo", {
      method: "POST",
      body: data,
    });

    //Validar que no haya campos vacios
    if( correo.trim()=== '' || 
        contrasena.trim() === '' ||
        nombre.trim()=== '' || 
        appa.trim()=== '' || 
        telefono.trim()=== '' || 
        fecha_nacimiento.trim()=== '' || 
        direccion.trim()=== '' || 
        sexo.trim()=== '' || 
        confirmar.trim()=== '' ){
            mostrarAlerta('Falta algún campo obligatorio','alerta-error');
            return;
        }

    //Validar que contraseña sea mayor a 5 caracteres
    if(contrasena.length<6){
        mostrarAlerta('El password debe ser de al menos 6 caracteres','alerta-error');
        return;
    }
    //Passwords iguales
    if(contrasena !== confirmar){
        mostrarAlerta('Son diferentes los passwords','alerta-error');
        return;
    }
    
    //Pasar al action
  };

  return (
    <div className="form-usuario">
      {alerta ? (<div className={`alerta ${alerta.categoria}`}>{alerta.msg}</div>) : null}
      <div className="contenedor-form sombra-dark">
        <h1>Nueva Cuenta</h1>

        <form onSubmit={onsubmit}>
          <div className="campo-form">
            <label htmlFor="nombre">Nombre</label>
            <input
              type="Text"
              id="nombre"
              name="nombre"
              placeholder="Tu nombre"
              value={nombre}
              onChange={onChange}
            />
          </div>
          <div className="campo-form">
            <label htmlFor="appa">Apellido Paterno</label>
            <input
              type="Text"
              id="appa"
              name="appa"
              placeholder="Tu Apellido Paterno"
              value={appa}
              onChange={onChange}
            />
          </div>
          <div className="campo-form">
            <label htmlFor="apma">Apellido Materno</label>
            <input
              type="Text"
              id="apma"
              name="apma"
              placeholder="Tu Apellido Materno (Opcional)"
              value={apma}
              onChange={onChange}
            />
          </div>
          <div className="campo-form">
            <label htmlFor="fecha_nacimiento">Fecha de nacimiento</label>
            <input
              type="date"
              id="fecha_nacimiento"
              name="fecha_nacimiento"
              placeholder="Tu fecha de nacimiento"
              value={fecha_nacimiento}
              onChange={onChange}
            />
          </div>
          <div className="campo-form">
            <label htmlFor="correo">Email</label>
            <input
              type="email"
              id="correo"
              name="correo"
              placeholder="Tu email"
              value={correo}
              onChange={onChange}
            />
          </div>
          <div className="campo-form">
            <label htmlFor="telefono">Telefono</label>
            <input
              type="tel"
              id="telefono"
              name="telefono"
              placeholder="Tu Telefono"
              value={telefono}
              onChange={onChange}
            />
          </div>
          <div className="campo-form">
            <label htmlFor="direccion">Dirección</label>
            <input
              type="Text"
              id="direccion"
              name="direccion"
              placeholder="Tu dirección"
              value={direccion}
              onChange={onChange}
            />
          </div>
          <div className="campo-form">
            <label htmlFor="sexo">Sexo</label>
            <label class="form-check-label">
              <input
                type="radio"
                name="sexo"
                class="form-check-input"
                value="M"
                onChange={onChange}
              />
              Masculino
            </label>
            <label class="form-check-label">
              <input
                type="radio"
                name="sexo"
                class="form-check-input"
                value="F"
                onChange={onChange}
              />
              Femenino
            </label>
          </div>
          <div className="campo-form">
            <label htmlFor="foto">Foto</label>
            <div class="upload-img">
              <img alt="" src="assets/img/user.jpg" />
            </div>
            <input
              type="file"
              id="foto"
              name="foto"
              placeholder="Fotografía (opcional)"
              value={foto}
              onChange={onChange}
            />
          </div>
          <div className="campo-form">
            <label htmlFor="contrasena">Password</label>
            <input
              type="password"
              id="contrasena"
              name="contrasena"
              placeholder="Password"
              value={contrasena}
              onChange={onChange}
            />
          </div>
          <div className="campo-form">
            <label htmlFor="confirmar">Confirmar password</label>
            <input
              type="password"
              id="confirmar"
              name="confirmar"
              placeholder="Repite tu password"
              value={confirmar}
              onChange={onChange}
            />
          </div>
          <div className="campo-form">
            <input
              type="submit"
              className="btn btn-primario btn-block"
              value="Registrarme"
            />
          </div>
        </form>

        <Link to={"/"} className="enlace-cuenta">
          Regresar
        </Link>
      </div>
    </div>
  );
};

export default NuevaCuenta;
