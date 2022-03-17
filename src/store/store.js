import { createStore, combineReducers } from "redux";
import { themeReducer } from "./reducers/themeReducer/themeReducer";

const ReactReduxDevTools = window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__();

const rootReducer = combineReducers({
   theme: themeReducer,
})

export const store = createStore(rootReducer, ReactReduxDevTools)