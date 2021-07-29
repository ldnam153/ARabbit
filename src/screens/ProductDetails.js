import React, {Component} from 'react';
import {
  StyleSheet,
  View,
  Text,
  Dimensions,
  Image,
  SafeAreaView,
  ScrollView,
  TouchableOpacity,
  TouchableHighlight
} from 'react-native';

import PDHeader from '../screens/ProductDetails/PDHeader';
import PDBody from '../screens/ProductDetails/PDBody';
import PDFooter from '../screens/ProductDetails/PDFooter';

const {width, height} = Dimensions.get('window');

class ProductDetails extends Component {

  render() {
    const data = this.props.data

    return (
      <View>
        <View style={styles.tab}>
          <TouchableOpacity>
              <Image style={{marginLeft: 15}}  source={ require('../resources/icons/back.png')}/>
          </TouchableOpacity>
          <View style={{flexDirection: 'row'}}>
              <TouchableOpacity>
                <Image style={{marginRight: 20, marginTop: 4, width: 24, height: 24}} source={require('../resources/icons/search.png')} />
              </TouchableOpacity>
              <TouchableOpacity>
                <Image style={{marginRight: 20, marginTop: 2, width: 24, height: 24}} source={require('../resources/icons/home.png')}/>
              </TouchableOpacity>
              <TouchableOpacity>
                <Image style={{marginRight: 20, width: 28, height: 28}} source={require('../resources/icons/cart_click.png')}/>
              </TouchableOpacity>
          </View>
        </View>
        
        <ScrollView style={styles.container}>   

          <PDHeader data={data}/>

          <View style={{height: 10, backgroundColor: "#CDD1D1", width: width }} />

          <PDBody data={data}/>

        </ScrollView>

        <PDFooter data={data}/>
      
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    backgroundColor: '#F7F7F7',
  },
  tab: {
    flexDirection: 'row',
    justifyContent:'space-between',
    alignItems: 'center',
    backgroundColor:'white',
    paddingBottom:10,
    paddingTop:10,
    elevation:4
  }
});

export default ProductDetails;
