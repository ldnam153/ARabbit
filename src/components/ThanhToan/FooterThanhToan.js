import React, { Component } from 'react'
import { StyleSheet, View, Text, TouchableOpacity } from 'react-native'

class FooterThanhToan extends Component {
    render() {
        return (
            <View style={styles.footer}>
                <View style={styles.leftFooter}>
                    <Text style={styles.tonggialabel}>Tổng giá tiền</Text>
                    <Text style={styles.tonggia}>{this.props.price}</Text>
                </View>
                <TouchableOpacity 
                style={styles.rightFooter}
                activeOpacity={0.7}
                underlayColor="#f62424"
                onPress={() => alert('Thanh toán(1/3)')}>
                <Text style={styles.buttonText}>{this.props.btnText}</Text>
                </TouchableOpacity>
            </View>
        )
    }
}

const styles = StyleSheet.create({
    footer: {
        height:56,
        backgroundColor: 'white',
        borderTopColor: '#f62424',
        borderTopWidth: 0.5,
        flexDirection: 'row'
    },
    leftFooter: {
        flex: 5.5,
        flexDirection: 'column',
        justifyContent: 'space-evenly',
        alignItems: 'flex-end',
        marginRight:10,
        paddingVertical:4,
    },
    rightFooter: {
        flex: 4.5,
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'center',
        backgroundColor: '#f62424'
    },
    tonggialabel: {
        fontWeight: 'bold',
        fontSize: 16,
    },
    tonggia: {
        fontSize: 18,
        fontWeight: 'bold',
        color: '#ff5c00'
    },
    buttonText: {
        fontSize: 18,
        fontWeight: 'bold',
        color: 'white'
    }
})

export default FooterThanhToan
