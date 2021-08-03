import React, { Component } from 'react'
import { Image, View, StyleSheet, Text, TextInput } from 'react-native'
import CardSPXacNhanThanhToan from './CardSPXacNhanThanhToan';
import LoiNhan from './LoiNhan';
import TongTienShop from './TongTienShop';

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

class CardCHXacNhanThanhToan extends Component {    
    currencyFormat(num) {
        return num.toFixed().replace(/(\d)(?=(\d{3})+(?!\d))/g, '$1,').split(',').join('.')
    }
    render() {
        function tinhtongtien(products) {
            var tong = 0;
            products.forEach(product => {
                tong+= +product.number * +product.price;
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
                {this.props.data.products.map((product) => <CardSPXacNhanThanhToan data={product} key={product.id}/>)}

                <LoiNhan shopId={this.props.data.shopId} value={this.props.data.message || ''}/>
                <TongTienShop amount={this.props.data.products.length} tongtienshop={this.currencyFormat(tinhtongtien(this.props.data.products))+' VNĐ'}/>
            </View>
        )
    }
}

export default CardCHXacNhanThanhToan
