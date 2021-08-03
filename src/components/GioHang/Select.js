import React, { Component } from 'react'
import { StyleSheet, View, Image } from 'react-native';
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
      width: "110%",
      height: 30,
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
            productValue : props.property,
        }
    }
    
    render() {
        const data = this.props.data;
        return (
            <View style={{}}>
            <SelectDropdown
              data={data}
              // defaultValueByIndex={1}
              onSelect={(selectedItem, index) => {
                console.log(selectedItem, index);
              }}
              defaultButtonText={this.props.property}
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
              <Image source={require('../../resources/icons/down.png')} style={{position: 'absolute', margin: 10,alignSelf:'flex-end', }}/>
            </View>
              
        )
    }
}

export default Select
