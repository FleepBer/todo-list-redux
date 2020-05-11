import React from 'react';
import { useSelector } from 'react-redux';

function CompletedTasks() {
  const completedTasks = useSelector(state => state.taskList.completedTodos);

  return (
    <React.Fragment>
      <h3>Completadas</h3>

      <ul id="completed-tasks">
        {completedTasks.map(task => (
          <li key={task.id}>
            <input type="checkbox" checked />
            <label>{task.text}</label>

            <button className="edit">Editar</button>
            <button className="delete">Delete</button>
          </li>
        ))}

      </ul>
    </React.Fragment>
  );
}

export default CompletedTasks;