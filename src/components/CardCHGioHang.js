import React, { Component } from 'react'
import { StyleSheet, View, Text } from 'react-native';
import CheckBox from '@react-native-community/checkbox';

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
            isSelected : props.isSelected || true,
        }
    }

    render() {
        const checkbox = {
            true: '#F62424',
            false: '#F62424'
        }
        return (
            <View style={styles.container}>
                <CheckBox 
                    value= {this.state.isSelected}
                    onValueChange= {newVal => this.setState({isSelected: newVal})}
                    tintColors= {checkbox}
                    onTintColor = '#F62424'
                    onCheckColor = '#F62424'
                    style = {styles.checkbox}>
                </CheckBox>
                <Text style={styles.header}>GameStop</Text>
            </View>
        )
    }
}

export default CardCHGioHang
