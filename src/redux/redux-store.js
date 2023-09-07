import {applyMiddleware, combineReducers, legacy_createStore as createStore} from "redux";
import thunkMiddleware from "redux-thunk";


let redusers = combineReducers({

});

let store = createStore(redusers, applyMiddleware(thunkMiddleware));

window.store = store;

export default store;