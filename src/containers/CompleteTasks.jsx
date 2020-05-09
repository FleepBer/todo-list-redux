import React from 'react';

function CompleteTasks() {
    return (
        <React.Fragment>
            <h3>Completadas</h3>
            <ul id="completed-tasks">
            <li>
                <input type="checkbox" checked />
                <label>Visitar o Médico</label>
    
                <button className="edit">Editar</button>
                <button className="delete">Delete</button>
            </li>
            </ul>
        </React.Fragment>
    )
}

export default CompleteTasks;