import React, {Component} from 'react';
import {StyleSheet, Text, SafeAreaView, View, FlatList} from 'react-native';
import ProductBar from '../ProductBar';
const styles = StyleSheet.create({
    container: {
      backgroundColor: 'white',
      height: 1750
    },
    header:{
        display: 'flex',
        flexDirection: 'row', 
        justifyContent: 'space-between',
        padding: 10,
    },
    flatlist: {
      flex: 1,
      paddingTop: 22
  },
    item: {
      width: "50%",
      marginTop: 10,
      alignItems: 'center'
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



class Recommend extends Component {
    constructor(props) {
        super(props)
        
        this.state = {
            products: this.props.data,
          }
          
    }
    renderItem = ( {item} ) => {
  
      return (
        <Item/>
      );
    };
    
    render() {
      console.log(this.state.products)
      console.log("ahihi")
      const dataRef = this.state.products
      return (
        <SafeAreaView style={styles.container}>
            <View style={styles.header}>
                <Text style={{fontSize:25, fontWeight: 'bold', color:'#F62424'}}>{this.props.title}</Text>
              
            </View>
            <View style = {styles.flatlist}>
             
              <FlatList
                numColumns = {2}
                data = {dataRef}
        
                renderItem = {({item}) => 
                  <View style = {styles.item}>
                    <ProductBar                
                      imgUrl = {item.main_img[0]}
                      num_star= {item.star}
                      percent_sale = {item.sale_percent}
                      name_product = {item.name}
                      sale_price = {item.price}
                      location = {item.location}
                      num_sales = {item.stock}
                      real_price = {item.first_price} 
                      goPD={this.props.goPD}/>
                  </View>
                  }
              />          
            </View>
            
        </SafeAreaView>
      );
    }
  }
  
   
  export default Recommend;