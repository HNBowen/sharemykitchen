import { createStore, combineReducers, applyMiddleware } from 'redux'
import thunkMiddleware from 'redux-thunk'

import helloReducer from '../shared/reducer/hello'

const initStore = (plainPartialState) => {
  const preloadedState = plainPartialState ? {} : undefined
  if (plainPartialState && plainPartialState.hello) {
    preloadedState.hello = Object.assign(
      {}, helloReducer(undefined, {}), plainPartialState.hello)
  }

  return createStore(combineReducers({ hello: helloReducer }),
    preloadedState, applyMiddleware(thunkMiddleware))
}

export default initStore
