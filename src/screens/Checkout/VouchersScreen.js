import React, { Component } from 'react';
import { View, TouchableHighlight, StyleSheet, SafeAreaView, ScrollView } from 'react-native';
import NavBarComponent from '../../components/Checkout/NavBarComponent';
import VoucherSearchField from '../../components/Voucher/VoucherInputComponent';
import VoucherComponent from '../../components/Voucher/VoucherComponent';

const arrayData = [
  {
    image: '../../resources/imgs/voucher/voucher-image.png',
    title: 'Voucher miễn phí vận chuyển',
    desc: 'Đơn tối thiểu 100k, giảm tối thiểu 15k',
    expiration: '01/08/2021',
  },
  {
    image: '../../resources/imgs/voucher/voucher-image.png',
    title: 'Voucher giảm giá 10%',
    desc: 'Đơn tối thiểu 100k, giảm tối thiểu 50k',
    expiration: '01/08/2021',
  },
  {
    image: '../../resources/imgs/voucher/voucher-image.png',
    title: 'Voucher miễn phí vận chuyển',
    desc: 'Đơn tối thiểu 100k, giảm tối thiểu 15k',
    expiration: '01/08/2021',
  },
];

class VouchersScreen extends Component {
  constructor(props) {
    super(props);
    this.state = {
      active_index: 1,
      navbar_title: 'Chọn voucher',
      right_button: {
        display: true,
        icon: false,
        src: null,
        text: null,
      },
      voucher_array: arrayData,
    };
  }
  render() {
    const onActiveHandle = (index) => {
      index === this.state.active_index
        ? this.setState({ active_index: null })
        : this.setState({ active_index: index });
    };

    return (
      <SafeAreaView style={styles.screen_container}>
        <NavBarComponent title={this.state.navbar_title} right={this.state.right_button} />
        <VoucherSearchField />
        <ScrollView>
          {this.state.voucher_array.map((item, index) => {
            return (
              <VoucherComponent
                item={item}
                key={index}
                index={index}
                onClick={onActiveHandle}
                active={this.state.active_index === index ? true : false}
              />
            );
          })}
        </ScrollView>
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
});

export default VouchersScreen;
