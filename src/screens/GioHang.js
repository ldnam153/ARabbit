import React, { Component } from 'react'
import { SafeAreaView, StyleSheet, TouchableOpacity, Text, View } from 'react-native'
import { connect } from 'react-redux'
import ScrollViewGioHang from '../components/GioHang/ScrollViewGioHang'
import FooterThanhToan from '../components/ThanhToan/FooterThanhToan'
import NavBarXacNhanSP from '../components/XacNhanSanPham/NavBarXacNhanSP'

class GioHang extends Component {
    currencyFormat(num) {
        return num.toFixed().replace(/(\d)(?=(\d{3})+(?!\d))/g, '$1,').split(',').join('.')
    }
    
    demsp = (cartList)=>{
        var tongsp = 0;
        cartList.forEach(shop => {
            shop.products.forEach(product => {
                if(product.isSelected==true){
                    tongsp += +product.number
                }
            });
        });
        return tongsp;
    }

    render() {
        const { totalPrice, cartList } = this.props;

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
                    price={this.currencyFormat(totalPrice)+ " VNĐ"} 
                    btnText={"Thanh toán("+this.demsp(cartList)+")" }
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


const mapStateToProps = (state) => {
    return {
        totalPrice: state.cartReducer.totalPrice,
        cartList: state.cartReducer.cartList,
    }
}

export default connect(mapStateToProps)(GioHang)
