import React from 'react';
import { Provider } from 'react-redux'
import { PersistGate } from 'redux-persist/integration/react';

import NavigationStack from "./navigation/NavigationStack"

import configureStore from "./configureStore";

const { store, persistor } = configureStore();

export default (props)=> (
    <Provider store={store}>
        <PersistGate loading={null} persistor={persistor} >
          <NavigationStack />
        </PersistGate>
    </Provider>
      
  );
