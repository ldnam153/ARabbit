import React, { Component } from 'react'
import { StyleSheet, View, Text, TextInput } from 'react-native'
import { bindActionCreators } from 'redux';
import * as CartActions from "../../actions/cartAction"
import { connect } from 'react-redux';

class LoiNhan extends Component {
    constructor(props) {
        super(props)
    
        this.state = {
            message: this.props.value,
        }
    }
    
    render() {
        const { actions } = this.props;
        return (
            <View style={styles.message}>
                <Text style={{fontSize:16}}>Lời nhắn</Text>
                <TextInput
                    style={styles.inputText}
                    placeholder= "Hãy để lại lời nhắn cho cửa hàng"
                    placeholderTextColor= "#a69797"
                    onChangeText={(text) => this.setState({message: text})}
                    onSubmitEditing={(event)=>{actions.addMessageForShop(event.nativeEvent.text,this.props.shopId)}}
                    value={this.state.message}
                />
            </View>
        )
    }
}

const styles = StyleSheet.create({
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
})

const mapDispatchToProps = (dispatch) => {
    return {
        actions: bindActionCreators(CartActions, dispatch)
    }
}

export default connect(null, mapDispatchToProps)(LoiNhan)