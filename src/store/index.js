import { createStore, compose, applyMiddleware } from 'redux';
import createSagaMiddleware from 'redux-saga'
import sagas from './sagas'
import reducer from './reducer'

// create the saga middleware
const sagaMiddleware = createSagaMiddleware()

const composeEnhancers = typeof window === 'object'
  && window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__
  ? window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__({}) : compose

const enhancer = composeEnhancers(
  applyMiddleware(sagaMiddleware),
)
const store = createStore(reducer, enhancer)
sagaMiddleware.run(sagas)


export default store
