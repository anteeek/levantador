import React from 'react';
import { Provider } from 'react-redux'
import { PersistGate } from 'redux-persist/integration/react';
import { AppearanceProvider } from 'react-native-appearance';

import NavigationStack from "./navigation/NavigationStack"

import configureStore from "./configureStore";

const { store, persistor } = configureStore();

export default (props)=> (
  <AppearanceProvider>
    <Provider store={store}>
        <PersistGate loading={null} persistor={persistor} >
          <NavigationStack />
        </PersistGate>
    </Provider>
  </AppearanceProvider>
);
