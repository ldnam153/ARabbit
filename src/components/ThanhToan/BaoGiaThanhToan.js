import React, { Component } from 'react'
import { StyleSheet, Text, View } from 'react-native'

class BaoGiaThanhToan extends Component {
    render() {
        return (
            <View style={styles.container}>
                <Text style={styles.header}>Tổng thanh toán</Text>
                <View style={styles.inner}>
                    <View style={styles.row}>
                        <Text style={styles.text}>Tổng tiền hàng</Text>
                        <Text style={styles.text}>{this.props.tongtienhang}</Text>
                    </View>
                    <View style={styles.row}>
                        <Text style={styles.text}>Tổng phí vận chuyển</Text>
                        <Text style={styles.text}>{this.props.tongtienship}</Text>
                    </View>
                    <View style={styles.row}>
                        <Text style={styles.text}>Giảm giá</Text>
                        <Text style={styles.text}>{this.props.tongtienship}</Text>
                    </View>
                </View>
                <View style={styles.footer}>
                    <Text style={styles.footerLabel}>Tổng giá tiền</Text>
                    <Text style={styles.price}>{this.props.tongtienhang}</Text>
                </View>
            </View>
        )
    }
}

const styles = StyleSheet.create({
    container: {
        backgroundColor: 'white',
        padding:5,
    },
    header: {
        textTransform: 'uppercase',
        fontSize: 18,
        fontWeight: 'bold',
        marginTop:10,
    },
    inner: {
        paddingVertical:10,
    },
    row: {
        flexDirection: 'row',
        justifyContent: 'space-between',
    },
    text: {
        fontSize: 16,
    },
    footer: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'center',
    },
    footerLabel: {
        fontSize:16,
        fontWeight: 'bold',
    },
    price: {
        fontSize: 20,
        color: '#f62424',
        fontWeight: 'bold'
    }
})

export default BaoGiaThanhToan
