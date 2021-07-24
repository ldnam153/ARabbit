import React, { Component } from 'react';

import { StyleSheet,Image, View} from 'react-native';

const styles = StyleSheet.create({
    image: {
        flex: 1,
        width: null,
        height: null,
        resizeMode: 'contain'
    },
    container:{
        display:'flex',
        position:'relative'
    }
});


class ResultCaptureHeader extends Component {
    render() {
        return (
            <View style={styles.container}>
                <View style={{height:100,width:'100%',backgroundColor:'black'}}>
                    <Image style={styles.image} source={require('../resources/imgs/vaydo.jpg')}/>
                </View>
                <View style={{position:'absolute', marginLeft:10, marginTop:10}}>
                    <Image source={require('../resources/icons/white_arrow_left.png')}/>
                </View>
            </View>
        )
    }
}

export default ResultCaptureHeader;