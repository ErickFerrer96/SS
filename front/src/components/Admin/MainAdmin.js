import React, { Component, useState } from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap/dist/js/bootstrap.js";
import "react-notifications-component/dist/theme.css";
import { Link } from "react-router-dom";

class MainAdmin extends Component {
  render() {
    return (
      <div>
        <div className="main-wrapper">
          <div className="header">
            <div className="header-left">
              <a href="index-2.html" className="logo">
                
                <span>Servicio Social</span>
              </a>
            </div>
            <a id="toggle_btn" href="javascript:void(0);">
              <i className="fa fa-bars"></i>
            </a>
            <a
              id="mobile_btn"
              className="mobile_btn float-left"
              href="#sidebar"
            >
              <i className="fa fa-bars"></i>
            </a>
            <ul className="nav user-menu float-right">
              <li className="nav-item dropdown d-none d-sm-block">
                <a
                  href="#"
                  className="dropdown-toggle nav-link"
                  data-toggle="dropdown"
                >
                  <i className="fa fa-bell-o"></i>{" "}
                  <span className="badge badge-pill bg-danger float-right">
                    3
                  </span>
                </a>
                <div className="dropdown-menu notifications">
                  <div className="topnav-dropdown-header">
                    <span>Notificaciones</span>
                  </div>
                  <div className="topnav-dropdown-footer">
                    <a href="activities.html">Ver Todas</a>
                  </div>
                </div>
              </li>
              <li className="nav-item dropdown d-none d-sm-block">
                <a
                  href="javascript:void(0);"
                  id="open_msg_box"
                  className="hasnotifications nav-link"
                >
                  <i className="fa fa-comment-o"></i>{" "}
                  <span className="badge badge-pill bg-danger float-right">
                    1
                  </span>
                </a>
              </li>
              <li className="nav-item dropdown has-arrow">
                <a
                  href="#"
                  className="dropdown-toggle nav-link user-link"
                  data-toggle="dropdown"
                >
                  <span className="user-img">
                    <img
                      className="rounded-circle"
                      src="assets/img/user.jpg"
                      width="40"
                      alt="Admin"
                    />
                    <span className="status online"></span>
                  </span>
                  <span>Admin</span>
                </a>
                <div className="dropdown-menu">
                  <p className="dropdown-item" as="button" href="profile.html">
                    Mi perfil
                  </p>
                  <p className="dropdown-item" href="edit-profile.html">
                    Editar perfil
                  </p>
                  <p className="dropdown-item" href="settings.html">
                    Configuración
                  </p>
                  <p className="dropdown-item" href="login.html">
                    Salir
                  </p>
                </div>
              </li>
            </ul>
          </div>
          <div className="sidebar" id="sidebar">
            <div className="sidebar-inner slimscroll">
              <div id="sidebar-menu" className="sidebar-menu">
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
          <div className="page-wrapper">
            <div className="content">
              <div className="row">
                <div className="col-md-6 col-sm-6 col-lg-6 col-xl-3">
                  </div>
                <div className="col-md-6 col-sm-6 col-lg-6 col-xl-3">
                  <div className="dash-widget">
                    <span className="dash-widget-bg2">
                      <i className="fa fa-user-o"></i>
                    </span>
                    <div className="dash-widget-info text-right">
                      <h3>20</h3>
                      <span className="widget-title2">
                        Alumnos{" "}
                        <i className="fa fa-check" aria-hidden="true"></i>
                      </span>
                    </div>
                  </div>
                </div>
                <div className="col-md-6 col-sm-6 col-lg-6 col-xl-3">
                  <div className="dash-widget">
                    <span className="dash-widget-bg4">
                      <i className="fa fa-book" aria-hidden="true"></i>
                    </span>
                    <div className="dash-widget-info text-right">
                      <h3>1</h3>
                      <span className="widget-title4">
                        Cuesionarios{" "}
                        <i className="fa fa-check" aria-hidden="true"></i>
                      </span>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div className="notification-box">
              <div className="msg-sidebar notifications msg-noti">
                {/*Aquí comienza la ventanita de mensajes*/}

                <div className="topnav-dropdown-header">
                  <span>Messages</span>
                </div>
                <div className="drop-scroll msg-list-scroll" id="msg_list">
                  
                </div>
                <div className="topnav-dropdown-footer">
                  <a href="chat.html">See all messages</a>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="sidebar-overlay" data-reff=""></div>
        <script src="assets/js/jquery-3.2.1.min.js"></script>
        <script src="assets/js/popper.min.js"></script>
        <script src="assets/js/bootstrap.min.js"></script>
        <script src="assets/js/jquery.slimscroll.js"></script>
        <script src="assets/js/Chart.bundle.js"></script>
        <script src="assets/js/chart.js"></script>
        <script src="assets/js/app.js"></script>
      </div>
    );
  }
}

export default MainAdmin;
