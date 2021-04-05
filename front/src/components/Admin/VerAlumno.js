import React, { Component, useState } from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap/dist/js/bootstrap.js";
import "react-notifications-component/dist/theme.css";
import { Link } from "react-router-dom";

class VerAlumno extends Component {
  
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

    
    const { doctores } = this.state;


    const DoctoresList = doctores.map((doctor) => {
      return (
        <div class="row doctor-grid" key={doctor.id}>
          <div class="col-md-4 col-sm-4  col-lg-3">
            <div class="profile-widget">
              <div class="doctor-img">
                <a class="avatar" href="profile.html">
                  <img alt="" src={doctor.foto}  />
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
                  <a class="dropdown-item" href="edit-doctor.html">
                    <i class="fa fa-pencil m-r-5"></i>Eliminar
                  </a>
                  <Link to={"/UpdateDoctor"} className="enlace-cuenta">
                  <a class="dropdown-item" href="edit-doctor.html">
                    <i class="fa fa-pencil m-r-5"></i>Editar
                  </a>
                  </Link>
                </div>
              </div>
              <h4 class="doctor-name text-ellipsis">
                <a href="profile.html">{doctor.nombre}</a>
              </h4>
              <div class="doc-prof">{doctor.descripcion}</div>
              <div class="doc-prof">{doctor.telefono}</div>
              <div class="doc-prof">{doctor.correo}</div>
              <div class="user-country">
                <i class="fa fa-map-marker"></i> {doctor.direccion}
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
              <span>Servicio social</span>
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
              <div class="col-sm-4 col-3">
                <h4 class="page-title">Alumnos</h4>
              </div>
              <div class="col-sm-8 col-9 text-right m-b-20">
                <Link to={"/AgregarAlumno"} className="enlace-cuenta">
                  <i class="btn btn-primary btn-rounded float-right">
                    <span>Agregar Alumno</span>
                  </i>
                </Link>
              </div>
            </div>
            {DoctoresList}
            <div class="row">
              <div class="col-sm-12">
                <div class="see-all">
                  <a class="see-all-btn" href="javascript:void(0);">
                    Cargar más
                  </a>
                </div>
              </div>
            </div>
          </div>
          <div class="notification-box">
            
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

export default VerAlumno;
