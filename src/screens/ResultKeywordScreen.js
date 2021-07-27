import React, { Component } from 'react';

import { StyleSheet,Text, View, Image, ScrollView, Button, TouchableOpacity} from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createDrawerNavigator } from '@react-navigation/drawer';
import { DrawerContent } from '../components/FilterSideBar';
import HeaderKeySearch from '../components/HeaderKeySearch';
import ProductBar from '../components/ProductBar';

const styles = StyleSheet.create({
    container: {
      paddingTop: 60,
      alignItems: 'center'
    },
    buttonFilter: {
      alignItems: 'center',
      backgroundColor: 'red',
      flexDirection:'row'
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
    }
  });

function HomeScreen({ navigation }) {
    return (
      <View>
        <HeaderKeySearch/>
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
                <TouchableOpacity style={{elevation: 1}}>
                    <View style={styles.buttonFilter}>
                        <Image style={styles.image} source={require('../resources/icons/trash.png')}/>
                        <Text style={styles.buttonTextFilter}>Bộ lọc</Text>
                    </View>
                </TouchableOpacity>
            </View>
            
            <ScrollView style={{backgroundColor:'white'}} contentContainerStyle={{ paddingBottom: 350}}>
                <View style={{flexDirection:'row',justifyContent:'space-between', flexWrap:'wrap', paddingLeft:10, paddingRight:30}}>        
                    <ProductBar percent_sale="50" name_product="Váy ngắn mùa hè năng động" real_price="450.000" sale_price="200.000" location="TP.Hồ Chí Minh" num_sales="100"/>
                    <ProductBar percent_sale="50" name_product="Váy ngắn mùa hè năng động" real_price="450.000" sale_price="200.000" location="TP.Hồ Chí Minh" num_sales="100"/>
                    <ProductBar percent_sale="50" name_product="Váy ngắn mùa hè năng động" real_price="450.000" sale_price="200.000" location="TP.Hồ Chí Minh" num_sales="100"/>
                    <ProductBar percent_sale="50" name_product="Váy ngắn mùa hè năng động" real_price="450.000" sale_price="200.000" location="TP.Hồ Chí Minh" num_sales="100"/>
                    <ProductBar percent_sale="50" name_product="Váy ngắn mùa hè năng động" real_price="450.000" sale_price="200.000" location="TP.Hồ Chí Minh" num_sales="100"/>
                    <ProductBar percent_sale="50" name_product="Váy ngắn mùa hè năng động" real_price="450.000" sale_price="200.000" location="TP.Hồ Chí Minh" num_sales="100"/>
                    <ProductBar percent_sale="50" name_product="Váy ngắn mùa hè năng động" real_price="450.000" sale_price="200.000" location="TP.Hồ Chí Minh" num_sales="100"/>
                    <ProductBar percent_sale="50" name_product="Váy ngắn mùa hè năng động" real_price="450.000" sale_price="200.000" location="TP.Hồ Chí Minh" num_sales="100"/>
                    <ProductBar percent_sale="50" name_product="Váy ngắn mùa hè năng động" real_price="450.000" sale_price="200.000" location="TP.Hồ Chí Minh" num_sales="100"/>
                    <ProductBar percent_sale="50" name_product="Váy ngắn mùa hè năng động" real_price="450.000" sale_price="200.000" location="TP.Hồ Chí Minh" num_sales="100"/>
                    <ProductBar percent_sale="50" name_product="Váy ngắn mùa hè năng động" real_price="450.000" sale_price="200.000" location="TP.Hồ Chí Minh" num_sales="100"/>
                    <ProductBar percent_sale="50" name_product="Váy ngắn mùa hè năng động" real_price="450.000" sale_price="200.000" location="TP.Hồ Chí Minh" num_sales="100"/>
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

const Drawer = createDrawerNavigator();



class ResultKeywordScreen extends Component{
    render() {
        return (
            <NavigationContainer>
                <Drawer.Navigator  drawerPosition="right" drawerContent={props => <DrawerContent {...props}/>}>
                    <Drawer.Screen name="Home123" component={HomeScreen} />
                </Drawer.Navigator>
            </NavigationContainer>
        )
    }
}

export default ResultKeywordScreen;