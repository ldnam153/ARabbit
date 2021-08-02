import React, { Component } from 'react'
import { View, Image, StyleSheet, Text } from 'react-native'

const styles = StyleSheet.create({
    container:{
        flexDirection:'row',
        backgroundColor:'#fef7f7',
        paddingHorizontal:12,
        paddingVertical:12,
        paddingRight:5,
    },
    image:{
        width: '100%',
        height: undefined,
        resizeMode: 'cover',
        aspectRatio: 1,
    },
    header:{
        fontSize:18,
        fontWeight: 'bold',
        color: 'black'
    },
    phanloai:{
        fontSize: 16,
    }
})

class CardSPXacNhanThanhToan extends Component {
    currencyFormat(num) {
        if(typeof(num)=='number') return num.toFixed().replace(/(\d)(?=(\d{3})+(?!\d))/g, '$1,').split(',').join('.')
        return num
    }
    render() {
        return (
            <View>
                <View style={styles.container}>
                    <View style={{flex:2}}>
                        <Image source={this.props.data.image} style={styles.image}></Image>
                    </View>
                    <View style={{flex:7,marginLeft:5,flexDirection:'column',justifyContent:'space-between'}}>
                        <Text style={styles.header} numberOfLines={1}>{this.props.data.name}</Text>
                        <Text style={styles.phanloai}>Phân loại: {this.props.data.property}</Text>
                        <View style={{flexDirection:'row',justifyContent:'space-between'}}>
                            <Text style={styles.phanloai}>{this.currencyFormat(this.props.data.price)} VNĐ</Text>
                            <Text style={styles.phanloai}>x{this.props.data.number}</Text>
                        </View>
                    </View>
                </View>
            </View>
        )
    }
}

export default CardSPXacNhanThanhToan
