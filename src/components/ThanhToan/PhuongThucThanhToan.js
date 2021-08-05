import React, { Component } from 'react'
import { View, StyleSheet, Text, Image } from 'react-native'

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
    content: {
        marginVertical:10,
        marginLeft:30,
        fontSize: 16,
        color: '#909090',
    }
});

class PhuongThucThanhToan extends Component {
    render() {
        return (
            <View style={{backgroundColor:'white',marginBottom:5,padding:5}}>
                <View style={{flexDirection:'row',marginTop:3}}>
                    <View>
                        <Image source={require('~/resources/icons/wallet.png')}/>
                    </View>
                    <View>
                        <Text style={styles.header}>Phương thức thanh toán</Text>
                    </View>
                </View>
                <View>
                    <Text style={styles.content}>Thanh toán tiền mặt khi nhận hàng</Text>
                </View>
            </View>
        )
    }
}

export default PhuongThucThanhToan
