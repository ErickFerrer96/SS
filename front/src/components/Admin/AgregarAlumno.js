import React, { Component, useState, useContext } from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap/dist/js/bootstrap.js";
import "react-notifications-component/dist/theme.css";
import { Link } from "react-router-dom";
import alertacontext from "../../context/alerta/alertacontext";

const AgregarAlumno = () => {
  // extraer los valores del context
  const Alertacontext = useContext(alertacontext);
  const { alerta, mostrarAlerta } = Alertacontext;

  const [doctor, guardarDoctor] = useState({
    correo: "",
    contrasena: "",
    nombre: "",
    appa: "",
    apma: "",
    telefono: "",
    fecha_nacimiento: "",
    descripcion: "",
    direccion: "",
    sexo: "",
    foto: "",
  });

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
    descripcion,
    foto,
  } = doctor;

  const onChange = (e) => {
    guardarDoctor({
      ...doctor,
      [e.target.name]: e.target.value,
    });
  };

  const onsubmit = (e) => {
    e.preventDefault();
    const data = new FormData(e.target);
    fetch("http://localhost:5000/database/doctorNuevo", {
      method: "POST",
      body: data,
    });

    //Validar que no haya campos vacios
    if (
      correo.trim() === "" ||
      contrasena.trim() === "" ||
      nombre.trim() === "" ||
      appa.trim() === "" ||
      telefono.trim() === "" ||
      fecha_nacimiento.trim() === "" ||
      direccion.trim() === "" ||
      sexo.trim() === "" ||
      descripcion.trim() === ""
    ) {
      mostrarAlerta("Falta algún campo obligatorio", "alerta-error");
      return;
    }

    //Validar que contraseña sea mayor a 5 caracteres
    if (contrasena.length < 6) {
      mostrarAlerta(
        "El password debe ser de al menos 6 caracteres",
        "alerta-error"
      );
      return;
    }
  };

  return (
    <div class="main-wrapper">
      {alerta ? (
        <div className={`alerta ${alerta.categoria}`}>{alerta.msg}</div>
      ) : null}
      <div class="header">
        <div class="header-left">
          <a href="" class="logo">
            <img src="assets/img/logo.png" width="35" height="35" alt="" />{" "}
            <span>TT-2</span>
          </a>
        </div>
        <a id="toggle_btn" href="javascript:void(0);">
          <i class="fa fa-bars"></i>
        </a>
        <a id="mobile_btn" class="mobile_btn float-left" href="#sidebar">
          <i class="fa fa-bars"></i>
        </a>
        <ul class="nav user-menu float-right">
          <li class="nav-item dropdown d-none d-sm-block">
            <a href="#" class="dropdown-toggle nav-link" data-toggle="dropdown">
              <i class="fa fa-bell-o"></i>{" "}
              <span class="badge badge-pill bg-danger float-right">2</span>
            </a>
            <div class="dropdown-menu notifications">
              <div class="topnav-dropdown-header">
                <span>Notificaciones</span>
              </div>
              <div class="topnav-dropdown-footer">
                <a href="activities.html">Ver Todas Notificaciones</a>
              </div>
            </div>
          </li>
          <li class="nav-item dropdown d-none d-sm-block">
            <a
              href="javascript:void(0);"
              id="open_msg_box"
              class="hasnotifications nav-link"
            >
              <i class="fa fa-comment-o"></i>{" "}
              <span class="badge badge-pill bg-danger float-right">1</span>
            </a>
          </li>
          <li class="nav-item dropdown has-arrow">
            <a
              href="#"
              class="dropdown-toggle nav-link user-link"
              data-toggle="dropdown"
            >
              <span class="user-img">
                <img
                  class="rounded-circle"
                  src="assets/img/user.jpg"
                  width="40"
                  alt="Admin"
                />
                <span class="status online"></span>
              </span>
              <span>Admin</span>
            </a>
            <div class="dropdown-menu">
              <a class="dropdown-item" href="profile.html">
                Mi perfil
              </a>
              <a class="dropdown-item" href="edit-profile.html">
                Editar perfil
              </a>
              <a class="dropdown-item" href="settings.html">
                Configuración
              </a>
              <a class="dropdown-item" href="login.html">
                Salir
              </a>
            </div>
          </li>
        </ul>
      </div>
      <div class="sidebar" id="sidebar">
        <div class="sidebar-inner slimscroll">
          <div id="sidebar-menu" class="sidebar-menu">
          <ul>
                  <li class="menu-title">Indice</li>
                  <li class="active">
                    <Link to={"/MainAdmin"} className="enlace-cuenta">
                      <i class="fa fa-dashboard"></i> <span>Entradas</span>
                    </Link>
                  </li>
                  <li>
                    <Link to={"/VerAlumno"} className="enlace-cuenta">
                      <i class="fa fa-user-o"></i> <span>Alumnos</span>
                    </Link>
                  </li>
                  <li>
                    <Link to={"/"} className="enlace-cuenta">
                      <i class="fa fa-book"></i> <span>Cuestionarios</span>
                    </Link>
                  </li>
                </ul>
          </div>
        </div>
      </div>
      <div class="page-wrapper">
        <div class="content">
          <div class="row">
            <div class="col-lg-8 offset-lg-2">
              <h4 class="page-title">Agregar Alumno</h4>
            </div>
          </div>
          <div class="row">
            <div class="col-lg-8 offset-lg-2">
              <form onSubmit={onsubmit}>
                <div class="row">
                  <div class="col-sm-6">
                    <div class="form-group">
                      <label>
                        Primer nombre <span class="text-danger">*</span>
                      </label>
                      <input
                        class="form-control"
                        type="text"
                        id="nombre"
                        name="nombre"
                        placeholder="Nombre del alumno"
                        value={nombre}
                        onChange={onChange}
                      />
                    </div>
                  </div>
                  <div class="col-sm-6">
                    <div class="form-group">
                      <label>Apellido Paterno</label>
                      <input
                        class="form-control"
                        type="text"
                        id="appa"
                        name="appa"
                        placeholder="Apellido paterno del alumno"
                        value={appa}
                        onChange={onChange}
                      />
                    </div>
                  </div>
                  <div class="col-sm-6">
                    <div class="form-group">
                      <label>Apellido Materno</label>
                      <input
                        class="form-control"
                        type="text"
                        id="apma"
                        name="apma"
                        placeholder="Apellido materno del alumno (Opcional)"
                        value={apma}
                        onChange={onChange}
                      />
                    </div>
                  </div>
                  <div class="col-sm-6">
                    <div class="form-group">
                      <label>
                        Email <span class="text-danger">*</span>
                      </label>
                      <input
                        class="form-control"
                        type="email"
                        id="correo"
                        name="correo"
                        placeholder="Email del alumno"
                        value={correo}
                        onChange={onChange}
                      />
                    </div>
                  </div>
                  <div class="col-sm-6">
                    <div class="form-group">
                      <label>Contraseña</label>
                      <input
                        class="form-control"
                        type="password"
                        id="contrasena"
                        name="contrasena"
                        placeholder="Contraseña del alumno"
                        value={contrasena}
                        onChange={onChange}
                      />
                    </div>
                  </div>
                  <div class="col-sm-6">
                    <div class="form-group gender-select">
                      <label class="gen-label">Genero:</label>
                      <div class="form-check-inline">
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
                      </div>
                      <div class="form-check-inline">
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
                    </div>
                  </div>
                  <div class="col-sm-6">
                    <div class="form-group">
                      <label>Telefono </label>
                      <input
                        class="form-control"
                        type="tel"
                        id="telefono"
                        name="telefono"
                        placeholder="Telefono del alumno"
                        value={telefono}
                        onChange={onChange}
                      />
                    </div>
                  </div>
                  <div class="col-sm-6">
                    <div class="form-group">
                      <label>Foto</label>
                      <div class="profile-upload">
                        <div class="upload-img">
                          <img alt="" src="assets/img/user.jpg" />
                        </div>
                        <div class="upload-input">
                          <input
                            type="file"
                            id="foto"
                            name="foto"
                            placeholder="Fotografía (opcional)"
                            value={foto}
                          />
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
                <div class="m-t-20 text-center">
                  <input
                    type="submit"
                    className="btn btn-primario btn-block"
                    value="Registrar Alumno"
                  />
                </div>
              </form>
            </div>
          </div>
        </div>
        <div class="notification-box">
          <div className="msg-sidebar notifications msg-noti">
            {/*Aquí comienza la ventanita de mensajes*/}

            <div className="topnav-dropdown-header">
              <span>Messages</span>
            </div>
            <div className="drop-scroll msg-list-scroll" id="msg_list">
              <ul className="list-box">
                {/* Colocar Aqui los mensajes */}

                <li>
                  <a href="chat.html">
                    <div class="list-item">
                      <div class="list-left">
                        <span class="avatar">R</span>
                      </div>
                    </div>
                  </a>
                </li>
              </ul>
            </div>
            <div className="topnav-dropdown-footer">
              <a href="chat.html">See all messages</a>
            </div>
          </div>
        </div>
      </div>
      <div class="sidebar-overlay" data-reff=""></div>
      <script src="assets/js/jquery-3.2.1.min.js"></script>
      <script src="assets/js/popper.min.js"></script>
      <script src="assets/js/bootstrap.min.js"></script>
      <script src="assets/js/jquery.slimscroll.js"></script>
      <script src="assets/js/select2.min.js"></script>
      <script src="assets/js/moment.min.js"></script>
      <script src="assets/js/bootstrap-datetimepicker.min.js"></script>
      <script src="assets/js/app.js"></script>
    </div>
  );
};

export default AgregarAlumno;
