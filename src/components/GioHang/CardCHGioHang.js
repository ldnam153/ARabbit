import React, { Component } from 'react'
import { StyleSheet, View, Text, Image } from 'react-native';
import CheckBox from '@react-native-community/checkbox';
import CardSPGioHang from './CardSPGioHang';

const styles = StyleSheet.create({
    container: {
        height:55,
        flexDirection: 'row',
        alignItems: 'center',
        backgroundColor: 'white',
        borderBottomWidth: 0.5,
        borderBottomColor: '#b4b4b4',
        paddingHorizontal: 15
    },
    header:{
        fontSize:18,
        fontWeight: 'bold',
    },
    shop_icon: {
        marginRight: 10
    }
});

class CardCHGioHang extends Component {
    constructor(props) {
        super(props)
        this.state = {
            data : props.data,
            isSelected : props.data.isSelected
        }
    }

    render() {
        // const checkbox = {
        //     true: '#F62424',
        //     false: '#F62424'
        // }
        const { actions } = this.props;
        return (
            <View style={{marginBottom:5}}>
                <View style={styles.container}>
                    {/* <CheckBox 
                        value= {this.props.data.isSelected}
                        onValueChange= {newVal => actions.toggleShopCheckbox(newVal, this.props.data.shopId)}
                        tintColors= {checkbox}
                        onTintColor = '#F62424'
                        onCheckColor = '#F62424'
                        style = {styles.checkbox}>
                    </CheckBox> */}
                    <Image source={require("../../resources/icons/shop.png")} style={styles.shop_icon} />
                    <Text style={styles.header}>{this.state.data.shop}</Text>
                </View>
                {this.props.data.products.map((product) => <CardSPGioHang data={product} key={product.id}/>)}
                
            </View>
        )
    }
}

export default CardCHGioHang
