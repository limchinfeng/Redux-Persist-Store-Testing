import React, {Component} from 'react';
import {Provider} from 'react-redux';
import {PersistGate} from 'redux-persist/integration/react';
import {SafeAreaProvider} from 'react-native-safe-area-context';
import AppRouter from './AppRouter';
// import configureStore from './config-store';

// const {store, persistor} = configureStore();

import { store } from './config-store';

console.disableYellowBox = true;

class App extends Component {
  render() {
    return (
      <SafeAreaProvider>
        <Provider store={store}>
          {/* <PersistGate loading={null} persistor={persistor}>  */}
            <AppRouter />
          {/* </PersistGate> */}
        </Provider>
      </SafeAreaProvider>
    );
  }
}

export default App;
