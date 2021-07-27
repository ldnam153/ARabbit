import React, { Component } from 'react'
import { SafeAreaView, StyleSheet, TouchableOpacity, Text, View } from 'react-native'
import ScrollViewGioHang from '../components/GioHang/ScrollViewGioHang'
import FooterThanhToan from '../components/ThanhToan/FooterThanhToan'
import NavBarXacNhanSP from '../components/XacNhanSanPham/NavBarXacNhanSP'

class GioHang extends Component {
    render() {
        return (
            <SafeAreaView style={styles.screen_container}>
                <NavBarXacNhanSP title="Giỏ hàng"></NavBarXacNhanSP>
                <ScrollViewGioHang></ScrollViewGioHang>
                <FooterThanhToan price="12.670.000 VNĐ" btnText="Thanh toán(3)"/>
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