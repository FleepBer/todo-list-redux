import { todosActionsTypes } from '../constants/todos';

const INITIAL_STATE = {
    todos: [
        {
            id: 1,
            text: 'Pagar contas',
            completed: false,
        }
    ],
    incompletedTodos: [],
    completedTodos: [],
};

export const todosReducer = (state = INITIAL_STATE, action) => {
    const { type, payload } = action;

    switch (action.type) {
        case todosActionsTypes.ADD_TODO:
            const item = {
                id: payload.id,
                text: payload.id,
                completed: false,
            }

            return {
                ...state,
                todos: [...state.todos, item]
            }

            default:
                return state;
    }   
};