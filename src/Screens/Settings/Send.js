import React from 'react';

import {View, Text, TouchableOpacity, Image} from 'react-native';
import NavigationBar from '../../Components/NavigationBar';
import CommonStyles from '../../CommonStyles';
import images from '../../assets/images';
import {responsiveSpacing} from '../../Utilities/Helpers';
import GradientView from '../../Components/GradientView';
import SearchInput from '../../Components/SearchInput';
const Send = () => {
  return (
    <View style={{flex: 1, backgroundColor: '#000'}}>
      <View>
        <NavigationBar title={'Send'} />
      </View>
      <View
        style={{
          paddingHorizontal: responsiveSpacing(20),
          marginTop: responsiveSpacing(20),
        }}>
        <View
          style={{
            backgroundColor: 'rgba(255,255,255, 0.1)',
            paddingHorizontal: responsiveSpacing(15),
            paddingVertical: responsiveSpacing(20),
            borderRadius: 10,
            flexDirection: 'row',
          }}>
          <View
            style={{
              marginHorizontal: responsiveSpacing(10),
              justifyContent: 'center',
            }}>
            <View style={{height: 40, width: 40}}>
              <Image
                source={images.btc2}
                style={{flex: 1, width: undefined, height: undefined}}
              />
            </View>
          </View>
          <View style={{flex: 1, justifyContent: 'center'}}>
            <View>
              <Text
                style={[
                  CommonStyles.fontRegular400,
                  {fontSize: 14, color: 'white'},
                ]}>
                BTC
              </Text>
            </View>
            <View>
              <Text
                style={[
                  CommonStyles.fontRegular400,
                  {fontSize: 13, color: 'white'},
                ]}>
                0.09346478 USD
              </Text>
            </View>
          </View>
        </View>
        <View style={{marginTop: responsiveSpacing(25)}}>
          <View
            style={{
              backgroundColor: 'rgba(255,255,255, 0.1)',
              paddingHorizontal: responsiveSpacing(15),
              paddingVertical: responsiveSpacing(20),
              borderRadius: 10,
              flexDirection: 'row',
              justifyContent: 'space-between',
            }}>
            <View style={{flexDirection: 'row'}}>
              <View style={{marginRight: responsiveSpacing(15)}}>
                <Text
                  style={[
                    CommonStyles.fontRegular400,
                    {color: 'white', fontSize: 20},
                  ]}>
                  $
                </Text>
              </View>
              <View>
                <Text
                  style={[
                    CommonStyles.fontRegular400,
                    {color: 'white', fontSize: 20},
                  ]}>
                  59
                </Text>
              </View>
            </View>
            <View style={{flexDirection: 'row', alignItems: 'center'}}>
              <View>
                <GradientView
                  style={{
                    paddingHorizontal: responsiveSpacing(10),
                    paddingVertical: responsiveSpacing(10),
                    borderRadius: 5,
                    marginHorizontal: 10,
                  }}>
                  <Text
                    style={[
                      CommonStyles.fontRegular400,
                      {color: 'white', fontSize: 10},
                    ]}>
                    USD
                  </Text>
                </GradientView>
              </View>
              <View>
                <GradientView
                  style={{
                    paddingHorizontal: responsiveSpacing(10),
                    paddingVertical: responsiveSpacing(10),
                    borderRadius: 5,
                  }}
                  gradientColor={['#45474C', '#45474C']}>
                  <Text
                    style={[
                      CommonStyles.fontRegular400,
                      {color: 'white', fontSize: 10},
                    ]}>
                    BTC
                  </Text>
                </GradientView>
              </View>
            </View>
          </View>
          <View
            style={{
              marginVertical: responsiveSpacing(10),
              paddingHorizontal: responsiveSpacing(10),
            }}>
            <View style={{flexDirection: 'row'}}>
              <Text
                style={[
                  CommonStyles.fontRegular400,
                  {color: 'white', fontSize: 12, opacity: 0.5},
                ]}>
                You're sending
              </Text>
              <View style={{marginHorizontal: 5}}>
                <Text
                  style={[
                    CommonStyles.fontRegular400,
                    {color: 'white', fontSize: 12},
                  ]}>
                  0.0000323 BTC
                </Text>
              </View>
            </View>
          </View>
          <View
            style={{
              backgroundColor: 'rgba(255,255,255, 0.1)',
              borderRadius: 10,
              flexDirection: 'row',
              alignItems: 'center',
              paddingHorizontal: responsiveSpacing(10),
              paddingVertical: responsiveSpacing(10),
            }}>
            <View style={{flex: 1}}>
              <SearchInput placeholder="Put Receiver's Address" />
            </View>
            <View style={{paddingHorizontal: responsiveSpacing(15)}}>
              <View style={{height: 24, width: 24}}>
                <Image
                  source={images.qr}
                  style={{flex: 1, height: undefined, width: undefined}}
                />
              </View>
            </View>
          </View>
          <View
            style={{
              marginVertical: responsiveSpacing(15),
              paddingHorizontal: responsiveSpacing(15),
              flexDirection: 'row-reverse',
              opacity: 0.5,
            }}>
            <Text style={{color: 'white', fontFamily: 'Roboto-Italic'}}>
              Fees $0.88 / 0.0000002 BTC
            </Text>
          </View>
          <View
            style={{
              backgroundColor: 'rgba(255,255,255, 0.1)',
              borderRadius: 10,
              flexDirection: 'row',
              alignItems: 'center',
              paddingHorizontal: responsiveSpacing(10),
              paddingVertical: responsiveSpacing(10),
              marginVertical: responsiveSpacing(15),
            }}>
            <View style={{flex: 1}}>
              <SearchInput placeholder="Note" />
            </View>
            <View style={{paddingRight: responsiveSpacing(25)}}>
              <Text
                style={[
                  CommonStyles.fontRegular400,
                  {color: 'white', opacity: 0.5},
                ]}>
                Optional
              </Text>
            </View>
          </View>
        </View>
      </View>
    </View>
  );
};

export default Send;
