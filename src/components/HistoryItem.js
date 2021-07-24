import React, { Component } from 'react';

import { StyleSheet,Text, View, Image} from 'react-native';

const styles = StyleSheet.create({
    container: {
        flexDirection: 'row', 
        justifyContent: 'space-between',
        paddingBottom: 10,
        paddingTop: 10
    },
    container_item: {
        flexDirection: 'row', 
        justifyContent: 'space-between',
        width:'35%',
        marginRight:10,
        alignItems:'center'
    },
    sale_container: {
        color:'red',
        fontSize: 30,
        backgroundColor:'yellow',
        padding: 10
    },

});


class HistoryItem extends Component {
    render() {
        return (
            <View>
                <View style={styles.container}>
                    <View style={{marginLeft:10}}>
                        <Text style={{fontSize:15}}>{this.props.name_product}</Text>
                    </View>
                    <View style={styles.container_item}>
                        <Text style={{fontSize:15}}>{this.props.date}</Text>
                        <Image source={require('../resources/icons/close.png')}/>
                    </View>
                </View>
            </View>
        )
    }
}

export default HistoryItem;