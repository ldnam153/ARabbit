import React, {Component} from 'react';
import {
  StyleSheet,
  View,
  Text,
  Dimensions,
  Image,
  SafeAreaView,
  ScrollView,
  TextInput,
  TouchableOpacity
} from 'react-native';
import {Icon} from 'react-native-elements';
import ViewSlider from 'react-native-view-slider';
import Rating_star from '../components/Rating_star';

const {width, height} = Dimensions.get('window');

class ProductDetails extends Component {
  render() {
    const goBack = () => {
      this.props.navigation.goBack()
    }
    return (
      <View >
        <View style={styles.tab}>
            <TouchableOpacity style={{ flex: 2}} onPress={goBack}>
                <Image style={{marginLeft: 10}}  source={ require('../resources/icons/back.png')}/>
            </TouchableOpacity>
          <View style={{ flex: 6}}>
            <Text style={{ fontSize: 24, fontWeight: 'bold'}}>Đánh giá sản phẩm</Text> 
          </View>
          <View style={{flex: 0.5}}></View>
        </View>

        <ScrollView style={styles.container}>   
            <View style={[, 
                    {
                    flexDirection: 'row', 
                    width: width - 20,
                    justifyContent: 'space-between',
                    alignSelf: 'center',
                    marginBottom: 10,
                    marginTop: 10,
                    marginLeft: 5
                    }]}>  
                <View>
                <Text style={{
                    color: '#FF5C00',
                    fontWeight: 'bold',
                    fontSize: 17
                }}>
                    ngochan113
                </Text>
                <Rating_star width="11" height="11" value="4" >
                    {' '}
                </Rating_star>
                </View>
                <Text>12/07/2021</Text>
            </View>

            <View>
                <Text style={[, 
                {
                    width: width - 70,
                    alignSelf: 'center',
                    marginBottom: 10,
                    lineHeight: 19
                }
                ]}>
                Váy xinh y như hình shop đăng nhé. Màu cũng rất đẹp. Tiếc là shop không đăng màu hình váy vàng lên để mọi người nhìn thấy và có thêm lựa chọn. Rất hài lòng.
                </Text>
                
                <ScrollView style={{backgroundColor: 'white', height: 330, width: width, marginLeft: 10}}  horizontal={true}>
                    <View style={styles.RelatedProduct} >
                         <Image style={styles.imgStyle} source={require('../resources/imgs/FeedBackProduct/c.jpg')} />
                    </View>                      
                    <View style={styles.RelatedProduct} >
                         <Image style={styles.imgStyle} source={require('../resources/imgs/FeedBackProduct/e.webp')} />
                    </View>
                    <View style={styles.RelatedProduct} >
                         <Image style={styles.imgStyle} source={require('../resources/imgs/FeedBackProduct/d.png')} />
                    </View>
                    <View style={styles.RelatedProduct} >
                         <Image style={styles.imgStyle} source={require('../resources/imgs/FeedBackProduct/a.jpg')} />
                    </View>
                </ScrollView>

            </View>

            <View style={{height: 10, backgroundColor: "#CDD1D1", width: width }} />
        
            <View style={[, 
                    {
                    flexDirection: 'row', 
                    width: width - 20,
                    justifyContent: 'space-between',
                    alignSelf: 'center',
                    marginBottom: 10,
                    marginTop: 10,
                    marginLeft: 5
                    }]}>  
                <View>
                <Text style={{
                    color: '#FF5C00',
                    fontWeight: 'bold',
                    fontSize: 17
                }}>
                    nguyenhonghanh936
                </Text>
                <Rating_star width="11" height="11" value="5" >
                    {' '}
                </Rating_star>
                </View>
                <Text>12/07/2021</Text>
            </View>

            <View>
                <Text style={[, 
                {
                    width: width - 70,
                    alignSelf: 'center',
                    marginBottom: 10,
                    lineHeight: 19
                }]}>
                    Chất lượng sản phẩm tuyệt vời.
                    Đóng gói sản phẩm rất đẹp và chắc chắn.
                    Shop phục vụ rất tốt. Rất đáng tiền.
                    Chất lượng sản phẩm tuyệt vời.
                    Đóng gói sản phẩm rất đẹp và chắc chắn.
                    Shop phục vụ rất tốt. Rất đáng tiền.

                </Text>
                
                <ScrollView style={{backgroundColor: 'white', height: 380, width: width, marginLeft: 10}}  horizontal={true}>
                    <View style={styles.RelatedProduct} >
                         <Image style={styles.imgStyle} source={require('../resources/imgs/FeedBackProduct/6.webp')} />
                    </View>                      
                    <View style={styles.RelatedProduct} >
                         <Image style={styles.imgStyle} source={require('../resources/imgs/FeedBackProduct/5.jpg')} />
                    </View>
                    <View style={styles.RelatedProduct} >
                         <Image style={styles.imgStyle} source={require('../resources/imgs/FeedBackProduct/f.jpg')} />
                    </View>
                    <View style={styles.RelatedProduct} >
                         <Image style={styles.imgStyle} source={require('../resources/imgs/FeedBackProduct/lanngoc.jpeg')} />
                    </View>
                </ScrollView>
            
            </View>

            <View style={{height: 10, backgroundColor: "#CDD1D1", width: width }} />
        
        </ScrollView>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  viewBox: {
    paddingHorizontal: 20,
    justifyContent: 'center',
    width: width,
    padding: 10,
    alignItems: 'center',
    height: 150,
  },
  slider: {
    alignSelf: 'center',
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: 'black',
  },
  dotContainer: {
    backgroundColor: 'transparent',
    position: 'absolute',
    bottom: -10,
  },
  container: {
    backgroundColor: '#F7F7F7',
  },
  tab: {
    flexDirection: 'row',
    alignItems: 'center',
    backgroundColor:'white',
    paddingBottom:10,
    paddingTop:10,
    elevation:4
  },
  RelatedProduct: {
    padding: 5
  },
  imgStyle: {
    width: 200, 
    height: 300 
  }
});

export default ProductDetails;
