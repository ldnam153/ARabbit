import React, { Component } from 'react';
import { View, Text, StyleSheet } from 'react-native';

class ConfirmButtonComponent extends Component {
  render() {
    return (
      <View>
        <Text style={styles.title}>{this.props.title}</Text>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  title: {
    color: 'white',
    fontSize: 20,
    lineHeight: 40,
    fontWeight: 'bold',
  },
});

export default ConfirmButtonComponent;
