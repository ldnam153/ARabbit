import React, { Component } from 'react';

import { StyleSheet,Text, View, Image,TextInput} from 'react-native';

const styles_ctn=StyleSheet.create({
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
        this.state = {text: ''};
      }
    render() {
        return (
                <View style={styles_ctn.container}>
                    <View style={{flex:0.125,flexDirection: 'row',justifyContent: 'center'}}>
                        <Image source={require('../resources/icons/back.png')}/>
                    </View>
                    <TextInput
                        style={{height: 40,borderWidth: 1,flex:0.75}}
                        placeholder={this.props.placeholder}
                        onChangeText={(text) => this.setState({text})}
                        value={this.state.text}
                    />
                    <View style={{flex:0.125,flexDirection: 'row',justifyContent: 'center'}}><Image source={require('../resources/icons/home.png')}/></View>
                </View>
        )
    }
}

export default HeaderKeySearch;