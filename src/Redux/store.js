import { applyMiddleware, compose, createStore } from 'redux'

import logger from 'redux-logger'
import thunk from 'redux-thunk'

import reducer from './reducer'
import AsyncStorage from '@react-native-async-storage/async-storage';
import { persistStore, persistReducer } from 'redux-persist'

import storage from 'redux-persist/lib/storage' 

const persistConfig = {
    key: 'root',
    storage: AsyncStorage,
  }
  const persistedReducer = persistReducer(persistConfig, reducer)  

  
  const middleware = compose(applyMiddleware(logger, thunk ),
  
  );
  export const store = createStore(persistedReducer, middleware)
  export const persistor = persistStore(store)

