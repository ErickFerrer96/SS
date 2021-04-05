import React from 'react';
import { BrowserRouter as Router, Switch, Route} from 'react-router-dom';

import MainAdmin from './components/Admin/MainAdmin';
import AgregarAlumno from './components/Admin/AgregarAlumno';
import VerAlumno from './components/Admin/VerAlumno';
import UpdateDoctor from './components/Admin/UpdateDoctor';

import Cuestionario from './components/Pacientes/Cuestionario';
import InicioAlumno from './components/Pacientes/InicioAlumno';


import Login from './components/auth/Login';
import NuevaCuenta from './components/auth/NuevaCuenta';

import AlertaState from './context/alerta/alertastate';

{/* 
1-. Librerias React
2-. Rutas del admin
3-. Rutas del Alumno
4-. Rutas de  Auth
5-. Alertas 
*/}

function App() {
  return (
    <Router>
      <AlertaState>
      <Switch>
        
        {/* Rutas del entrada */}

        <Route exact path="/" component={Login}/>
        <Route exact path="/NuevaCuenta" component={NuevaCuenta} />

        {/* Rutas del administrador */}

        <Route exact path="/MainAdmin" component={MainAdmin} />
        <Route exact path="/AgregarAlumno" component={AgregarAlumno} />
        <Route exact path="/VerAlumno" component={VerAlumno} />  
        <Route exact path="/UpdateDoctor" component={UpdateDoctor} />
        {/* Rutas del alumno */}

        <Route exact path="/InicioAlumno" component={InicioAlumno} />
        <Route exact path="/Cuestionario" component={Cuestionario} />
       
      </Switch>
      </AlertaState>
    </Router>
  );
}

export default App;