import { combineReducers } from 'redux'

//Importa os estados de cada Reducer separadamente
import { todosReducer } from './todos';
import { appReducer } from './app';


//Unifica todas as Stores em uma única Store Global
const rootReducer = combineReducers({
    appInfo: appReducer,
    taskList: todosReducer,
});

export default rootReducer;