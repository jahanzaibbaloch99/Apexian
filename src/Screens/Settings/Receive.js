import React from 'react';

import {View, Text, TouchableOpacity} from 'react-native';
import NavigationBar from '../../Components/NavigationBar';
const Receive = () => {
  return (
    <View style={{flex: 1, backgroundColor: '#000'}}>
      <View>
        <NavigationBar title={'Receive'} />
      </View>
    </View>
  );
};

export default Receive;
