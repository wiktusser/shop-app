import { configureStore, getDefaultMiddleware } from 'redux-starter-kit'

import logger from 'redux-logger' //middleware

// And use redux-batch as an example of adding enhancers
// import { reduxBatch } from '@manaflair/redux-batch'

import itemsReducer from './reducers/itemsReducer';
import userReducer from './reducers/userReducer';

const reducer = {
  items: itemsReducer,
  user: userReducer
}

const middleware = [...getDefaultMiddleware(), logger]

const preloadedState = {
  displayItems: [
    {
      text: 'Test item 1',
      showItem: true
    },
    {
      text: 'Test item 2',
      showItem: true
    }
  ],
  testItemVisibility: 'SHOW_COMPLETED'
}

const store = configureStore({
  reducer,
  middleware,
  devTools: process.env.NODE_ENV !== 'production',
  preloadedState,
  // enhancers: [reduxBatch]
})

export default store;