import React, { Component } from 'react';
import { View, Text, StyleSheet, TextInput } from 'react-native';
import SelectDropdown from 'react-native-select-dropdown';

class CheckoutInfoFieldComponent extends Component {
  constructor(props) {
    super(props);
    this.state = {
      dataProvince: [],
      dataDistrict: [],
      dataWard: [],
    };
    this.onChange = this.onChange.bind(this);
  }
  componentDidMount() {
    this.props.index === 2 &&
      fetch('https://provinces.open-api.vn/api/p/')
        .then((res) => res.json())
        .then(
          (result) => {
            this.setState({
              dataProvince: result,
            });
          },
          (error) => {
            alert('Fetching error: ' + error);
          }
        );
  }
  componentDidUpdate(prevProps) {
    prevProps.districts !== this.props.districts && this.setState({dataDistrict: this.props.districts})
    prevProps.wards !== this.props.wards && this.setState({dataWard: this.props.wards})
  }
  onChange = (text) => {
    this.props.index === 0 && this.props.changeName(text);
    this.props.index === 1 && this.props.changePhone(text);
    this.props.index === 5 && this.props.changeAddress(text);
  }
  render() {
    return (
      <View style={this.props.last ? styles.last_item : styles.container}>
        {this.props.type === 'input' ? (
          <View
            style={[
              { width: '100%', display: 'flex', flexDirection: 'row' },
              this.props.last && { flexDirection: 'column', alignItems: 'flex-start' },
            ]}
          >
            <Text style={styles.field_title}>{this.props.title}</Text>
            <TextInput style={styles.input} placeholder={this.props.value} onChangeText={(text) => this.onChange(text)}/>
          </View>
        ) : (
          <View style={{ display: 'flex', flexDirection: 'row' }}>
            <Text style={styles.field_title}>{this.props.title}</Text>
            <SelectDropdown
              data={this.props.index === 2 ? this.state.dataProvince.map(item => item.name) : this.props.index === 3 ? this.state.dataDistrict.map(item => item.name) : this.props.index === 4 && this.state.dataWard.map(item => item.name)}
              onSelect={(selectedItem, index) => {
                this.props.index === 2 && this.props.changeProvince(this.state.dataProvince[index]);
                this.props.index === 3 && this.props.changeDistrict(this.state.dataDistrict[index]);
                this.props.index === 4 && this.props.changeWard(this.state.dataWard[index]);
              }}
              defaultButtonText={'Chọn'}
              buttonTextAfterSelection={(selectedItem, index) => {
                return selectedItem;
              }}
              rowTextForSelection={(item, index) => {
                return item;
              }}
              buttonStyle={styles.dropdown2BtnStyle}
              buttonTextStyle={styles.dropdown2BtnTxtStyle}
            />
          </View>
        )}
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
    textAlign: 'left',
  },

  field_value: {
    fontSize: 14,
    flex: 1,
    textAlign: 'right',
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

  dropdown2BtnStyle: {
    width: '110%',
    height: 30,
    backgroundColor: '#e3dede',
    borderRadius: 8,
    flex: 1,
  },

  dropdown2BtnTxtStyle: {
    color: '#000',
    textAlign: 'left',
    fontSize: 14,
    flex: 1,
  },

  input: {
    fontSize: 14,
    flex: 1,
    color: 'black',
    textAlign: 'left',
    paddingVertical: 0,
    borderTopWidth: 0,
    borderLeftWidth: 0,
    borderRightWidth: 0,
    borderBottomWidth: 1,
    borderBottomColor: '#d3d3d3',
    width: '100%',
  },
});

export default CheckoutInfoFieldComponent;
