import React, {useEffect, useState} from 'react';
import {
  TouchableOpacity,
  View,
  Text,
  Dimensions,
  ScrollView,
  Modal,
  Image,
} from 'react-native';
import Icon from 'react-native-vector-icons/FontAwesome5';
import {Fonts} from '../Themes';
import SearchInput from './SearchInput';
const DropdownPopup = ({
  modalShow,
  setModalShow,
  selectedItem,
  title,
  placeHolder,
  renderItem,
  data,
  touchableStyle,
  isHeading,
}) => {
  const {height: screenHeight} = Dimensions.get('screen');
  const [inputval, setInputVal] = React.useState('');
  return (
    <View>
      <View style={{margin: 5}}>{isHeading && <Text>{title}</Text>}</View>
      <View
        style={{
          flexDirection: 'row',
          paddingVertical: 10,
          backgroundColor: 'rgba(255,255,255, 0.1)',
          borderRadius: 10,
        }}>
        <TouchableOpacity
          onPress={() => setModalShow(true)}
          style={[
            {
              paddingVertical: 10,
              flexDirection: 'row',
              justifyContent: 'space-between',
              alignItems: 'center',
            },
            touchableStyle,
          ]}>
          <View style={{marginHorizontal: 15}}>
            <View style={{height: 48, width: 48}}>
              <Image
                source={selectedItem?.image}
                style={{flex: 1, height: undefined, width: undefined}}
              />
            </View>
          </View>
          <View>
            <Text>{selectedItem?.name}</Text>
          </View>
          {/* <View>
            <Text style={{color: 'black'}}>{selectedItem || placeHolder}</Text>
          </View> */}
          <View style={{marginHorizontal: 10}}>
            <Icon name="angle-down" color="#aaa" size={15} />
          </View>
        </TouchableOpacity>
        <View
          style={{
            flexDirection: 'row',
            paddingVertical: 15,
            marginHorizontal: 10,
          }}>
          <View
            style={{
              paddingHorizontal: 1,
              backgroundColor: 'rgba(255,255,255, 0.2)',
            }}
          />
        </View>
        <View
          style={{justifyContent: 'center', flex: 1, paddingHorizontal: 10}}>
          <SearchInput
            style={{backgroundColor: 'rgba(255,255,255, 0.0)'}}
            inputStyle={{paddingLeft: 0, color: 'white'}}
            placeholder="Type"
          />
        </View>
      </View>

      <Modal visible={modalShow} transparent={true}>
        <View
          activeOpacity={1}
          onPress={() => setModalShow(false)}
          style={{
            flex: 1,
            justifyContent: 'center',
            backgroundColor: 'rgba(0, 0, 0, 0.8)',
            padding: 20,
          }}>
          <View
            style={{
              maxHeight: screenHeight * 0.4,
              backgroundColor: '#fff',
              overflow: 'hidden',
              padding: 20,
              borderRadius: 5,
            }}>
            <View
              style={{
                flexDirection: 'row',
                justifyContent: 'space-between',
              }}>
              <Text>{title}</Text>
              <TouchableOpacity
                style={{marginHorizontal: 10}}
                onPress={() => setModalShow(false)}
                hitSlop={{
                  top: 10,
                  bottom: 10,
                  left: 10,
                  right: 10,
                }}>
                <Icon name={'times'} size={15} color={'#777'} />
              </TouchableOpacity>
            </View>
            <View>
              <ScrollView style={{marginVertical: 10}}>
                {data &&
                  data.length > 0 &&
                  data?.map((item, index) => {
                    return renderItem(item, index);
                  })}
              </ScrollView>
            </View>
          </View>
        </View>
      </Modal>
    </View>
  );
};

export default DropdownPopup;
