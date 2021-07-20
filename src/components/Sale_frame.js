import React, { Component } from 'react';

import { StyleSheet,Text, View} from 'react-native';

const styles = StyleSheet.create({
    container: {
        alignItems: 'baseline',
    },
    sale_container: {
        color:'red',
        fontSize: 30,
        backgroundColor:'yellow',
        padding: 10
    },
});


class Sale_frame extends Component {
    render() {
        return (
            <View>
                <View style={styles.container}>
                    <Text style={styles.sale_container}>-{this.props.value}%</Text>
                </View>
            </View>
        )
    }
}

export default Sale_frame;