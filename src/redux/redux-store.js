import {applyMiddleware, combineReducers, legacy_createStore as createStore} from "redux";
import authReduser from "./authReduser";
import newsReduser from "./newsReduser";
import thunkMiddleware from "redux-thunk";


let redusers = combineReducers({
    authReduser,
    newsReduser
});

let store = createStore(redusers, applyMiddleware(thunkMiddleware));

window.store = store;

export default store;