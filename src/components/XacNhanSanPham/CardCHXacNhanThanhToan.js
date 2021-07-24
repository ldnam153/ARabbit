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
                <TongTienShop amount={this.props.data.products.length} tongtienshop={this.props.data.tongtienshop}/>
            </View>
        )
    }
}

export default CardCHXacNhanThanhToan
