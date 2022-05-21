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
import Nft from '../Screens/Settings/Nft';
import Receive from '../Screens/Settings/Receive';
import Send from '../Screens/Settings/Send';
import Stacking from '../Screens/Settings/Stacking';
import Swap from '../Screens/Settings/Swap';
import Trade from '../Screens/Settings/Trade';
import Setting from '../Screens/Settings/Setting';
import Security from '../Screens/Settings/Security';
import Biometric from '../Screens/Settings/Biometric';
import GeneralSetting from '../Screens/Settings/GeneralSetting';
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
        <Stack.Screen name="Nft" component={Nft} />
        <Stack.Screen name="Setting" component={Setting} />
        <Stack.Screen name="Trade" component={Trade} />
        <Stack.Screen name="Send" component={Send} />
        <Stack.Screen name="Stacking" component={Stacking} />
        <Stack.Screen name="Swap" component={Swap} />
        <Stack.Screen name="Biometric" component={Biometric} />
        <Stack.Screen name="Security" component={Security} />
        <Stack.Screen name="Receive" component={Receive} />
        <Stack.Screen name="GeneralSetting" component={GeneralSetting} />
      </Stack.Navigator>
    </NavigationContainer>
  );
};

export default NavigationStack;
