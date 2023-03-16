import React, { useState } from "react";

const TodoForm = () => {
    //Tengo el estado inicial de tarea que es un input vacío
    //Con useState podré modificar ese estado dependiendo de lo que escriba el usuario
    //el SetTarea sería la función que me permite modificar el estado
    const [tarea, SetTarea] = useState({ toDo: '' });

    //Con useState manejo el estado de boton desactivado a activado cuando tenga texto en el input
    const [botonDesactivado, setbotonDesactivado] = useState(true)
    const controladorInput = (event) => {
        // console.log(event.target.value)
        SetTarea({
            ...tarea,
            //Relaciona el name que puse en el input con lo que el usuario escribe en ese input
            [event.target.name]: event.target.value
        });
        setbotonDesactivado(event.target.value.trim() === '');
    };

    function enviarDatos(event) {
        event.preventDefault();
        console.log(tarea.toDo);
    }

    return (
        <form className="todo-form" onSubmit={enviarDatos}>
            <input
                className="input-form"
                type="text"
                placeholder="Ingresa la tarea que quieres guardar:"
                size={32}
                name='toDo'
                autoComplete="off"
                onChange={controladorInput}
            />

            <button type="submit" className="button-form"
                disabled={botonDesactivado}
            >Agregar Tarea</button>
        </form>
    );

};

export default TodoForm;

