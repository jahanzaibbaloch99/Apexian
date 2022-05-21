import React from 'react';

import {View, Text, TouchableOpacity} from 'react-native';
import NavigationBar from '../../Components/NavigationBar';
const Swap = () => {
  return (
    <View style={{flex: 1, backgroundColor: '#000'}}>
      <View>
        <NavigationBar title={'Swap'} />
      </View>
    </View>
  );
};

export default Swap;
