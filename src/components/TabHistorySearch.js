import React, { Component } from 'react';

import { StyleSheet,Text, View, Image} from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createMaterialTopTabNavigator } from '@react-navigation/material-top-tabs';
import HeaderKeySearch from './HeaderKeySearch';

const Tab = createMaterialTopTabNavigator();
  
  function HotScreen() {
    return (
      <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
        <Text>Nổi bật</Text>
      </View>
    );
  }

  function NearScreen() {
    return (
      <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
        <Text>Gần đây</Text>
      </View>
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
                    <Tab.Navigator initialRouteName="Something" tabBarOptions={{style:{elevation: 0}}}>
                        <Tab.Screen name="Gần đây" component={NearScreen} />
                        <Tab.Screen name="Nổi bật" component={HotScreen} />
                        <Tab.Screen name="Tìm với camera" component={cameraScreen} />
                    </Tab.Navigator>
                </NavigationContainer>
        )
    }
}

export default TabHistorySearch;