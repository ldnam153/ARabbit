import React, { Component } from 'react';

import { StyleSheet,Text, View, Image, ScrollView} from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createMaterialTopTabNavigator } from '@react-navigation/material-top-tabs';
import HeaderKeySearch from '../components/HeaderKeySearch';
import HistoryItem from '../components/HistoryItem';

const Tab = createMaterialTopTabNavigator();
  
  function HotScreen({goRK}) {
    return (
      <View>
        <HistoryItem name_product="Váy" date="Hôm nay" goRK={goRK}/>
      </View>
    );
  }

  function NearScreen({goRK}) {
    return (
      <ScrollView style={{backgroundColor:'white'}}>
        <HistoryItem name_product="Váy1" date="Hôm nay" goRK={goRK}/>
        <HistoryItem name_product="Váy" date="Hôm nay" goRK={goRK}/>
        <HistoryItem name_product="Váy123" date="Hôm nay" goRK={goRK}/>
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
                    <HeaderKeySearch placeholder="Tìm kiếm" goBack={goBack}/>
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