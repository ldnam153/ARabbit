import React, {Component} from 'react';
import {StyleSheet, Text, SafeAreaView, View, FlatList} from 'react-native';
import ProductBar from '../ProductBar';
const styles = StyleSheet.create({
    container: {
      backgroundColor: 'white',
      marginVertical: 5,
      height: 1800
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