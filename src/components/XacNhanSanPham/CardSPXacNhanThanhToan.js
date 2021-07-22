import React, { Component } from 'react'
import { View, Image } from 'react-native'

class CardSPXacNhanThanhToan extends Component {
    render() {
        return (
            <View>
                <View style={{flexDirection:'row'}}>
                    <View>
                        <Image source={require('~/resources/imgs/vaydo.jpg')}></Image>
                    </View>
                </View>
            </View>
        )
    }
}

export default CardSPXacNhanThanhToan
