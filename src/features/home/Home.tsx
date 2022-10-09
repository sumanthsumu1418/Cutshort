import {StackNavigationProp} from '@react-navigation/stack';
import React, {useCallback, useEffect} from 'react';
import {SafeAreaView, StyleSheet, Text, View, Image} from 'react-native';

import Space from '../../common/components/abstract/Space';
import {RootStackParamsList} from '../navigation/Navigator';
import {images} from '../../common/assets/images/index';
import {layoutUtil} from '../../common/helpers/layoutUtil';
import {Colors} from '../../Theme/Variables';
import AppButton from '../../common/components/Button';
import currency from '../../constants/currency.json';
import RectangleContainer from '../../common/components/RectangleContainer';
import FastImage from 'react-native-fast-image';
import OptimizedFlatlist from '../../common/components/OptimizedFlatlist';
import styles from '../../Styles/styles';

interface Props {
  navigation: StackNavigationProp<RootStackParamsList, 'Home'>;
}

const companies = [
  {
    index: 1,
    name: 'Company One',
    category: 'Finance',
    start: 1981,
    end: 2004,
    profile: images.profile1,
    status: images.recived,
    money: '200,000',
  },
  {
    index: 2,
    name: 'Company Two',
    category: 'Retail',
    start: 1992,
    end: 2008,
    profile: images.profile2,
    status: images.failed,
    money: '200,000',
  },
  {
    index: 3,
    name: 'Company Three',
    category: 'Auto',
    start: 1999,
    end: 2007,
    profile: images.profile3,
    status: images.send,
    money: '200,000',
  },
  {
    index: 4,
    name: 'Company Four',
    category: 'Retail',
    start: 1989,
    end: 2010,
    profile: images.profile4,
    status: images.recived,
    money: '200,000',
  },
  {
    index: 5,
    name: 'Company Five',
    category: 'Technology',
    start: 2009,
    end: 2014,
    profile: images.profile1,
    status: images.recived,
    money: '200,000',
  },
  {
    index: 6,
    name: 'Company Six',
    category: 'Finance',
    start: 1987,
    end: 2010,
    profile: images.profile2,
    status: images.send,
    money: '200,000',
  },
  {
    index: 7,
    name: 'Company Seven',
    category: 'Auto',
    start: 1986,
    end: 1996,
    profile: images.profile3,
    status: images.failed,
    money: '200,000',
  },
  {
    index: 8,
    name: 'Company Eight',
    category: 'Technology',
    start: 2011,
    end: 2016,
    profile: images.profile4,
    status: images.recived,
    money: '200,000',
  },
  {
    index: 9,
    name: 'Company Nine',
    category: 'Retail',
    start: 1981,
    end: 1989,
    profile: images.profile1,
    status: images.failed,
    money: '200,000',
  },
];

