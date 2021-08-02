import React, { Component } from 'react'
import { ScrollView, View, StyleSheet, Text } from 'react-native'
import CardCHXacNhanThanhToan from './CardCHXacNhanThanhToan'
import { connect } from 'react-redux';

const styles = StyleSheet.create({
    tongtien: {
        height:80,
        flexDirection: 'column',
        alignItems: 'flex-end',
        justifyContent: 'center',
        backgroundColor:'white',
        paddingRight: 5,
        marginBottom: 5,
    },
    label: {
        fontSize: 20,
        fontWeight: 'bold'
    },
    price: {
        fontSize: 24,
        fontWeight: 'bold',
        color: 'red'
    }
})

class ScrollViewXacNhanThanhToan extends Component {
    currencyFormat(num) {
        return num.toFixed().replace(/(\d)(?=(\d{3})+(?!\d))/g, '$1,').split(',').join('.')
    }
    render() {
        // const data = [
        //     {
        //         shop: 'GameStop',
        //         tongtienshop: '12.550.000 VNĐ',
        //         products: [
        //             {
        //                 image: require('~/resources/imgs/ps5.jpg'),
        //                 name: 'Máy chơi game PlayStation 5 hàng chính hãng',
        //                 property: 'Standard',
        //                 price: '7.000.000 VNĐ',
        //                 number: 1,
        //             },
        //             {
        //                 image: require('~/resources/imgs/ps4.jpg'),
        //                 name: 'Máy chơi game PlayStation 4 thế hệ mới',
        //                 property: 'Premium',
        //                 price: '5.550.000 VNĐ',
        //                 number: 1,
        //             }
        //         ]
        //     },
        //     {
        //         shop: 'UwU Shop',
        //         tongtienshop: '120.000 VNĐ',
        //         products: [
        //             {
        //                 image: require('~/resources/imgs/vaydo.jpg'),
        //                 name: 'Váy đỏ tươi sành điệu cho các nàng',
        //                 property: 'XXL',
        //                 price: '120.000 VNĐ',
        //                 number: 1,
        //             }
        //         ]
        //     },
        // ]

        const {cartList} = this.props
        
        function tinhtongtien(cartList) {
            var tong = 0;
            cartList.forEach(shop => {
                shop.products.forEach(product => {
                    if(product.isSelected){
                        tong += +product.number * +product.price;
                    }
                });
            });
            return tong;
        }
        return (
            <ScrollView style={{backgroundColor:'#efefef'}}>
                {/*   data render   */}
                {cartList.map((shop) => {if(shop.products.length>0) return <CardCHXacNhanThanhToan data={shop} key={shop.shopId}/>})}
                <View style={styles.tongtien}>
                    <Text style={styles.label}>Tổng tiền hàng</Text>
                    <Text style={styles.price}>{this.currencyFormat(tinhtongtien(cartList))} VNĐ</Text>
                </View>
            </ScrollView>
        )
    }
}

const mapStateToProps = (state) => {
    return {
        cartList: state.cartReducer.cartList.map(shop=>{return{...shop,products: shop.products.filter(p => p.isSelected !== false)}}),
    }
}

export default connect(mapStateToProps)(ScrollViewXacNhanThanhToan)
