import React, { Component } from 'react'
import { StyleSheet, View, Text, Image } from 'react-native'
import CardSPXacNhanThanhToan from '../XacNhanSanPham/CardSPXacNhanThanhToan';
import LoiNhan from '../XacNhanSanPham/LoiNhan';
import TongTienShop from '../XacNhanSanPham/TongTienShop';
import TongTienShopThanhToan from './TongTienShopThanhToan';

const styles = StyleSheet.create({
    container: {
        height:50,
        flexDirection: 'row',
        alignItems: 'center',
        backgroundColor: 'white',
        borderBottomWidth: 0.5,
        borderBottomColor: '#b4b4b4',
        padding:5
    },
    header:{
        fontSize: 18,
        fontWeight: 'bold',
        marginLeft: 5
    },
});

class CardCHThanhToan extends Component {
    currencyFormat(num) {
        return num.toFixed().replace(/(\d)(?=(\d{3})+(?!\d))/g, '$1,').split(',').join('.')
    }
    render() {
        var sosanpham = 0;
        function tinhtongtien(products) {
            var tong = 0;
            sosanpham = 0;
            products.forEach(product => {
                tong+= +product.number * +product.price;
                sosanpham+= 1;
            });
            return tong;
        }

        return (
            <View style={{marginBottom:5,backgroundColor:'white'}}>
                <View style={styles.container}>
                    <Image source={require('~/resources/icons/shop.png')}></Image>
                    <Text style={styles.header} numberOfLines={1}>{this.props.data.shop}</Text>
                </View>

                {/* data render */}
                {this.props.data.products.map((product,index) => <CardSPXacNhanThanhToan data={product} key={index}/>)}

                <LoiNhan value={this.props.data.message || this.props.all} shopName={this.props.data.shop}/>
                <TongTienShopThanhToan 
                  ship={this.currencyFormat(20000)+' VNĐ'} 
                  tongtienshop={this.currencyFormat(tinhtongtien(this.props.data.products))+' VNĐ'}
                  amount={sosanpham}/>
            </View>
        )
    }
}

export default CardCHThanhToan
