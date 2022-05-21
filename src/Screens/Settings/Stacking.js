import React from 'react';

import {View, Text, TouchableOpacity} from 'react-native';
import NavigationBar from '../../Components/NavigationBar';
const Stacking = () => {
  return (
    <View style={{flex: 1, backgroundColor: '#000'}}>
      <View>
        <NavigationBar title={'Stacking'} />
      </View>
    </View>
  );
};

export default Stacking;
