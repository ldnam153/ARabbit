import React, { Component } from 'react';
import { View, Text, TouchableHighlight, FlatList, StyleSheet, SafeAreaView } from 'react-native';
import CheckoutInfoFieldComponent from '../../components/Checkout/CheckoutInfoFieldComponent';
import ConfirmButtonComponent from '../../components/Checkout/ConfirmButtonComponent';
import NavBarComponent from '../../components/Checkout/NavBarComponent';

const userData = [
  { title: 'Họ & tên', value: 'Nguyễn Anh Duy', forward: false },
  { title: 'Số điện thoại', value: '0912345678', forward: false },
  { title: 'Tỉnh/Thành phố', value: 'Hồ Chí Minh', forward: true },
  { title: 'Quận/Huyện', value: '5', forward: true },
  { title: 'Phường/Xã', value: '4', forward: true },
  { title: 'Địa chỉ cụ thể', value: '227 Nguyễn Văn Cừ', forward: false },
];

class CheckoutSuaDiaChiScreen extends Component {
  constructor(props) {
    super(props);
    this.state = {
      navbar_title: 'Sửa địa chỉ',
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
                  value={item.value}
                  forward={item.forward}
                  last={index === this.state.user_data.length - 1}
                />
              </TouchableHighlight>
            );
          }}
          keyExtractor={(item, index) => index}
        />
        <TouchableHighlight
          style={styles.delete_button}
          activeOpacity={0.6}
          underlayColor="#f0f0f0"
          onPress={goDDC}
        >
          <Text style={styles.delete_button_text}>Xoá địa chỉ này</Text>
        </TouchableHighlight>
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
    height:56,
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    bottom: 0,
    width: '100%',
  },

  delete_button: {
    position: 'absolute',
    width: '100%',
    bottom: '45%',
  },

  delete_button_text: {
    fontSize: 20,
    fontWeight: 'bold',
    textAlign: 'center',
    color: '#F62424'
  }
});

export default CheckoutSuaDiaChiScreen;
