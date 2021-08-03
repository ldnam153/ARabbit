import React, { Component } from 'react'
import { StyleSheet, Text, View } from 'react-native'

class TongTienShopThanhToan extends Component {
    render() {
        return (
            <View style={styles.container}>
                <View style={styles.innerContainer}>
                    <Text style={styles.textSize}>Phí vận chuyển</Text>
                    <Text style={styles.textSize}>{this.props.ship}</Text>
                </View>
                <View style={styles.innerContainer}>
                    <Text style={styles.textSize}>Tổng số tiền ({this.props.amount} sản phẩm)</Text>
                    <Text style={[styles.textSize,{color:'#ff5c00'}]}>{this.props.tongtienshop}</Text>
                </View>
            </View>
        )
    }
}

const styles = StyleSheet.create({
    container: {
        flexDirection: 'column',
        justifyContent: 'space-evenly',
        paddingHorizontal: 5,
        height:62,
    },
    innerContainer: {
        flexDirection: 'row',
        justifyContent: 'space-between'
    },
    textSize: {
        fontSize: 16,
    }
})

export default TongTienShopThanhToan
