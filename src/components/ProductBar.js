import React, { Component } from 'react';

import { StyleSheet,Text, View, Image, TouchableOpacity} from 'react-native';
import { TouchableWithoutFeedback } from 'react-native-gesture-handler';
import Rating_star from './Rating_star';
import Sale_frame from './Sale_frame';

const styles = StyleSheet.create({
    container: {
        flexDirection: 'row', 
        justifyContent: 'space-between',
        paddingBottom: 10,
        paddingTop: 10
    },
    container_item: {
        flexDirection: 'row', 
        justifyContent: 'space-between',
        width:'35%',
        marginRight:10,
        alignItems:'center'
    },
    sale_container: {
        color:'red',
        fontSize: 30,
        backgroundColor:'yellow',
        padding: 10
    },
    image: {
        flex: 1,
        width: null,
        height: null,
        resizeMode: 'contain'
    },
    ctn_image:{
        width: 165,
        height: 220,
        position:'relative',
        display:'flex',
        backgroundColor:'white',
        borderWidth: 1,
        borderColor: '#FFE1E1'
    }
});


class ProductBar extends Component {
    currencyFormat(num) {
        if (typeof(num) !== 'number' || num === 0)
            return ""
        return num.toFixed().replace(/(\d)(?=(\d{3})+(?!\d))/g, '$1,').split(',').join('.') + "VND"
    }
    render() {
        return (
            <TouchableWithoutFeedback style={{marginTop:10, width:165, height: 310}} onPress={this.props.goPD}>
                <View style={styles.ctn_image}>
                    <Image source={{uri: this.props.imgUrl}} style={styles.image}/>
                    <View style={{position:'absolute',width:'100%',alignItems:'flex-end'}}>
                        <Sale_frame value={this.props.percent_sale}/>
                    </View>
                </View>
                <View style={{minHeight: 35}}>
                    <Text numberOfLines={2} ellipsizeMode='tail' style={{fontWeight:'bold'}}>{this.props.name_product}</Text>
                </View>
                <View style={{flexDirection:'row', justifyContent: 'space-between', paddingTop:3}}>
                    <Text style={{fontWeight:'100', color:'grey',fontStyle:'italic', fontSize:10, textDecorationLine: 'line-through', textDecorationStyle: 'solid'}}>{this.currencyFormat(this.props.real_price)}</Text>
                    <View style={{flexDirection:'row', alignItems:'center'}}>
                        <Image source={require('../resources/icons/location.png')}/>
                        <Text style={{fontSize:10,color:'grey', paddingLeft: 5}}>{this.props.location}</Text>
                    </View>
                </View>
                <View style={{flexDirection:'row', justifyContent: 'space-between', alignItems:'center', paddingTop:3}}>
                    <Text style={{fontWeight:'bold', color:'darkorange', fontSize:11}}>{this.currencyFormat(this.props.sale_price)} VNĐ</Text>
                    <Rating_star width='8' height='8' value={this.props.num_star}/>
                </View>
                <View style={{paddingTop: 3, alignItems:'flex-end'}}>
                    <Text style={{fontSize:11}}>Đã bán: {this.props.num_sales}</Text>
                </View>
            </TouchableWithoutFeedback>
        )
    }
}

export default ProductBar;