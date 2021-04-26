import {createStore,combineReducers} from 'redux';
import mainReducer from './reducers/reducers';


const rootReducer=combineReducers({
    mainReducer:mainReducer
})

const configureStore=()=>createStore(rootReducer);
export default configureStore;
