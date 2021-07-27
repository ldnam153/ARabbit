import React, { Component } from 'react'
import { StyleSheet, Text, View } from 'react-native'

class ChonVoucherThanhToan extends Component {
    render() {
        return (
            <View style={styles.container}>
                <Text style={{fontSize: 16}}>
                    Chọn voucher
                </Text>
                <View style={styles.inner}>
                    <Text style={styles.tag}>Miễn phí vận chuyển</Text>
                    <Text style={{fontSize: 20}}> &gt; </Text>
                </View>
            </View>
        )
    }
}

const styles = StyleSheet.create({
    container: {
        marginBottom: 5,
        flexDirection: 'row',
        padding: 5,
        justifyContent: 'space-between',
        alignItems: 'center',
        backgroundColor: 'white'
    },
    inner: {
        flexDirection: 'row',
        justifyContent: 'flex-end',
    },
    tag: {
        borderWidth: 0.75,
        fontSize: 15,
        borderColor: 'black',
        borderRadius:3,
        padding:3
    }
})

export default ChonVoucherThanhToan