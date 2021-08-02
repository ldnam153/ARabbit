import React, { Component } from 'react';

import { StyleSheet,Text, View, Image, ScrollView} from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createMaterialTopTabNavigator } from '@react-navigation/material-top-tabs';
import HeaderKeySearch from '../components/HeaderKeySearch';
import HistoryItem from '../components/HistoryItem';
import product_controller from '~/controller/product_controller'

const Tab = createMaterialTopTabNavigator();
  
  function HotScreen({goRK}) {
    var list_HotKeywords=product_controller.getHotKeywords();
    return (
      <ScrollView style={{backgroundColor:'white'}}>
        {list_HotKeywords.map((item, index) => {
          return (
            <View key ={index}>
              <HistoryItem name_product={item.keyword} date={item.date} goRK={goRK}/>
            </View>
          )
        })}
      </ScrollView>
    );
  }

  function NearScreen({goRK}) {
    var list_NearKeywords=product_controller.getNearKeywords();
    return (
      <ScrollView style={{backgroundColor:'white'}}>
        {list_NearKeywords.map((item, index) => {
          return (
            <View key ={index}>
              <HistoryItem name_product={item.keyword} date={item.date} goRK={goRK}/>
            </View>
          )
        })}
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

class TabHistorySearch extends Component{
    render() {
      const goBack = () => {
          this.props.navigation.goBack()
      }
      const goRK = () => {
          this.props.navigation.navigate('ResultKeywordScreen')
      }
        return (
                <NavigationContainer independent={true}>
                    <HeaderKeySearch placeholder="Tìm kiếm" goBack={goBack} goRK={goRK}/>
                    <Tab.Navigator getLabelText={({ route }) => route.title} initialRouteName="Something" tabBarOptions={{labelStyle:{fontSize: 14, textTransform: 'none'},activeTintColor:'red', inactiveTintColor:'grey' ,style:{elevation: 0}, indicatorStyle:{backgroundColor:'red'}}}>
                        <Tab.Screen name="Gần đây" children={()=><NearScreen goRK={goRK}/>} />
                        <Tab.Screen name="Nổi bật" children={() => <HotScreen goRK={goRK}/>} />
                        <Tab.Screen name="Tìm với camera" component={cameraScreen} />
                    </Tab.Navigator>
                </NavigationContainer>
        )
    }
}

export default TabHistorySearch;