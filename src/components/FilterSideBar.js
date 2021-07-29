import React, { Component } from 'react';

import { StyleSheet,Text, View, Image, ScrollView, Button, TouchableOpacity} from 'react-native';

import { DrawerContentScrollView, DrawerItem } from '@react-navigation/drawer';
import HeaderKeySearch from './HeaderKeySearch';
import Accordian from './Accordian';


export function DrawerContent(props){
    return(
        <View style={{flex:1, position:'relative'}}>
            <View style={{padding:10,backgroundColor:'#f5f5f5'}}>
                <Text style={{fontSize:20, fontWeight:'bold',color:'black'}}>
                    Bộ lọc tìm kiếm
                </Text>
            </View>
            <DrawerContentScrollView contentContainerStyle={{paddingBottom:100}}>
                <Accordian title ="Khoảng giá" data="123"/>
                <Accordian title ="Xuất xứ" data="123"/>
                <Accordian title ="Màu sắc" data="123"/>
                <Accordian title ="Khoảng giá" data="123"/>
                <Accordian title ="Xuất xứ" data="123"/>
                <Accordian title ="Màu sắc" data="123"/>

            </DrawerContentScrollView>
            <View style={{padding:10,backgroundColor:'white',bottom:0,position:'absolute',width:'100%',paddingBottom:10}}>
                <View style={{flexDirection:'row',justifyContent:'flex-end'}}>
                    <View style={{borderColor:'red',borderWidth:1,marginRight:20,padding:10,borderRadius:10,flex:0.3,alignItems:'center'}}>
                        <TouchableOpacity>
                            <Text style={{color:'red'}}>Đặt lại</Text>
                        </TouchableOpacity>
                    </View>
                    <View style={{padding:10, backgroundColor:'red',borderRadius:10,flex:0.3, alignItems:'center'}}>
                        <TouchableOpacity>
                            <Text style={{color:'white'}}>Áp dụng</Text>
                        </TouchableOpacity>
                    </View>
                </View>
            </View>
        </View>
    );
}