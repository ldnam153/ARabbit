import React, { Component } from 'react'
import { View, StyleSheet, Image, Text, TouchableOpacity} from 'react-native'
import CheckBox from '@react-native-community/checkbox';
import Select from './Select';
import TangGiamSL from './TangGiamSL';

const styles = StyleSheet.create({
    container: {
        display: 'flex',
        flexDirection: 'row',
        justifyContent: 'flex-start',
        backgroundColor: 'white',
        fontFamily: 'Roboto',
        fontSize: 12,
    },
    productImg: {
        marginTop: 5,
        resizeMode: 'cover',
        width: '100%',
        height: undefined,
        aspectRatio: 1,
    },
    xoa:{
        color: '#f62424',
        fontSize: 17
    }
});

class CardSPGioHang extends Component {
    constructor(props) {
        super(props)
    
        this.state = {
            isSelected : props.isSelected || true,
        }
    }
    
    render() {
        const checkbox = {
            true: '#F62424',
            false: '#F62424'
        }
        return (
            <View style={styles.container}>
                <View style={{flex:2}}>
                    <CheckBox 
                    value= {this.state.isSelected}
                    onValueChange= {newVal => this.setState({isSelected: newVal})}
                    tintColors= {checkbox}
                    onTintColor = '#F62424'
                    onCheckColor = '#F62424'>
                    </CheckBox>
                </View>
                <View style={{flex:6,flexDirection:'column',alignItems:'center'}}>
                    <Image source={require('./../resources/imgs/test.jpeg')} style={styles.productImg}></Image>
                    <TouchableOpacity>
                        <Text style={styles.xoa}>Xóa</Text>
                    </TouchableOpacity>
                </View>
                <View style={{flex:14,paddingLeft:12}}>
                    <Text style={{fontSize:16,fontWeight:'bold'}} numberOfLines={2}>Máy chơi game PlayStation 5 hàng chính hãng</Text>
                    <View style={{flexDirection:'row',marginVertical:4}}>
                        <View style={{flex:1}}>
                            <Select value="Standard" />
                        </View>
                        <View style={{flex:1}}></View>
                    </View>
                    <Text style={{fontSize:22,color:'#ff5c00',fontWeight:'bold'}}>7.000.000 VNĐ</Text>
                    <View style={{flexDirection:'row'}}>
                        <View style={{flex:1}}><TangGiamSL number={1}></TangGiamSL></View>
                        <Text style={{flex:1,color:'#ff5c00'}}>Còn 4 sản phẩm</Text>
                    </View>
                </View>
            </View>
        )
    }
}

export default CardSPGioHang
