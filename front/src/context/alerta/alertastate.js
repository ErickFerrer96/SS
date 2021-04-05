import React, {useReducer} from 'react'
import alertareducer from './alertareducer'
import alertacontext from './alertacontext'

import {MOSTRAR_ALERTA,OCULTAR_ALERTA} from '../../types';

const AlertaState = props => {
    const initialState ={
        alerta:null
    }

    const[state, dispatch]=useReducer(alertareducer, initialState);

    //Funciones

    const mostrarAlerta = (msg,categoria) =>{
        dispatch({
            type:MOSTRAR_ALERTA,
            payload:{
                msg,
                categoria
            }
        });

        //Despues de 5 seg limpiar el alerta jiji >:)
        setTimeout(() => {
            dispatch({
                type:OCULTAR_ALERTA
            })
        }, 5000);
    }

    return (
        <alertacontext.Provider
            value={{
                alerta: state.alerta,
                mostrarAlerta

            }}
        >
            {props.children}
        </alertacontext.Provider>
    )

}

export default AlertaState;
