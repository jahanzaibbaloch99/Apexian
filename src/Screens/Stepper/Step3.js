import React from 'react';

import {View, Text, StyleSheet, Image, ScrollView} from 'react-native';
import images from '../../assets/images';
import GradientText from '../../Components/GradientText';
import Colors from '../../Themes/Colors';
import CommonStyles from '../../CommonStyles';
import AppButton from '../../Components/AppButton';
import TextInputField from '../../Components/TextInput';
import {responsiveSpacing} from '../../Utilities/Helpers';

const Step3 = props => {
  return (
    <View style={style.container}>
      <ScrollView
        contentContainerStyle={{
          justifyContent: 'space-between',
          flexGrow: 1,
        }}>
        <View style={{paddingHorizontal: responsiveSpacing(50), flex: 1}}>
          <View
            style={{
              justifyContent: 'center',
              alignItems: 'center',
              paddingTop: responsiveSpacing(70),
              paddingBottom: responsiveSpacing(20),
            }}>
            <View style={{marginVertical: responsiveSpacing(10)}}>
              <View style={{height: 35, width: 150}}>
                <Image
                  style={{
                    flex: 1,
                    height: undefined,
                    width: undefined,
                    resizeMode: 'center',
                  }}
                  source={images.step3}
                />
              </View>
            </View>
            <View
              style={{
                justifyContent: 'center',
                alignItems: 'center',
                alignContent: 'center',
                flexDirection: 'row',
                marginTop: responsiveSpacing(10),
              }}>
              <Text
                style={[
                  {fontSize: responsiveSpacing(20), color: 'white'},
                  CommonStyles.fontMedium500,
                ]}>
                Enter your Secret
              </Text>
              <GradientText
                style={[
                  CommonStyles.fontMedium500,
                  {fontSize: responsiveSpacing(20)},
                ]}
                colors={Colors.secondaryGradient}
                end={{x: 1, y: 0}}
                start={{x: 0, y: 0}}>
                {`${' Recovery'}`}
              </GradientText>
            </View>
            <View>
              <GradientText
                style={[
                  CommonStyles.fontMedium500,
                  {fontSize: responsiveSpacing(20)},
                ]}
                colors={Colors.secondaryGradient}
                end={{x: 1, y: 0}}
                start={{x: 0, y: 0}}>
                Phrase
              </GradientText>
            </View>
            <View
              style={{
                justifyContent: 'center',
                alignItems: 'center',
                marginTop: responsiveSpacing(10),
              }}>
              <Text
                style={[
                  {
                    color: 'white',
                    textAlign: 'center',
                    fontSize: responsiveSpacing(13),
                  },
                  CommonStyles.fontRegular400,
                ]}>
                Enter your 12 phrase code you just got from your wallet.
              </Text>
            </View>
          </View>
          <View
            style={{
              flex: 2,
              // justifyContent: 'center',
              // alignItems: 'center',
              // alignContent: 'center',
            }}>
            <View
              style={{
                flexDirection: 'row',
                marginVertical: responsiveSpacing(10),
              }}>
              <View style={{flex: 1, marginHorizontal: responsiveSpacing(10)}}>
                <TextInputField number={'1'} placeholder="Secret" />
              </View>
              <View style={{flex: 1, marginHorizontal: responsiveSpacing(10)}}>
                <TextInputField number={'2'} placeholder="Secret" />
              </View>
            </View>
            <View
              style={{
                flexDirection: 'row',
                marginVertical: responsiveSpacing(10),
              }}>
              <View style={{flex: 1, marginHorizontal: responsiveSpacing(10)}}>
                <TextInputField number={'3'} placeholder="Secret" />
              </View>
              <View style={{flex: 1, marginHorizontal: responsiveSpacing(10)}}>
                <TextInputField number={'4'} placeholder="Secret" />
              </View>
            </View>
            <View
              style={{
                flexDirection: 'row',
                marginVertical: responsiveSpacing(10),
              }}>
              <View style={{flex: 1, marginHorizontal: responsiveSpacing(10)}}>
                <TextInputField number={'5'} placeholder="Secret" />
              </View>
              <View style={{flex: 1, marginHorizontal: responsiveSpacing(10)}}>
                <TextInputField number={'6'} placeholder="Secret" />
              </View>
            </View>
            <View
              style={{
                flexDirection: 'row',
                marginVertical: responsiveSpacing(10),
              }}>
              <View style={{flex: 1, marginHorizontal: responsiveSpacing(10)}}>
                <TextInputField number={'7'} placeholder="Secret" />
              </View>
              <View style={{flex: 1, marginHorizontal: responsiveSpacing(10)}}>
                <TextInputField number={'8'} placeholder="Secret" />
              </View>
            </View>
            <View
              style={{
                flexDirection: 'row',
                marginVertical: responsiveSpacing(10),
              }}>
              <View style={{flex: 1, marginHorizontal: responsiveSpacing(10)}}>
                <TextInputField number={'9'} placeholder="Secret" />
              </View>
              <View style={{flex: 1, marginHorizontal: responsiveSpacing(10)}}>
                <TextInputField number={'10'} placeholder="Secret" />
              </View>
            </View>
            <View
              style={{
                flexDirection: 'row',
                marginVertical: responsiveSpacing(10),
              }}>
              <View style={{flex: 1, marginHorizontal: responsiveSpacing(10)}}>
                <TextInputField number={'11'} placeholder="Secret" />
              </View>
              <View style={{flex: 1, marginHorizontal: responsiveSpacing(10)}}>
                <TextInputField number={'12'} placeholder="Secret" />
              </View>
            </View>
          </View>
        </View>
        <View
          style={{
            marginHorizontal: responsiveSpacing(20),
            marginBottom: responsiveSpacing(20),
          }}>
          <AppButton
            onPress={() => {
              props.navigation.navigate('PinScreen');
            }}>
            Secure Your Wallet
          </AppButton>
        </View>
      </ScrollView>
    </View>
  );
};

const style = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#000',
  },
});
export default Step3;
