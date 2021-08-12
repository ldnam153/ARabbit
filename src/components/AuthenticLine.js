import React, { Component } from 'react';

import { StyleSheet,Text, View} from 'react-native';

const styles = StyleSheet.create({
    container: {
        alignItems: 'flex-start',
        backgroundColor: '#f62424',
        padding: 3
    },
    textStyle: {
        fontWeight: 'bold',
        color: 'white',
        fontFamily: 'sans-serif-thin'
    }
});


class AuthenticLine extends Component {
    render() {
        if (this.props.value !== undefined){
            return (
                <View style={styles.container} >
                    <Text style={styles.textStyle}>Mall</Text>
                </View>
            )
        }
        else {
            return (
                <View/>
            )
        }
        
    }
}

export default AuthenticLine;