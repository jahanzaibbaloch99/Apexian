import React, {useState} from 'react';

import {View, Text, TouchableOpacity, Image} from 'react-native';
import images from '../../assets/images';
import CommonStyles from '../../CommonStyles';
import AppButton from '../../Components/AppButton';
import DropdownPopup from '../../Components/DropDownPopup';
import NavigationBar from '../../Components/NavigationBar';
import {responsiveSpacing} from '../../Utilities/Helpers';
const Swap = () => {
  const [isModal, setIsModal] = useState(false);
  const [isModal1, setIsModal1] = useState(false);

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
        <NavigationBar title={'Swap'} />
      </View>
      <View style={{paddingHorizontal: responsiveSpacing(15), flex: 1}}>
        <DropdownPopup
          selectedItem={selectedItem}
          setModalShow={setIsModal}
          modalShow={isModal}
        />
        <View
          style={{
            flexDirection: 'row-reverse',
            marginVertical: responsiveSpacing(5),
          }}>
          <Text style={[CommonStyles.fontMedium500, {fontSize: 11,color:"white"}]}>
            Balance: 0.03030 ETH
          </Text>
        </View>
        <View style={{marginVertical: responsiveSpacing(10)}}>
          <TouchableOpacity style={{height: 31, width: 31}}>
            <Image
              source={images.arrowswap}
              style={{flex: 1, width: undefined, height: undefined}}
            />
          </TouchableOpacity>
        </View>
        <View>
          <DropdownPopup
            selectedItem={selectedItem1}
            setModalShow={setIsModal1}
            modalShow={isModal1}
          />
        </View>
      </View>
      <View
        style={{
          paddingHorizontal: responsiveSpacing(15),
          marginVertical: responsiveSpacing(15),
        }}>
        <AppButton>Swap</AppButton>
      </View>
    </View>
  );
};

export default Swap;
