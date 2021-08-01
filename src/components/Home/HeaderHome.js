import React, {Component} from 'react';
import {StyleSheet, View, TextInput, Text,Image, SafeAreaView, TouchableOpacity} from 'react-native';
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
  number:{
    backgroundColor: "red", 
    borderRadius: 50, 
    position: "absolute", 
    alignSelf: 'flex-end', 
    marginBottom: 10, 
    padding: 2,
    width: 15,
    height: 15,
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
                <Image source={require('../../resources/icons/cart_click.png')}/>
                <View style={styles.number}>
                    <Text style={{color: "white", alignSelf: 'center',fontSize: 10, fontWeight: 'bold'}}>3</Text>
                </View>
              </TouchableOpacity>
              <Image source={require('../../resources/icons/chat_click.png')} style={styles.iconMsg, {marginTop:6}} />
          </View>
        </SafeAreaView>
    </SafeAreaView>
    );
  }
}


export default HeaderHome;
