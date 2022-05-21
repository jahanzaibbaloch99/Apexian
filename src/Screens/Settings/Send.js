import React from 'react';

import {View, Text, TouchableOpacity} from 'react-native';
import NavigationBar from '../../Components/NavigationBar';
const Send = () => {
  return (
    <View style={{flex: 1, backgroundColor: '#000'}}>
      <View>
        <NavigationBar title={'Send'} />
      </View>
    </View>
  );
};

export default Send;
