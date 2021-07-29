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
  TouchableOpacity,
  TouchableHighlight,
  Modal,
  Pressable
} from 'react-native';
import {Icon} from 'react-native-elements';
import ViewSlider from 'react-native-view-slider';
import Rating_star from '../components/Rating_star';
import {NavigationContainer} from '@react-navigation/native';
import ProductBar from '../components/ProductBar';
import RBSheet from "react-native-raw-bottom-sheet";
import TangGiamSL from '../components/GioHang/TangGiamSL';
import ButtonToggleGroup from 'react-native-button-toggle-group';

const {width, height} = Dimensions.get('window');


class ProductDetails extends Component {

  constructor(props) {
    super(props);
    this.state = { 
      selectedButton: null,
      selectedSize:null
      };
    this.selectionOnPress = this.selectionOnPress.bind(this);
    this.selectionSizeOnPress = this.selectionSizeOnPress.bind(this);
  }

  selectionOnPress(userType) {
    this.setState({ selectedButton: userType });
  }

  selectionSizeOnPress(userType) {
    this.setState({ selectedSize: userType });
  }

  // onHideUnderlay(){
  //   this.setState({ this.state.isPress: !this.state.isPress });
  // }

    // var [ isPress, setIsPress ] = React.useState(false);

    // var touchProps = {
    //   activeOpacity: 1,
    //   underlayColor: 'blue',                               // <-- "backgroundColor" will be always overwritten by "underlayColor"
    //   style: isPress ? styles.btnPress : styles.btnNormal, // <-- but you can still apply other style changes
    //   // onHideUnderlay: () => setIsPress(false),
    //   // onShowUnderlay: () => setIsPress(true),
    //   onPress: () => console.log('HELLO'),                 // <-- "onPress" is apparently required
    // };

