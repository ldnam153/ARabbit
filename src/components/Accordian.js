import React, {Component} from 'react';
import { View, TouchableOpacity, Text, StyleSheet, LayoutAnimation, Platform, UIManager, Image,TextInput} from "react-native";
import Icon from "react-native-vector-icons/MaterialIcons";

export default class Accordian extends Component{
    constructor(props) {
        super(props);
        this.state = { 
          data: props.data,
          expanded : false,
          text1: '',
          text2: '',
        }

        if (Platform.OS === 'android') {
            UIManager.setLayoutAnimationEnabledExperimental(true);
        }
    }
  
  render() {

    return (
       <View>
            <TouchableOpacity ref={this.accordian} style={styles.row} onPress={()=>this.toggleExpand()}>
                <Text style={[styles.title, styles.font]}>
                    {this.props.title}
                </Text>
                <Image source={this.state.expanded ? require('../resources/icons/up.png') : require('../resources/icons/down.png')}/>
            </TouchableOpacity>
            <View style={styles.parentHr}/>
            {
                this.state.expanded &&
                <View>
                    <View style={{flexDirection:'row',justifyContent:'space-between', padding:10, backgroundColor:'#f5f5f5',margin:10}}>
                        <View style={{flex:0.4}}>
                            <TextInput
                                    style={{height: 40,borderWidth:1,borderRadius:5}}
                                    placeholder="Thấp"
                                    textAlign={'center'}
                                    onChangeText={(text1) => this.setState({text1})}
                                    value={this.state.text}
                                    backgroundColor={'white'}
                                />
                        </View>
                        <View style={{flex:0.4}}>
                            <TextInput
                                    style={{height: 40,borderWidth:1,borderRadius:5}}
                                    placeholder="Cao"
                                    textAlign={'center'}
                                    onChangeText={(text2) => this.setState({text2})}
                                    value={this.state.text}
                                    backgroundColor={'white'}
                                />
                        </View>
                    </View>

                    <View style={{flexDirection:'row',justifyContent:'space-between',margin:10}}>
                        <View style={styles.priceRange}>
                            <TouchableOpacity>
                                <Text style={styles.priceContent}>100K-200K</Text>
                            </TouchableOpacity>
                        </View>
                        <View style={styles.priceRange}>
                            <TouchableOpacity>
                                <Text style={styles.priceContent}>300K-500K</Text>
                            </TouchableOpacity>
                        </View>
                        <View style={styles.priceRange}>
                            <TouchableOpacity>
                                <Text style={styles.priceContent}>500K-999K</Text>
                            </TouchableOpacity>
                        </View>
                    </View>

                </View>
            }
            
       </View>
    )
  }

  toggleExpand=()=>{
    LayoutAnimation.configureNext(LayoutAnimation.Presets.easeInEaseOut);
    this.setState({expanded : !this.state.expanded})
  }

}

const styles = StyleSheet.create({
    priceContent:{
        fontSize:10,
        padding:10,
        textAlign:'center'
    }
    ,
    priceRange:{
        flex:0.3,
        backgroundColor:'#f5f5f5', 
        borderRadius:10, 
        borderWidth:1, 
        borderColor:"#f5f5f5"}
    ,
    title:{
        fontSize: 14,
        fontWeight:'bold',
        color: "black",
    },
    row:{
        flexDirection: 'row',
        justifyContent:'space-between',
        height:56,
        paddingLeft:25,
        paddingRight:18,
        alignItems:'center',
        backgroundColor: "white",
        elevation:5
    },
    parentHr:{
        height:1,
        color: "white",
        width:'100%'
    },
    child:{
        backgroundColor: "lightgray",
        padding:16,
    }
    
});