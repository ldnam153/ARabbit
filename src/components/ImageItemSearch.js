import React, { Component } from 'react';

import { StyleSheet,Text, View, Image, TouchableOpacity} from 'react-native';
import Rating_star from './Rating_star';

const styles = StyleSheet.create({
    container: {
        flexDirection: 'row', 
        paddingBottom: 10,
        paddingTop: 10,
        alignItems:'center'//Nếu bỏ comment thì comment dòng này lại
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

});


class ImageItemSearch extends Component {
    render() {
        return (
            <View style={{backgroundColor:'white',elevation:3,marginTop:1}}>
                <TouchableOpacity onPress={this.props.goRK}>
                    <View style={styles.container}>
                            <Image style={{width: 30, height: 30, marginLeft:10}} source={{uri: this.props.imgUrl}}/>
                            <View style={{width:'90%',paddingLeft:15}}>
                                <Text numberOfLines={2} ellipsizeMode='tail' style={{fontWeight:'bold'}}>{this.props.name_product}</Text>
                                {/* <View>
                                    <View style={{flexDirection:'row', paddingTop:3}}>
                                        <Text style={{fontWeight:'100', color:'grey',fontStyle:'italic', fontSize:12, textDecorationLine: 'line-through', textDecorationStyle: 'solid',flex:0.6}}>{this.props.real_price}</Text>
                                        <View style={{flexDirection:'row', alignItems:'center'}}>
                                            <Image source={require('../resources/icons/location.png')}/>
                                            <Text style={{fontSize:12,color:'grey', paddingLeft: 5}}>{this.props.location}</Text>
                                        </View>
                                    </View>
                                    <View style={{flexDirection:'row',width:'100%',alignItems:'center'}}>
                                        <Text   Text style={{fontWeight:'bold', color:'darkorange', fontSize:13,flex:0.6}}>{this.props.sale_price} VNĐ</Text>
                                        <Rating_star width='8' height='8' value={this.props.num_star}/>
                                    </View>
                                </View>
                                <View style={{flexDirection:'row',justifyContent:'flex-end'}}>
                                    <Text style={{fontSize:13}}>Đã bán: {this.props.num_sales}</Text>
                                </View> */}
                            </View>
                    </View>
                </TouchableOpacity>
            </View>
        )
    }
}

export default ImageItemSearch;