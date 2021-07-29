import React, { Component } from 'react'
import { SafeAreaView, StyleSheet, TouchableOpacity, Text, View } from 'react-native'
import ScrollViewGioHang from '../components/GioHang/ScrollViewGioHang'
import FooterThanhToan from '../components/ThanhToan/FooterThanhToan'
import NavBarXacNhanSP from '../components/XacNhanSanPham/NavBarXacNhanSP'

class GioHang extends Component {
    render() {
        const goBack = () =>{
            this.props.navigation.goBack();
        }
        const goHome = () =>{
            this.props.navigation.popToTop();
        }
        const goXNSP = () =>{
            this.props.navigation.navigate('XacNhanSanPham');
        }
        return (
            <SafeAreaView style={styles.screen_container}>
                <NavBarXacNhanSP title="Giỏ hàng" goBack={goBack} goHome={goHome}></NavBarXacNhanSP>
                <ScrollViewGioHang></ScrollViewGioHang>
                <FooterThanhToan 
                    price="12.670.000 VNĐ" 
                    btnText="Thanh toán(3)" 
                    press={goXNSP}/>
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
})

export default GioHang
