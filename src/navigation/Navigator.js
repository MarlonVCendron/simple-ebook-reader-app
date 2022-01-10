import * as React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';

import { Library, Login, Reader } from '../screens';

const Stack = createNativeStackNavigator();

const title = ({ route }) => ({
  title: route?.params?.title,
});

const Navigator = () => {
  return (
    <NavigationContainer>
      <Stack.Navigator initialRouteName="Login">
        <Stack.Screen name="Login" component={Login} options={{ headerShown: false }} />
        <Stack.Screen name="Library" component={Library} options={{ headerLeft: () => null }} />
        <Stack.Screen name="Reader" component={Reader} options={title} />
      </Stack.Navigator>
    </NavigationContainer>
  );
}

export default Navigator;
