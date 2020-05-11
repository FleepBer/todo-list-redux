import { todosActionTypes } from '../constants/todos';

const INITIAL_STATE = {
  todos: [
    {
      id: 1,
      text: 'Pagar contas',
      completed: false,
    },
    {
      id: 2,
      text: 'Finalizar o projeto final',
      completed: true,
    }
  ],
  incompletedTodos: [
    {
      id: 1,
      text: 'Pagar contas',
      completed: false,
    }
  ],
  completedTodos: [
    {
      id: 2,
      text: 'Finalizar o projeto final',
      completed: true,
    }
  ],
};

export const todosReducer = (state = INITIAL_STATE, action) => {
  const { type, payload } = action;

  switch (type) {
    case todosActionTypes.ADD_TODO:
      const item = {
        id: payload.id,
        text: payload.text,
        completed: false,
      }

      return {
        todos: [...state.todos, item],
        incompletedTodos: [...state.todos, item].filter(task => !task.completed),
        completedTodos: [...state.todos, item].filter(task => task.completed),
      }
    case todosActionTypes.TOGGLE_TODO_CHECK:
      return {
        todos: [...state.todos].map(item => {
          if (item.id === payload.id) {
            return {...item, completed: true }
          }

          return item;
        }),
        incompletedTodos: [...state.todos]
          .filter(tasks => tasks.id !== payload.id)
          .filter(task => !task.completed),
        completedTodos: [...state.todos]
          .map(item => {
            if (item.id === payload.id) {
              return {...item, completed: true }
            }

            return item;
          })
          .filter(task => task.completed),
      }
    default:
      return state;
  }
}