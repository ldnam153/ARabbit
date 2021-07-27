import React, { Component } from 'react';
import { View, Text, TextInput, StyleSheet, TouchableHighlight } from 'react-native';

class VoucherInputComponent extends Component {
  render() {
    return (
      <View style={styles.container}>
        <TextInput style={styles.input} placeholder="Nhập mã voucher" maxLength={10} />
        <TouchableHighlight
          style={styles.apply_button}
          activeOpacity={0.6}
          underlayColor="#f56e6e"
          onPress={() => alert('Tim voucher')}
        >
          <Text style={styles.apply_button_text}>ÁP DỤNG</Text>
        </TouchableHighlight>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    display: 'flex',
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    paddingHorizontal: 20,
    paddingVertical: 10,
    backgroundColor: '#FFF',
    marginBottom: 10,
    shadowColor: '#000',
    shadowOffset: { width: 1, height: 1 },
    shadowOpacity: 0.4,
    shadowRadius: 3,
    elevation: 5,
  },

  input: {
    paddingHorizontal: 15,
    backgroundColor: '#F0F0F0',
    flex: 0.7,
    height: 40,
  },

  apply_button: {
    flex: 0.2,
    paddingHorizontal: 10,
    paddingVertical: 10,
    backgroundColor: '#F62424',
    height: 40,
  },

  apply_button_text: {
    color: 'white',
    fontSize: 14,
    fontWeight: 'bold',
    textAlign: 'center',
  },
});

export default VoucherInputComponent;
