import React from 'react';

import {View, Text, StyleSheet, Image, FlatList} from 'react-native';
import images from '../../assets/images';
import GradientText from '../../Components/GradientText';
import Colors from '../../Themes/Colors';
import CommonStyles from '../../CommonStyles';
import AppButton from '../../Components/AppButton';
const Arr = [
  {
    name: '2331',
  },
  {
    name: '2331',
  },
  {
    name: '2331',
  },
  {
    name: '2331',
  },
  {
    name: '2331',
  },
  {
    name: '2331',
  },
  {
    name: '2331',
  },
  {
    name: '2331',
  },
  {
    name: '2331',
  },
  {
    name: '2331',
  },
  {
    name: '2331',
  },
  {
    name: '2331',
  },
];
const Step2 = props => {
  return (
    <View style={style.container}>
      <View style={{paddingHorizontal: 50, flex: 1}}>
        <View
          style={{
            justifyContent: 'center',
            alignItems: 'center',
            paddingTop: 70,
            paddingBottom: 20,
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
                source={images.step2}
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
            <GradientText
              style={[CommonStyles.fontMedium500, {fontSize: 20}]}
              colors={Colors.primaryGradient}
              end={{x: 1, y: 0}}
              start={{x: 0, y: 0}}>
              {`${'Write '}`}
            </GradientText>
            <Text
              style={[
                {fontSize: 20, color: 'white'},
                CommonStyles.fontMedium500,
              ]}>
              down
            </Text>
            <GradientText
              style={[CommonStyles.fontMedium500, {fontSize: 20}]}
              colors={Colors.primaryGradient}
              end={{x: 1, y: 0}}
              start={{x: 0, y: 0}}>
              {`${' Secret Recovery'}`}
            </GradientText>
          </View>
          <View>
            <GradientText
              style={[CommonStyles.fontMedium500, {fontSize: 20}]}
              colors={Colors.primaryGradient}
              end={{x: 1, y: 0}}
              start={{x: 0, y: 0}}>
              {`${' Phrase'}`}
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
              This your secret Recovery Phrase. Write it down on a paper and
              keep it in a safe place. You’ll be asked to re-eter this phrase on
              the next step.
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
          <FlatList
            style={{flex: 1}}
            numColumns={2}
            data={Arr}
            renderItem={({item, index}) => {
              return (
                <View
                  style={{
                    flex: 1,
                    marginHorizontal: 10,
                    paddingHorizontal: 15,
                    paddingVertical: 15,
                    backgroundColor: '#202429',
                    marginVertical: 5,
                    borderRadius: 5,
                  }}>
                  <View>
                    <View style={{flexDirection: 'row', }}>
                      <View
                        style={{
                          flex: 1,
                          alignItems: 'center',
                        }}>
                        <Text style={{color: 'white'}}>{index + 1}</Text>
                      </View>
                      <View style={{flex: 2}}>
                        <Text style={{color: 'white'}}>HEHE</Text>
                      </View>
                    </View>
                  </View>
                </View>
              );
            }}
          />
        </View>
      </View>
      <View style={{marginHorizontal: 20, marginBottom: 20}}>
        <AppButton
          onPress={() => {
            props.navigation.navigate('Step3');
          }}>
          Proceed
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
export default Step2;
