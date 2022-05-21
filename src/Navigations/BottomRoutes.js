import React from 'react';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import Home from '../Screens/Home/Home';
import Settings from '../Screens/Settings/Settings';
import Nft from '../Screens/Settings/Nft';
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
      initialRouteName="Settings"
      screenOptions={{
        headerShown: false,
      }}>
      <SettingStack.Screen name="Settings" component={Settings} />
      <SettingStack.Screen name="Nft" component={Nft} />
    </SettingStack.Navigator>
  );
};

export {HomeRoutes, SettingRoutes};
