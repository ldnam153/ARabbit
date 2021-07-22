import React, { Component } from 'react'
import { Image, View, StyleSheet, Text, TextInput } from 'react-native'
import CardSPXacNhanThanhToan from './CardSPXacNhanThanhToan';

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
    message:{
        flexDirection:'row',
        justifyContent:'space-between',
        alignItems:'center',
        paddingLeft:5,
        borderBottomWidth: 0.5,
        borderBottomColor: '#b4b4b4',
    },
    inputText:{
        height: 40,
        borderWidth: 0,
        flex:0.9,
        textAlign:'right',
        color:'black'
    },
    labelPrice: {
        fontSize: 16,
    },
    price: {
        color: 'red',
        marginRight: 5
    }
});

class CardCHXacNhanThanhToan extends Component {
    constructor(props) {
        super(props)
    
        this.state = {
            message: null,
        }
    }
    
    render() {
        return (
            <View style={{marginBottom:5,backgroundColor:'white'}}>
                <View style={styles.container}>
                    <Image source={require('~/resources/icons/shop.png')}></Image>
                    <Text style={styles.header} numberOfLines={1}>{this.props.data.shop}</Text>
                </View>
                {/* data render */}
                {this.props.data.products.map((product) => <CardSPXacNhanThanhToan data={product} />)}

                <View style={styles.message}>
                    <Text style={{fontSize:16}}>Lời nhắn</Text>
                    <TextInput
                        style={styles.inputText}
                        placeholder= "Hãy để lại lời nhắn cho cửa hàng"
                        placeholderTextColor= "#a69797"
                        onChangeText={(text) => this.setState({message: text})}
                        value={this.state.message}
                    />
                </View>
                <View style={[styles.message,{height:50}]}>
                    <Text style={styles.labelPrice}>Tổng số tiền (1 sản phẩm)</Text>
                    <Text style={[styles.price,{fontSize:18}]}>{this.props.data.tongtienshop}</Text>
                </View>
            </View>
        )
    }
}

export default CardCHXacNhanThanhToan
