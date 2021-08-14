import React, { Component } from 'react';
import { View, Text, TouchableHighlight, FlatList, StyleSheet, SafeAreaView } from 'react-native';
import { connect } from 'react-redux';
import CheckoutInfoFieldForModifyingComponent from '../../components/Checkout/CheckoutInfoFieldForModifyingComponent';
import ConfirmButtonComponent from '../../components/Checkout/ConfirmButtonComponent';
import NavBarComponent from '../../components/Checkout/NavBarComponent';
import { bindActionCreators } from 'redux';
import * as AddressActions from "../../actions/addressAction"
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
      new_user_data: {
        user_name: this.props.receiver[this.props.picked_index].name,
        user_phone: this.props.receiver[this.props.picked_index].phone,
        province: this.props.receiver[this.props.picked_index].city,
        district: this.props.receiver[this.props.picked_index].district,
        ward: this.props.receiver[this.props.picked_index].ward,
        detail_address: this.props.receiver[this.props.picked_index].address
      },
      listDistricts: [],
      listWards: []
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
    const goBack = () =>{
      this.props.navigation.goBack();
    }
    const goDDC = () =>{
      this.props.navigation.pop();
    }
    const { actions } = this.props;
    const user_data = [
      { title: 'Họ & tên', value: this.state.new_user_data.user_name},
      { title: 'Số điện thoại', value: this.state.new_user_data.user_phone},
      { title: 'Tỉnh/Thành phố', value: this.state.new_user_data.province},
      { title: 'Quận/Huyện', value: this.state.new_user_data.district},
      { title: 'Phường/Xã', value: this.state.new_user_data.ward},
      { title: 'Địa chỉ cụ thể', value: this.state.new_user_data.detail_address},
    ];
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
      if(Object.keys(this.state.new_user_data.province).length===0 && this.state.new_user_data.province.constructor === Object || Array.isArray(this.state.new_user_data.province)){
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
        actions.changeAddress(new_data)
      this.props.navigation.pop()
    }
    const removeAddress = () => {
      actions.removeAddress();
      this.props.navigation.pop()
    }
    return (
      <SafeAreaView style={styles.screen_container}>
        <NavBarComponent title={this.state.navbar_title} right={this.state.right_button} goBack={goBack}/>
        <FlatList
          data={user_data}
          renderItem={({ item, index }) => {
            return (
              <TouchableHighlight style={styles.touchable} activeOpacity={0.6} underlayColor="#DDD">
                <CheckoutInfoFieldForModifyingComponent
                  title={item.title}
                  value={item.value}
                  index={index}
                  type={index === 0 || index === 1 || index === 5 ? 'input' : 'select'}
                  last={index === user_data.length - 1}
                  changeProvince={provinceSelectHandler}
                  currentProvinceCode={this.state.new_user_data.province.code}
                  districts={this.state.listDistricts}
                  changeDistrict={districtSelectHandler}
                  currentDistrictCode={this.state.new_user_data.district.code}
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
          style={styles.delete_button}
          activeOpacity={0.6}
          underlayColor="#f0f0f0"
          onPress={removeAddress}
        >
          <Text style={styles.delete_button_text}>Xoá địa chỉ này</Text>
        </TouchableHighlight>
        <TouchableHighlight
          style={styles.confirm_button}
          activeOpacity={0.6}
          underlayColor="#f56e6e"
          onPress={submitHandler}
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
    bottom: '30%',
  },

  delete_button_text: {
    fontSize: 20,
    fontWeight: 'bold',
    textAlign: 'center',
    color: '#F62424'
  }
});

const mapStateToProps = (state) => {
  return {
    receiver: state.addressReducer.receiver,
    picked_index: state.addressReducer.picked_index
  }
}

const mapDispatchToProps = (dispatch) => {
  return {
    actions: bindActionCreators(AddressActions, dispatch)
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(CheckoutSuaDiaChiScreen)
