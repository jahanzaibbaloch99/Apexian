import React from 'react';
import {View, Text, TouchableOpacity, Image} from 'react-native';
import images from '../../assets/images';
import CommonStyles from '../../CommonStyles';
import NavigationBar from '../../Components/NavigationBar';
import {responsiveSpacing} from '../../Utilities/Helpers';
const Arr = [
  {
    image: images.nfticon,
    name: 'Defi Land Seed',
  },
  {
    image: images.nfticon,
    name: 'Defi Land Seed',
  },
];
const Nft = () => {
  return (
    <View style={{flex: 1, backgroundColor: '#000'}}>
      <View>
        <NavigationBar title={'NFT'} />
      </View>
      <View
        style={{
          marginVertical: responsiveSpacing(25),
          flex: 1,
          paddingHorizontal: responsiveSpacing(30),
        }}>
        {Arr.map(ele => {
          return (
            <TouchableOpacity
              style={{
                backgroundColor: '#202429',
                marginBottom: responsiveSpacing(10),
                paddingVertical: responsiveSpacing(15),
                paddingHorizontal: responsiveSpacing(10),
                borderRadius: 10,
                flexDirection: 'row',
              }}>
              <View>
                <View style={{height: 86, width: 134}}>
                  <Image
                    source={ele.image}
                    style={{flex: 1, width: undefined, height: undefined}}
                  />
                </View>
              </View>
              <View style={{marginLeft: 10, flex: 1}}>
                <Text
                  style={[
                    CommonStyles.fontRegular400,
                    {fontSize: responsiveSpacing(16)},
                  ]}>
                  {ele.name}
                </Text>
              </View>
            </TouchableOpacity>
          );
        })}
      </View>
    </View>
  );
};

export default Nft;
