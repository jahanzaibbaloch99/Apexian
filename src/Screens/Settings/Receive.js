import React from 'react';

import {View, Image, Text, TouchableOpacity} from 'react-native';
import NavigationBar from '../../Components/NavigationBar';
import images from '../../assets/images';
import {responsiveSpacing} from '../../Utilities/Helpers';
import CommonStyles from '../../CommonStyles';
import AppButton from '../../Components/AppButton';
const Receive = () => {
  return (
    <View style={{flex: 1, backgroundColor: '#000'}}>
      <View>
        <NavigationBar title={'Receive'} />
      </View>
      <View style={{flex: 1, paddingHorizontal: responsiveSpacing(25)}}>
        <View
          style={{
            justifyContent: 'center',
            alignItems: 'center',
            marginVertical: responsiveSpacing(15),
          }}>
          <View
            style={{
              height: 178,
              width: 178,
              borderRadius: 10,
              overflow: 'hidden',
            }}>
            <Image
              style={{
                flex: 1,
                height: undefined,
                width: undefined,
                borderRadius: 10,
                overflow: 'hidden',
              }}
              source={images.qrcode}
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
              {fontSize: 18, textAlign: 'center', color: 'white'},
            ]}>
            Your Address
          </Text>
        </View>
        <View
          style={{
            flexDirection: 'row',
            marginVertical: responsiveSpacing(15),
            alignItems: 'center',
            paddingHorizontal: responsiveSpacing(25),
            paddingVertical: responsiveSpacing(20),
            backgroundColor: 'rgba(255,255,255, 0.2)',
            borderRadius: 10,
          }}>
          <View style={{flex: 1}}>
            <Text
              style={[
                CommonStyles.fontRegular400,
                {color: 'white', fontSize: 18},
              ]}>
              bc1qxy2kgdygjrsqtzq2n0yrf2493
            </Text>
          </View>
          <TouchableOpacity style={{marginLeft: responsiveSpacing(25)}}>
            <View style={{height: 24, width: 24}}>
              <Image
                source={images.copy}
                style={{flex: 1, height: undefined, width: undefined}}
              />
            </View>
          </TouchableOpacity>
        </View>
        <View style={{justifyContent: 'center', alignItems: 'center'}}>
          <TouchableOpacity style={{height: 30, width: 30}}>
            <Image
              source={images.sharing}
              style={{flex: 1, width: undefined, height: undefined}}
            />
          </TouchableOpacity>
        </View>
      </View>
    </View>
  );
};

export default Receive;
