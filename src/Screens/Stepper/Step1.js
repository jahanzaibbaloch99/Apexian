import React from 'react';
import {View, Text, StyleSheet, Image} from 'react-native';
import images from '../../assets/images';
import GradientText from '../../Components/GradientText';
import Colors from '../../Themes/Colors';
import CommonStyles from '../../CommonStyles';
import AppButton from '../../Components/AppButton';

const Step1 = props => {
  return (
    <View style={style.container}>
      <View style={{paddingHorizontal: 50, flex: 1}}>
        <View
          style={{
            paddingTop: 70,
            paddingBottom: 20,
            justifyContent: 'center',
            alignItems: 'center',
          }}>
          <View style={{marginVertical: 10}}>
            <View style={{height: 35, width: 150}}>
              <Image
                style={{
                  flex: 1,
                  height: undefined,
                  width: undefined,
                  resizeMode: 'center',
                }}
                source={images.step1}
              />
            </View>
          </View>
          <View
            style={{
              justifyContent: 'center',
              alignItems: 'center',
              alignContent: 'center',
              flexDirection: 'row',
              marginTop: 10,
            }}>
            <Text
              style={[
                {fontSize: 20, color: 'white'},
                CommonStyles.fontMedium500,
              ]}>
              Secure your
            </Text>
            <GradientText
              style={[CommonStyles.fontMedium500, {fontSize: 20}]}
              colors={Colors.primaryGradient}
              end={{x: 1, y: 0}}
              start={{x: 0, y: 0}}>
              {`${" Wallet"}`}
            </GradientText>
          </View>
          <View
            style={{
              justifyContent: 'center',
              alignItems: 'center',
              marginTop: 10,
            }}>
            <Text
              style={[
                {color: 'white', textAlign: 'center', fontSize: 13},
                CommonStyles.fontRegular400,
              ]}>
              Secure your wallet with 12 Phrase secret Recovery code. You can
              use this code to recover in case of your Account Recovery.
            </Text>
          </View>
        </View>
        <View style={{flex: 1}}>
          <View>
            <View>
              <Text
                style={[
                  {color: '#959799', fontSize: 13},
                  CommonStyles.fontRegular400,
                ]}>
                Risk Are
              </Text>
            </View>
            <View style={{marginTop: 10, paddingHorizontal: 10}}>
              <Text
                style={[
                  {color: 'white', fontSize: 13},
                  CommonStyles.fontRegular400,
                ]}>
                • You Lost It.
              </Text>
              <Text
                style={[
                  {color: 'white', fontSize: 13},
                  CommonStyles.fontRegular400,
                ]}>
                • You Forget where you put this
              </Text>
              <Text
                style={[
                  {color: 'white', fontSize: 13},
                  CommonStyles.fontRegular400,
                ]}>
                • Someone else find it
              </Text>
            </View>
          </View>
          <View>
            <View style={{marginTop: 20}}>
              <Text
                style={[
                  {color: '#959799', fontSize: 13},
                  CommonStyles.fontRegular400,
                ]}>
                Solution
              </Text>
            </View>
            <View style={{marginTop: 10, paddingHorizontal: 10}}>
              <Text
                style={[
                  {color: 'white', fontSize: 13},
                  CommonStyles.fontRegular400,
                ]}>
                • Store in Safe Place.
              </Text>
              <Text
                style={[
                  {color: 'white', fontSize: 13},
                  CommonStyles.fontRegular400,
                ]}>
                • Remind this code well.
              </Text>
            </View>
          </View>
        </View>
      </View>
      <View style={{marginHorizontal: 20, marginBottom: 20}}>
        <AppButton
          onPress={() => {
            props.navigation.navigate('Step2');
          }}>
          Next
        </AppButton>
      </View>
    </View>
  );
};

const style = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#000',
  },
});
export default Step1;