const height = layoutUtil.height;
const width = layoutUtil.width;
const Home = ({navigation}: Props) => {
  const addMoney = () => {
    console.log('Add money');
    navigation.navigate('Landing');
  };

  const sendMoney = () => {
    navigation.navigate('ProductView');
  };

  const requestMoney = () => {
    navigation.navigate('RequestMoney');
  };

  const ProfileIconView = () => {
    return (
      <View style={styles.profileIconContainer}>
        <Image
          style={styles.profileImageStyle}
          source={images.defaultProfile}
          // resizeMode={FastImage.resizeMode.contain}
        />
      </View>
    );
  };

  const BalanceContainer = () => {
    return (
      <View>
        <Text style={{...styles.welcomeUserTextStyle, fontSize: 12}}>
          Your current balance is
        </Text>
        <Space.V s={4} />
        <Text style={styles.balanceTextStyle}>
          {`${currency.Nigeria} 200,000`}
        </Text>
      </View>
    );
  };

  const HeaderContainer = () => {
    return (
      <View style={{flexDirection: 'row'}}>
        <View style={{flex: 0.15}}>
          <ProfileIconView />
        </View>

        <View style={{flex: 0.6, alignSelf: 'flex-start'}}>
          <Text style={styles.welcomeUserTextStyle}>Hello Sandra,</Text>
        </View>
        <View style={{marginTop: 10, flex: 0.25}}>
          <AppButton
            onPress={addMoney}
            title={'Add money'}
            backgroundColor={Colors.homeAddBG}
            buttonContainer={styles.AddButtonContainer}
            textStyle={styles.AddTextStyle}
            borderStyle={undefined}
          />
        </View>
      </View>
    );
  };

  const MoneyOperation = () => {
    return (
      <View style={{flexDirection: 'row', justifyContent: 'space-between'}}>
        <AppButton
          onPress={requestMoney}
          title={'Request Money'}
          backgroundColor={Colors.homeBG}
          buttonContainer={styles.moneyOpnContainer}
          textStyle={styles.moneyOpnTextStyle}
          borderStyle={styles.moneyOpnBorder}
        />
        <Space.H s={4} />
        <AppButton
          onPress={sendMoney}
          title={'Send Money'}
          backgroundColor={Colors.homeBG}
          buttonContainer={styles.moneyOpnContainer}
          textStyle={styles.moneyOpnTextStyle}
          borderStyle={styles.moneyOpnBorder}
        />
      </View>
    );
  };

  const TransactionHeaderView = () => {
    return (
      <View style={styles.transactionViewHeader}>
        <View>
          <Text style={{color: Colors.white, fontWeight: '400', fontSize: 18}}>
            All Transactions
          </Text>
        </View>
        <View style={{flexDirection: 'row'}}>
          <Text style={{color: '#4E589F', fontSize: 14, marginTop: 9}}>
            Sort by:
          </Text>
          <Text style={styles.recentTextStyle}>{` Recent `}</Text>
          <Text style={styles.dropdownSymbolView}>^</Text>
        </View>
      </View>
    );
  };

  const TansactionStatusView = ({item}) => {
    return (
      <View
        style={{
          justifyContent: 'center',
        }}>
        <View>
          <Text style={styles.transactionNameStyle}>{item.item.name}</Text>
        </View>

        <View>
          <FastImage
            style={{
              marginTop: 5,
              width:
                item.item.status == images.recived
                  ? width * 0.19
                  : item.item.status == images.failed
                  ? width * 0.16
                  : width * 0.14,
              height: height * 0.026,
            }}
            source={item.item.status}
            resizeMode={FastImage.resizeMode.contain}
          />
        </View>
      </View>
    );
  };

  const TransactionProfImgView = ({item}) => {
    return (
      <View style={{marginVertical: 3}}>
        <FastImage
          style={{
            width: width * 0.111,
            height: height * 0.0514,
          }}
          source={item.item.profile}
        />
      </View>
    );
  };

  const TransactionProfileView = ({item}) => {
    // console.log('TransactionProfileView===>', item);
    return (
      <View style={{marginVertical: height * 0.026, marginHorizontal: 16}}>
        <View
          style={{
            flexDirection: 'row',
          }}>
          <TransactionProfImgView item={item} />
          <Space.H s={5} />
          <TansactionStatusView item={item} />
        </View>
      </View>
    );
  };

  const TransactionMoneyView = ({item}) => {
    return (
      <View style={{justifyContent: 'center', marginHorizontal: 16}}>
        <Text
          style={{
            color:
              item.item.status == images.recived
                ? '#1DC7AC'
                : item.item.status == images.failed
                ? '#FE4A54'
                : '#FAAD39',
            fontWeight: '700',
          }}>{`${currency.Nigeria + ' ' + item.item.money} `}</Text>
      </View>
    );
  };

  const renderItem = useCallback(item => {
    // console.log(item);
    return (
      <View
        style={{
          ...styles.homeRenderItemContainer,
          backgroundColor: item.index % 2 == 0 ? '#192259' : '#10194E',
        }}>
        <TransactionProfileView item={item} />
        <TransactionMoneyView item={item} />
      </View>
    );
  }, []);

  const keyExtractor = useCallback((item, index) => {
    // console.log(index);
    index.toString();
  }, []);

  const TransactionView = () => {
    return (
      <View style={styles.tranactionViewContainer}>
        <Space.V s={12} />
        <View style={{alignSelf: 'center'}}>
          <RectangleContainer
            rectContainerStyle={styles.rectangleContainerStyle}
          />
        </View>
        <Space.V s={6} />
        <TransactionHeaderView />
        <Space.V s={12} />
        <OptimizedFlatlist
          data={companies}
          renderItem={renderItem}
          keyExtractor={keyExtractor}
          itemHeight={height * 0.95}
        />
      </View>
    );
  };

  useEffect(() => {
    console.log(height, width);

    return () => {};
  }, []);
  return (
    <SafeAreaView style={styles.homeContainer}>
      <View style={styles.innerContainer}>
        <HeaderContainer />
        <Space.V s={16} />
        <BalanceContainer />
        <Space.V s={24} />
        <MoneyOperation />
      </View>
      <TransactionView />
    </SafeAreaView>
  );
};

export default Home;
