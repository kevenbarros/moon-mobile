import React from 'react';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import CustomTabBar from '../components/CustomTabBar';
import Goals from '../pages/Goals/index';
import Home from '../pages/Home/index';
import Mic from '../pages/Mic/index';
import Settings from '../pages/Settings/index';
import Statistics from '../pages/Statistics/index'
import { useRoute } from '@react-navigation/native';

const Tab = createBottomTabNavigator();

export default () => {
  const route = useRoute()

  return <Tab.Navigator screenOptions={{ headerTransparent: true, title: '', headerShown: false }} tabBar={props => <CustomTabBar {...props} token={route.params?.token || ""} />}>
    <Tab.Screen name="Home" component={Home} />
    <Tab.Screen name="Goals" component={Goals} />
    <Tab.Screen name="Mic" component={Mic} />
    <Tab.Screen name="Settings" component={Settings} />
    <Tab.Screen name="Statistics" component={Statistics} />
  </Tab.Navigator>
}
