import React, { useState } from 'react';

function TaskItem({ id,  text, onClickHandler }) {
  const [isChecked, toggleChecked] = useState(false);

  const handleChecked = (id) => {
    toggleChecked(true);

    onClickHandler();
  }

  return (
    <li key={id}>
      <input
        type="checkbox"
        checked={isChecked}
        onClick={handleChecked}
      />
      <label>{text}</label>

      <button className="edit">Editar</button>
      <button className="delete">Deletar</button>
    </li>
  )
}

export default TaskItem;