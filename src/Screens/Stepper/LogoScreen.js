import React from 'react';
import {View, Text, Image} from 'react-native';
import images from '../../assets/images';
import AppButton from '../../Components/AppButton';
import {responsiveSpacing} from '../../Utilities/Helpers';
const LogoScreen = props => {
  return (
    <View style={{flex: 1, backgroundColor: 'black'}}>
      <View style={{justifyContent: 'center', alignItems: 'center', flex: 1}}>
        <View style={{height: 400, width: 400}}>
          <Image
            style={{flex: 1, height: undefined, width: undefined}}
            source={images.apexianlogo}
            resizeMode="contain"
          />
        </View>
      </View>
      <View
        style={{
          paddingHorizontal: responsiveSpacing(25),
          marginBottom: responsiveSpacing(10),
        }}>
        <View style={{marginVertical: responsiveSpacing(10)}}>
          <AppButton
            onPress={() => {
              props.navigation.navigate('Step1');
            }}
            gradientColor={['#45474C', '#45474C']}>
            Restore
          </AppButton>
        </View>
        <View style={{marginVertical: responsiveSpacing(10)}}>
          <AppButton
            onPress={() => {
              props.navigation.navigate('Step1');
            }}>
            Create Wallet
          </AppButton>
        </View>
      </View>
    </View>
  );
};

export default LogoScreen;
