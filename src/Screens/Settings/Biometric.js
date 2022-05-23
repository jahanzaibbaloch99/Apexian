import React from 'react';

import {View, Image, Text} from 'react-native';
import NavigationBar from '../../Components/NavigationBar';
import images from '../../assets/images';
import {responsiveSpacing} from '../../Utilities/Helpers';
import CommonStyles from '../../CommonStyles';
import AppButton from '../../Components/AppButton';
const Biometric = () => {
  return (
    <View style={{flex: 1, backgroundColor: '#000'}}>
      <View>
        <NavigationBar title={'Biometric'} />
      </View>
      <View style={{flex: 1}}>
        <View
          style={{
            justifyContent: 'center',
            alignItems: 'center',
            marginVertical: responsiveSpacing(15),
          }}>
          <View style={{height: 178, width: 178}}>
            <Image
              style={{flex: 1, height: undefined, width: undefined}}
              source={images.finger}
            />
          </View>
        </View>
        <View
          style={{
            justifyContent: 'center',
            alignItems: 'center',
            paddingHorizontal: responsiveSpacing(30),
            marginVertical: responsiveSpacing(10),
          }}>
          <Text
            style={[
              CommonStyles.fontRegular400,
              {fontSize: 18, textAlign: 'center',color:"white"},
            ]}>
            Login Using Fingerprint on your Phone
          </Text>
        </View>
      </View>
      <View style={{padding: responsiveSpacing(20)}}>
        <AppButton>Enable Fingerprint</AppButton>
      </View>
    </View>
  );
};

export default Biometric;
