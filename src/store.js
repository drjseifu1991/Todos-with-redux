import { createStore, compose, applyMiddleware } from "redux"
import rootReducer from "./reducer"
import { sayHiOnDispatch, includeMeaningOfLife } from "./exampleAddons/enhancers"
import { print1, print2, print3 } from "./exampleAddons/middleware"

let preloadedState
const persistedTodosString = localStorage.getItem('todos')

if (persistedTodosString) {
    preloadedState = {
        todos: JSON.parse(persistedTodosString)
    }
}

const middleware = applyMiddleware(print1, print2, print3)
const composedEnhancer = compose(sayHiOnDispatch, includeMeaningOfLife)
const store = createStore(rootReducer, middleware)

export default store