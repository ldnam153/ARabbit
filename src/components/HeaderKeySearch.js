import React, { Component } from 'react';

import { StyleSheet,Text, View, Image,TextInput, Touchable, TouchableOpacity} from 'react-native';

const styles_ctn=StyleSheet.create({
    input:{ 
        flex: 2,
        height: 40,
        paddingLeft: 15,
        paddingRight: 10,
        backgroundColor: '#D9D9D9',
        borderRadius: 3,
        marginLeft: 5,
        marginRight: 10,
        color: 'black',
      },
    container: {
        flexDirection: 'row',
        justifyContent:'space-around',
        alignItems: 'center',
        justifyContent: 'center',
        backgroundColor:'white',
        paddingBottom:5,
        paddingTop:5,
        elevation:4
    }
});

const styles = StyleSheet.create({
    input: {
      height: 40,
      margin: 12,
      borderWidth: 1,
    },
  });

class HeaderKeySearch extends Component{
    constructor(props) {
        super(props);
        this.state = {text: this.props.value || ''};
      }

    render() {
        return (
                <View style={styles_ctn.container}>
                    <View style={{flex:0.3,flexDirection: 'row',justifyContent: 'center'}}>
                        <TouchableOpacity onPress={this.props.goBack}>
                            <Image source={require('../resources/icons/back.png')}/>
                        </TouchableOpacity>
                    </View>
                    <TextInput
                        style={styles_ctn.input}
                        placeholder={this.props.placeholder}
                        onChangeText={(text) => {this.setState({text})}}
                        returnKeyType='search'
                        onSubmitEditing={this.props.goRK}
                        value={this.state.text}
                    />
                    <View style={{flex:0.3,flexDirection: 'row',justifyContent: 'center'}}>
                        <TouchableOpacity>
                            <Image source={require('../resources/icons/Camera1.png')}/>
                        </TouchableOpacity>
                    </View>
                </View>
        )
    }
}

export default HeaderKeySearch;