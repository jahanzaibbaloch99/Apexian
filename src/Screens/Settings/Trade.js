import React, {useState} from 'react';

import {View, Text, TouchableOpacity, Dimensions} from 'react-native';
import NavigationBar from '../../Components/NavigationBar';
import {responsiveSpacing} from '../../Utilities/Helpers';
import GradientView from '../../Components/GradientView';
import Icon from 'react-native-vector-icons/Ionicons';
import Dropdown from '../../Components/DropDown';
import CommonStyles from '../../CommonStyles';
import {LineChart} from 'react-native-chart-kit';
const arr = [
  {name: '1D'},
  {name: '7D'},
  {name: '1M'},
  {name: '3M'},
  {name: '1Y'},
  {name: 'ALL'},
  {name: 'calendar-outline'},
];
const Send = () => {
  const [ind, setind] = useState(4);
  const [isModal, setIsModal] = useState(false);
  const [chartWidth, setchartWidth] = useState(null);
  return (
    <View style={{flex: 1, backgroundColor: '#000'}}>
      <View>
        <NavigationBar title={'Trade'} />
      </View>
      <View
        onLayout={({nativeEvent}) => {
          console.log(nativeEvent, 'EE');
        }}
        style={{
          paddingHorizontal: responsiveSpacing(20),
          marginTop: responsiveSpacing(20),
        }}>
        <View>
          <Dropdown modalShow={isModal} setModalShow={setIsModal} />
        </View>
        <View
          onLayout={({nativeEvent}) => {
            setchartWidth(nativeEvent.layout.width);
          }}
          style={{
            justifyContent: 'center',
            alignItems: 'center',
            width: '100%',
            marginTop: 25,
            // height: 300,
          }}>
          <LineChart
            style={{
              paddingRight: 0,
              justifyContent: 'center',
              alignItems: 'center',
              marginLeft: 0,
              marginRight: 0,
              left: 0,
              right: 0,
            }}
            hideLegend={true}
            data={{
              datasets: [
                {
                  data: [
                    Math.random() * 100,
                    Math.random() * 100,
                    Math.random() * 100,
                    Math.random() * 100,
                    Math.random() * 100,
                    Math.random() * 100,
                  ],
                },
              ],
            }}
            width={chartWidth} // from react-native
            height={220}
            yAxisInterval={1} // optional, defaults to 1
            chartConfig={{
              backgroundColor: '#4CD964',
              // backgroundGradientFrom: '#4CD964',
              // backgroundGradientTo: '#4CD964',
              decimalPlaces: 2, // optional, defaults to 2dp
              color: (opacity = 1) => `rgba(76, 217, 100, ${opacity})`,
              labelColor: (opacity = 1) => `rgba(76, 217, 100, ${0})`,
              style: {
                borderRadius: 16,
              },
              propsForDots: {
                r: '2',
                strokeWidth: '2',
                stroke: '#fff',
              },
            }}
            bezier
          />
        </View>
        <View>
          <View
            style={{
              backgroundColor: 'rgba(255,255,255, 0.1)',
              paddingHorizontal: responsiveSpacing(15),
              paddingVertical: responsiveSpacing(10),
              borderRadius: 10,
              flexDirection: 'row',
              justifyContent: 'space-between',
            }}>
            {arr.map((ele, i) => {
              return (
                <TouchableOpacity
                  onPress={() => {
                    setind(i);
                  }}>
                  {ind == i ? (
                    <GradientView
                      style={{
                        borderRadius: 50,
                        // flex: 1,
                        justifyContent: 'center',
                        alignItems: 'center',
                        height: 35,
                        width: 35,
                      }}>
                      <View
                        style={{
                          justifyContent: 'center',
                          alignItems: 'center',
                          alignSelf: 'center',
                        }}>
                        {ele.name == 'calendar-outline' ? (
                          <Icon name={ele.name} color="#aaa" size={14} />
                        ) : (
                          <Text
                            style={[
                              CommonStyles.fontRegular400,
                              {fontSize: 10, color: 'white'},
                            ]}>
                            {ele.name}
                          </Text>
                        )}
                      </View>
                    </GradientView>
                  ) : (
                    <View
                      style={{
                        borderRadius: 50,
                        // flex: 1,
                        justifyContent: 'center',
                        alignItems: 'center',
                        height: 35,
                        width: 35,
                      }}>
                      <View
                        style={{
                          justifyContent: 'center',
                          alignItems: 'center',
                          alignSelf: 'center',
                        }}>
                        {ele.name == 'calendar-outline' ? (
                          <Icon name={ele.name} color="#fff" size={14} />
                        ) : (
                          <Text
                            style={[
                              CommonStyles.fontRegular400,
                              {fontSize: 10, color: 'white'},
                            ]}>
                            {ele.name}
                          </Text>
                        )}
                      </View>
                    </View>
                  )}
                </TouchableOpacity>
              );
            })}
          </View>
        </View>
      </View>
    </View>
  );
};

export default Send;
