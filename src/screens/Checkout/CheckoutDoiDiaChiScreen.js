import React, { Component } from 'react';
import {
  View,
  Text,
  TouchableHighlight,
  Image,
  StyleSheet,
  SafeAreaView,
  ScrollView,
} from 'react-native';
import ConfirmButtonComponent from '../../components/Checkout/ConfirmButtonComponent';
import DiaChiNhanHangComponent from '../../components/Checkout/DiaChiNhanHangComponent';
import NavBarComponent from '../../components/Checkout/NavBarComponent';

const arrayData = [
  {
    name: 'Nguyễn Anh Duy',
    phone: '0912345678',
    address: '123 ABC, phường XY, Quận Z, thành phố Hồ Chí Minh',
  },
  {
    name: 'Nguyễn Anh Duy',
    phone: '0912345678',
    address: '123 ABC, phường XY, Quận Z, thành phố Hồ Chí Minh',
  },
  {
    name: 'Nguyễn Anh Duy',
    phone: '0912345678',
    address: '123 ABC, phường XY, Quận Z, thành phố Hồ Chí Minh',
  },
];

class CheckoutDoiDiaChiScreen extends Component {
  constructor(props) {
    super(props);
    this.state = {
      picked_index: 1,
      navbar_title: 'Chọn địa chỉ nhận hàng',
      confirm_button_text: 'Tiến hành thanh toán',
      right_button: {
        display: true,
        icon: false,
        src: null,
        text: 'SỬA',
      },
    };
  }
  render() {
    return (
      <SafeAreaView style={styles.screen_container}>
        <NavBarComponent title={this.state.navbar_title} right={this.state.right_button} />
        <ScrollView>
          {arrayData.map((item, index) => {
            return (
              <TouchableHighlight
                activeOpacity={0.6}
                underlayColor="#DDDDDD"
                style={styles.touchable}
                key={index}
                onPress={() => this.setState({ picked_index: index })}
              >
                <DiaChiNhanHangComponent
                  information={item}
                  picked={this.state.picked_index === index ? true : false}
                />
              </TouchableHighlight>
            );
          })}
          <TouchableHighlight
            style={styles.touchable}
            activeOpacity={0.6}
            underlayColor="#DDDDDD"
            onPress={() => alert('Them dia chi')}
          >
            <View style={styles.new_address}>
              <Text style={styles.new_address_text}>Thêm địa chỉ nhận hàng mới</Text>
              <View style={styles.picked_icon}>
                <Image source={require('../../resources/icons/add.png')} />
              </View>
            </View>
          </TouchableHighlight>
        </ScrollView>
        <TouchableHighlight
          style={styles.confirm_button}
          activeOpacity={0.6}
          underlayColor="#f56e6e"
          onPress={() => alert('Tien hanh thanh toan')}
        >
          <ConfirmButtonComponent title={this.state.confirm_button_text} />
        </TouchableHighlight>
      </SafeAreaView>
    );
  }
}

const styles = StyleSheet.create({
  screen_container: {
    width: '100%',
    height: '100%',
    display: 'flex',
    flexDirection: 'column',
    justifyContent: 'space-between',
  },

  new_address: {
    paddingTop: 10,
    paddingBottom: 10,
    paddingLeft: 20,
    paddingRight: 20,
    display: 'flex',
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
  },

  new_address_text: {
    fontSize: 20,
  },

  picked_icon: {
    flex: 1,
    width: 24,
    height: 24,
    display: 'flex',
    flexDirection: 'row',
    justifyContent: 'flex-end',
    alignItems: 'center',
  },

  touchable: {
    backgroundColor: 'white',
    shadowColor: '#000',
    shadowOffset: { width: 1, height: 1 },
    shadowOpacity: 0.4,
    shadowRadius: 3,
    elevation: 5,
    marginBottom: 10,
  },

  confirm_button: {
    backgroundColor: '#F62424',
    paddingTop: 20,
    paddingBottom: 20,
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    width: '100%',
  },
});

export default CheckoutDoiDiaChiScreen;
