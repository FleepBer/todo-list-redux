import React from 'react';

function AddNewItem () {
    return(
        <p>
        <label htmlFor="new-task">Novo Item</label>

        <input id="new-task" type="text" />
        <button>Adicionar</button>
      </p>
    )
}

export default AddNewItem;