  render() {
    const data = this.props.data
    const list_color=data.color;

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
          <ViewSlider
            renderSlides={
              <>
                {data.main_img.map((item, index) => {
                  return (<View style={styles.viewBox}>
                    <Image
                      source={{uri: item}}
                      style={{height: 400, width: width}}
                      />
                  </View>)
                })}
                
              </>
            }
            style={styles.slider} //Main slider container style
            height={250} //Height of your slider
            slideCount={data.main_img.length} //How many views you are adding to slide
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
              <Text style={{fontSize: 16, marginTop: 3}}> {data.star}.0 </Text>
              <Rating_star width="15" height="15" value={data.star} />
            </View>
            <View style={{flex: 1, alignItems: 'center'}}>
              <Text style={{ fontSize: 16}}> {data.sold} đã bán </Text>
            </View>
          </View>


          
          <View
            style={[, 
                {
                  width: width - 20,
                  alignSelf: 'center',
                }
            ]}>
            <Text style={[styles.header_text, {marginTop: 10, marginBottom: 15}]}>{data.name} </Text>
            <Text style={[styles.header_text, {color: '#FF5C00', marginBottom: 10}]}>{data.price} VNĐ</Text>
          </View>

          <View style={{height: 1, backgroundColor: "#CDD1D1", width: width }} />

          <View style = {{
              flexDirection: 'row'}
            }>
            <View style = {{
              margin: 15,
            }}>
              <Image source={{uri: data.shop_img}} style={styles.profileImg} />
            </View>
            <View style = {{
              marginTop: 22
            }}>
              <Text style={{
                fontWeight: 'bold',
                fontSize: 18
              }}> 
                {data.shop}
              </Text>
              <Text style={styles.seeAll}>Xem tất cả</Text>
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
                {data.detail}
              
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
                <Rating_star width="15" height="15" value={data.star}>
                  {' '}
                </Rating_star>
                <Text>  {data.star}/5 ({data.rating} đánh giá)</Text>
              </View>
            </View>
            <TouchableOpacity>
              <Text
                style={[styles.seeAll, {
                  marginTop: 13,
                }]}>
                Xem tất cả
              </Text>
            </TouchableOpacity>
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
                    {data.accessor[0].name}
                </Text>
                <Rating_star width="11" height="11" value={data.accessor[0].star} >
                    {' '}
                </Rating_star>
                </View>
                <Text>{data.accessor[0].date}</Text>
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
                  {data.accessor[0].content}
                </Text>
                
                <ScrollView style={{backgroundColor: 'white', height: 330, width: width, marginLeft: 10}}  horizontal={true}>

                    {data.accessor[0].img.map((item, index) => {
                      return (
                        <View style={styles.feedBackImg}>
                          <Image
                            source={{uri: item}}
                            style={styles.imgStyle}
                          />
                        </View>)
                    })}
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
              }]}>Xem tất cả</Text>
          </View>

          <View style={{height: 1, backgroundColor: "#CDD1D1", width: width }} />

          <ScrollView style={{backgroundColor: 'white', height: 430, width: width,}}  horizontal={true}>
            <View style={styles.RelatedProduct} >
              <ProductBar link_img="../resources/imgs/FeedBackProduct/c.jpg" num_star= "5" percent_sale="10" name_product="Váy đỏ siêu đẹp" sale_price = "199.000" location="TP.HCM" num_sales="100"/>
            </View>
            
            <View style={styles.RelatedProduct} >
              <ProductBar num_star= "5"  name_product="Váy đỏ siêu đẹp" sale_price = "199.000" location="TP.HCM" num_sales="100"/>
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

        <View style={{flexDirection: 'row', position: 'absolute', bottom: 48, backgroundColor: 'white'}}>
          <TouchableOpacity style={styles.chat_cart_bt}>
            <View style={styles.BottomButton}>
              <Image style = {{width: 25, height: 25}}  source={require('../resources/icons/chat_red.png')} />
            </View>
          </TouchableOpacity>
          <TouchableOpacity style={styles.chat_cart_bt} onPress={() => {this.RBSheet.open();}}>
            <View style={styles.BottomButton}>
              <Image style = {{width: 25, height: 25}}  source={require('../resources/icons/cart_add.png')} />
            </View>
          </TouchableOpacity>
          <TouchableOpacity style={{flex: 4, alignItems: 'center', backgroundColor: '#FF0000'}} onPress={() => {this.RBSheet.open();}}>
            <View style={styles.BottomButton}>
              <Text style={{fontSize: 20, fontWeight: 'bold', color: 'white'}}>Mua ngay</Text>
            </View>
          </TouchableOpacity>
        </View>
        
        <RBSheet
          ref={ref => {
            this.RBSheet = ref;
          }}
          height={300}
          duration={250}
          >

          <View style={{justifyContent: 'space-between', flexDirection: 'column', height: 240}}>
            <View style={{marginLeft: 10, marginTop: 10, flexDirection: 'row',}}>

              <View style={{flex: 1}}>
                <Image
                  source={{uri: data.main_img[0]}}
                  style={{height: 100 , width: 100}}
                />
              </View>

              <View style={{flex: 2, alignItems: 'center'}}>
                <Text style={[styles.header_text, {color: '#FF5C00'}]}> {data.price} VNĐ </Text>
                <Text style={{fontSize: 18, fontWeight: 'bold'}}> Kho: {data.stock} </Text>
              </View>

            </View>

            <View style={{flexDirection: 'row',  marginLeft: 10, marginRight: 10}}>
              <Text style={{fontSize: 18, fontWeight: 'bold'}}> Color: </Text>
              <ScrollView horizontal={true}>
                {data.color.map((item, index) => {
                  return (
                  <TouchableHighlight onPress={() => this.selectionOnPress(item)}>
                    <Text style={[styles.TouchableHighlightCSS, { backgroundColor:this.state.selectedButton===item ? 'red':'gray'}]}>{item}</Text>
                  </TouchableHighlight>)
                })}
                
              </ScrollView>
            </View>

            <View style={{flexDirection: 'row',  marginLeft: 10, marginRight: 10}}>
              <Text style={{fontSize: 18, fontWeight: 'bold'}}> Size: </Text>
              <ScrollView horizontal={true}>
                {data.size.map((item, index) => {
                  return (
                  <TouchableHighlight onPress={() => this.selectionSizeOnPress(item)}>
                    <Text style={[styles.TouchableHighlightCSS, { backgroundColor:this.state.selectedSize===item ? 'red':'gray'}]}>{item}</Text>
                  </TouchableHighlight>)
                })}
                
              </ScrollView>
            </View>

            <View style={{flexDirection: 'row', justifyContent: 'space-between', marginLeft: 10, marginRight: 10}}> 
              <Text style={{fontSize: 18, fontWeight: 'bold'}}> Số lượng: </Text>
              <TangGiamSL number= "1"/>
            </View>
          </View>
          <TouchableOpacity style={{ alignItems: 'center', backgroundColor: '#FF0000', position: 'absolute', bottom: 0,width:'100%'}} onPress={() => {this.RBSheet.close();}}>
              <View style={styles.BottomButton}>
                <Text style={{fontSize: 20, fontWeight: 'bold', color: 'white'}}>Đồng ý</Text>
              </View>
          </TouchableOpacity>
        </RBSheet>
      
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
    backgroundColor: 'white'
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
  },
  btnPopUp: {
    padding: 10
  },
  container123: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  btnNormal: {
    borderColor: 'blue',
    borderWidth: 1,
    borderRadius: 10,
    height: 30,
    width: 100,
  },
  btnPress: {
    borderColor: 'blue',
    borderWidth: 1,
    height: 30,
    width: 100,
  },
  TouchableHighlightCSS: {
    fontSize: 20, 
    marginLeft: 20,
  }
});

export default ProductDetails;
