import React, {Component} from 'react';
import {StyleSheet, ScrollView, Text, SafeAreaView, View} from 'react-native';
import ProductBar from '../ProductBar';
const styles = StyleSheet.create({
    container: {
      backgroundColor: 'white',
      marginTop: 5,
      height: 410
    },
    header:{
        display: 'flex',
        flexDirection: 'row', 
        justifyContent: 'space-between',
        padding: 20,
    },
  })

class SectionHome extends Component {
    constructor(props) {
        super(props)
        
        // console.log(this.props.data)
        this.state = {
            products: this.props.data,
            selectedId: null,
          }
        
    }
    
    render() {
      return (
        <SafeAreaView style={styles.container}>
            {/* <View><Text>{this.props.data}</Text></View> */}
            <View style={styles.header}>
                <Text style={{fontSize:25, fontWeight: 'bold', color:'#F62424'}}>{this.props.title}</Text>
                <View style={{display: 'flex', flexDirection: 'column', justifyContent: 'center'}}>
                    <Text style={{color: "#F62424"}}>Xem thêm &gt; </Text>
                </View>
            </View>
            <ScrollView horizontal showsHorizontalScrollIndicator={false}>
            {this.state.products.map((item, index) => {
                return (
                  <View key ={index} style={{
                    padding: 5,
                    marginVertical: 5,
                    marginHorizontal: 5,}}>
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
                )
            })}
            </ScrollView>
         
        </SafeAreaView>
      );
    }
  }
  
   
  export default SectionHome;