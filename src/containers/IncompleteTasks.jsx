  
import React, { useState } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import TaskItem from './TaskItem';

import { toggleTodo } from '../actions/todos';

function IncompleteTasks() {
  const incompleteTasks = useSelector(state => state.taskList.incompletedTodos);
  const dispatch = useDispatch();

  return (
    <React.Fragment>
      <h3>Tarefas Pendentes:</h3>

      <ul id="incomplete-tasks">
        {incompleteTasks.map(task => (
          <TaskItem
            key={task.id}
            id={task.id}
            text={task.text}
            onClickHandler={() => dispatch(toggleTodo(task.id))}
          />
        ))}
      </ul>
    </React.Fragment>
  )
}

export default IncompleteTasks;