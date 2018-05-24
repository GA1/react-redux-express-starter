import {createStore, combineReducers, applyMiddleware} from "redux";
import { logger } from 'redux-logger'

import hskReducer from "./reducers/Reducer";

var middleware = []
if (process.env.NODE_ENV !== 'production')
  middleware.push(logger)

export default createStore(
    combineReducers({
      hskReducer: hskReducer,
    }),
    {},
    applyMiddleware(...middleware)
);