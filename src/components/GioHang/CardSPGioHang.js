import React, { Component } from 'react'
import { View, StyleSheet, Image, Text, TouchableOpacity} from 'react-native'
import CheckBox from '@react-native-community/checkbox';
import Select from './Select';
import TangGiamSL from './TangGiamSL';
import { bindActionCreators } from 'redux';
import * as CartActions from "../../actions/cartAction"
import { connect } from 'react-redux';

const styles = StyleSheet.create({
    container: {
        display: 'flex',
        flexDirection: 'row',
        justifyContent: 'flex-start',
        paddingHorizontal: 15,
        paddingVertical: 10
    },
    productImg: {
        marginTop: 7,
        resizeMode: 'cover',
        width: '100%',
        height: undefined,
        aspectRatio: 1,
    },
    xoa:{
        color: '#f62424',
        fontSize: 17
    },
    outer: {
        flexDirection: 'column',
        backgroundColor: 'white',
        borderTopWidth: 2,
        borderTopColor: '#E4E4E4',
        paddingTop: 10
    },
    info: {
        marginTop:7,
        flex:14,
        paddingLeft:8,
        flexDirection:'column',
        justifyContent:'space-between'
    },
    remove_icon: {
        fontSize: 20,
        fontWeight: "bold",
    }
});

class CardSPGioHang extends Component {
    constructor(props) {
        super(props)
        
        this.state = {
            isSelected: props.data.isSelected
        }
    }

    currencyFormat(num) {
        return num.toFixed().replace(/(\d)(?=(\d{3})+(?!\d))/g, '$1,').split(',').join('.')
    }
    
    render() {
        const { actions } = this.props;
        return (
            <View style={styles.outer}>
                <View style={{display: 'flex', flexDirection: 'row', justifyContent: 'flex-end', paddingHorizontal: 15}}>
                    <TouchableOpacity onPress={() => actions.removeProduct(this.props.data.id, +this.props.data.price * +this.props.data.number, this.props.data.isSelected)}>
                        <Image source={require("../../resources/icons/remove-icon@x1.png")}/>
                    </TouchableOpacity>
                </View>
                <View style={styles.container}>
                    {/* <View style={{flex:2}}>
                        <CheckBox 
                        value= {this.props.data.isSelected}
                        onValueChange= {newVal => actions.toggleProductCheckbox(newVal, this.props.data.id)}
                        tintColors= {{
                            true: '#F62424',
                            false: '#F62424'
                        }}
                        onTintColor = '#F62424'
                        onCheckColor = '#F62424'>
                        </CheckBox>
                    </View> */}
                    <View style={{flex:6,flexDirection:'column',alignItems:'center'}}>
                        <Image source={{uri: this.props.data.main_img[0]}} style={styles.productImg}></Image>
                    </View>
                    <View style={styles.info}>
                        <Text style={{fontSize:16,fontWeight:'bold'}} numberOfLines={2}>{this.props.data.name}</Text>
                        <View style={{flexDirection:'row',marginVertical:4, alignItems: 'center'}}>
                            <Text style={{marginRight: 15}}>Phân loại</Text>
                            <View style={{flex:1}}>
                                <Select property={this.props.data.property} data={this.props.data.properties}/>
                            </View>
                            <View style={{flex:1}}></View>
                        </View>
                        <Text style={{fontSize:22,color:'#f62424',fontWeight:'bold'}}>{this.currencyFormat(this.props.data.price)} VNĐ</Text>
                    </View>
                </View>
                <View style={[styles.container,{marginTop:2}]}>
                    {/* <View style={{flex:2}}>
                    </View> */}
                    {/* <View style={{flex:6,flexDirection:'column',alignItems:'center'}}>
                        <TouchableOpacity style={{flexDirection:'row',alignItems:'center'}} onPress={() => actions.removeProduct(this.props.data.id, +this.props.data.price * +this.props.data.number, this.props.data.isSelected)}>
                            <Text style={styles.xoa}>Xóa</Text>
                        </TouchableOpacity>
                    </View> */}
                    <View style={{flex:14}}>
                        <View style={{flexDirection:'row',alignItems:'center',justifyContent:'space-between'}}>
                            <View style={{flex:1.5, flexShrink:3, paddingLeft: 120}}>
                                <TangGiamSL number={this.props.data.number} max={this.props.data.stock} increase={() => actions.incrementAmount(this.props.data.id, this.props.data.price, this.props.data.isSelected)} decrease={() => actions.decrementAmount(this.props.data.id, this.props.data.price, this.props.data.isSelected)}></TangGiamSL>
                            </View>
                            {(this.props.data.stock < 10) && <Text numberOfLines={1} style={{flex:1,flexGrow:1.1,color:'#f62424'}}>Còn {this.props.data.stock} sản phẩm</Text>}
                        </View>
                    </View>
                </View>
            </View>
        )
    }
}

const mapDispatchToProps = (dispatch) => {
    return {
        actions: bindActionCreators(CartActions, dispatch)
    }
}

export default connect(null, mapDispatchToProps)(CardSPGioHang)
