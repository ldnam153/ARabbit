import React, { Component } from 'react'
import { StyleSheet } from 'react-native';
import RNPickerSelect from 'react-native-picker-select';
import SelectDropdown from "react-native-select-dropdown";

const pickerSelectStyles = StyleSheet.create({
    inputIOS: {
      fontSize: 16,
      paddingVertical: 12,
      paddingHorizontal: 10,
      borderWidth: 1,
      borderColor: 'gray',
      borderRadius: 4,
      color: 'black',
      paddingRight: 30, // to ensure the text is never behind the icon
    },
    inputAndroid: {
      fontSize: 12,
      paddingHorizontal: 10,
      borderWidth: 0.5,
      borderColor: 'purple',
      borderRadius: 8,
      color: 'black',
      paddingRight: 30, // to ensure the text is never behind the icon
    },
    config: {
      backgroundColor : 'red',
    },
  });

  const styles = StyleSheet.create({
    
    dropdown2BtnStyle: {
      width: "80%",
      height: 30,
      width: 100,
      backgroundColor: "#e3dede",
      borderRadius: 8,
    },
    dropdown2BtnTxtStyle: {
      color: "#000",
      textAlign: "left",
      fontSize: 14
    },
    dropdown2DropdownStyle: { backgroundColor: "#444" },
    dropdown2RowStyle: { backgroundColor: "#444", borderBottomColor: "#C5C5C5" },
    dropdown2RowTxtStyle: {
      color: "#FFF",
      textAlign: "center",
      fontWeight: "bold",
    },
  })

class Select extends Component {
    constructor(props) {
        super(props)
    
        this.state = {
            productValue : props.value,
        }
    }
    
    render() {
        const placeholder = {
            label: '...',
            value: 'Standard',
            color: 'black',
        }
        const data = ['Auth','Standard','Premium','Luxury'];
        return (
            // <RNPickerSelect 
            // onValueChange={value => {
            //     this.setState({
            //       productValue: value,
            //     });
            //   }}
            // items={ this.props.data || [
            //     { label: 'Standard', value: 'Standard' },
            //     { label: 'Premium', value: 'Premium' },
            //     { label: 'Luxury', value: 'Luxury' },
            // ]}
            // value={this.state.productValue}
            // useNativeAndroidPickerStyle={false}
            // placeholder = {placeholder}
            // style = {pickerSelectStyles}>
            // </RNPickerSelect>
            <SelectDropdown
            data={data}
            // defaultValueByIndex={1}
            onSelect={(selectedItem, index) => {
              console.log(selectedItem, index);
            }}
            defaultButtonText={"Standard"}
            buttonTextAfterSelection={(selectedItem, index) => {
              return selectedItem;
            }}
            rowTextForSelection={(item, index) => {
              return item;
            }}
            buttonStyle={styles.dropdown2BtnStyle}
            buttonTextStyle={styles.dropdown2BtnTxtStyle}
            // renderDropdownIcon={() => {
            //   return (
            //     <FontAwesome name="chevron-down" color={"#FFF"} size={18} />
            //   );
            // }}
            // dropdownIconPosition={"right"}
            // dropdownStyle={styles.dropdown2DropdownStyle}
            // rowStyle={styles.dropdown2RowStyle}
            // rowTextStyle={styles.dropdown2RowTxtStyle}
          />
        )
    }
}

export default Select
