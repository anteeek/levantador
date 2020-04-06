import { createStore, applyMiddleware } from 'redux';
import { persistStore, persistReducer } from 'redux-persist';
 
import persistConfig from "./constants/persistConfig";
import rootReducer from './reducers/';

import logger from "redux-logger";

export default () => {

  const middlewares = [];

  /*if(process.env["NODE_ENV"] && process.env["NODE_ENV"] === "development")
    middlewares.push(logger.createLogger());*/

  let store = createStore(persistReducer(persistConfig, rootReducer), applyMiddleware(...middlewares));
  let persistor = persistStore(store);

  return { store, persistor };
}