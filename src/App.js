import * as React from 'react';
import { Provider as PaperProvider } from 'react-native-paper';
import { Provider } from 'react-redux';
import store from './store';

import Navigator from './navigation/Navigator';

const App = () => {
  return (
    <Provider store={store}>
      <PaperProvider>
        <Navigator />
      </PaperProvider>
    </Provider>
  );
}

export default App;
