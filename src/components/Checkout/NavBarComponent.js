import React, { Component } from 'react';
import { View, Text, Image, StyleSheet } from 'react-native';

class NavBarComponent extends Component {
  render() {
    return (
      <View style={styles.navbar_container}>
        <View>
          <Image source={require('../../resources/icons/back.png')} />
        </View>
        <Text style={styles.navbar_title}>{this.props.title}</Text>
        <Text style={styles.modify_text}>SỬA</Text>
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
    marginBottom: 10,
  },

  navbar_title: {
    fontSize: 20,
    fontWeight: 'bold',
    lineHeight: 40,
  },

  modify_text: {
    color: '#FF5C00',
    fontSize: 14,
    lineHeight: 40,
  },
});

export default NavBarComponent;
