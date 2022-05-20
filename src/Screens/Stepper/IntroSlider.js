import React from 'react';
import {
  View,
  Text,
  ImageBackground,
  Image,
  TouchableOpacity,
} from 'react-native';
import {StyleSheet} from 'react-native';
import AppIntroSlider from 'react-native-app-intro-slider';
import images from '../../assets/images';
import CommonStyles from '../../CommonStyles';
import Icon from 'react-native-vector-icons/Ionicons';
import {responsiveSpacing} from '../../Utilities/Helpers';

const slides = [
  {
    key: 'one',
    title: 'SAFE & SECURE',
    text: 'Now we are annoucing Swap feature on your',
    image: images.icon1,
    backgroundImage: images.onboarding1,
  },
  {
    key: 'two',
    title: 'crypto asset & nft',
    text: 'Now we are annoucing Swap feature on your wallet',
    image: images.icon2,
    backgroundImage: images.onboarding2,
  },
  {
    key: 'three',
    title: 'Trade asset',
    text: 'Enjoy quick transaction for Sending & Recieving Crypto on your Wallet',
    image: images.icon3,
    backgroundImage: images.onboarding3,
  },
  {
    key: 'four',
    title: 'Explore decentralized',
    text: 'Enjoy quick transaction for Sending & Recieving Crypto on your Wallet',
    image: images.icon4,
    backgroundImage: images.onboarding4,
  },
];

const IntroSlider = props => {
  return (
    <View style={{flex: 1, backgroundColor: 'black'}}>
      <AppIntroSlider
        data={slides}
        showNextButton={false}
        dotStyle={{backgroundColor: '#45474C'}}
        renderDoneButton={() => {
          return (
            <TouchableOpacity
              onPress={() => {
                props.navigation.navigate('LoginScreen');
              }}
              style={{
                width: 50,
                height: 50,
                backgroundColor: 'rgba(0, 0, 0, .9)',
                borderRadius: 20,
                justifyContent: 'center',
                alignItems: 'center',
              }}>
              <Icon
                name="md-checkmark"
                color="rgba(255, 255, 255, .9)"
                size={24}
              />
            </TouchableOpacity>
          );
        }}
        renderItem={({item}) => {
          return (
            <ImageBackground
              source={item.backgroundImage}
              resizeMode="cover"
              style={{flex: 1}}>
              <View
                style={{
                  flex: 1.5,
                  justifyContent: 'center',
                  alignItems: 'center',
                }}>
                <View style={{height: 300, width: 300}}>
                  <Image
                    resizeMode="contain"
                    style={{flex: 1, height: undefined, width: undefined}}
                    source={item.image}
                  />
                </View>
              </View>
              <View
                style={{
                  flex: 1,
                  justifyContent: 'center',
                  alignItems: 'center',
                  paddingHorizontal: responsiveSpacing(30),
                }}>
                <View>
                  <Text
                    style={[
                      CommonStyles.fontSemiBold600,
                      {color: 'white', fontSize: responsiveSpacing(24)},
                    ]}>
                    {item.title.toUpperCase()}
                  </Text>
                </View>
                <View style={{marginVertical: responsiveSpacing(10)}}>
                  <Text
                    style={[
                      CommonStyles.fontMedium500,
                      {
                        color: 'white',
                        fontSize: responsiveSpacing(16),
                        textAlign: 'center',
                      },
                    ]}>
                    {item.text}
                  </Text>
                </View>
              </View>
            </ImageBackground>
          );
        }}
      />
    </View>
  );
};

export default IntroSlider;
