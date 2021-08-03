import React, {Component} from 'react';
import {StyleSheet, Text, TouchableHighlight, View, TextInput, SafeAreaView} from 'react-native';
import HeaderHome from '../components/Home/HeaderHome';
import ScrollViewHome from '../components/Home/ScrollViewHome';
import NavBarHome from '../components/Home/NavBarHome';
import { NavigationContainer } from '@react-navigation/native';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { Button } from 'react-native-elements/dist/buttons/Button';
const styles = StyleSheet.create({
    input: {
      height: 40,
      margin: 12,
      borderWidth: 1,
    },
    screen_container: {
        backgroundColor: '#EFEFEF',
        
        position: 'relative',
        width: '100%',
        height: '100%',
        display: 'flex',
        flexDirection: 'column',
        justifyContent: 'flex-start',
    },
  });
class HomeScreen extends Component{
  
    render(){
        return (
        <SafeAreaView style={styles.screen_container}>
            <HeaderHome goGH={this.props.goGH} goTH={this.props.goTH}/>
            <ScrollViewHome goPD={this.props.goPD}/>
        </SafeAreaView>
        
        );
    }
  };
  

export default HomeScreen;
