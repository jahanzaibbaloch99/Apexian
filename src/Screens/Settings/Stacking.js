import React, {useState} from 'react';

import {View, Text, TouchableOpacity, Image} from 'react-native';
import images from '../../assets/images';
import CommonStyles from '../../CommonStyles';
import AppButton from '../../Components/AppButton';
import DropdownPopup from '../../Components/DropDownPopup';
import NavigationBar from '../../Components/NavigationBar';
import {responsiveSpacing} from '../../Utilities/Helpers';
import Icon from 'react-native-vector-icons/FontAwesome5';
import GradientView from '../../Components/GradientView';
import CheckBox from '@react-native-community/checkbox';

const Stacking = () => {
  const [isModal, setIsModal] = useState(false);
  const [isModal1, setIsModal1] = useState(false);
  const [toggleCheckBox, setToggleCheckBox] = useState(false);

  const [selectedItem, setSelectedItem] = useState({
    name: 'ETH',
    image: images.btc,
  });
  const [selectedItem1, setSelectedItem1] = useState({
    name: 'ETH',
    image: images.btc1,
  });
  return (
    <View style={{flex: 1, backgroundColor: '#000'}}>
      <View>
        <NavigationBar title={'Stacking'} />
      </View>
      <View style={{flex: 1}}>
        <View style={{paddingHorizontal: responsiveSpacing(15)}}>
          <DropdownPopup
            selectedItem={selectedItem}
            setModalShow={setIsModal}
            modalShow={isModal}
          />
          <View
            style={{
              flexDirection: 'row',
              justifyContent: 'space-between',
              marginVertical: responsiveSpacing(10),
              paddingHorizontal: responsiveSpacing(25),
            }}>
            <View style={{flexDirection: 'row'}}>
              <Text
                style={[
                  CommonStyles.fontMedium500,
                  {fontSize: 11, opacity: 0.5},
                ]}>
                Available:
              </Text>
              <Text style={[CommonStyles.fontMedium500, {fontSize: 11}]}>
                0.03030 ETH
              </Text>
            </View>
            <View style={{flexDirection: 'row', alignItems: 'center'}}>
              <Text
                style={[
                  CommonStyles.fontMedium500,
                  {fontSize: 11, opacity: 0.5},
                ]}>
                Limit:
              </Text>
              <Text style={[CommonStyles.fontMedium500, {fontSize: 11}]}>
                {' '}
                MIN 0.03030 ETH
              </Text>
            </View>
          </View>
        </View>
        <View
          style={{
            marginVertical: responsiveSpacing(15),
            backgroundColor: 'rgba(255,255,255, 0.2)',
            paddingHorizontal: responsiveSpacing(15),
            flexDirection: 'row',
            alignItems: 'center',
            justifyContent: 'space-between',
          }}>
          <View style={{paddingVertical: responsiveSpacing(15)}}>
            <Text style={[CommonStyles.fontRegular400, {fontSize: 12,color:"white"}]}>
              SUMMARY
            </Text>
          </View>
          <View style={{paddingVertical: responsiveSpacing(15)}}>
            <Icon name="angle-up" color="#aaa" size={15} />
          </View>
        </View>
        <View
          style={{
            flexDirection: 'row',
            alignItems: 'center',
            paddingHorizontal: responsiveSpacing(25),
            marginVertical: responsiveSpacing(15),
          }}>
          <View style={{marginRight: responsiveSpacing(10)}}>
            <GradientView style={{padding: 10, zIndex: 10, borderRadius: 5}} />
            <View style={{justifyContent: 'center', alignItems: 'center'}}>
              <View
                style={{
                  position: 'absolute',
                  // right: 0,
                  // left: 0,
                  top: -10,
                  width: 8,
                }}>
                <GradientView style={{paddingVertical: 20}} />
              </View>
            </View>
          </View>
          <View style={{flex: 1}}>
            <Text style={[CommonStyles.fontRegular400, {fontSize: 12,color:"white"}]}>
              Subscription date
            </Text>
          </View>
          <View>
            <Text style={[CommonStyles.fontRegular400, {fontSize: 12,color:"white"}]}>
              2022-05-20 21:45
            </Text>
          </View>
        </View>
        <View
          style={{
            flexDirection: 'row',
            alignItems: 'center',
            paddingHorizontal: responsiveSpacing(25),
            marginVertical: responsiveSpacing(15),
          }}>
          <View style={{marginRight: responsiveSpacing(10)}}>
            <GradientView style={{padding: 10, zIndex: 10, borderRadius: 5}} />
            <View style={{justifyContent: 'center', alignItems: 'center'}}>
              <View
                style={{
                  position: 'absolute',
                  // right: 0,
                  // left: 0,
                  top: -13,
                  width: 8,
                }}>
                <View
                  style={{
                    paddingVertical: 20,
                    backgroundColor: 'rgba(255,255,255, 0.2)',
                  }}
                />
              </View>
            </View>
          </View>
          <View style={{flex: 1}}>
            <Text style={[CommonStyles.fontRegular400, {fontSize: 12,color:"white"}]}>
              Value date
            </Text>
          </View>
          <View>
            <Text style={[CommonStyles.fontRegular400, {fontSize: 12,color:"white"}]}>
              2022-05-20 21:45
            </Text>
          </View>
        </View>
        <View
          style={{
            flexDirection: 'row',
            alignItems: 'center',
            paddingHorizontal: responsiveSpacing(25),
            marginVertical: responsiveSpacing(15),
          }}>
          <View style={{marginRight: responsiveSpacing(10)}}>
            <View
              style={{
                padding: 10,
                backgroundColor: 'rgba(255,255,255, 0.2)',
                borderRadius: 5,
              }}
            />
          </View>
          <View style={{flex: 1}}>
            <Text style={[CommonStyles.fontRegular400, {fontSize: 12,color:"white"}]}>
              Stacking date
            </Text>
          </View>
          <View>
            <Text style={[CommonStyles.fontRegular400, {fontSize: 12,color:"white"}]}>
              2022-05-20 21:45
            </Text>
          </View>
        </View>
      </View>
      <View
        style={{
          paddingHorizontal: responsiveSpacing(15),
          marginVertical: responsiveSpacing(15),
        }}>
        <View
          style={{
            paddingHorizontal: responsiveSpacing(30),
            flexDirection: 'row',
            alignItems: 'center',
            marginVertical: responsiveSpacing(10),
          }}>
          <View style={{flexDirection: 'row', alignItems: 'center'}}>
            <View style={{flexDirection: 'row', alignItems: 'center'}}>
              <CheckBox
                disabled={false}
                value={toggleCheckBox}
                onValueChange={newValue => setToggleCheckBox(newValue)}
              />
              <Text style={[CommonStyles.fontRegular400 , {color:"white"}]}>I have read the</Text>
            </View>

            <TouchableOpacity
              style={{
                marginLeft: 5,
                alignItems: 'center',
                justifyContent: 'center',
              }}>
              <Text style={[CommonStyles.fontRegular400, {color: '#6480DE'}]}>
                terms and conditions
              </Text>
            </TouchableOpacity>
          </View>
        </View>
        <AppButton>Confirm</AppButton>
      </View>
    </View>
  );
};

export default Stacking;
