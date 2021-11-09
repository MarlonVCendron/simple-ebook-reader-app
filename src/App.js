import * as React from 'react';
import { Provider as PaperProvider } from 'react-native-paper';

import Navigator from './navigation/Navigator';

const App = () => {
  return (
    <PaperProvider>
      <Navigator/>
    </PaperProvider>
  );
}

export default App;
