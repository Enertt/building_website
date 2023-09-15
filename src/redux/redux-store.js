import {applyMiddleware, combineReducers, legacy_createStore as createStore} from "redux";
import authReduser from "./authReduser";
import thunkMiddleware from "redux-thunk";


let redusers = combineReducers({
    authReduser,
});

let store = createStore(redusers, applyMiddleware(thunkMiddleware));

window.store = store;

export default store;