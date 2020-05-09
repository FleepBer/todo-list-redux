import React from 'react';

function IncompleteTasks() {
  return (
    <React.Fragment>
      <h3>Todo</h3>

      <ul id="incomplete-tasks">
        <li>
          <input type="checkbox" />
          <label>Pagar Contas</label>

          <button className="edit">Editar</button>
          <button className="delete">Deletar</button>
        </li>

        <li className="editMode">
          <input type="checkbox" />
          <label>Fazer Compras</label>

          <input type="text" value="Fazer Compras" />

          <button className="edit">Editar</button>
          <button className="delete">Deletar</button>
        </li>
      </ul>
    </React.Fragment>
  );
}

export default IncompleteTasks;
