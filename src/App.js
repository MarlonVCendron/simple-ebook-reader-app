import * as React from 'react';
import { Provider as PaperProvider } from 'react-native-paper';
import { Provider } from 'react-redux';
import { PersistGate } from 'redux-persist/integration/react';
import { store, persistor } from './store';
import { LogBox } from 'react-native';
LogBox.ignoreLogs(['new NativeEventEmitter']);

import Navigator from './navigation/Navigator';

const App = () => {
  return (
    <Provider store={store}>
      <PersistGate loading={null} persistor={persistor}>
        <PaperProvider>
          <Navigator />
        </PaperProvider>
      </PersistGate>
    </Provider>
  );
}

export default App;
