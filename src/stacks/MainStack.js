import React from 'react';
import { createStackNavigator } from '@react-navigation/stack';

import MainTab from '../stacks/MainTab';
import Login from '../pages/Login/index'
import Register from '../pages/Register/index'

const Stack = createStackNavigator();

export default () => (
  <Stack.Navigator
    initialRouteName="mainTab"
    screenOptions={{
      headerShown: false
    }}

  >
    <Stack.Screen name="Login" component={Login} />
    <Stack.Screen name="MainTab" component={MainTab} />
    <Stack.Screen name="Register" component={Register} />
  </Stack.Navigator>
);
