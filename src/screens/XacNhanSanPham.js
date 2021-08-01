import React, { Component } from 'react'
import { SafeAreaView, StyleSheet, TouchableOpacity, Text } from 'react-native'
import NavBarXacNhanSP from '../components/XacNhanSanPham/NavBarXacNhanSP'
import ScrollViewXacNhanThanhToan from '../components/XacNhanSanPham/ScrollViewXacNhanThanhToan'

class XacNhanSanPham extends Component {
    render() {
        const goBack = () =>{
            this.props.navigation.goBack();
        }
        const goHome = () =>{
            this.props.navigation.popToTop();
        }
        const goDDC = () =>{
            this.props.navigation.navigate('CheckoutDoiDiaChiScreen');
        }
        return (
            <SafeAreaView style={styles.screen_container}>
                <NavBarXacNhanSP title="Xác nhận sản phẩm" goBack={goBack} goHome={goHome}></NavBarXacNhanSP>
                <ScrollViewXacNhanThanhToan></ScrollViewXacNhanThanhToan>
                <TouchableOpacity style={styles.buttonContainer} onPress={goDDC}>
                    <Text style={styles.buttonText}>Chọn địa chỉ nhận hàng</Text>
                </TouchableOpacity>
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

export default XacNhanSanPham
