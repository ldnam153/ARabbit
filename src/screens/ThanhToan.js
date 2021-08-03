import React, { Component } from 'react'
import { SafeAreaView, StyleSheet, TouchableOpacity, Text } from 'react-native'
import FooterThanhToan from '../components/ThanhToan/FooterThanhToan'
import ScrollViewThanhToan from '../components/ThanhToan/ScrollViewThanhToan'
import NavBarXacNhanSP from '../components/XacNhanSanPham/NavBarXacNhanSP'
import { connect } from 'react-redux'

class ThanhToan extends Component {
    currencyFormat(num) {
        return num.toFixed().replace(/(\d)(?=(\d{3})+(?!\d))/g, '$1,').split(',').join('.')
    }
    componentDidMount() {
        this.forceUpdate();
    }
    render() {
        const goBack = () =>{
            this.props.navigation.goBack();
        }
        const goHome = () =>{
            this.props.navigation.popToTop();
        }
        const goDDC = () =>{
            this.props.navigation.push('CheckoutDoiDiaChiScreen')
        }
        const goVS = () =>{
            this.props.navigation.push('VouchersScreen')
        }
        const {totalPayment} = this.props;
        return (
            <SafeAreaView style={styles.screen_container}>
                <NavBarXacNhanSP title="Thanh toán" goBack={goBack} goHome={goHome}></NavBarXacNhanSP>
                <ScrollViewThanhToan goDDC={goDDC} goVS={goVS} key={"ScrollViewThanhToan"}/>
                <FooterThanhToan price={this.currencyFormat(totalPayment)} btnText="ĐẶT HÀNG" press={goHome} thanhtoan={true} key={"FooterThanhToan"}/>
            </SafeAreaView>
        )
    }
}

const styles = StyleSheet.create({
    screen_container: {
        position: 'relative',
        width: '100%',
        height: '100%',
        display: 'flex',
        flexDirection: 'column',
        justifyContent: 'flex-start',
    },
    buttonContainer: {
        backgroundColor: '#f62424',
        height:56,
        flexDirection: 'row',
        justifyContent:'center',
        alignItems: 'center'
    },
    buttonText: {
        color: 'white',
        fontSize: 20,
        fontWeight: 'bold'
    }
})

const mapStateToProps = (state) => {
    return {
        totalPayment: state.cartReducer.totalPayment
    }
}

export default connect(mapStateToProps)(ThanhToan)
