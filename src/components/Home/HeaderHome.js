import React, {Component} from 'react';
import { connect } from 'react-redux'
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
    flex: 3,
    height: 40,
    paddingLeft: 15,
    paddingRight: 10,
    backgroundColor: '#D9D9D9',
    borderRadius: 3,
    marginLeft: 5,
    marginRight: 10
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
    var totalProduct = 0;
    const { cartList } = this.props;
    for(var i = 0; i < cartList.length; i++) {
      totalProduct += cartList[i].products.length;
    }
    return (
      <SafeAreaView style={styles.navbar_container}>
        <SafeAreaView style={styles.group}>
          <TextInput style={styles.input} placeholder="Tìm kiếm" placeholderTextColor="#000" onFocus={this.props.goTH}/>
          <View style={{flex:1, display:'flex', flexDirection:'row', justifyContent: 'space-between'}}>
              <TouchableOpacity onPress={this.props.goGH} >
                <Image source={require('../../resources/icons/cart_click.png')}/>
                <View style={styles.number}>
                    <Text style={{color: "white", alignSelf: 'center',fontSize: 10, fontWeight: 'bold'}}>{totalProduct}</Text>
                </View>
              </TouchableOpacity>
              <Image source={require('../../resources/icons/chat_click.png')} style={styles.iconMsg, {marginTop:6}} />
          </View>
        </SafeAreaView>
    </SafeAreaView>
    );
  }
}


const mapStateToProps = (state) => {
  return {
      cartList: state.cartReducer.cartList
  }
}

export default connect(mapStateToProps)(HeaderHome)