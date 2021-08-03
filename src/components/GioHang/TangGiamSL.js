import React, { Component } from 'react';
import { StyleSheet,Text, TouchableHighlight, TouchableOpacity, View} from 'react-native';

const styles = StyleSheet.create({
    container: {
        display: 'flex',
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'center',
        backgroundColor: 'white',
        borderWidth: 1,
        borderColor: 'black',
        borderRadius: 6,
        fontFamily: 'Roboto',
        fontSize: 12,
        minHeight: 22,
        maxWidth: 110,
        marginBottom:3,
    },
    decrease: {
      width: '45%',
      paddingVertical:2,
      paddingHorizontal:10,
    },
    end: {
      textAlign: 'right',
      fontSize:16,
    },
});

class TangGiamSL extends Component {
    constructor(props) {
        super(props)
        this.decrementRef = React.createRef()
    
        this.state = {
            number: Number(props.number),
            disabledLeft: Number(props.number)==1,
            disabledRight: Number(props.number)==props.max,
        }
    }

    decrement = () => {
        if(this.state.disabledRight == true){
            this.setState({disabledRight: false})
        }
        if(this.state.number > 1){
            this.props.decrease();
            this.setState( prevState =>({number: prevState.number-1}),()=> {
                if(this.state.number == 1)  this.setState({disabledLeft: true})
            })
        }
    }

    increment = () => {
        if(this.state.disabledLeft == true){
            this.setState({disabledLeft: false})
        }
        if(this.state.number < this.props.max){
            this.props.increase();
            this.setState( prevState =>({number: prevState.number+1}),()=> {
                if(this.state.number == this.props.max)  this.setState({disabledRight: true})
            })
        }
    }
    
    render() {
        return (
            <View style={styles.container}>
                <TouchableOpacity onPress={this.decrement} style={styles.decrease} disabled={this.state.disabledLeft} underlayColor="#ff5c00" activeOpacity={0.2}>
                    <View>
                        <Text style={{opacity:this.state.disabledLeft?0.2:1,fontSize:16}}>-</Text>
                    </View>
                </TouchableOpacity>
                <View><Text>{this.state.number}</Text></View>
                <TouchableOpacity onPress={this.increment} style={styles.decrease} disabled={this.state.disabledRight} underlayColor="#ff5c00" activeOpacity={0.2}>
                    <View>
                        <Text style={[styles.end,{opacity:this.state.disabledRight?0.2:1}]}>+</Text>
                    </View>
                </TouchableOpacity>
            </View>
        )
    }
}

export default TangGiamSL;
