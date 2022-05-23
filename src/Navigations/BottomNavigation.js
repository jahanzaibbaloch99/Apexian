import * as React from 'react';
import {View, Image} from 'react-native';
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';
import {HomeRoutes, SettingRoutes} from './BottomRoutes';
import images from '../assets/images';
import Colors from '../Themes/Colors';
import LinearGradient from 'react-native-linear-gradient';
const Tab = createBottomTabNavigator();

const BottomStack = () => {
  return (
    <Tab.Navigator
      screenOptions={({route, navigation}) => ({
        headerShown: false,
        tabBarShowLabel: false,
        tabBarStyle: {
          backgroundColor: 'rgba(255,255,255, 0.1)',
          position: 'absolute',
          bottom: 25,
          left: 20,
          right: 20,
          height: 75,
          borderRadius: 15,
          borderTopColor: '#000',
        },
        tabBarIcon: ({focused, color, size}) => {
          let iconName;
          if (route.name === 'HomeRoutes') {
            iconName = focused ? images.homefocus : images.home;
          } else if (route.name === 'SettingRoutes') {
            iconName = focused ? images.settingfocus : images.setting;
          }
          return (
            <View>
              <View style={{marginBottom: 5}}>
                <View style={{width: 25, height: 25}}>
                  <Image
                    source={iconName}
                    resizeMode="contain"
                    style={{flex: 1, height: undefined, width: undefined}}
                  />
                </View>
              </View>
              {focused && (
                <View>
                  <LinearGradient
                    colors={Colors.primaryGradient}
                    style={{paddingVertical: 2}}
                    end={{x: 1, y: 0}}
                    start={{x: 0, y: 0}}
                  />
                </View>
              )}
            </View>
          );
        },
      })}>
      <Tab.Screen name="HomeRoutes" component={HomeRoutes} />
      <Tab.Screen name="SettingRoutes" component={SettingRoutes} />
    </Tab.Navigator>
  );
};

export default BottomStack;
