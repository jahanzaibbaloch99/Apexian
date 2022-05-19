import React from 'react';
import {View} from 'react-native';
import NavigationStack from './src/Navigations/NavigationStack';

const App = () => {
  return (
    <View style={{flex: 1}}>
      <NavigationStack />
    </View>
  );
};

export default App;
