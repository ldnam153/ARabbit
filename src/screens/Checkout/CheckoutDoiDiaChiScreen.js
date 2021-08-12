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
import { bindActionCreators } from 'redux';
import * as AddressActions from "../../actions/addressAction"
import { connect } from 'react-redux';

const arrayData = [
  {
    name: 'Lưu Thiện Nhân',
    phone: '0703002347',
    address: '193E Trần Văn Đang, phường 10, Quận 3, TP.HCM',
  },
  {
    name: 'Nguyễn Anh Duy',
    phone: '0912345678',
    address: '123 ABC, phường XY, Quận Z, TP.HCM',
  },
  {
    name: 'Lý Duy Nam',
    phone: '0762103550',
    address: '686 Trần Hưng Đạo, Phường 2, Quận 5, TP.HCM',
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
    const goBack = () =>{
      this.props.navigation.goBack();
    }
    const goSDC = () =>{
      this.props.navigation.navigate('CheckoutSuaDiaChiScreen');
    }
    const goTT = () =>{
      this.props.navigation.navigate('ThanhToan');
    }
    const goTDC = () =>{
      this.props.navigation.navigate('CheckoutThemDiaChiScreen');
    }
    const {data, picked_index, actions} = this.props;
    return (
      <SafeAreaView style={styles.screen_container}>
        <NavBarComponent title={this.state.navbar_title} right={this.state.right_button} goBack={goBack} goSDC={goSDC}/>
        <ScrollView>
          {data.map((item, index) => {
            return (
              <TouchableHighlight
                activeOpacity={0.6}
                underlayColor="#DDDDDD"
                style={styles.touchable}
                key={index}
                onPress={() => {actions.changeIndex(index)}}
              >
                <DiaChiNhanHangComponent
                  information={item}
                  picked={picked_index === index ? true : false}
                />
              </TouchableHighlight>
            );
          })}
          <TouchableHighlight
            style={styles.touchable}
            activeOpacity={0.6}
            underlayColor="#DDDDDD"
            onPress={goTDC}
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
          onPress={goTT}
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
    height: 56,
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    width: '100%',
  },
});

const mapDispatchToProps = (dispatch) => {
  return {
    actions: bindActionCreators(AddressActions, dispatch)
  }
}

const mapStateToProps = (state) => {
  return {
      data: state.addressReducer.receiver,
      picked_index: state.addressReducer.picked_index,
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(CheckoutDoiDiaChiScreen)
