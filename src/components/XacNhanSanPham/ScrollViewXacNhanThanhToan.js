import React, { Component } from 'react'
import { ScrollView, View, StyleSheet, Text } from 'react-native'
import CardCHXacNhanThanhToan from './CardCHXacNhanThanhToan'

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
    render() {
        const data = [
            {
                shop: 'GameStop',
                tongtienshop: '12.550.000 VNĐ',
                products: [
                    {
                        image: require('~/resources/imgs/ps5.jpg'),
                        name: 'Máy chơi game PlayStation 5 hàng chính hãng',
                        property: 'Standard',
                        price: '7.000.000 VNĐ',
                        number: 1,
                    },
                    {
                        image: require('~/resources/imgs/ps4.jpg'),
                        name: 'Máy chơi game PlayStation 4 thế hệ mới',
                        property: 'Premium',
                        price: '5.550.000 VNĐ',
                        number: 1,
                    }
                ]
            },
            {
                shop: 'UwU Shop',
                tongtienshop: '120.000 VNĐ',
                products: [
                    {
                        image: require('~/resources/imgs/vaydo.jpg'),
                        name: 'Váy đỏ tươi sành điệu cho các nàng',
                        property: 'XXL',
                        price: '120.000 VNĐ',
                        number: 1,
                    }
                ]
            },
        ]
        return (
            <View style={{height:'100%',backgroundColor: 'red'}}>
                <ScrollView style={{backgroundColor:'#efefef'}}>
                    {/*   data render   */}
                    {data.map((shop) => <CardCHXacNhanThanhToan data={shop} />)}
                    <View style={styles.tongtien}>
                        <Text style={styles.label}>Tổng tiền hàng</Text>
                        <Text style={styles.price}>12.670.000 VNĐ</Text>
                    </View>
                </ScrollView>
            </View>
        )
    }
}

export default ScrollViewXacNhanThanhToan
