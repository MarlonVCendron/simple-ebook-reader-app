import * as React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';

// import Login from '../src/screens/Login';
import Teste from '../screens/Teste';

const Stack = createNativeStackNavigator();

const Navigator = () => {
  return (
      <NavigationContainer>
        <Stack.Navigator initialRouteName="Teste">
          {/* <Stack.Screen name="Login" component={Login} options={{headerShown: false}} /> */}
          <Stack.Screen name="Teste" component={Teste} initialParams={{ url: "/storage/emulated/0/Download/Neuromancer (Trilogia do Sprawl) (Portuguese Edition) by Gibson William, Fernandes Fábio (z-lib.org).epub" }}/>
        </Stack.Navigator>
      </NavigationContainer>
  );
}

export default Navigator;
