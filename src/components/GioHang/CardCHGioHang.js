import React, { Component } from 'react'
import { StyleSheet, View, Text } from 'react-native';
import CheckBox from '@react-native-community/checkbox';
import CardSPGioHang from './CardSPGioHang';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import * as CartActions from "../../actions/cartAction"

const styles = StyleSheet.create({
    container: {
        height:55,
        flexDirection: 'row',
        alignItems: 'center',
        backgroundColor: 'white',
        borderBottomWidth: 0.5,
        borderBottomColor: '#b4b4b4',
    },
    header:{
        fontSize:18,
        fontWeight: 'bold',
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
        const checkbox = {
            true: '#F62424',
            false: '#F62424'
        }
        const { actions } = this.props;
        return (
            <View style={{marginBottom:5}}>
                <View style={styles.container}>
                    <CheckBox 
                        value= {this.props.data.isSelected}
                        onValueChange= {newVal => actions.toggleShopCheckbox(newVal, this.props.data.shopId)}
                        tintColors= {checkbox}
                        onTintColor = '#F62424'
                        onCheckColor = '#F62424'
                        style = {styles.checkbox}>
                    </CheckBox>
                    <Text style={styles.header}>{this.state.data.shop}</Text>
                </View>
                {this.props.data.products.map((product) => <CardSPGioHang data={product} key={product.id}/>)}
                
            </View>
        )
    }
}

const mapDispatchToProps = (dispatch) => {
    return {
        actions: bindActionCreators(CartActions, dispatch)
    }
}

export default connect(null, mapDispatchToProps)(CardCHGioHang)
