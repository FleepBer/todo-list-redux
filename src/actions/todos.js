  
import { todosActionTypes } from '../constants/todos';
/*
 * Action Creators
 */

let nextID = 3;

export const addTodo = (text) => ({
  type: todosActionTypes.ADD_TODO,
  payload: {
    id: nextID++,
    text: text,
  }
});

export const deleteTodo = (id) => ({
  type: todosActionTypes.DELETE_TODO,
  payload: {
    id,
  }
});

export const editTodo = (id, text) => ({
  type: todosActionTypes.EDIT_TODO,
  payload: {
    id,
    text,
  }
});

export const toggleTodo = (id) => ({
  type: todosActionTypes.TOGGLE_TODO_CHECK,
  payload: {
    id,
  }
});