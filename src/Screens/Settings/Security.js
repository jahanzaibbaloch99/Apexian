import React, {useState} from 'react';

import {View, Text, TouchableOpacity, Image, Switch} from 'react-native';
import images from '../../assets/images';
import NavigationBar from '../../Components/NavigationBar';
import {responsiveSpacing} from '../../Utilities/Helpers';
import CommonStyles from '../../CommonStyles';
import GradientView from '../../Components/GradientView';
import Colors from '../../Themes/Colors';
const Arr = [
  {
    name: 'Backup',
    image: images.backup,
    title:
      'Your secret 12-Digits code is very important. In case, your account lost. You can backup using this key.',
    isToggle: false,
  },
  {
    name: 'Enable Biometric Finger',
    image: images.thumb,
    title: 'Login using your fingerprint on your phone.',
    isToggle: true,
  },
  {
    name: 'Secure with Pincode',
    image: images.tickshield,
    title: 'Keep your account safe using this feature.',
    isToggle: true,
  },
];
const Security = props => {
  const [isEnabled, setIsEnabled] = useState(true);
  const toggleSwitch = () => setIsEnabled(previousState => !previousState);
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
              style={{
                flexDirection: 'row',
                backgroundColor: 'rgba(255,255,255, 0.1)',
                marginBottom: responsiveSpacing(10),
                padding: responsiveSpacing(10),
                paddingVertical: 15,
                justifyContent: 'center',
                alignItems: 'center',
                borderRadius: 10,
              }}>
              <View
                style={{
                  height: 50,
                  width: 50,
                  justifyContent: 'center',
                  backgroundColor: 'rgba(255,255,255, 0.1)',
                  borderRadius: 10,
                  alignItems: 'center',
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
                  <Text
                    style={[
                      CommonStyles.fontRegular400,
                      {fontSize: 16, color: 'white'},
                    ]}>
                    {ele.name}
                  </Text>
                </View>
                <View
                  style={{
                    justifyContent: 'center',
                  }}>
                  <Text
                    style={[
                      CommonStyles.fontRegular400,
                      {fontSize: 12, color: 'white', opacity: 0.5},
                    ]}>
                    {ele.title}
                  </Text>
                </View>
              </View>
              <View>
                {ele.isToggle ? (
                  <Switch
                    trackColor={{false: '#767577', true: '#45474C'}}
                    thumbColor={isEnabled ? Colors.primary : '#45474C'}
                    ios_backgroundColor="#3e3e3e"
                    onValueChange={toggleSwitch}
                    value={isEnabled}
                  />
                ) : ele.isCurrency ? (
                  <GradientView
                    style={{paddingHorizontal: 10, paddingVertical: 5}}>
                    <Text
                      style={[CommonStyles.fontRegular400, {color: 'white'}]}>
                      USD
                    </Text>
                  </GradientView>
                ) : ele.hasIcon ? (
                  <View style={{height: 24, width: 24}}>
                    <Image
                      source={ele.hasIcon}
                      style={{flex: 1, width: undefined, height: undefined}}
                    />
                  </View>
                ) : (
                  <></>
                )}
              </View>
            </TouchableOpacity>
          );
        })}
      </View>
    </View>
  );
};

export default Security;
