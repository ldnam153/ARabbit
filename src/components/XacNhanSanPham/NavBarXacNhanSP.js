import React, { Component } from 'react';
import { View, Text, Image, StyleSheet, TouchableOpacity } from 'react-native';

class NavBarXacNhanSP extends Component {
  render() {
    return (
      <View style={styles.navbar_container}>
        <TouchableOpacity onPress={this.props.goBack}>
          <Image source={require('~/resources/icons/back.png')} />
        </TouchableOpacity>
        <Text style={styles.navbar_title}>{this.props.title}</Text>
        <TouchableOpacity onPress={this.props.goHome}>
          <Image source={require('~/resources/icons/home.png')} />
        </TouchableOpacity>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  navbar_container: {
    backgroundColor: 'white',
    display: 'flex',
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    paddingLeft: 20,
    paddingRight: 20,
    paddingTop: 10,
    paddingBottom: 10,
    backgroundColor: 'white',
    shadowColor: '#000',
    shadowOffset: { width: 1, height: 1 },
    shadowOpacity: 0.4,
    shadowRadius: 3,
    elevation: 5,
  },

  navbar_title: {
    fontSize: 20,
    fontWeight: 'bold',
    lineHeight: 40,
  },
});

export default NavBarXacNhanSP;
