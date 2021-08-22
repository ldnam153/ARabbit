import React, { Component } from 'react';
import { View, Text, TouchableHighlight, FlatList, StyleSheet, SafeAreaView } from 'react-native';
import CheckoutInfoFieldComponent from '../../components/Checkout/CheckoutInfoFieldComponent';
import ConfirmButtonComponent from '../../components/Checkout/ConfirmButtonComponent';
import NavBarComponent from '../../components/Checkout/NavBarComponent';
import { bindActionCreators } from 'redux';
import * as AddressActions from "../../actions/addressAction"
import { connect } from 'react-redux';

const userData = [
  { title: 'Họ & tên', placeholder: 'Điền họ & tên'},
  { title: 'Số điện thoại', placeholder: 'Điền số điện thoại'},
  { title: 'Tỉnh/Thành phố', placeholder: 'Chọn'},
  { title: 'Quận/Huyện', placeholder: 'Chọn'},
  { title: 'Phường/Xã', placeholder: 'Chọn'},
  { title: 'Địa chỉ cụ thể', placeholder: 'Số nhà, tên đường, tổ, khu phố'},
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
      new_user_data: {
        user_name: '',
        user_phone: '',
        province: {},
        district: {},
        ward: {},
        detail_address: ''
      },
      listDistricts: [],
      listWards: [],
    };
  }
  componentDidUpdate(preProps, prevState) {
    this.state.new_user_data.province !== prevState.new_user_data.province && fetch(`https://provinces.open-api.vn/api/d`).then((res) => res.json())
    .then(
      (result) => {
        this.setState({
          new_user_data: {...this.state.new_user_data, district: result.filter(item => item.province_code === this.state.new_user_data.province.code)},
          listDistricts: result.filter(item => item.province_code === this.state.new_user_data.province.code)
        });
      },
      (error) => {
        alert('Fetching error: ' + error);
      }
    );
    this.state.new_user_data.district !== prevState.new_user_data.district && fetch(`https://provinces.open-api.vn/api/w`).then((res) => res.json())
    .then(
      (result) => {
        this.setState({
          new_user_data: {...this.state.new_user_data, ward: result.filter(item => item.district_code === this.state.new_user_data.district.code)},
          listWards: result.filter(item => item.district_code === this.state.new_user_data.district.code)
        });
      },
      (error) => {
        alert('Fetching error: ' + error);
      }
    );
  }

  render() {
    const {actions} = this.props
    const goBack = () =>{
      this.props.navigation.goBack();
    }
    const goDDC = () =>{
      this.props.navigation.pop();
    }
    const provinceSelectHandler = (province) => {
      this.setState({new_user_data: {...this.state.new_user_data, province: province, district: {}, ward: {}}, listDistricts: [], listWards: []});
    }
    const districtSelectHandler = (district) => {
      this.setState({new_user_data: {...this.state.new_user_data, district: district, ward: {}}, listWards: []});
    }
    const wardSelectHandler = (ward) => {
      this.setState({new_user_data: {...this.state.new_user_data, ward: ward}});
    }
    const nameChangeHandler = (name) => {
      this.setState({new_user_data: {...this.state.new_user_data, user_name: name}});
    }
    const phoneChangeHandler = (phone) => {
      this.setState({new_user_data: {...this.state.new_user_data, user_phone: phone}});
    }
    const addressChangeHandler = (address) => {
      this.setState({new_user_data: {...this.state.new_user_data, detail_address: address}});
    }
    const submitHandler = () =>{
      if(this.state.new_user_data.user_name===''){
        alert('Chưa nhập tên')
        return;
      } 
      if(this.state.new_user_data.user_phone==='') {
        alert('Chưa nhập SĐT')
        return;
      }
      if(Object.keys(this.state.new_user_data.province).length===0 && this.state.new_user_data.province.constructor === Object){
        alert('Chưa chọn tỉnh thành')
        return;
      }
      if(Object.keys(this.state.new_user_data.district).length===0 && this.state.new_user_data.district.constructor === Object || Array.isArray(this.state.new_user_data.district)){
        alert('Chưa chọn quận/huyện')
        return;
      } 
      if(Object.keys(this.state.new_user_data.ward).length===0 && this.state.new_user_data.ward.constructor === Object || Array.isArray(this.state.new_user_data.ward)){
        alert('Chưa chọn phường/xã')
        return;
      } 
      if(this.state.new_user_data.detail_address==='') {
        alert('Chưa nhập địa chỉ')
        return;
      }
        const new_data = {
          name: this.state.new_user_data.user_name,
          phone: this.state.new_user_data.user_phone,
          city: this.state.new_user_data.province,
          district: this.state.new_user_data.district,
          ward: this.state.new_user_data.ward,
          address: this.state.new_user_data.detail_address,
        }
        actions.addAddress(new_data)
      this.props.navigation.pop()
    }
    var display = true
    if(this.state.new_user_data.user_name == '' 
    || this.state.new_user_data.user_phone == '' 
    || this.state.new_user_data.detail_address == '' 
    || (Object.keys(this.state.new_user_data.province).length===0 && this.state.new_user_data.province.constructor === Object)
    || (Object.keys(this.state.new_user_data.district).length===0 && this.state.new_user_data.district.constructor === Object)
    || (Object.keys(this.state.new_user_data.ward).length===0 && this.state.new_user_data.ward.constructor === Object)){
      display = false
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
                  index={index}
                  type={index === 0 || index === 1 || index === 5 ? 'input' : 'select'}
                  last={index === this.state.user_data.length - 1}
                  changeProvince={provinceSelectHandler}
                  districts={this.state.listDistricts}
                  changeDistrict={districtSelectHandler}
                  wards={this.state.listWards}
                  changeWard={wardSelectHandler}
                  changeName={nameChangeHandler}
                  changePhone={phoneChangeHandler}
                  changeAddress={addressChangeHandler}
                />
              </TouchableHighlight>
            );
          }}
          keyExtractor={(item, index) => index}
        />
        <TouchableHighlight
          style={[styles.confirm_button,{opacity: display? 1 : 0.3 }]}
          activeOpacity={0.6}
          underlayColor="#f56e6e"
          onPress={submitHandler}
          disabled={display?false:true}
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

const mapDispatchToProps = (dispatch) => {
  return {
    actions: bindActionCreators(AddressActions, dispatch)
  }
}

export default connect(null, mapDispatchToProps)(CheckoutThemDiaChiScreen)
