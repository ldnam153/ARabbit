import React, {Component} from 'react';
import {StyleSheet, Text, SafeAreaView, View} from 'react-native';
import ProductBar from '../ProductBar';
const styles = StyleSheet.create({
    container: {
      backgroundColor: 'white',
      height: 1200
    },
    header:{
        display: 'flex',
        flexDirection: 'row', 
        justifyContent: 'space-between',
        padding: 20,
    },
  })
const DATA = [
    {
      id: "bd7acbea-c1b1-46c2-aed5-3ad53abb28ba",
      title: "First Item",
    },
    {
      id: "3ac68afc-c605-48d3-a4f8-fbd91aa97f63",
      title: "Second Item",
    },
    {
      id: "58694a0f-3da1-471f-bd96-145571e29d72",
      title: "Third Item",
    },
    {
        id: "58694a0f-3da1-471f-bd96-dá145571e29d72",
        title: "Third Item",
    },
    {
        id: "58694a0f-3da1-471f-bd96-14557ds1e29d72",
        title: "Third Item",
      },
      {
        id: "58694a0f-3da1-471f-bd96-145571de29d72",
        title: "Third Item",
      },
      {
        id: "58694a0f-3da1-471f-bd96-145571eda29d72",
        title: "Third Item",
      },
  ];
const Item = () => (
    <View style={{padding: 5,
        marginVertical: 8,
        marginHorizontal: 10,
        width: '50%'}}>
      <ProductBar/>
    </View>
  );
class Recommend extends Component {
    constructor(props) {
        super(props)
        
        this.state = {
            products: DATA,
          }
          
    }
    renderItem = ( {item} ) => {
  
      return (
        <Item/>
      );
    };
    
    render() {
      return (
        <SafeAreaView style={styles.container}>
            <View style={styles.header}>
                <Text style={{fontSize:25, fontWeight: 'bold', color:'#F62424'}}>{this.props.title}</Text>
              
            </View>
            <View style={{ columns: 2,flex: 1, flexDirection: 'column',flexWrap: 'wrap'}}>
            {this.state.products.map((item, index) => {
                return (
                    <Item/>
                )
            })}
            </View>
            
        </SafeAreaView>
      );
    }
  }
  
   
  export default Recommend;