import React from 'react';
import {View, Text, TouchableOpacity, Image} from 'react-native';
import images from '../assets/images';
import {responsiveSpacing} from '../Utilities/Helpers';
import CommonStyles from '../CommonStyles';
import {goBack} from '../Navigations/RootNavigation';
const NavigationBar = props => {
  return (
    <View
      style={{
        padding: responsiveSpacing(15),
        flexDirection: 'row',
        justifyContent: 'center',
      }}>
      <View style={{flex: 1}}>
        <TouchableOpacity
          onPress={() => {
            goBack();
          }}
          style={{padding: responsiveSpacing(10)}}>
          <View style={{height: 25, width: 25}}>
            <Image
              source={images.back}
              style={{flex: 1, height: undefined, width: undefined}}
            />
          </View>
        </TouchableOpacity>
      </View>
      <View style={{flex: 3, justifyContent: 'center', alignItems: 'center'}}>
        <Text
          style={[CommonStyles.fontRegular400, {fontSize: 18, color: 'white'}]}>
          {props.title}
        </Text>
      </View>
      <View style={{flex: 1}}></View>
    </View>
  );
};

export default NavigationBar;
