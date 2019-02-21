import { configureStore, getDefaultMiddleware } from 'redux-starter-kit'

import logger from 'redux-logger' //middleware

// And use redux-batch as an example of adding enhancers
// import { reduxBatch } from '@manaflair/redux-batch'

import categoriesReducer from './reducers/categoriesReducer';
// import userReducer from './reducers/userReducer';

const reducer = {
  categories: categoriesReducer,
  // user: userReducer
}

const middleware = [...getDefaultMiddleware(), logger]

const preloadedState = {
  categories: {}
}

const store = configureStore({
  reducer,
  middleware,
  devTools: process.env.NODE_ENV !== 'production',
  preloadedState,
  // enhancers: [reduxBatch]
})

export default store;