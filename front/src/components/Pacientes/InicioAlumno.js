import React, { Component, useState } from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap/dist/js/bootstrap.js";
import "react-notifications-component/dist/theme.css";
import Calendar from "react-calendar";
import { Link } from "react-router-dom";
//import Select from "react-select";

class InicioAlumno extends Component {

  constructor(props) {
    super(props);
    this.state = { doctores: [], isLoading: true };
  }

  componentDidMount() {
    this.setState({ isLoading: true });

    fetch("http://localhost:5000/database/doctorTodos")
      .then((response) => response.json())
      .then((data) => this.setState({ doctores: data, isLoading: false }));
  }

  render() {



    const { horario ,correo, doctores, isLoading } = this.state;

   

    const SelectDoctor = (e) => {
      e.preventDefault();
    
    }

    const crearCita = (e) => {
      e.preventDefault();
      
    }

    const DoctoresList = doctores.map((doctor) => {
      return (
        <div class="row doctor-grid">
          <div class="col-md-4 col-sm-4  col-lg-3">
            <div class="profile-widget">
              <div class="doctor-img">
                <a class="avatar">
                  <img alt="" src={doctor.foto} />
                </a>
              </div>
              <div class="dropdown profile-action">
                <a
                  href="#"
                  class="action-icon dropdown-toggle"
                  data-toggle="dropdown"
                  aria-expanded="false"
                >
                  <i class="fa fa-ellipsis-v"></i>
                </a>
                <div class="dropdown-menu dropdown-menu-right">
                <a
                    data-toggle="modal"
                    data-target="#EscogerDoctor"
                    class="dropdown-item"
                  >
                    <i class="fa fa-pencil m-r-5"></i> Seleccionar doctor
                  </a>
                  <a
                    data-toggle="modal"
                    data-target="#add_event"
                    class="dropdown-item"
                  >
                    <i class="fa fa-pencil m-r-5"></i> Agendar Cita
                  </a>
                </div>
                
              </div>
              <h4 class="doctor-name text-ellipsis">
                <a>{doctor.nombre}</a>
              </h4>
              <div class="doc-prof">{doctor.descripcion}</div>
              <div class="doc-prof">{doctor.telefono}</div>
              <div class="doc-prof">{doctor.correo}</div>
              <div class="user-country">
                <i class="fa fa-map-marker"></i> {doctor.direccion}
              </div>
            </div>
          </div>
          <div id="add_event" class="modal fade" role="dialog">
            <div class="modal-dialog">
              <div class="modal-content modal-md">
                <div class="modal-header">
                  <h4 class="modal-title">Cita</h4>
                  <button type="button" class="close" data-dismiss="modal">
                    &times;
                  </button>
                </div>
                <div class="modal-body">
                  <form onSubmit={crearCita}>
                    <div class="form-group">
                    </div>
                    <div class="form-group">
                      <label>
                        {" "}
                        Fecha y hora <span class="text-danger">*</span>
                      </label>
                      <div class="cal-icon">
                        <input
                          class="form-control datetimepicker"
                          type="datetime-local"
                          name="horario"
                          placeholder="El horario de su cita"
                          value={horario}
                        />
                      </div>
                    </div>
                    <div class="m-t-20 text-center">
                    <div className="campo-form">
                        <input type="submit" className="btn btn-primario btn-block"
                        value ="Crear cita"/>
                    </div>
                    </div>
                  </form>
                </div>
              </div>
            </div>
          </div>
          <div id="EscogerDoctor" class="modal fade" role="dialog">
            <div class="modal-dialog">
              <div class="modal-content modal-md">
                <div class="modal-header">
                  <h4 class="modal-title">Doctor a escoger</h4>
                  <button type="button" class="close" data-dismiss="modal">
                    &times;
                  </button>
                </div>
                <div class="modal-body">
                  <form onSubmit={SelectDoctor}>
                    <div class="form-group">
                      <label>
                        Correo del doctor: <span class="text-danger">*</span>
                      </label>
                      <div>
                      <input
                            type="text"
                            id="correo"
                            name="correo"
                            placeholder="correo del doctor"
                            value={correo}
                        />
                      </div>
                    </div>
                    <div className="campo-form">
                        <input type="submit" className="btn btn-primario btn-block"
                        value ="Confirmar doctor"/>
                    </div>
                  </form>
                </div>
              </div>
            </div>
          </div>
        </div>
      );
    });

    return (
      <div class="main-wrapper">
        <div class="header">
          <div class="header-left">
            <a href="index-2.html" class="logo">
              
              <span>Servicio</span>
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
              <a
                href="#"
                class="dropdown-toggle nav-link"
                data-toggle="dropdown"
              >
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
                <span>Alumno</span>
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
                <li>
                  <Link to={"/VerCitas"} className="enlace-cuenta">
                    <i class="fa fa-user"></i> <span>Calificaciones</span>
                  </Link>
                </li>
                <li>
                  <Link to={"/Cuestionario"} className="enlace-cuenta">
                    <i class="fa fa-user-md"></i>{" "}
                    <span>Cuestionario 1</span>
                  </Link>
                </li>
                <li>
                  <Link to={"/CuestionarioMujer"} className="enlace-cuenta">
                    <i class="fa fa-user-md"></i>{" "}
                    <span>Cuestionario 2</span>
                  </Link>
                </li>
              </ul>
            </div>
          </div>
        </div>
        <div class="page-wrapper">
          <div class="content">
            <div class="row">
              <div class="col-sm-4 col-3">
                <h4 class="page-title">Bienvenido alumno</h4>
              </div>
            </div>
            <div class="col">
              <div class="col-sm-12">{DoctoresList}</div>
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
  }
}

export default InicioAlumno;
