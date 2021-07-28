import React, { Component } from 'react';
import { View, Text, TouchableHighlight, FlatList, StyleSheet, SafeAreaView } from 'react-native';
import CheckoutInfoFieldComponent from '../../components/Checkout/CheckoutInfoFieldComponent';
import ConfirmButtonComponent from '../../components/Checkout/ConfirmButtonComponent';
import NavBarComponent from '../../components/Checkout/NavBarComponent';

const userData = [
  { title: 'Họ & tên', placeholder: 'Điền họ & tên', forward: false },
  { title: 'Số điện thoại', placeholder: 'Điền số điện thoại', forward: false },
  { title: 'Tỉnh/Thành phố', placeholder: 'Chọn', forward: true },
  { title: 'Quận/Huyện', placeholder: 'Chọn', forward: true },
  { title: 'Phường/Xã', placeholder: 'Chọn', forward: true },
  { title: 'Địa chỉ cụ thể', placeholder: 'Số nhà, tên đường, tổ, khu phố', forward: false },
];

class CheckoutThemDiaChiScreen extends Component {
  constructor(props) {
    super(props);
    this.state = {
      navbar_title: 'Địa chỉ mới',
      confirm_button_text: 'Đồng ý',
      right_button: {
        display: false,
        icon: false,
        src: null,
        text: null,
      },
      user_data: userData,
    };
  }
  render() {
    const goBack = () =>{
      this.props.navigation.goBack();
    }
    const goDDC = () =>{
      this.props.navigation.pop();
    }
    return (
      <SafeAreaView style={styles.screen_container}>
        <NavBarComponent title={this.state.navbar_title} right={this.state.right_button} goBack={goBack}/>
        <FlatList
          data={this.state.user_data}
          renderItem={({ item, index }) => {
            return (
              <TouchableHighlight style={styles.touchable} activeOpacity={0.6} underlayColor="#DDD">
                <CheckoutInfoFieldComponent
                  title={item.title}
                  value={item.placeholder}
                  forward={item.forward}
                  last={index === this.state.user_data.length - 1}
                />
              </TouchableHighlight>
            );
          }}
          keyExtractor={(item, index) => index}
        />
        <TouchableHighlight
          style={styles.confirm_button}
          activeOpacity={0.6}
          underlayColor="#f56e6e"
          onPress={goDDC}
        >
          <ConfirmButtonComponent title={this.state.confirm_button_text} />
        </TouchableHighlight>
      </SafeAreaView>
    );
  }
}

const styles = StyleSheet.create({
  screen_container: {
    position: 'relative',
    width: '100%',
    height: '100%',
    display: 'flex',
    flexDirection: 'column',
    justifyContent: 'space-between',
  },

  touchable: {
    backgroundColor: 'white',
    shadowColor: '#000',
    shadowOffset: { width: 1, height: 1 },
    shadowOpacity: 0.4,
    shadowRadius: 3,
    elevation: 5,
  },

  confirm_button: {
    backgroundColor: '#F62424',
    height: 56,
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    bottom: 0,
    width: '100%',
  },
});

export default CheckoutThemDiaChiScreen;
