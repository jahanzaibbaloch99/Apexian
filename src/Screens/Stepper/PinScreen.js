import React, {useState} from 'react';
import {
  View,
  Text,
  TouchableOpacity,
  ScrollView,
  StyleSheet,
} from 'react-native';
import CommonStyles from '../../CommonStyles';
import Colors from '../../Themes/Colors';
import AppButton from '../../Components/AppButton';
import { responsiveSpacing } from '../../Utilities/Helpers';
const PinScreen = props => {
  const [pin, setPin] = useState([]);
  const onPressed = number => {
    let pinState = pin;
    if (pinState.length < 6) {
      pinState = [...pin, number];
    }
    setPin(pinState);
  };
  const onDelete = () => {
    let pinState = pin;
    if (pinState.length) {
      pinState.pop();
      setPin(pinState);
    }
  };
  return (
    <View style={styles.flex1}>
      <ScrollView
        contentContainerStyle={styles.contentContainer}
        style={styles.container}
        keyboardShouldPersistTaps="handled">
        <View style={{flex: 1}} />
        <View style={styles.pinEntryWrapper}>
          <View style={{marginVertical: responsiveSpacing(5)}}>
            <Text
              style={[
                CommonStyles.fontMedium500,
                {fontSize:responsiveSpacing(20), color: 'white'},
              ]}>
              Secured Wallet
            </Text>
          </View>
          <View style={{marginVertical: responsiveSpacing(5)}}>
            <Text
              style={[
                CommonStyles.fontRegular400,
                {fontSize: responsiveSpacing(16), color: '#45474C'},
              ]}>
              Enter Your Passcode
            </Text>
          </View>
          <View style={styles.pinContainer}>
            <View
              style={[styles.pinValue, pin.length > 0 ? styles.filled : {}]}
            />
            <View
              style={[styles.pinValue, pin.length >= 1 ? styles.filled : {}]}
            />
            <View
              style={[styles.pinValue, pin.length >= 2 ? styles.filled : {}]}
            />
            <View
              style={[styles.pinValue, pin.length >= 3 ? styles.filled : {}]}
            />
            <View
              style={[styles.pinValue, pin.length >= 4 ? styles.filled : {}]}
            />
            <View
              style={[styles.pinValue, pin.length >= 5 ? styles.filled : {}]}
            />
          </View>
          <View style={styles.pinEntryRow}>
            <TouchableOpacity onPress={() => onPressed(1)}>
              <View style={styles.pinEntryButton}>
                <Text style={styles.pinEntryButtonText}>1</Text>
              </View>
            </TouchableOpacity>
            <TouchableOpacity onPress={() => onPressed(2)}>
              <View style={styles.pinEntryButton}>
                <Text style={styles.pinEntryButtonText}>2</Text>
              </View>
            </TouchableOpacity>
            <TouchableOpacity onPress={() => onPressed(3)}>
              <View style={styles.pinEntryButton}>
                <Text style={styles.pinEntryButtonText}>3</Text>
              </View>
            </TouchableOpacity>
          </View>
          <View style={styles.pinEntryRow}>
            <TouchableOpacity onPress={() => onPressed(4)}>
              <View style={styles.pinEntryButton}>
                <Text style={styles.pinEntryButtonText}>4</Text>
              </View>
            </TouchableOpacity>
            <TouchableOpacity onPress={() => onPressed(5)}>
              <View style={styles.pinEntryButton}>
                <Text style={styles.pinEntryButtonText}>5</Text>
              </View>
            </TouchableOpacity>
            <TouchableOpacity onPress={() => onPressed(6)}>
              <View style={styles.pinEntryButton}>
                <Text style={styles.pinEntryButtonText}>6</Text>
              </View>
            </TouchableOpacity>
          </View>
          <View style={styles.pinEntryRow}>
            <TouchableOpacity onPress={() => onPressed(7)}>
              <View style={styles.pinEntryButton}>
                <Text style={styles.pinEntryButtonText}>7</Text>
              </View>
            </TouchableOpacity>
            <TouchableOpacity onPress={() => onPressed(8)}>
              <View style={styles.pinEntryButton}>
                <Text style={styles.pinEntryButtonText}>8</Text>
              </View>
            </TouchableOpacity>
            <TouchableOpacity onPress={() => onPressed(9)}>
              <View style={styles.pinEntryButton}>
                <Text style={styles.pinEntryButtonText}>9</Text>
              </View>
            </TouchableOpacity>
          </View>
          <View style={styles.pinEntryRow}>
            <TouchableOpacity>
              <View style={styles.pinEntryButton} />
            </TouchableOpacity>
            <TouchableOpacity onPress={() => onPressed(0)}>
              <View style={styles.pinEntryButton}>
                <Text style={styles.pinEntryButtonText}>0</Text>
              </View>
            </TouchableOpacity>
            <TouchableOpacity onPress={() => onDelete()}>
              <View style={[styles.pinEntryButton]}>
                <View>
                  <Text style={styles.pinEntryButtonText}>{'<'}</Text>
                </View>
              </View>
            </TouchableOpacity>
          </View>
        </View>
        <View style={{paddingHorizontal:responsiveSpacing(20) }}>
          <AppButton
            onPress={() => {
              props.navigation.navigate('IntroSlider');
            }}
            gradientColor={['#45474C', '#45474C']}>
            Forget Your Pin?
          </AppButton>
        </View>
      </ScrollView>
    </View>
  );
};

export default PinScreen;

const styles = StyleSheet.create({
  flex1: {
    flex: 1,
  },
  pinEntryButtonText: {
    ...CommonStyles.fontRegular400,
    color: 'white',
    fontSize: responsiveSpacing(32),
  },
  contentContainer: {
    alignContent: 'center',
    justifyContent: 'center',
    flexGrow: 1,
    padding: responsiveSpacing(10),
  },
  container: {
    flex: 1,
    backgroundColor: 'black',
  },
  pinEntryWrapper: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
  },
  pinEntryRow: {
    flexDirection: 'row',
    justifyContent: 'space-between',
  },
  pinEntryButton: {
    // width: 40,
    // height: 40,
    paddingHorizontal: responsiveSpacing(35),
    paddingVertical: responsiveSpacing(10),
    marginVertical:responsiveSpacing(15),
    borderRadius: 20,
    // margin: 5,
    alignItems: 'center',
    justifyContent: 'center',
  },
  hidden: {
    width: 40,
    height: 40,
    margin: 5,
  },

  pinContainer: {
    flexDirection: 'row',
    marginVertical: responsiveSpacing(15),
  },
  pinValue: {
    paddingHorizontal: responsiveSpacing(7),
    paddingVertical: responsiveSpacing(7),
    borderRadius: 50,
    backgroundColor: '#45474C',
    marginHorizontal:responsiveSpacing(15),
  },
  filled: {
    backgroundColor: '#45474C',
  },
  button: {
    marginTop: responsiveSpacing(20),
  },
  cancelButton: {
    marginTop: responsiveSpacing(5),
    marginBottom: responsiveSpacing(10),
  },
  buttonsContainer: {
    alignItems: 'center',
  },
});
