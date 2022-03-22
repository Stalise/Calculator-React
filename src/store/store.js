import { createStore, combineReducers } from "redux"
import { themeReducer } from "@/store/reducers/themeReducer/themeReducer"
import { historyReducer } from "@/store/reducers/historyReducer/historyReducer"

const ReactReduxDevTools = window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__()

const rootReducer = combineReducers({
   theme: themeReducer,
   history: historyReducer,
})

export const store = createStore(rootReducer, ReactReduxDevTools)