import React from 'react';
import { createStackNavigator } from '@react-navigation/stack';

import MainTab from '../stacks/MainTab';
import Login from '../pages/Login/index'
import Register from '../pages/Register/index'
import CreateExpense from '../pages/CreateExpense/index'
import AddGain from '../pages/AddGain/index'
import NewGoals from '../pages/Goals/NewGoals/index'

const Stack = createStackNavigator();

export default () => (
  <Stack.Navigator
    initialRouteName="mainTab"
    screenOptions={{
      headerShown: false
    }}

  >
    <Stack.Screen name="Login" component={Login} />
    <Stack.Screen name="CreateExpense" component={CreateExpense} />
    <Stack.Screen name="AddGain" component={AddGain} />
    <Stack.Screen name="Register" component={Register} />
    <Stack.Screen name="MainTab" component={MainTab} />
    <Stack.Screen name="NewGoals" component={NewGoals} />
  </Stack.Navigator>
);
