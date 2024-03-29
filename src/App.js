import React, {Component} from 'react';
// import OneSignal from 'react-native-onesignal';
import {Provider} from 'react-redux';
import {PersistGate} from 'redux-persist/integration/react';
import {SafeAreaProvider} from 'react-native-safe-area-context';
import AppRouter from './AppRouter';
// import configureStore from './config-store';
//import PushNotificationIOS from '@react-native-community/push-notification-ios';

// import { ONE_SIGNAL_APP_ID } from 'src/configs/constant';

// const {store, persistor} = configureStore();

console.disableYellowBox = true;

class App extends Component {
  render() {
    return (
      <SafeAreaProvider>
        {/* <Provider store={store}>
          <PersistGate loading={null} persistor={persistor}> */}
            <AppRouter />
          {/* </PersistGate>
        </Provider> */}
      </SafeAreaProvider>
    );
  }
}

export default App;
