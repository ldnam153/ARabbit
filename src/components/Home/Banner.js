import React, {Component} from 'react';
import {StyleSheet, Image, View, ScrollView} from 'react-native';
import Swiper from 'react-native-swiper'
class Banner extends Component {
    render() {
      return (
        <ScrollView  >
          <SwiperComponent/>
        </ScrollView>
      );
    }
  }
  const styles = StyleSheet.create({
    container: {
      zIndex: 0,
      backgroundColor: 'gray'
    },
    wrapper: {
      backgroundColor: 'white',
      height: 245,
  
    },
  })
   
  class SwiperComponent extends Component {
    render() {
      return (
        <Swiper style={styles.wrapper} 
          dot={
              <View
                style={{
                  backgroundColor: 'rgba(255,255,255,.3)',
                  width: 10,
                  height: 10,
                  borderRadius: 7,
                  marginLeft: 7,
                  marginRight: 7
                }}
              />
            }
            activeDot={
              <View
                style={{
                  backgroundColor: '#fff',
                  width: 10,
                  height: 10,
                  borderRadius: 7,
                  marginLeft: 7,
                  marginRight: 7
                }}/>}
          >
          <Image source={require('../../resources/imgs/banner1.png')} />
          <Image source={require('../../resources/imgs/banner2.png')}/>
        </Swiper>
      )
    }
  }
  export default Banner;