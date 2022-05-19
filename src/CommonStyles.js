import {StyleSheet, Platform, Dimensions} from 'react-native';
import {RFValuePercentage, RFValue} from 'react-native-responsive-fontsize';
import Colors from './Themes/Colors';

const windowHeight = Dimensions.get('window').height;

const CommonStyles = StyleSheet.create({
  appRedColor: {
    color: '#FF0000',
  },
  container: {
    flex: 1,
  },

  zIndex: {
    zIndex: 1,
  },

  paddingHorizontal20: {
    paddingHorizontal: RFValue(20),
  },
  paddingHorizontal2: {
    paddingHorizontal: 2,
  },
  bgColor: {
    backgroundColor: '#fff',
  },
  blackColor: {
    backgroundColor: '#000',
  },
  horizontalContainer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
  },
  horizontalCenterContainer: {
    flexDirection: 'row',
    justifyContent: 'center',
  },
  topBarHeight: {
    // height: 60,
  },

  fitToParent: {
    height: '100%',
    width: '100%',
  },
  bottomContainer: {
    backgroundColor: 'transparent',
    flexDirection: 'column-reverse',
  },
  grayFont: {
    color: '#666666',
  },
  grayLight: {
    color: '#a3a3a3',
  },
  fitToDevice: {
    position: 'absolute',
    top: 0,
    bottom: 0,
    left: 0,
    right: 0,
  },

  crossIcon: {
    position: 'absolute',
    top: 12,
    right: 12,
    opacity: 0.8,
  },
  leftCrossIcon: {
    height: 20,
    width: 20,
    opacity: 0.5,
    marginLeft: 3,
    marginRight: 3,
  },
  backgroundImage: {
    resizeMode: 'cover',
  },
  centerText: {
    textAlign: 'center',
  },
  leftText: {
    textAlign: 'left',
  },
  centerElement: {
    justifyContent: 'center',
  },
  shadow: {
    overflow: Platform.OS == 'android' ? 'hidden' : 'visible',
    // padding: 5,
    shadowColor: Platform.OS == 'android' ? '#000' : '#ccc',
    shadowOpacity: 1,
    shadowRadius: 2,
    elevation: 2,
    shadowOffset: {
      height: 1,
      weight: 1,
    },
  },

  buttonCenterText: {
    flexDirection: 'row',
    justifyContent: 'center',
  },

  profileImageSmall: {
    height: 34,
    width: 34,
    borderRadius: 17,
    resizeMode: 'cover',
    backgroundColor: '#e5e5e5',
  },
  profileImageMedium: {
    height: 50,
    width: 50,
    borderRadius: 25,
    resizeMode: 'cover',
    backgroundColor: '#e5e5e5',
  },

  profileImageMediumLeaderBoard: {
    height: 50,
    width: 50,
    //  borderRadius: 25,
    resizeMode: 'center',
    tintColor: '#000',
    //backgroundColor: '#e5e5e5',
  },
  profileImageMedium2: {
    height: 60,
    width: 60,
    borderRadius: 30,
    resizeMode: 'cover',
    backgroundColor: '#e5e5e5',
  },

  profileImageLarge: {
    height: 70,
    width: 70,
    borderRadius: 35,
    resizeMode: 'cover',
  },
  profileImageExtraLarge: {
    height: 90,
    width: 90,
    borderRadius: 45,
    resizeMode: 'cover',
  },
  squareImage: {
    height: 60,
    width: 56,
    backgroundColor: 'black',
    // borderRadius: 50,
    resizeMode: 'cover',
  },
  profileIcon: {
    height: 45,
    width: 45,
    justifyContent: 'center',
    alignSelf: 'center',
    resizeMode: 'contain',
  },

  profileIconLeaderBoard: {
    height: 40,
    width: 40,
    borderRadius: 20,
    justifyContent: 'center',
    alignSelf: 'center',
    resizeMode: 'cover',
  },
  profileImage1: {
    height: 30,
    width: 30,
    justifyContent: 'center',
    alignSelf: 'center',
    padding: 10,
    resizeMode: 'center',
  },

  profileImage2: {
    height: 50,
    width: 50,
    justifyContent: 'center',
    alignSelf: 'center',
    padding: RFValue(10),

    resizeMode: 'center',
  },

  profileIcon2: {
    height: 40,
    width: 40,
    justifyContent: 'center',
    alignSelf: 'center',
    padding: 10,
    resizeMode: 'center',
  },

  margin: {
    margin: 10,
  },
  buttonStyle: {
    shadowOffset: {height: 0, width: 0},
    shadowOpacity: 0,
    elevation: 0,
    borderRadius: 25,
  },
  textColorWhite: {
    color: 'white',
  },
  textColorPrimary: {
    color: Colors.primary,
  },
  textColorBlack: {
    color: '#000',
  },

  textColorGray: {
    color: '#A9A9A9',
  },

  transparent: {
    color: 'transparent',
  },
  pb5: {
    paddingBottom: RFValue(5),
  },
  pb10: {
    paddingBottom: RFValue(10),
  },
  pt5: {
    paddingTop: RFValue(5),
  },
  pt10: {
    paddingTop: RFValue(10),
  },
  pl5: {
    paddingLeft: RFValue(5),
  },
  pr5: {
    paddingRight: RFValue(5),
  },
  pr10: {
    paddingRight: RFValue(10),
  },
  pb10: {
    paddingBottom: RFValue(10),
  },
  pl10: {
    paddingLeft: RFValue(10),
  },
  pr10: {
    paddingRight: RFValue(10),
  },
  pt20: {
    paddingTop: RFValue(20),
  },
  pt15: {
    paddingTop: RFValue(15),
  },
  pr20: {
    paddingRight: RFValue(20),
  },
  pl20: {
    paddingLeft: RFValue(20),
  },
  pb20: {
    paddingBottom: RFValue(20),
  },
  padding5: {
    padding: RFValue(5),
  },
  padding10: {
    padding: RFValue(10),
  },
  padding15: {
    padding: RFValue(15),
  },
  padding20: {
    padding: RFValue(20),
  },
  paddingHorizontal5: {
    paddingHorizontal: RFValue(5),
  },
  paddingHorizontal10: {
    paddingHorizontal: RFValue(10),
  },
  paddingHorizontal15: {
    paddingHorizontal: RFValue(15),
  },
  paddingHorizontal20: {
    paddingHorizontal: RFValue(20),
  },
  paddingVertical5: {
    paddingVertical: RFValue(5),
  },
  paddingVertical10: {
    paddingVertical: RFValue(10),
  },
  paddingVertical15: {
    paddingVertical: RFValue(15),
  },
  paddingVertical20: {
    paddingVertical: RFValue(20),
  },
  marginHorizontal5: {
    marginHorizontal: RFValue(5),
  },
  marginHorizontal10: {
    marginHorizontal: RFValue(10),
  },
  marginHorizontal15: {
    marginHorizontal: RFValue(15),
  },
  marginHorizontal20: {
    marginHorizontal: RFValue(20),
  },
  marginVertical5: {
    marginVertical: RFValue(5),
  },
  marginVertical10: {
    marginVertical: RFValue(10),
  },
  marginVertical15: {
    marginVertical: RFValue(15),
  },
  marginVertical20: {
    marginVertical: RFValue(20),
  },
  row: {
    flexDirection: 'row',
  },
  justifyCenter: {
    justifyContent: 'center',
  },
  stretch: {
    resizeMode: 'stretch',
  },
  iconSize: {
    width: 20,
    height: 20,
  },
  modalView: {
    margin: 20,
    backgroundColor: 'white',
    // borderRadius: 10,
    paddingHorizontal: 20,
    // flex:1,
    // alignItems: "center",
    shadowColor: '#000',
    shadowOffset: {
      width: 0,
      height: 2,
    },
    shadowOpacity: 0.25,
    shadowRadius: 4,
    elevation: 5,
  },
  notificationShadow: {
    shadowColor: '#000',
    shadowOffset: {
      width: 0,
      height: 2,
    },
    shadowOpacity: 0.25,
    shadowRadius: 3.84,

    elevation: 5,
  },
  ml10: {
    marginLeft: RFValue(10),
  },
  ml20: {
    marginLeft: RFValue(20),
  },
  mr10: {
    marginRight: RFValue(10),
  },
  mr20: {
    marginRight: RFValue(20),
  },
  mt10: {
    marginTop: RFValue(10),
  },
  mt20: {
    marginTop: RFValue(20),
  },
  m5: {
    margin: RFValue(5),
  },
  m10: {
    margin: RFValue(10),
  },
  m15: {
    margin: RFValue(15),
  },
  m20: {
    margin: RFValue(20),
  },
  mtt10: {
    marginTop: RFValue(10),
  },
  mtt15: {
    marginTop: RFValue(15),
  },
  mtt20: {
    marginTop: RFValue(20),
  },
  mv10: {
    marginVertical: RFValue(10),
  },
  mv20: {
    marginVertical: RFValue(20),
  },
  textSizeLarge: {
    fontSize: RFValue(18),
  },
  textSizeMidLarge: {
    fontSize: RFValue(24),
  },
  textSizeIcon: {
    fontSize: RFValue(26),
  },
  textSizeNormal: {
    fontSize: RFValue(17),
  },

  activeView: {
    justifyContent: 'center',
    alignContent: 'center',
    borderBottomColor: 'red',
    borderBottomWidth: 3,
    paddingHorizontal: 20,
    marginHorizontal: 10,
  },
  inActiveView: {
    alignContent: 'center',
    paddingHorizontal: 20,
    borderBottomWidth: 3,
    marginHorizontal: 10,
    borderBottomColor: 'transparent',
  },

  // active: {
  //   fontSize: 14,
  //   padding: 10,
  //   fontFamily: 'Roboto-Medium',
  //   color: 'red',
  // },
  // inActive: {
  //   color: '#000',
  //   fontSize: 14,
  //   padding: 10,
  //   fontFamily: 'Roboto-Medium',
  // },

  activeImageBorder: {
    borderColor: '#ae4c61',
    borderWidth: 3,
    alignItems: 'center',
  },
  inActiveImageBorder: {
    borderColor: 'transparent',
    borderWidth: 0,
    alignItems: 'center',
    justifyContent: 'center',
  },
  textSizeAverage: {
    fontSize: RFValue(14, windowHeight),
  },
  textSizeMedium: {
    fontSize: RFValue(18, windowHeight),
  },
  textSizeBig: {
    fontSize: RFValue(25, windowHeight),
  },
  textSizeBigextra: {
    fontSize: RFValue(30, windowHeight),
  },
  textSizeAverageX: {
    fontSize: RFValue(16, windowHeight),
  },
  textSizeSmall: {
    fontSize: RFValue(11, windowHeight),
  },
  textSizeSmallX: {
    fontSize: RFValue(13, windowHeight),
  },
  fontLight: {
    fontFamily: 'Poppins-Light',
  },
  fontMedium: {
    fontFamily: 'Poppins-Medium',
  },
  fontRegular: {
    fontFamily: 'Poppins-Regular',
  },
  fontBold: {
    fontFamily: 'Poppins-Bold',
  },
  wrapper: {
    justifyContent: 'center',
    alignItems: 'center',
  },

  modalBackground: {
    flex: 1,
    alignItems: 'center',
    flexDirection: 'column',
    justifyContent: 'center',
    backgroundColor: '#000000AA',
  },
  activityIndicatorWrapper: {
    backgroundColor: '#eeeeee',
    width: '86%',
    borderRadius: 4,
    padding: 20,
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'space-evenly',
  },
});
export default CommonStyles;
