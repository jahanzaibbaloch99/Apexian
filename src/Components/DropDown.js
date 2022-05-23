import React from 'react';
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
import {responsiveSpacing} from '../Utilities/Helpers';
import images from '../assets/images';
import CommonStyles from '../CommonStyles';
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
      <TouchableOpacity
        onPress={() => setModalShow(true)}
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
        <View
          style={{
            justifyContent: 'center',
            alignItems: 'center',
            marginHorizontal: responsiveSpacing(10),
          }}>
          <Icon name="angle-down" color="#aaa" size={20} />
        </View>
      </TouchableOpacity>
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
