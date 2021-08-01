import React, { Component } from 'react';
import { StyleSheet, SafeAreaView, ScrollView } from 'react-native';
import NavBarComponent from '../../components/Checkout/NavBarComponent';
import VoucherSearchField from '../../components/Voucher/VoucherInputComponent';
import VoucherComponent from '../../components/Voucher/VoucherComponent';
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';
import * as VoucherActions from '../../actions/voucherAction';

class VouchersScreen extends Component {
  constructor(props) {
    super(props);
    this.state = {
      navbar_title: 'Chọn voucher',
      right_button: {
        display: true,
        icon: false,
        src: null,
        text: null,
      },
    };
  }
  render() {
    const { activeVoucher, actions, listVoucher } = this.props;
    const onActiveHandle = (index) => {
      index === activeVoucher
        ? actions.setActiveVoucher(null)
        : actions.setActiveVoucher(index);
    };
    const goBack = () => {
      this.props.navigation.goBack();
    };
    const goTT = () => {
      this.props.navigation.pop();
    };
    return (
      <SafeAreaView style={styles.screen_container}>
        <NavBarComponent
          title={this.state.navbar_title}
          right={this.state.right_button}
          goBack={goBack}
        />
        <VoucherSearchField />
        <ScrollView>
          {listVoucher.map((item, index) => {
            return (
              <VoucherComponent
                item={item}
                key={index}
                index={index}
                onClick={onActiveHandle}
                active={activeVoucher === index ? true : false}
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

const mapStateToProps = (state) => {
  return {
    activeVoucher: state.voucherReducer.activeVoucher,
    listVoucher: state.voucherReducer.listVoucher
  };
};

const mapDispatchToProps = (dispatch) => {
  return {
    actions: bindActionCreators(VoucherActions, dispatch),
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(VouchersScreen);
