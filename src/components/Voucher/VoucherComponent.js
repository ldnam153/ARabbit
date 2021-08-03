import React, { Component } from 'react';
import { View, Text, Image, StyleSheet, TouchableHighlight } from 'react-native';

class VoucherComponent extends Component {
  render() {
    const image =
      this.props.item.image !== ''
        ? require('../../resources/imgs/voucher/voucher-image.png')
        : require('../../resources/imgs/voucher/voucher-image.png');
    return (
      <View style={styles.container}>
        <View style={styles.voucher_image_container}>
          <Image source={image}></Image>
        </View>
        <View style={styles.voucher_content_container}>
          <Text style={this.props.active ? styles.voucher_title_active : styles.voucher_title}>
            {this.props.item.title}
          </Text>
          <Text style={styles.voucher_desc}>{this.props.item.desc}</Text>
          <View style={styles.voucher_apply_section}>
            <View style={styles.validation_container}>
              <Text style={styles.validation_title}>Hạn sử dụng:</Text>
              <Text style={styles.expiration}>{this.props.item.expiration}</Text>
            </View>
            <TouchableHighlight
              style={this.props.active ? styles.apply_button_active : styles.apply_button}
              activeOpacity={0.6}
              underlayColor="#f56e6e"
              onPress={() => {
                this.props.onClick(this.props.index);
              }}
            >
              <Text style={styles.apply_button_text}>{this.props.active ? 'HUỶ' : 'ÁP DỤNG'}</Text>
            </TouchableHighlight>
          </View>
        </View>
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
    padding: 20,
    backgroundColor: '#FFF',
    marginBottom: 5,
    shadowColor: '#000',
    shadowOffset: { width: 1, height: 1 },
    shadowOpacity: 0.4,
    shadowRadius: 3,
    elevation: 5,
  },
  

  voucher_image_container: {
    flex: 0.4,
  },

  voucher_content_container: {
    display: 'flex',
    flexDirection: 'column',
    justifyContent: 'space-between',
    alignItems: 'flex-start',
    flex: 0.6,
  },

  voucher_title: {
    fontSize: 24,
    fontWeight: 'bold',
    color: 'black',
    flex: 1,
  },

  voucher_title_active: {
    fontSize: 24,
    fontWeight: 'bold',
    color: '#F62424',
    flex: 1,
  },

  voucher_desc: {
    fontSize: 10,
    fontWeight: 'bold',
    lineHeight: 15,
    color: '#969696',
    flex: 1,
  },

  voucher_apply_section: {
    display: 'flex',
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    width: '100%',
    flex: 1,
  },

  apply_button: {
    backgroundColor: '#F62424',
    paddingVertical: 5,
    paddingHorizontal: 10,
  },

  apply_button_active: {
    backgroundColor: '#343333',
    paddingVertical: 5,
    paddingHorizontal: 10,
  },

  apply_button_text: {
    color: 'white',
    fontSize: 14,
    fontWeight: 'bold',
  },
});

export default VoucherComponent;
