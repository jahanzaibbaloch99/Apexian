import React from 'react';

import {View, Text, TouchableOpacity, Image} from 'react-native';
import images from '../../assets/images';
import NavigationBar from '../../Components/NavigationBar';
import {responsiveSpacing} from '../../Utilities/Helpers';
import CommonStyles from '../../CommonStyles';
const Arr = [
  {
    name: 'SECURITY',
    image: images.security,
    title: 'Control and manage your credentials.',
    route: 'Security',
  },
  {
    name: 'General',
    image: images.general,
    title: 'Notifications , sounds and other settings.',
    route: 'GeneralSetting',
  },
  {
    name: 'SUPPORT',
    image: images.support,
    title: 'Contact with us help.',
    route: 'Support',
  },
];
const Setting = props => {
  return (
    <View style={{flex: 1, backgroundColor: '#000'}}>
      <View>
        <NavigationBar title={'Setting'} />
      </View>
      <View
        style={{
          flex: 1,
          marginVertical: responsiveSpacing(20),
          paddingHorizontal: responsiveSpacing(20),
        }}>
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
                // paddingHorizontal:
                // paddingLeft:30,
                paddingVertical: responsiveSpacing(15),
                borderRadius: 10,
              }}>
              <View
                style={{
                  paddingHorizontal: responsiveSpacing(10),
                  justifyContent: 'center',
                  backgroundColor: 'rgba(255,255,255, 0.1)',
                  borderRadius: 10,
                }}>
                <View style={{height: 24, width: 24}}>
                  <Image
                    resizeMode="contain"
                    style={{flex: 1, height: undefined, width: undefined}}
                    source={ele.image}
                  />
                </View>
              </View>
              <View
                style={{
                  marginHorizontal: responsiveSpacing(10),
                  flex: 1,
                  justifyContent: 'center',
                }}>
                <View>
                  <Text style={[CommonStyles.fontRegular400, {fontSize: 16}]}>
                    {ele.name}
                  </Text>
                </View>
                <View
                  style={{
                    justifyContent: 'center',
                  }}>
                  <Text style={[CommonStyles.fontRegular400, {fontSize: 12}]}>
                    {ele.title}
                  </Text>
                </View>
              </View>
            </TouchableOpacity>
          );
        })}
      </View>
    </View>
  );
};

export default Setting;
