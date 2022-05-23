import React from 'react';
import {Text, TextInput, StyleSheet, View} from 'react-native';
import CommonStyles from '../CommonStyles';
import Colors from '../Themes/Colors';

const SearchInput = props => {
  return (
    <>
      <View style={[styles.textInputcontainer, props.containerStyle]}>
        <TextInput
          placeholderTextColor={'gray'}
          style={[styles.textInput, props.inputStyle]}
          {...props}
        />
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
    paddingVertical: 10,
    flex: 1,
    color: 'white',
    paddingLeft: 20,
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
