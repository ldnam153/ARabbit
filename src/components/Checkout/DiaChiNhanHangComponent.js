import React, { Component } from 'react';
import { View, Text, StyleSheet, Image, TouchableHighlight } from 'react-native';

class DiaChiNhanHangComponent extends Component {
  constructor(props) {
    super(props);
  }

  render() {
    return (
      <View style={styles.container}>
        <View style={styles.information_container}>
          <Text style={(styles.text, styles.text_bold)}>{this.props.information.name}</Text>
          <Text style={styles.text}>{this.props.information.phone}</Text>
          <Text style={styles.text}>{this.props.information.address}</Text>
        </View>
        <View style={styles.picked_icon}>
          {this.props.picked && <Image source={require('../../resources/icons/done.png')} />}
        </View>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    padding: 20,
    display: 'flex',
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
  },

  information_container: {
    flex: 7,
  },

  picked_icon: {
    flex: 1,
    width: 24,
    height: 24,
    display: 'flex',
    flexDirection: 'row',
    justifyContent: 'flex-end',
    alignItems: 'center',
  },

  text: {
    color: 'black',
    fontSize: 12,
    lineHeight: 20,
    flexShrink: 1,
  },

  text_bold: {
    fontSize: 14,
    marginBottom: 10,
    fontWeight: 'bold',
  },
});

export default DiaChiNhanHangComponent;
