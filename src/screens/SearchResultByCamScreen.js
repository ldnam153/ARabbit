import React, { Component } from 'react';

import { StyleSheet,Text, View, Image, ScrollView} from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createMaterialTopTabNavigator } from '@react-navigation/material-top-tabs';
import HistoryItem from '../components/HistoryItem';
import ProductBar from '../components/ProductBar';
import ResultCaptureHeader from '../components/ResultCaptureHeader';

const Tab = createMaterialTopTabNavigator();
  
  function HotScreen() {
    return (
    <ScrollView style={{backgroundColor:'white'}}>
        <View style={{flexDirection:'row',justifyContent:'space-between', flexWrap:'wrap', paddingLeft:10, paddingRight:30}}>        
            <ProductBar percent_sale="50" name_product="Váy ngắn mùa hè năng động" real_price="450.000" sale_price="200.000" location="TP.Hồ Chí Minh" num_sales="100"/>
            <ProductBar percent_sale="50" name_product="Váy ngắn mùa hè năng động" real_price="450.000" sale_price="200.000" location="TP.Hồ Chí Minh" num_sales="100"/>
            <ProductBar percent_sale="50" name_product="Váy ngắn mùa hè năng động" real_price="450.000" sale_price="200.000" location="TP.Hồ Chí Minh" num_sales="100"/>
            <ProductBar percent_sale="50" name_product="Váy ngắn mùa hè năng động" real_price="450.000" sale_price="200.000" location="TP.Hồ Chí Minh" num_sales="100"/>
            <ProductBar percent_sale="50" name_product="Váy ngắn mùa hè năng động" real_price="450.000" sale_price="200.000" location="TP.Hồ Chí Minh" num_sales="100"/>
            <ProductBar percent_sale="50" name_product="Váy ngắn mùa hè năng động" real_price="450.000" sale_price="200.000" location="TP.Hồ Chí Minh" num_sales="100"/>
        </View>
    </ScrollView>
    );
  }

  function NearScreen() {
    return (
      <ScrollView style={{backgroundColor:'white'}}>
        <View style={{flexDirection:'row',justifyContent:'space-between', flexWrap:'wrap', paddingLeft:10, paddingRight:30}}>        
            <ProductBar percent_sale="50" name_product="Váy ngắn mùa hè năng động" real_price="450.000" sale_price="200.000" location="TP.Hồ Chí Minh" num_sales="100"/>
            <ProductBar percent_sale="50" name_product="Váy ngắn mùa hè năng động" real_price="450.000" sale_price="200.000" location="TP.Hồ Chí Minh" num_sales="100"/>
            <ProductBar percent_sale="50" name_product="Váy ngắn mùa hè năng động" real_price="450.000" sale_price="200.000" location="TP.Hồ Chí Minh" num_sales="100"/>
            <ProductBar percent_sale="50" name_product="Váy ngắn mùa hè năng động" real_price="450.000" sale_price="200.000" location="TP.Hồ Chí Minh" num_sales="100"/>
            <ProductBar percent_sale="50" name_product="Váy ngắn mùa hè năng động" real_price="450.000" sale_price="200.000" location="TP.Hồ Chí Minh" num_sales="100"/>
            <ProductBar percent_sale="50" name_product="Váy ngắn mùa hè năng động" real_price="450.000" sale_price="200.000" location="TP.Hồ Chí Minh" num_sales="100"/>
        </View>
      </ScrollView>
    );
  }
  function cameraScreen() {
    return (
      <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
        <Text>Tìm với máy ảnh</Text>
      </View>
    );
  }

class SearchResultByCamScreen extends Component{
    render() {
        return (
                <NavigationContainer>
                    <ResultCaptureHeader/>
                    <Tab.Navigator tabBarOptions={{labelStyle:{fontSize: 14, textTransform: 'none'},activeTintColor:'red', inactiveTintColor:'grey' ,style:{elevation: 0}, indicatorStyle:{backgroundColor:'red'}}}>
                        <Tab.Screen name="Váy" component={NearScreen} />
                        <Tab.Screen name="Đồ mặc" component={HotScreen} />
                        <Tab.Screen name="Thời trang" component={cameraScreen} />
                    </Tab.Navigator>
                </NavigationContainer>
        )
    }
}

export default SearchResultByCamScreen;