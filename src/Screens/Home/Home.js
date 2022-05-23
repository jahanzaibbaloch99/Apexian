import React, {useState} from 'react';
import {View, TouchableOpacity, Image, Text} from 'react-native';
import {responsiveSpacing} from '../../Utilities/Helpers';
import images from '../../assets/images';
import GradientView from '../../Components/GradientView';
import CommonStyles from '../../CommonStyles';
import SearchInput from '../../Components/SearchInput';
const Arr = [
  {
    name: 'USD',
  },
  {
    name: 'EUR',
  },
  {
    name: 'CAD',
  },
  {
    name: 'AUD',
  },
  {
    name: 'CHF',
  },
];

const Arr2 = [
  {image: images.btc, name: 'BTC', price: '0.83932 USD'},
  {image: images.btc1, name: 'BTC', price: '0.83932 USD'},
  {image: images.btc2, name: 'BTC', price: '0.83932 USD'},
];
const Home = props => {
  const [ind, setind] = useState(0);
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
              backgroundColor: 'rgba(255,255,255, 0.2)',
              borderRadius: 50,
              marginRight: responsiveSpacing(10),
            }}>
            <View style={{width: 24, height: 24}}>
              <Image
                style={{flex: 1, height: undefined, width: undefined}}
                source={images.gear}
              />
            </View>
          </TouchableOpacity>
          <TouchableOpacity
            style={{
              padding: responsiveSpacing(10),
              backgroundColor: 'rgba(255,255,255, 0.2)',
              borderRadius: 50,
            }}>
            <View style={{width: 24, height: 24}}>
              <Image
                style={{flex: 1, height: undefined, width: undefined}}
                source={images.time}
              />
            </View>
          </TouchableOpacity>
        </View>
        <View style={{marginVertical: responsiveSpacing(15)}}>
          <GradientView
            style={{borderRadius: 5, padding: responsiveSpacing(15)}}>
            <View style={{flexDirection: 'row'}}>
              {Arr.map((ele, i) => {
                return (
                  <TouchableOpacity
                    onPress={() => {
                      setind(i);
                    }}
                    style={{
                      paddingRight: responsiveSpacing(10),
                      paddingBottom: responsiveSpacing(10),
                    }}>
                    <Text
                      style={[
                        CommonStyles.fontMedium500,
                        {opacity: ind == i ? 1 : 0.5, fontSize: 14},
                      ]}>
                      {ele.name}
                    </Text>
                  </TouchableOpacity>
                );
              })}
            </View>
            <View style={{paddingHorizontal: responsiveSpacing(10)}}>
              <View
                style={{
                  flexDirection: 'row',
                  justifyContent: 'space-between',
                  marginBottom: responsiveSpacing(15),
                }}>
                <View style={{alignSelf: 'center'}}>
                  <Text
                    style={[
                      CommonStyles.fontRegular400,
                      {opacity: 0.5, fontSize: 13},
                    ]}>
                    Balance
                  </Text>
                </View>
                <TouchableOpacity
                  style={{
                    backgroundColor: 'rgba(255,255,255, 0.1)',
                    paddingHorizontal: responsiveSpacing(30),
                    paddingVertical: responsiveSpacing(10),
                    borderRadius: 10,
                  }}>
                  <Text style={[CommonStyles.fontRegular400]}>DEPOSIT</Text>
                </TouchableOpacity>
              </View>
              <View
                style={{flexDirection: 'row', justifyContent: 'space-between'}}>
                <View style={{flexDirection: 'row', flex: 1}}>
                  <Text
                    style={[
                      CommonStyles.fontSemiBold600,
                      {fontSize: responsiveSpacing(18)},
                    ]}>
                    $0.00
                  </Text>
                </View>
                <View
                  style={{
                    backgroundColor: 'rgba(255,255,255, 0.1)',
                    paddingHorizontal: responsiveSpacing(20),
                    paddingVertical: responsiveSpacing(15),
                    borderRadius: 10,
                    flexDirection: 'row',
                    flex: 3,
                  }}>
                  <View style={{flex: 2}}>
                    <Text
                      style={[CommonStyles.fontRegular400]}
                      numberOfLines={1}>
                      0xab5382nahb427t6524
                    </Text>
                  </View>
                  <View
                    style={{justifyContent: 'center', alignItems: 'center'}}>
                    <View style={{height: 14, width: 14}}>
                      <Image
                        source={images.copy}
                        style={{flex: 1, height: undefined, width: undefined}}
                      />
                    </View>
                  </View>
                </View>
              </View>
            </View>
          </GradientView>
        </View>
        <View style={{marginVertical: responsiveSpacing(10)}}>
          <SearchInput
            containerStyle={{
              backgroundColor: 'rgba(255,255,255, 0.3)',
              borderRadius: 10,
              paddingVertical: 5,
            }}
            placeholder="Search Assets"
          />
        </View>
        <View style={{marginVertical: responsiveSpacing(10)}}>
          {Arr2.map((ele, ind) => {
            return (
              <View
                style={{
                  flexDirection: 'row',
                  backgroundColor: 'rgba(255,255,255, 0.1)',
                  marginBottom: responsiveSpacing(10),
                  padding: responsiveSpacing(15),
                  borderRadius: 5,
                }}>
                <View style={{justifyContent: 'center'}}>
                  <View style={{height: 40, width: 40}}>
                    <Image
                      style={{flex: 1, height: undefined, width: undefined}}
                      source={ele.image}
                    />
                  </View>
                </View>
                <View
                  style={{
                    flex: 1,
                    paddingHorizontal: responsiveSpacing(15),
                    justifyContent: 'center',
                  }}>
                  <View>
                    <Text style={[CommonStyles.fontRegular400]}>
                      {ele.name}
                    </Text>
                  </View>
                  <View>
                    <Text style={[CommonStyles.fontRegular400]}>
                      {ele.price}
                    </Text>
                  </View>
                </View>
              </View>
            );
          })}
        </View>
      </View>
    </View>
  );
};

export default Home;
