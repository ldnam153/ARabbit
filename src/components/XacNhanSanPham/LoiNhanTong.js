import React, { Component } from 'react'
import { TextInput, StyleSheet, View } from 'react-native'
import { bindActionCreators } from 'redux';
import * as CartActions from "../../actions/cartAction"
import { connect } from 'react-redux';

class LoiNhanTong extends Component {
    constructor(props) {
        super(props)
    
        this.state = {
             message: props.message || '',
        }
    }
    
    render() {
        const { actions } = this.props;
        return (
            <View style={{height:60,padding:10,backgroundColor:'white',marginBottom:3,}}>
                <TextInput
                style={styles.inputText}
                placeholder= "Hãy để lại lời nhắn cho tất cả cửa hàng..."
                placeholderTextColor= "#a69797"
                onChangeText={(text) => this.setState({message: text})}
                onSubmitEditing={(event)=>{actions.addMessageForAll(event.nativeEvent.text)}}
                value={this.state.message}/>
            </View>
        )
    }
}

const styles = StyleSheet.create({
    inputText:{
        height: 40,
        borderWidth: 1,
        borderColor:'#ababab',
        textAlign:'left',
        color:'black',
        backgroundColor:'#fefefe'
    },
})

const mapDispatchToProps = (dispatch) => {
    return {
        actions: bindActionCreators(CartActions, dispatch)
    }
}

export default connect(null, mapDispatchToProps)(LoiNhanTong)
