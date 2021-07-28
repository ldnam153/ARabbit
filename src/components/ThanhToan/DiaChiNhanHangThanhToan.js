import React, { Component } from 'react'
import { Image, View, Text, StyleSheet, TouchableOpacity } from 'react-native'

class DiaChiNhanHangThanhToan extends Component {
    render() {
        return (
            <View style={styles.container}>
                <View style={styles.leftPanel}>
                    <Text style={styles.label}>ĐỊA CHỈ NHẬN HÀNG</Text>
                    <Text style={styles.address}>{this.props.address}</Text>
                </View>
                <TouchableOpacity style={styles.rightPanel} onPress={this.props.goDDC}>
                    <Image source={require('~/resources/icons/back.png')} style={styles.image}></Image>
                </TouchableOpacity>
            </View>
        )
    }
}

const styles = StyleSheet.create({
    container: {
        flexDirection: 'row',
        padding:5,
        backgroundColor:'white',
        marginBottom: 5,
    },
    image: {
        transform:[{rotate: '180deg'}],
        marginRight: 10,
    },
    leftPanel: {
        flex: 10,
    },
    rightPanel: {
        flex: 1,
        flexDirection: 'column',
        justifyContent: 'center',
        alignItems: 'center',
    },
    label: {
        fontSize: 18,
        fontWeight: 'bold',
        marginBottom: 5
    },
    address: {
        marginBottom: 3,
        fontSize: 15,
    }
})

export default DiaChiNhanHangThanhToan
