import {createStore, combineReducers, applyMiddleware, compose} from 'redux'
import thunk from 'redux-thunk';
import { employeesReducers } from '../reducers/employeesReducers';

const composeEnhancers = (typeof window !== 'undefined' && 
window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__) || compose;

const reducers = combineReducers({
    employee: employeesReducers
})


export const store = createStore(
    reducers,
    composeEnhancers( 
        applyMiddleware(thunk))
)