import React, { Component } from 'react';
import { View, Text, StyleSheet, Image } from 'react-native';

class CheckoutInfoFieldComponent extends Component {
  render() {
    return (
      <View style={this.props.last ? styles.last_item : styles.container}>
        <Text style={styles.field_title}>{this.props.title}</Text>
        <Text style={styles.field_value}>
          {this.props.value}{' '}
          {this.props.forward && <Image source={require('../../resources/icons/forward.png')} />}
        </Text>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    display: 'flex',
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    borderColor: '#F62424',
    borderWidth: 1,
    borderBottomWidth: 0,
    paddingHorizontal: 20,
    paddingVertical: 15,
  },

  field_title: {
    fontSize: 16,
    fontWeight: 'bold',
    flex: 1,
    textAlign: 'left'
  },

  field_value: {
    fontSize: 14,
    flex: 1,
    textAlign: 'right'
  },

  forward: {
    width: 5,
    height: 10,
  },

  last_item: {
    display: 'flex',
    flexDirection: 'column',
    justifyContent: 'space-between',
    alignItems: 'flex-start',
    borderColor: '#F62424',
    borderWidth: 1,
    borderBottomWidth: 1,
    paddingHorizontal: 20,
    paddingVertical: 15,
  },
});

export default CheckoutInfoFieldComponent;
