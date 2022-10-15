import React, {StyleSheet, Platform, Dimensions} from 'react-native';
import {Colors} from '../Theme/Variables';
import {layoutUtil} from '../common/helpers/layoutUtil';

const height = layoutUtil.height;
const width = layoutUtil.width;

export default StyleSheet.create({
  container: {
    flex: 1,
    // alignItems: 'center',
    backgroundColor: Colors.landingDarkBlue,
  },
  buttonContainer: {
    paddingHorizontal: 2,
  },
  onboardingViewStyle: {
    flex: 0.85,
    backgroundColor: Colors.landingLightBlue,
    borderTopRightRadius: 70,
  },
  onboardingProgressStyle: {
    width: 24,
    backgroundColor: '#FFB129',
  },
  onboardingTextStyle: {
    color: '#FFFFFF',
    fontWeight: '400',
    fontSize: 13,
  },
  onboardingHeaderTextStyle: {
    color: '#FFFFFF',
    fontWeight: '700',
    fontSize: 16,
  },
  textStyle: {
    fontSize: 16,
    color: '#17288E',
  },
  signinBtn: {
    position: 'absolute',
    minWidth: 100,
    right: 10,
    top: 10,
  },
  homeContainer: {
    flex: 1,
    backgroundColor: Colors.homeBG,
  },
  innerContainer: {margin: 15, flex: 0.4},
  profileIconContainer: {
    width: 50,
    height: 50,
    borderRadius: 25,
    backgroundColor: Colors.homeAddBG,
  },
  welcomeUserTextStyle: {
    color: Colors.white,
    fontWeight: '400',
    fontSize: 18,
    marginTop: 15,
  },
  balanceTextStyle: {
    color: Colors.white,
    fontWeight: '700',
    fontSize: 40,
  },
  profileImageStyle: {
    position: 'absolute',
    left: 15,
    top: 20,
  },
  scrollView: {
    flexGrow: 1,
    padding: 16,
    marginBottom: 16,
    backgroundColor: '#e9e9e9',
  },
  pingPong: {
    flexDirection: 'row',
    flex: 1,
  },
  header: {
    alignSelf: 'flex-start',
    fontSize: 20,
  },
  AddButtonContainer: {
    width: 100,
    height: 35,
  },
  AddTextStyle: {
    fontSize: 12,
    color: Colors.homeAddText,
  },
  moneyOpnBorder: {
    borderWidth: 1,
    borderColor: Colors.homeMoneyOpnBorder,
  },
  moneyOpnContainer: {
    width: width * 0.44,
    height: height * 0.07,
  },
  moneyOpnTextStyle: {
    fontSize: 16,
    color: Colors.homeMoneyOpnBorder,
  },
  tranactionViewContainer: {
    backgroundColor: '#10194E',
    flex: 0.6,
    borderTopLeftRadius: 40,
    borderTopRightRadius: 40,
  },
  transactionViewHeader: {
    justifyContent: 'space-between',
    flexDirection: 'row',
    marginHorizontal: 24,
    alignItems: 'center',
  },
  rectangleContainerStyle: {
    width: layoutUtil.width * 0.15,
    backgroundColor: '#4E589F',
    height: 6,
  },
  recentTextStyle: {
    color: Colors.white,
    fontSize: 16,
    marginTop: 8,
    fontWeight: '300',
  },
  dropdownSymbolView: {
    color: Colors.white,
    fontSize: 24,
    marginBottom: 5,
    fontWeight: '300',
    transform: [{rotate: '180deg'}],
  },
  homeRenderItemContainer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
  },
  transactionNameStyle: {
    color: '#858EC5',
    fontSize: 16,
    fontWeight: '700',
    marginLeft: 3,
  },
  backTextStyle: {
    color: '#D7C9C9',
    fontSize: 13,
    fontWeight: '400',
  },
  footerContainer: {
    width: width,
    height: height * 0.08,
    backgroundColor: '#000',
    justifyContent: 'space-between',
    flexDirection: 'row',
    alignItems: 'center',
    // width: width,
  },
  footerBorderStyle: {
    borderRadius: 0,
  },
  footerTextStyle: {
    color: '#fff',
    fontSize: 20,
    fontWeight: '500',
  },
  SendMoneyTextStyle: {
    color: '#FFFFFF',
  },
  SendMoneyButtonContainer: {
    height: height * 0.064,
    width: width * 0.402,
  },
  SendMoneyTransformBG: {
    position: 'absolute',
    width: width,
    height: height * 0.422,
  },
  SendMoneyHeaderContainer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
  },
  SendMoneyHeaderTitleText: {
    fontSize: 16,
    fontWeight: '500',
    textAlign: 'center',
  },
  defaultCirContainerStyle: {
    position: 'absolute',
    width: 175,
    height: 175,
    top: height * 0.153,
    backgroundColor: '#192259',
    borderRadius: 82.5,
  },
  senDMoneyPofileImgStyle: {
    width: 125,
    height: 125,
    position: 'absolute',
    top: height * 0.18,
  },
  SendMoneyTextContainer: {
    position: 'absolute',
    top: height * 0.4,
    justifyContent: 'center',
    alignItems: 'center',
  },
  sendMoneyTextStule: {
    color: '#EEEEEE',
    fontSize: 24,
    fontWeight: '500',
    textAlignVertical: 'center',
  },
  wrapper: {
    height: height * 0.0515,
    borderWidth: 1,
    borderRadius: 8,
    paddingHorizontal: 5,
    marginTop: 5,
    backgroundColor: '#10194E',
  },
  inputContainer: {
    paddingVertical: 12,
  },
  textInput: {
    flex: 1,
    width: '100%',
  },
  error: {
    color: Colors.error,
    paddingTop: 4,
    fontSize: 12,
  },
  inputStyle: {
    // borderRadius: 8,
    color: '#fff',
    paddingHorizontal: 6,
    fontWeight: '400',
    fontSize: 14,
  },
  productHeaderContainer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginHorizontal: 12,
  },
  productLogo: {
    width: 80,
    height: 40,
    resizeMode: 'contain',
    marginTop: 3,
    marginLeft: 24,
  },
  imageContainer: {
    width: 50,
    height: 50,
    backgroundColor: '#FFFFFF',
    borderRadius: 25,
    justifyContent: 'center',
    alignItems: 'center',
  },
  productDecorationContainer: {
    position: 'absolute',
    backgroundColor: '#fff',
    width: width,
    borderWidth: 1,
    borderColor: '#0000001A',
  },
  productRectContainer: {
    width: 36,
    height: 2,
    backgroundColor: '#D3CFCD',
  },
  productDecrnHeaderContainer: {
    flexDirection: 'row',
    marginHorizontal: 24,
    justifyContent: 'space-between',
  },
  colorContainer: {
    flex: 1,
    marginVertical: 8,
    marginHorizontal: 1,
  },
  selectedColorContainer: {
    width: 50,
    height: 50,
    backgroundColor: '#fff',
    borderRadius: 25,
    borderWidth: 1,
    borderColor: '#C8B8A0',
    justifyContent: 'center',
    alignItems: 'center',
  },
  ColorContainerView: {
    width: 40,
    height: 40,
    backgroundColor: '#000',
    borderRadius: 20,
  },
  unselectedColorContainer: {
    height: 50,
    width: 50,
    justifyContent: 'center',
    alignItems: 'center',
  },
  decrnContView: {
    backgroundColor: '#fff',
    width: width - 24,
    height: height * 0.475,
    borderWidth: 1,
    borderColor: '#0000001A',
    marginRight: 12,
    borderRadius: 5,
  },
  decrnHeaderContView: {
    backgroundColor: '#5A0200',
    borderTopLeftRadius: 5,
    borderTopRightRadius: 5,
    height: height * 0.075,
    justifyContent: 'center',
    alignItems: 'center',
  },
  colorOrMatContainer: {
    position: 'absolute',
    backgroundColor: '#fff',
    width: width,
    height: height * 0.047,
    borderWidth: 1,
    borderColor: '#0000001A',
    top: height * 0.245,
    justifyContent: 'center',
  },
  progressViewContainer: {
    position: 'absolute',
    top: height * 0.795,
    width: width,
    justifyContent: 'center',
    alignItems: 'center',
    flexDirection: 'row',
  },
  progressSelected: {
    width: 7,
    height: 7,
    backgroundColor: '#000',
    borderRadius: 5,
  },
  remixHeaderContainer: {
    flex: 1,
    marginTop: height * 0.06,
    marginHorizontal: width * 0.05,
  },
  remixContainer: {
    flex: 1,
    backgroundColor: Colors.homeAddBG,
  },
  sliderContainer: {
    position: 'absolute',
    bottom: height * 0.1025,
    right: width * 0.85,
    transform: [{rotate: '-90deg'}],
  },
  sliderStyle: {
    width: height * 0.7,
    height: 60,
    position: 'absolute',
    left: 0,
  },
  playMusicContainer: {
    position: 'absolute',
    bottom: height * 0.1,

    width: 60,
    height: 60,
    backgroundColor: '#fff',
    justifyContent: 'center',
    alignItems: 'center',
    borderRadius: 30,
  },
  remixHeaderViewContainer: {
    width: 30,
    height: 30,
    backgroundColor: '#fff',
    justifyContent: 'center',
    alignItems: 'center',
    borderRadius: 8,
  },
  remixInstructionTextStle: {
    textAlign: 'right',
    color: '#fff',
    fontSize: 18,
    fontWeight: '500',
  },
  cacheMusicContainer: {
    position: 'absolute',
          bottom: height * 0.1,
          right: width * 0.15,
  },
});
