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
    },
    info: {
        marginTop:7,
        flex:14,
        paddingLeft:8,
        flexDirection:'column',
        justifyContent:'space-between'
    },
});

class CardSPGioHang extends Component {
    constructor(props) {
        super(props)
    
        this.state = {
            isSelected: props.data.isSelected
        }
    }
    
    render() {
        const { actions } = this.props;
        return (
            <View style={styles.outer}>
                <View style={styles.container}>
                    <View style={{flex:2}}>
                        <CheckBox 
                        value= {this.state.isSelected}
                        onValueChange= {newVal => this.setState({isSelected: newVal})}
                        tintColors= {{
                            true: '#F62424',
                            false: '#F62424'
                        }}
                        onTintColor = '#F62424'
                        onCheckColor = '#F62424'>
                        </CheckBox>
                    </View>
                    <View style={{flex:6,flexDirection:'column',alignItems:'center'}}>
                        <Image source={this.props.data.image} style={styles.productImg}></Image>
                    </View>
                    <View style={styles.info}>
                        <Text style={{fontSize:16,fontWeight:'bold'}} numberOfLines={2}>{this.props.data.name}</Text>
                        <View style={{flexDirection:'row',marginVertical:4}}>
                            <View style={{flex:1}}>
                                <Select property={this.props.data.property} data={this.props.data.properties}/>
                            </View>
                            <View style={{flex:1}}></View>
                        </View>
                        <Text style={{fontSize:22,color:'#ff5c00',fontWeight:'bold'}}>{Number((this.props.data.price).toFixed(1)).toLocaleString()} VNĐ</Text>
                    </View>
                </View>
                <View style={[styles.container,{marginTop:2}]}>
                    <View style={{flex:2}}>
                    </View>
                    <View style={{flex:6,flexDirection:'column',alignItems:'center'}}>
                        <TouchableOpacity style={{flexDirection:'row',alignItems:'center'}} onPress={() => actions.removeProduct(this.props.data.id, +this.props.data.price * +this.props.data.number)}>
                            <Text style={styles.xoa}>Xóa</Text>
                        </TouchableOpacity>
                    </View>
                    <View style={{flex:14,paddingLeft:12}}>
                        <View style={{flexDirection:'row',alignItems:'center'}}>
                            <View style={{flex:1,flexShrink:3}}>
                                <TangGiamSL number={this.props.data.number} max={this.props.data.remain} increase={() => actions.incrementAmount(this.props.data.price)} decrease={() => actions.decrementAmount(this.props.data.price)}></TangGiamSL>
                            </View>
                            <Text style={{flex:1,color:'#ff5c00'}}>Còn {this.props.data.remain} sản phẩm</Text>
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
