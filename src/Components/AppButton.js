import React from 'react';
import {Text, TouchableOpacity, StyleSheet, Image, View} from 'react-native';
import Colors from '../Themes/Colors';
const AppButton = ({
  textStyle,
  onPress,
  children,
  containerStyles,
  disabled,
  iconOnly,
  reverted,
  gradientColor,
  touchStyle,
}) => (
  <TouchableOpacity
    activeOpacity={0.6}
    disabled={disabled}
    onPress={onPress}
    style={[touchStyle]}>
    <View
      style={[
        styles.appButtonContainer,
        {opacity: disabled ? 0.7 : 1, backgroundColor: Colors.primary},
        containerStyles,
      ]}>
      {iconOnly ? (
        <Image
          source={iconOnly}
          style={{...styles.appButtonText, height: 20, width: 20}}
        />
      ) : (
        <Text style={[styles.appButtonText, textStyle]}>{children}</Text>
      )}
    </View>
  </TouchableOpacity>
);

const styles = StyleSheet.create({
  appButtonContainer: {
    paddingVertical: 12,
    paddingHorizontal: 15,
    borderRadius: 8,
  },
  appButtonText: {
    fontSize: 16,
    color: '#fff',
    alignSelf: 'center',
  },
});

export default AppButton;
