import React from 'react';

import {View, Text, TouchableOpacity} from 'react-native';
import NavigationBar from '../../Components/NavigationBar';
const Trade = () => {
  return (
    <View style={{flex: 1, backgroundColor: '#000'}}>
      <View>
        <NavigationBar title={'Trade'} />
      </View>
    </View>
  );
};

export default Trade;
