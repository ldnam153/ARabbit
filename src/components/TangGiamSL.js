import React, { Component } from 'react';
import { StyleSheet,Text, TouchableHighlight, View} from 'react-native';

const styles = StyleSheet.create({
    container: {
        display: 'flex',
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'center',
        backgroundColor: 'white',
        borderRadius: 6,
        fontFamily: 'Roboto',
        fontSize: 12,
        minHeight: 22,
        maxWidth: 150,
    },
    decrease: {
      width: '45%',
      paddingBottom: 6,
      paddingTop: 6,
      paddingLeft: 15,
      paddingRight: 15,
    },
    end: {
      textAlign: 'right',
    },
});

class TangGiamSL extends Component {
    constructor(props) {
        super(props)
        this.decrementRef = React.createRef()
    
        this.state = {
            number: Number(props.number),
            disabled: false,
        }
    }

    decrement = () => {
        if(this.state.number > 0){
            this.setState( prevState =>({number: prevState.number-1}),()=> {
                if(this.state.number == 0)  this.setState({disabled: true}) 
            })
        }
    }

    increment = () => {
        this.setState( prevState =>({number: prevState.number+1}))
        if(this.state.disabled == true){
            this.setState({disabled: false})
        }
    }
    
    render() {
        return (
            <View style={styles.container}>
                <TouchableHighlight onPress={this.decrement} style={styles.decrease} disabled={this.state.disabled}>
                    <View>
                        <Text>-</Text>
                    </View>
                </TouchableHighlight>
                <View><Text>{this.state.number}</Text></View>
                <TouchableHighlight onPress={this.increment} style={styles.decrease}>
                    <View>
                        <Text style={styles.end}>+</Text>
                    </View>
                </TouchableHighlight>
            </View>
        )
    }
}

export default TangGiamSL;
