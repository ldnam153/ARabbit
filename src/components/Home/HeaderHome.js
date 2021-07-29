import React, {Component} from 'react';
import {StyleSheet, View, TextInput, Image, SafeAreaView, TouchableOpacity} from 'react-native';
const styles = StyleSheet.create({
  navbar_container: {
    position: 'absolute',
    width: '100%',
    height: 65,
    backgroundColor: 'white',
    zIndex: 1,
  },
  group:{
    display: 'flex',
    flex:1,
    flexDirection: 'row',
    margin: 15,
    justifyContent: 'space-between'
  }
  ,
  input:{ 
    flex: 4,
    height: 40,
    paddingLeft: 15,
    paddingRight: 10,
    backgroundColor: '#D9D9D9',
    borderRadius: 3,
    marginLeft: 5,
    marginRight: 10,
  },
  icon:{
  }
});

class HeaderHome extends Component {
  render() {
    return (
      <SafeAreaView style={styles.navbar_container}>
        <SafeAreaView style={styles.group}>
          <TextInput style={styles.input} placeholder="Tìm kiếm" onFocus={this.props.goTH}/>
          <View style={{flex:1, display:'flex', flexDirection:'row', justifyContent: 'space-between'}}>
              <TouchableOpacity onPress={this.props.goGH} >
                <Image source={require('../../resources/icons/cart_click.png')} style={styles.icon}/>
              </TouchableOpacity>
              <Image source={require('../../resources/icons/chat_click.png')} style={styles.icon, {marginTop:6}} />
          </View>
        </SafeAreaView>
    </SafeAreaView>
    );
  }
}


export default HeaderHome;
