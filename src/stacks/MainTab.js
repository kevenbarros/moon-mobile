import React from 'react';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import CustomTabBar from '../components/CustomTabBar';
import Goals from '../pages/Goals/index';
import Home from '../pages/Home/index';
import Mic from '../pages/Mic/index';
import Settings from '../pages/Settings/index';
import Statistics from '../pages/Statistics/index'

const Tab = createBottomTabNavigator();

export default () => (
  <Tab.Navigator screenOptions={{ headerTransparent: true, title: '', headerShown: false }} tabBar={props => <CustomTabBar {...props} />}>
    <Tab.Screen name="Home" component={Home} />
    <Tab.Screen name="Goals" component={Goals} />
    <Tab.Screen name="Mic" component={Mic} />
    <Tab.Screen name="Settings" component={Settings} />
    <Tab.Screen name="Statistics" component={Statistics} />
  </Tab.Navigator>
);
