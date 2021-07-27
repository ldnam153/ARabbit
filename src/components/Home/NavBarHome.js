import React, {Component} from 'react';
import {StyleSheet, Text, TouchableHighlight, View, Image} from 'react-native';
const styles = StyleSheet.create({
  navbar_container: {
    backgroundColor: 'white',
    width: '100%',
    height: 70,
    padding:0,
    display: 'flex',
    justifyContent: 'flex-end'
  },
  nav:{
    backgroundColor: 'white',
    display: 'flex',
    flexDirection: 'row',
    padding:15,
    justifyContent: 'space-between',
    width: '100%',
    height: 60,
  }
});
class NavBarHome extends Component {
  constructor(props) {
    super(props);
    this.decrementRef = React.createRef();

    this.state = {
      number: Number(props.number),
      disabled: false,
    };
  }

  render() {
    return (
        <View style={styles.navbar_container}>
            <View style={styles.nav}>
                <View>
                    <Image source={require('~/resources/icons/home_click.png')}/>
                </View>
                <View>
                    <Image source={require('~/resources/icons/category.png')}/>
                </View>
                <View>
                    <Image source={require('~/resources/icons/home_click.png')}/>
                </View>
                <View>
                    <Image source={require('~/resources/icons/notification.png')}/>
                </View>
                <View>
                    <Image source={require('~/resources/icons/user.png')}/>
                </View>
            </View>
            <Image source={require('~/resources/icons/camera_navbar.png')} style={{position: 'absolute', alignSelf: 'center'}}/>
        </View>
    );
  }
}

export default NavBarHome;
