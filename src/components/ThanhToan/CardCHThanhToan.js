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
    render() {
        return (
            <View style={{marginBottom:5,backgroundColor:'white'}}>
                <View style={styles.container}>
                    <Image source={require('~/resources/icons/shop.png')}></Image>
                    <Text style={styles.header} numberOfLines={1}>{this.props.data.shop}</Text>
                </View>

                {/* data render */}
                {this.props.data.products.map((product) => <CardSPXacNhanThanhToan data={product} />)}

                <LoiNhan/>
                <TongTienShopThanhToan 
                  ship={this.props.data.phivanchuyen} 
                  tongtienshop={this.props.data.tongtienshop}
                  amount={this.props.data.products.length}/>
            </View>
        )
    }
}

export default CardCHThanhToan
