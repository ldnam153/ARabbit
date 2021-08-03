import React, { Component } from 'react'
import { StyleSheet, View, Text } from 'react-native'

class TongTienShop extends Component {
    render() {
        return (
            <View style={[styles.message,{height:50}]}>
                <Text style={styles.labelPrice}>Tổng số tiền ({this.props.amount} sản phẩm)</Text>
                <Text style={[styles.price,{fontSize:18}]}>{this.props.tongtienshop}</Text>
            </View>
        )
    }
}

const styles = StyleSheet.create({
    message:{
        flexDirection:'row',
        justifyContent:'space-between',
        alignItems:'center',
        paddingLeft:5,
        borderBottomWidth: 0.5,
        borderBottomColor: '#b4b4b4',
    },
    labelPrice: {
        fontSize: 16,
    },
    price: {
        color: '#ff5c00',
        marginRight: 5
    }
})

export default TongTienShop
