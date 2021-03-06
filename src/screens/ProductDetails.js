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
import { connect } from 'react-redux'
import PDHeader from '../screens/ProductDetails/PDHeader';
import PDBody from '../screens/ProductDetails/PDBody';
import PDFooter from '../screens/ProductDetails/PDFooter';
import * as controller from '../controller/product_controller';

const {width, height} = Dimensions.get('window');

class ProductDetails extends Component {

  render() {
    var totalProduct = 0;
    const { cartList } = this.props;
    for(var i = 0; i < cartList.length; i++) {
      totalProduct += cartList[i].products.length;
    }
    var data = this.props.route.params.data || this.props.data || controller.getProduct('1')
    const goBack = () => {
      this.props.navigation.goBack();
    }
    const goFP = (danhgia={...data}) => {
      this.props.navigation.navigate('FeedBackProduct',{data: danhgia})
    }
    const goPD = () => {
      this.props.navigation.push('ProductDetails')
    }
    const goHome = () => {
      this.props.navigation.push('Home')
    }
    const goGH = () => {
      this.props.navigation.navigate('GioHang')
    }
    const goTH = () => {
      this.props.navigation.push('TabHistorySearch')
    }
    return (
      <View>
        <View style={styles.tab}>
          <TouchableOpacity onPress={goBack}>
              <Image style={{marginLeft: 15}}  source={ require('../resources/icons/back.png')}/>
          </TouchableOpacity>
          <View style={{flexDirection: 'row'}}>
              <TouchableOpacity onPress={goTH}>
                <Image style={{marginRight: 20, marginTop: 4, width: 24, height: 24}} source={require('../resources/icons/search.png')} />
              </TouchableOpacity>
              <TouchableOpacity onPress={goHome}>
                <Image style={{marginRight: 20, marginTop: 2, width: 24, height: 24}} source={require('../resources/icons/home.png')}/>
              </TouchableOpacity>
              <TouchableOpacity onPress={goGH} >
                <Image style={{marginRight: 20, width: 28, height: 28}} source={require('../resources/icons/cart_click.png')}/>
                <View style={styles.number}>
                    <Text style={{color: "white", alignSelf: 'center',fontSize: 10, fontWeight: 'bold'}}>{totalProduct}</Text>
                </View>
              </TouchableOpacity>
          </View>
        </View>
        
        <ScrollView style={styles.container}>   

          <PDHeader data={data}/>

          <View style={{height: 10, backgroundColor: "#CDD1D1", width: width }} />

          <PDBody data={data} goFP={goFP} goPD={goPD}/>

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
  number:{
    backgroundColor: "red", 
    borderRadius: 50, 
    position: "absolute", 
    alignSelf: 'center', 
    marginBottom: 10, 
    marginRight: 100,
    padding: 2,
    width: 15,
    height: 15,
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
const mapStateToProps = (state) => {
  return {
      cartList: state.cartReducer.cartList
  }
}

export default connect(mapStateToProps)(ProductDetails)
