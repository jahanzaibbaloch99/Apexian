import React, {useState} from 'react';
import {View, TouchableOpacity, Image, Text} from 'react-native';
import {responsiveSpacing} from '../../Utilities/Helpers';
import images from '../../assets/images';
import CommonStyles from '../../CommonStyles';
const Arr = [
  {title: 'Biometric', image: images.biometric, route: 'Biometric'},
  {title: 'Trade', image: images.trade, route: 'Trade'},
  {title: 'SWAP', image: images.swap, route: 'Swap'},
  {title: 'Staking', image: images.stacking, route: 'Stacking'},
  {title: 'NFT', image: images.nft, route: 'Nft'},
  {title: 'SETTING', image: images.setting1, route: 'Setting'},
];
const Settings = props => {
  return (
    <View style={{backgroundColor: '#000', flex: 1}}>
      <View
        style={{
          paddingTop: responsiveSpacing(20),
          padding: responsiveSpacing(15),
        }}>
        <View style={{flexDirection: 'row', justifyContent: 'flex-end'}}>
          <TouchableOpacity
            onPress={() => {
              props.navigation.navigate('Setting');
            }}
            style={{
              padding: responsiveSpacing(10),
              backgroundColor: '#45474C',
              borderRadius: 50,
            }}>
            <View style={{width: 24, height: 24}}>
              <Image
                style={{flex: 1, height: undefined, width: undefined}}
                source={images.gear}
              />
            </View>
          </TouchableOpacity>
        </View>
        <View style={{marginVertical: responsiveSpacing(15)}}>
          {Arr.map(ele => {
            return (
              <TouchableOpacity
                onPress={() => {
                  props.navigation.navigate(ele.route);
                }}
                style={{
                  flexDirection: 'row',
                  backgroundColor: '#202429',
                  marginBottom: responsiveSpacing(10),
                  padding: responsiveSpacing(10),
                  paddingVertical: responsiveSpacing(20),
                  borderRadius: 10,
                }}>
                <View style={{paddingHorizontal: responsiveSpacing(10)}}>
                  <View style={{height: 24, width: 24}}>
                    <Image
                      style={{flex: 1, height: undefined, width: undefined}}
                      source={ele.image}
                    />
                  </View>
                </View>
                <View
                  style={{
                    marginHorizontal: responsiveSpacing(10),
                    justifyContent: 'center',
                  }}>
                  <Text style={[CommonStyles.fontRegular400]}>{ele.title}</Text>
                </View>
              </TouchableOpacity>
            );
          })}
        </View>
      </View>
    </View>
  );
};

export default Settings;
