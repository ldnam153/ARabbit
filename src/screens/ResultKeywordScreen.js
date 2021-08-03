import React, { Component } from 'react';

import { StyleSheet,Text, View, Image, ScrollView, Button, TouchableOpacity, FlatList} from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createDrawerNavigator } from '@react-navigation/drawer';
import { DrawerContent } from '../components/FilterSideBar';
import HeaderKeySearch from '../components/HeaderKeySearch';
import ProductBar from '../components/ProductBar';
import product_controller from '~/controller/product_controller'

const styles = StyleSheet.create({
    container: {
      paddingTop: 60,
      alignItems: 'center'
    },
    buttonFilter: {
      alignItems: 'center',
      backgroundColor: 'red',
      flexDirection:'row',
      paddingLeft:5,
      paddingRight:5
    },
    button: {
      alignItems: 'center',
      backgroundColor: 'white',
      flexDirection:'row'
    },
    buttonRelevant: {
        alignItems: 'center',
        flexDirection:'row',
    },
    buttonText: {
      textAlign: 'center',
      padding: 10,
      color: 'black',
      height: 40
    },
    buttonTextFilter: {
        textAlign: 'center',
        padding: 10,
        color: 'white',
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
  });

class HomeScreen extends Component {
    constructor(props) {
        super(props)
        this.state = {
            dress_products: product_controller.getDressProducts(),
        }
    }

    render(){
        return (
            <View>
              <HeaderKeySearch placeholder="Tìm kiếm" goBack={this.props.route.params.goBack} value='Váy'/>
              <View>
                  <ScrollView horizontal={true} showsHorizontalScrollIndicator={false}>
                      <View style={{display: 'flex', flexDirection: 'row', padding:10}} >
                          <TouchableOpacity style={{elevation: 1}}>
                              <View style={styles.button}>
                                  <Text style={styles.buttonText}>Váy</Text>
                              </View>
                          </TouchableOpacity>
                          <TouchableOpacity style={{elevation: 1, marginLeft:10}}>
                              <View style={styles.button}>
                                  <Text style={styles.buttonText}>Váy ngắn</Text>
                              </View>
                          </TouchableOpacity>
                          <TouchableOpacity style={{elevation: 1, marginLeft:10}}>
                              <View style={styles.button}>
                                  <Text style={styles.buttonText}>Váy dài</Text>
                              </View>
                          </TouchableOpacity>
                          <TouchableOpacity style={{elevation: 1, marginLeft:10}}>
                              <View style={styles.button}>
                                  <Text style={styles.buttonText}>Váy dại hội</Text>
                              </View>
                          </TouchableOpacity>
                          <TouchableOpacity style={{elevation: 1, marginLeft:10}}>
                              <View style={styles.button}>
                                  <Text style={styles.buttonText}>Váy dại hội 123</Text>
                              </View>
                          </TouchableOpacity>
                      </View>         
                  </ScrollView>
      
                  <View style={{flexDirection:'row',justifyContent:'space-between', padding:10}}>
                      <TouchableOpacity style={{elevation: 1}} onPress={() => this.props.navigation.openDrawer()}>
                          <View style={styles.buttonRelevant}>
                              <Text style={styles.buttonText}>Liên quan</Text>
                              <Image style={styles.image} source={require('../resources/icons/down.png')}/>
                          </View>
                      </TouchableOpacity>
                      <TouchableOpacity style={{elevation: 1}} onPress={( ) => this.props.navigation.openDrawer()}>
                          <View style={styles.buttonFilter}>
                              <Image style={styles.image} source={require('../resources/icons/filter.png')}/>
                              <Text style={styles.buttonTextFilter}>Bộ lọc</Text>
                          </View>
                      </TouchableOpacity>
                  </View>
                  
                  <ScrollView style={{backgroundColor:'white'}} contentContainerStyle={{ paddingBottom: 350}}>
                      
                        <View style = {styles.flatlist}>
                            <FlatList
                                numColumns = {2}
                                data = {this.state.dress_products}
                        
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
                                        goPD={this.props.route.params.goPD}/>
                                </View>
                                }
                                />          
                        </View>
                  </ScrollView>
      
              </View>
              {/* <Button
                onPress={() => navigation.navigate('Notifications')}
                title="Go to notifications"
              /> */}
            </View>
          );
    }
  }

const Drawer = createDrawerNavigator();

class ResultKeywordScreen extends Component{
    render() {
        const goPD = (productID='1') =>{
            this.props.navigation.navigate('ProductDetails',{data: product_controller.getProduct(productID)});
        }
        const goBack = () =>{
            this.props.navigation.goBack();
        }
        return (
            <NavigationContainer independent={true}>
                <Drawer.Navigator  drawerPosition="right" drawerContent={props => <DrawerContent {...props}/>}>
                    <Drawer.Screen name="Home123" component={HomeScreen} initialParams={
                        {
                            goPD: goPD,
                            goBack: goBack,
                        }}/>
                </Drawer.Navigator>
            </NavigationContainer>
        )
    }
}

export default ResultKeywordScreen;