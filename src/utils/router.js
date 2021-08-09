import React, {useEffect} from 'react';
import {NavigationContainer} from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
// Auth Screens //
import HomeScreen from '../screens/AppScreens/HomeScreen';

// App Screens //
const Stack = createStackNavigator();

const AppNavigator = () => (
  <Stack.Navigator>
    <Stack.Screen
      name="HomeScreen"
      component={HomeScreen}
      options={{
        headerShown: false,
      }}
    />
  </Stack.Navigator>
);


const AuthStack = () => (
  <Stack.Navigator>
  </Stack.Navigator>
);

const AppContainer = () => {
  return (
    <NavigationContainer>
      <AppNavigator />
    </NavigationContainer>
  );
};

export default AppContainer;
