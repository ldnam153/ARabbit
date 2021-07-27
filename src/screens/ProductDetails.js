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
  Button,
  Alert,
  TouchableOpacity
} from 'react-native';
import {Icon} from 'react-native-elements';
import ViewSlider from 'react-native-view-slider';
import Rating_star from '../components/Rating_star';
import {NavigationContainer} from '@react-navigation/native';
import ProductBar from '../components/ProductBar';

const {width, height} = Dimensions.get('window');

class ProductDetails extends Component {
  render() {
    return (
      <View>
        <View style={styles.tab}>
          <View>
            <Image style={{marginLeft: 10}}  source={ require('../resources/icons/back.png')}/>
          </View>
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
          <ViewSlider
            renderSlides={
              <>
                <View style={styles.viewBox}>
                  <Image
                    source={require('../resources/imgs/FeedBackProduct/main.jpg')}
                    style={{height: 500, width: 300}}
                  />
                </View>
                <View style={styles.viewBox}>
                  <Text>TWO</Text>
                </View>
                <View style={styles.viewBox}>
                  <Text>THREE</Text>
                </View>
                <View style={styles.viewBox}>
                  <Text>FOUR</Text>
                </View>
              </>
            }
            style={styles.slider} //Main slider container style
            height={250} //Height of your slider
            slideCount={4} //How many views you are adding to slide
            dots={true} // Pagination dots visibility true for visibile
            dotActiveColor="red" //Pagination dot active color
            dotInactiveColor="gray" // Pagination do inactive color
            dotsContainerStyle={styles.dotContainer} // Container style of the pagination dots
            //autoSlide={true} //The views will slide automatically
            //slideInterval={1000} //In Miliseconds
          />
          <View style={{
            flex: 1, 
            justifyContent: 'center', 
            alignItems: 'center', 
            flexDirection: 'row',
            marginTop: 13
          }}>
            <View style={{
                justifyContent: 'center',
                flexDirection: 'row', 
                flex: 1,
                alignItems: 'center'
              }}>
              <Text style={{fontSize: 16, marginTop: 3}}> 4.0 </Text>
              <Rating_star width="15" height="15" value="4" />
            </View>
            <View style={{flex: 1, alignItems: 'center'}}>
              <Text style={{ fontSize: 16}}> 999 đã bán </Text>
            </View>
          </View>


          
          <View
            style={[, 
                {
                  width: width - 20,
                  alignSelf: 'center',
                }
            ]}>
            <Text style={[styles.header_text, {marginTop: 10, marginBottom: 15}]}>Váy trắng mùa hè năng động </Text>
            <Text style={[styles.header_text, {color: '#FF5C00', marginBottom: 10}]}>270.000 VNĐ</Text>
          </View>

          <View style={{height: 1, backgroundColor: "#CDD1D1", width: width }} />

          <View style = {{
              flexDirection: 'row'}
            }>
            <View style = {{
              margin: 15,
            }}>
              <Image source={require('../resources/imgs/FeedBackProduct/images.png')} style={styles.profileImg} />
            </View>
            <View style = {{
              marginTop: 22
            }}>
              <Text style={{
                fontWeight: 'bold',
                fontSize: 18
              }}> 
                luon_vui_tuoi_official
              </Text>
              <Text style={styles.seeAll}>Xem tất cả></Text>
            </View>
            <Image style={{marginTop: 26, marginLeft:5}} source={require('../resources/icons/shop_checked.png')}/>
          </View>

          <View style={{height: 10, backgroundColor: "#CDD1D1", width: width }} />

          <View style={[, 
            {
              justifyContent: 'space-between',
              alignSelf: 'center'

            }
          ]}>
            <Text style={[styles.hearder_text_2,{width: width - 20,justifyContent: 'space-between',
              alignSelf: 'center',}]}>Mô tả chi tiết</Text>
            <View style={{height: 1, backgroundColor: "#CDD1D1", width: width }} />
            <Text 
              style={[, 
              {
                width: width - 50,
                alignSelf: 'center',
                lineHeight: 23,
                marginBottom: 20
              }
            ]}>
                          𝑪𝑪𝑯𝑨𝑻𝑪𝑳𝑶𝑻𝑯𝑬𝑺 {"\n"}
              THƯƠNG HIỆU THỜI TRANG THIẾT KẾ CAO CẤP{"\n"}
              THÔNG TIN SẢN PHẨM{"\n"}
              - Sản phẩm: Váy cổ nơ khuy bèo TT{"\n"}
              - Mã sản phẩm: 11VHV0034XT.{"\n"}
              - Màu sắc : Xanh.{"\n"}
              - Kiểu dáng: Xoè.{"\n"}
              - Chất liệu: Voan..{"\n"}
              Form chuẩn với vóc dáng phụ nữ Việt Nam{"\n"}
              {"\n"}
              ⭐Bảng kích thước/(CM){"\n"}
              {"\n"}

              S:   Chiều dài: 33.5                   Vòng eo: 62               Vòng hông: 88{"\n"}
              
              M:   Chiều dài: 34                      Vòng eo: 66                Vòng hông: 92{"\n"}

              L:   Chiều dài: 34.5                   Vòng eo: 70               Vòng hông: 96{"\n"}

              XL:   Chiều dài: 35                     Vòng eo: 74               Vòng hông: 100{"\n"}

              2XL:   Chiều dài: 35.5                Vòng eo: 78               Vòng hông: 104{"\n"}

              3XL:   Chiều dài: 36                   Vòng eo: 82               Vòng hông: 108{"\n"}

              4XL:   Chiều dài: 36.5                Vòng eo: 86               Vòng hông: 112{"\n"}

              5XL:   Chiều dài: 37                    Vòng eo: 90               Vòng hông: 116{"\n"}
              ⭐ Vui lòng cho phép sai số 1-3cm về số đo do cách đo lường thủ công.{"\n"}
              #women #Korean #fashion #Casual #HighWaist #Slim #Plain #trend #Culottes #Bandage #autumn #Oversize
              
            </Text>
          </View>

          <View style={{height: 10, backgroundColor: "#CDD1D1", width: width }} />

          <View style={[, 
            {
              flexDirection: 'row', 
              width: width - 20,
              justifyContent: 'space-between',
              alignSelf: 'center',
              marginBottom: 5
            }]}>
            <View>
              <Text style={[styles.hearder_text_2, {}]}>Đánh giá sản phẩm</Text>
              <View style={[, 
                {
                  flexDirection: 'row', 
                  marginLeft: -5,
                  marginBottom: 5
                }]}>
                <Rating_star width="15" height="15" value="4">
                  {' '}
                </Rating_star>
                <Text>  4.0/5 (433 đánh giá)</Text>
              </View>
            </View>
            <Text
              style={[styles.seeAll, {
                marginTop: 13,
              }]}>
              Xem tất cả>
            </Text>
          </View>

          <View style={{height: 1, backgroundColor: "#CDD1D1", width: width }} />

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
                    <View style={styles.feedBackImg} >
                         <Image style={styles.imgStyle} source={require('../resources/imgs/FeedBackProduct/c.jpg')} />
                    </View>                      
                    <View style={styles.feedBackImg} >
                         <Image style={styles.imgStyle} source={require('../resources/imgs/FeedBackProduct/e.webp')} />
                    </View>
                    <View style={styles.feedBackImg} >
                         <Image style={styles.imgStyle} source={require('../resources/imgs/FeedBackProduct/d.png')} />
                    </View>
                    <View style={styles.feedBackImg} >
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
              alignSelf: 'center'

            }
          ]}>
            <Text style={[styles.hearder_text_2, {}]}>Các sản phẩm liên quan</Text>
            <Text 
              style={[styles.seeAll, {
                marginTop: 13,
              }]}>Xem tất cả></Text>
          </View>

          <View style={{height: 1, backgroundColor: "#CDD1D1", width: width }} />

          <ScrollView style={{backgroundColor: 'white', height: 430, width: width,}}  horizontal={true}>
            <View style={styles.RelatedProduct} >
              <ProductBar link_img="../resources/imgs/FeedBackProduct/c.jpg" num_star= "5" percent_sale="10" name_product="Váy đỏ siêu đẹp" sale_price = "199.000" location="TP.HCM" num_sales="100"/>
            </View>
            
            <View style={styles.RelatedProduct} >
              <ProductBar num_star= "5" percent_sale="10" name_product="Váy đỏ siêu đẹp" sale_price = "199.000" location="TP.HCM" num_sales="100"/>
            </View>
            <View style={styles.RelatedProduct} >
              <ProductBar num_star= "5" percent_sale="10" name_product="Váy đỏ siêu đẹp" sale_price = "199.000" location="TP.HCM" num_sales="100"/>
            </View>
            <View style={styles.RelatedProduct} >
              <ProductBar num_star= "5" percent_sale="10" name_product="Váy đỏ siêu đẹp" sale_price = "199.000" location="TP.HCM" num_sales="100"/>
            </View>
            <View style={styles.RelatedProduct} >
              <ProductBar num_star= "5" percent_sale="10" name_product="Váy đỏ siêu đẹp" sale_price = "199.000" location="TP.HCM" num_sales="100"/>
            </View>
            <View style={styles.RelatedProduct} >
              <ProductBar num_star= "5" percent_sale="10" name_product="Váy đỏ siêu đẹp" sale_price = "199.000" location="TP.HCM" num_sales="100"/>
            </View>
          </ScrollView>

        </ScrollView>

        <View style={{flexDirection: 'row', position: 'absolute', bottom: 48}}>
          <View style={styles.chat_cart_bt}>
            <TouchableOpacity style={styles.BottomButton}>
              <Image style = {{width: 25, height: 25}}  source={require('../resources/icons/chat_red.png')} />
            </TouchableOpacity>
          </View>
          <View style={styles.chat_cart_bt}>
            <TouchableOpacity style={styles.BottomButton}>
              <Image style = {{width: 25, height: 25}}  source={require('../resources/icons/cart_add.png')} />
            </TouchableOpacity>
          </View>
          <View style={{flex: 4, alignItems: 'center', backgroundColor: '#FF0000'}}>
            <TouchableOpacity style={styles.BottomButton}>
              <Text style={{fontSize: 20, fontWeight: 'bold', color: 'white'}}>Mua ngay</Text>
            </TouchableOpacity>
          </View>
        </View>
        
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
    backgroundColor: 'black'
  },
  dotContainer: {
    backgroundColor: 'transparent',
    position: 'absolute',
    bottom: -10,
  },
  textStyle: {
    color: '#ffff',
    fontSize: 23,
  },
  header_text: {
    fontSize: 24,
    fontWeight: 'bold',
    marginBottom: 5,
  },
  hearder_text_2: {
    fontSize: 21,
    fontFamily: 'Roboto',
    fontWeight: 'bold',
    marginTop: 10,
    marginBottom: 10
  },
  container: {
    backgroundColor: '#F7F7F7',
    
  },
  profileImg: {
    width: 55,
    height: 55,
    borderRadius: 150 / 2,
    overflow: "hidden",
    borderWidth: 2,
    borderColor: "red"
  },
  seeAll: {
    color: '#FF5C00',
  },
  tab: {
    flexDirection: 'row',
    justifyContent:'space-between',
    alignItems: 'center',
    backgroundColor:'white',
    paddingBottom:10,
    paddingTop:10,
    elevation:4
  },
  BottomButton: {
    paddingVertical: 10
  },
  chat_cart_bt: {
    flex: 2, 
    alignItems: 'center', 
    backgroundColor: 'white', 
    borderWidth: 1, 
    borderColor: '#FF0000',
  },
  RelatedProduct: {
    marginLeft: 10, 
    marginRight: 10,
    padding: 10
  },
  feedBackImg: {
    padding: 5
  },
    imgStyle: {
    width: 200, 
    height: 300 
  }
});

export default ProductDetails;
