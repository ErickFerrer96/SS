import React, {useState} from'react';
import {Link} from 'react-router-dom'


const Cuestionario = () => {

    function refreshPage() {
        window.location.reload(false);
      }

    let token = sessionStorage.getItem('token');
    let correo = sessionStorage.correo;

    //State pare iniciar sesion 

    const [usuario, guardarUsuario] = useState({

      

    });

    //Extraer usuario

    const {} = usuario;

    const onChange = e  => {

        guardarUsuario({
            ...usuario,
            [e.target.name] : e.target.value
        });

    };

    //Cuando requiera iniciar sesión

    const onSubmit = e => {
       

    }

    return(
        <div className="form-usuario">
            <div className="contenedor-form sombra-dark">
                <h1>Cuestionario 1</h1>

                <form onSubmit={onSubmit}
                
                
                >
                    

                    <div className="campo-form">
                        <label htmlFor="P1">Pregunta 1</label>
                        <input
                            type="text"
                            id="P1"
                            name="P1"
                            placeholder="Contenido Pregunta 1"
                           
                            onChange={onChange}
                        />
                    </div>

                    
                    <div className="campo-form">
                        <input type="submit" className="btn btn-primario btn-block"
                        value ="Mandar respuestas"  onClick={refreshPage}/>
                    </div>
                </form>
                <Link to={'/InicioAlumno'} className="enlace-cuenta">
                    Regresar
                </Link>
            </div>
        </div>
    );
}

export default Cuestionario;