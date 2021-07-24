import React, { Component } from 'react';

import { StyleSheet,Text, View, Image, ScrollView} from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createMaterialTopTabNavigator } from '@react-navigation/material-top-tabs';
import HeaderKeySearch from './HeaderKeySearch';
import HistoryItem from './HistoryItem';

const Tab = createMaterialTopTabNavigator();
  
  function HotScreen() {
    return (
      <View>
        <HistoryItem name_product="Váy" date="Hôm nay"/>
      </View>
    );
  }

  function NearScreen() {
    return (
      <ScrollView style={{backgroundColor:'white'}}>
        <HistoryItem name_product="Váy1" date="Hôm nay"/>
        <HistoryItem name_product="Váy" date="Hôm nay"/>
        <HistoryItem name_product="Váy" date="Hôm nay"/>
        <HistoryItem name_product="Váy" date="Hôm nay"/>
        <HistoryItem name_product="Váy" date="Hôm nay"/>
        <HistoryItem name_product="Váy" date="Hôm nay"/>
        <HistoryItem name_product="Váy" date="Hôm nay"/>
        <HistoryItem name_product="Váy" date="Hôm nay"/>
        <HistoryItem name_product="Váy" date="Hôm nay"/>
        <HistoryItem name_product="Váy" date="Hôm nay"/>
        <HistoryItem name_product="Váy" date="Hôm nay"/>
        <HistoryItem name_product="Váy" date="Hôm nay"/>
        <HistoryItem name_product="Váy" date="Hôm nay"/>
        <HistoryItem name_product="Váy" date="Hôm nay"/>
        <HistoryItem name_product="Váy" date="Hôm nay"/>
        <HistoryItem name_product="Váy" date="Hôm nay"/>
        <HistoryItem name_product="Váy123" date="Hôm nay"/>
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
        return (
                <NavigationContainer>
                    <HeaderKeySearch placeholder="Tìm kiếm"/>
                    <Tab.Navigator getLabelText={({ route }) => route.title} initialRouteName="Something" tabBarOptions={{labelStyle:{fontSize: 14, textTransform: 'none'},activeTintColor:'red', inactiveTintColor:'grey' ,style:{elevation: 0}, indicatorStyle:{backgroundColor:'red'}}}>
                        <Tab.Screen name="Gần đây" component={NearScreen} />
                        <Tab.Screen name="Nổi bật" component={HotScreen} />
                        <Tab.Screen name="Tìm với camera" component={cameraScreen} />
                    </Tab.Navigator>
                </NavigationContainer>
        )
    }
}

export default TabHistorySearch;