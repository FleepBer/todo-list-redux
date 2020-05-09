import { todosActionsTypes } from '../constants/todos';

/**
 * Action Creators
 */

 let nextID = 0;

 export const addTodo = (text) => ({
     type: todosActionsTypes.ADD_TODO,
     payload: {
         id: nextID++,
         text: text,
     }
 }); 

 export const deleteTodo = (id) => ({
     type: todosActionsTypes.DELETE_TODO,
     payload: {
         id,
     }
 });

 export const editTodo = (id, text) => ({
     type: todosActionsTypes.EDIT_TODO,
     payload: {
         id,
         text,
     }
 });

 export const toggleTodo = (id) => ({
     type: todosActionsTypes.TOGGLE_TODO_CHECK,
     payload :{
         id,
     }
 });