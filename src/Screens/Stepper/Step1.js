import React from 'react';

import {View, Text, StyleSheet, Image} from 'react-native';
import images from '../../assets/images';
import GradientText from '../../Components/GradientText';
import Colors from '../../Themes/Colors';
const Step1 = () => {
  return (
    <View style={style.container}>
      <View style={{paddingHorizontal: 50, flex: 1}}>
        <View
          style={{
            flex: 1.5,
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
            <Text style={{fontSize: 18, color: 'white'}}>Secure your</Text>
            <GradientText
              style={{fontSize: 20}}
              colors={Colors.primaryGradient}
              end={{x: 1, y: 0}}
              start={{x: 0, y: 0}}>
              {` ${'Wallet'}`}
            </GradientText>
          </View>
          <View
            style={{
              justifyContent: 'center',
              alignItems: 'center',
              marginTop: 10,
            }}>
            <Text style={{color: 'white', textAlign: 'center', fontSize: 12}}>
              Secure your wallet with 12 Phrase secret Recovery code. You can
              use this code to recover in case of your Account Rocovery.
            </Text>
          </View>
        </View>
        <View style={{flex: 3}}>
          <View>
            <View>
              <Text style={{color: '#959799'}}>Risk Are</Text>
            </View>
            <View style={{marginTop: 10, paddingHorizontal: 10}}>
              <Text style={{color: 'white'}}>• You Lost It.</Text>
              <Text style={{color: 'white'}}>
                • You Forget where you put this
              </Text>
              <Text style={{color: 'white'}}>• Someone else find it</Text>
            </View>
          </View>
          <View>
            <View style={{marginTop: 20}}>
              <Text style={{color: '#959799'}}>Solution</Text>
            </View>
            <View style={{marginTop: 10, paddingHorizontal: 10}}>
              <Text style={{color: 'white'}}>• Store in Safe Place.</Text>
              <Text style={{color: 'white'}}>• Remind this code well.</Text>
            </View>
          </View>
        </View>
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
