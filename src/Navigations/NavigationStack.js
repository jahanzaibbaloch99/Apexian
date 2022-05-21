import * as React from 'react';
import {NavigationContainer} from '@react-navigation/native';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import {setNavigationRef} from './RootNavigation';
import Step1 from '../Screens/Stepper/Step1';
import Step2 from '../Screens/Stepper/Step2';
import Step3 from '../Screens/Stepper/Step3';
import PinScreen from '../Screens/Stepper/PinScreen';
import IntroSlider from '../Screens/Stepper/IntroSlider';
import LoginScreen from '../Screens/Stepper/LogoScreen';
import BottomStack from './BottomNavigation';
const Stack = createNativeStackNavigator();

const NavigationStack = () => {
  return (
    <NavigationContainer theme={{colors: '#000'}} ref={setNavigationRef}>
      <Stack.Navigator
        initialRouteName="Home"
        screenOptions={{headerShown: false}}>
        <Stack.Screen name="PinScreen" component={PinScreen} />
        <Stack.Screen name="Step1" component={Step1} />
        <Stack.Screen name="Step2" component={Step2} />
        <Stack.Screen name="Step3" component={Step3} />
        <Stack.Screen name="IntroSlider" component={IntroSlider} />
        <Stack.Screen name="LoginScreen" component={LoginScreen} />
        <Stack.Screen name="Home" component={BottomStack} />
      </Stack.Navigator>
    </NavigationContainer>
  );
};

export default NavigationStack;
