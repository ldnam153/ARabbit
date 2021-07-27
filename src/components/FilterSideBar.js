import React, { Component } from 'react';

import { StyleSheet,Text, View, Image, ScrollView, Button} from 'react-native';

import { DrawerContentScrollView, DrawerItem } from '@react-navigation/drawer';
import HeaderKeySearch from './HeaderKeySearch';

export function DrawerContent(props){
    return(
        <View>
            <HeaderKeySearch/>
        </View>
    );
}