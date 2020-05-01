import { applyMiddleware, combineReducers, createStore } from 'redux'
import { logger } from 'redux-logger'

import mainReducer from './reducers/reducer'

const middleware = []
if (process.env.NODE_ENV !== 'production') middleware.push(logger)

export default createStore(
  combineReducers({
    mainReducer,
  }),
  {},
  applyMiddleware(...middleware)
)
