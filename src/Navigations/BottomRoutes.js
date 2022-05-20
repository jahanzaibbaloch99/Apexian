import React from 'react';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import Home from '../Screens/Home/Home';
import Settings from '../Screens/Settings/Settings';
const SettingStack = createNativeStackNavigator();
const HomeStack = createNativeStackNavigator();

const HomeRoutes = () => {
  return (
    <HomeStack.Navigator
      screenOptions={{
        headerShown: false,
      }}>
      <HomeStack.Screen name="Home" component={Home} />
    </HomeStack.Navigator>
  );
};

const SettingRoutes = () => {
  return (
    <SettingStack.Navigator
      screenOptions={{
        headerShown: false,
      }}>
      <SettingStack.Screen name="Settings" component={Settings} />
    </SettingStack.Navigator>
  );
};

export {HomeRoutes, SettingRoutes};
