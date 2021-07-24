import React, {Component} from 'react';
import {
  StyleSheet,
  View,
  Text,
  Dimensions,
  Image,
  SafeAreaView,
  ScrollView,
  TextInput
} from 'react-native';
import {Icon} from 'react-native-elements';
import ViewSlider from 'react-native-view-slider';
import Rating_star from '../components/Rating_star';

const {width, height} = Dimensions.get('window');

class ProductDetails extends Component {
  render() {
    return (
      <View >
        <View style={styles.tab}>
            <View style={{ flex: 2}}>
                <Image style={{marginLeft: 10}}  source={ require('../resources/icons/back.png')}/>
            </View>
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
                <ViewSlider 
                renderSlides={
                    <>
                    <View style={styles.viewBox}>
                        <Image
                        source={{
                            uri: 'https://kenh14cdn.com/2020/2/1/8426024230561750543928262347785860235132928n-1580573370491220255455.jpg',
                        }}
                        style={{height: 400, width}}
                        />
                    </View>
                    <View style={styles.viewBox}>
                        <Image
                        source={{
                            uri: 'https://anhvienmimosa.com/wp-content/uploads/2020/10/vay-cuoi-1.jpg',
                        }}
                        style={{height: 400, width}}
                        />
                    </View>
                    <View style={styles.viewBox}>
                        <Image
                        source={{
                            uri: 'https://phuquocxanh.com/vi/wp-content/uploads/2018/08/vay-cuoi-anh-kim.jpg',
                        }}
                        style={{height: 400, width}}
                        />
                    </View>
                    <View style={styles.viewBox}>
                        <Image
                        source={{
                            uri: 'https://vietstylist.com/wp-content/uploads/2019/08/12-cung-hoang-dao-cung-kim-ng%C6%B0u5.jpg',
                        }}
                        style={{height: 400, width}}
                        />
                    </View>
                    </>
                }
                style={[styles.slider, {marginLeft: 70, marginBottom: 20}]} //Main slider container style
                height={250} //Height of your slider
                slideCount={4} //How many views you are adding to slide
                dots={false} // Pagination dots visibility true for visibile
                dotActiveColor="red" //Pagination dot active color
                dotInactiveColor="gray" // Pagination do inactive color
                dotsContainerStyle={styles.dotContainer} // Container style of the pagination dots
                //autoSlide={true} //The views will slide automatically
                //slideInterval={1000} //In Miliseconds
                />
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
                }
                ]}>
                    Chất lượng sản phẩm tuyệt vời.
                    Đóng gói sản phẩm rất đẹp và chắc chắn.
                    Shop phục vụ rất tốt. Rất đáng tiền.
                    Chất lượng sản phẩm tuyệt vời.
                    Đóng gói sản phẩm rất đẹp và chắc chắn.
                    Shop phục vụ rất tốt. Rất đáng tiền.

                </Text>
                <ViewSlider 
                renderSlides={
                    <>
                    <View style={styles.viewBox}>
                        <Image
                        source={{
                            uri: 'http://styleguru.vn/wp-content/uploads/2021/03/kieu-vay-dam-xoe-cong-chua-1.jpg',
                        }}
                        style={{height: 400, width}}
                        />
                    </View>
                    <View style={styles.viewBox}>
                        <Image
                        source={{
                            uri: 'https://lamdepwiki.com/wp-content/uploads/2019/07/kieu-vay-dam-xoe-tre-vai.jpg',
                        }}
                        style={{height: 400, width}}
                        />
                    </View>
                    <View style={styles.viewBox}>
                        <Image
                        source={{
                            uri: 'https://cf.shopee.vn/file/7c6436c718748ca7194ad6136fe65410',
                        }}
                        style={{height: 400, width}}
                        />
                    </View>
                    <View style={styles.viewBox}>
                        <Image
                        source={{
                            uri: 'https://vietstylist.com/wp-content/uploads/2019/08/12-cung-hoang-dao-cung-kim-ng%C6%B0u5.jpg',
                        }}
                        style={{height: 400, width}}
                        />
                    </View>
                    </>
                }
                style={[styles.slider, {marginLeft: 70, marginBottom: 20}]} //Main slider container style
                height={250} //Height of your slider
                slideCount={4} //How many views you are adding to slide
                dots={false} // Pagination dots visibility true for visibile
                dotActiveColor="red" //Pagination dot active color
                dotInactiveColor="gray" // Pagination do inactive color
                dotsContainerStyle={styles.dotContainer} // Container style of the pagination dots
                //autoSlide={true} //The views will slide automatically
                //slideInterval={1000} //In Miliseconds
                />
            </View>

            <View style={{height: 100, backgroundColor: "#CDD1D1", width: width }} />
        
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
  }
});

export default ProductDetails;
