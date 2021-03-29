import { applyMiddleware, compose, createStore } from 'redux'
import { rootReducer } from './rootReducer'
import createSagaMiddleware from 'redux-saga'
const initialiseSagaMiddleware = createSagaMiddleware()

declare global {
  interface Window {
    __REDUX_DEVTOOLS_EXTENSION_COMPOSE__?: typeof compose
  }
}

const storeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose

const store = createStore(
  rootReducer,
  storeEnhancers(applyMiddleware(initialiseSagaMiddleware))
)

export default store
