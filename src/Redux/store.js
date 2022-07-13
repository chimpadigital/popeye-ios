import { applyMiddleware, compose, createStore } from 'redux'

import logger from 'redux-logger'
import thunk from 'redux-thunk'

import reducer from './reducer'

const middleware = compose(applyMiddleware(logger, thunk ),

);

export const store = createStore(reducer, middleware)
