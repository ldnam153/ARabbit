import React, {Component} from 'react';
import {StyleSheet, ScrollView, Text, SafeAreaView, View, Image} from 'react-native';
import ProductBar from '../ProductBar';
const styles = StyleSheet.create({
    container: {
      backgroundColor: 'white',
      height: 350
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
        marginHorizontal: 10,}}>
      <ProductBar/>
    </View>
  );
class CategoryList extends Component {
    constructor(props) {
        super(props)
        
        this.state = {
            products: DATA,
            selectedId: null,
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
            <ScrollView horizontal showsHorizontalScrollIndicator={false}>
              <Image source={require('../../resources/imgs/categories.png')}/>
            </ScrollView>
         
        </SafeAreaView>
      );
    }
  }
  
   
  export default CategoryList;