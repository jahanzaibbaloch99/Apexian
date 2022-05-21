import React from 'react';
import {Text, TextInput, StyleSheet, View} from 'react-native';
import CommonStyles from '../CommonStyles';
import Colors from '../Themes/Colors';

const SearchInput = props => {
  return (
    <>
      <View
        style={{
          backgroundColor: '#202429',
          flexDirection: 'row',
          justifyContent: 'center',
          alignItems: 'center',
          borderRadius: 6,
        }}>
        <View style={styles.textInputcontainer}>
          <TextInput
            placeholderTextColor={'gray'}
            style={[styles.textInput, props.inputStyle]}
            {...props}
          />
        </View>
      </View>
    </>
  );
};

const styles = StyleSheet.create({
  textInputcontainer: {
    paddingLeft: 5,
    flexDirection: 'row',
    alignItems: 'center',
  },

  textInput: {
    ...CommonStyles.fontRegular400,
    fontSize: 13,
    backgroundColor: Colors.white,
    paddingVertical: 10,
    flex: 1,
    color: '#333333',
    paddingLeft:20
  },
  errorText: {
    fontSize: 10,
    color: 'red',
    paddingHorizontal: 5,
    paddingVertical: 5,
  },
  errorInput: {
    borderColor: 'red',
    backgroundColor: Colors.white,
  },
});

export default SearchInput;
