import React, {Component} from 'react';
import {
  StyleSheet,
  View,
  Text,
  Dimensions,
  Image,
  SafeAreaView,
  ScrollView,
} from 'react-native';
import {Icon} from 'react-native-elements';
import ViewSlider from 'react-native-view-slider';
import Rating_star from '../components/Rating_star';

const {width, height} = Dimensions.get('window');

class ProductDetails extends Component {
  render() {
    return (
      <ScrollView style={styles.container}>
        <ViewSlider
          renderSlides={
            <>
              <View style={styles.viewBox}>
                <Image
                  source={{
                    uri: 'http://kata.vn/userfiles/product/3078.jpg',
                  }}
                  style={{height: 400, width}}
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
        <View
          style={
            {
              // Try setting `flexDirection` to `"row"`.
              flexDirection: 'row',
              
            }
          }>
          <View style={[, {
            flexDirection: 'row', 
            alignSelf: 'center',
            flexGrow: 1,
            flexShrink: 1,
            flexBasis: 1,
          }]}>
            <Text
              style={
                ({textAlign: 'center'},
                {
                  fontSize: 18,
                  fontWeight: 'bold',
                  
                })
              }>
              4.0
            </Text>
            <Rating_star width="15" height="15" value="3" />
          </View>
          <View style={({  
            flexGrow: 1,
            flexShrink: 1,
            flexBasis: 1,
          })}>
            <Text
              style={
                (
                {
                  fontSize: 18,
                })
              }>
              999 đã bán
            </Text>
          </View>
        </View>

        <View style={{height: 1, backgroundColor: "#CDD1D1", width: width }} />
        
        <View
          style={[, 
              {
                width: width - 20,
                alignSelf: 'center',

              }
          ]}>
          <Text style={[styles.header_text, {marginTop: 10}]}>Váy trắng mùa hè năng động</Text>
          <Text style={[styles.header_text, {color: '#FF5C00', marginBottom: 10}]}>270.000 VNĐ</Text>
        </View>

        <View style={{height: 1, backgroundColor: "#CDD1D1", width: width }} />

        <View style = {{
            flexDirection: 'row'}
          }>
          <View style = {{
            margin: 15,
          }}>
            <Image source={{ uri:"data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAOEAAADhCAMAAAAJbSJIAAAAbFBMVEUAAAA2NjZsbGz///+np6d7e3vx8fGwsLD4+PjLy8uIiIj7+/vb29v19fXW1tazs7MnJydLS0u/v79AQECUlJQ6Ojrj4+NwcHDr6+vFxcV9fX0lJSUuLi4YGBiOjo6cnJxgYGAQEBAcHBxXV1fzn1iNAAADw0lEQVR4nO3dbXOaQBiFYfQBEUR8BUGJaPr//2N399mFqU1nwkzUOZ1zfwhBEfdCWciXNpr933Xn6H9v/u4BPD0K8aMQPwrxoxA/CvGjED8K8aMQPwrxoxA/CvGjED8K8aMQPwrxoxA/CvGjED8K8aMQPwrxoxA/CvGjED8K8aMQPwrxoxA/CvGjED8K8aMQPwrxoxA/CvGjED8K8aMQPwrxoxA/CvGjED8K8aMQPwrxoxA/CvGjED8K8aMQPwrxoxA/Ch+bXXTZdX+u210dz9vw+254+F59+B+u6tP+0LWP6u52YV+19f8Mvvn1s9JNL7Nh17vrdffXEL7ZVKFsdFnXfj31T2zEVviBnJrwgoPYf7pfMl3r5WA0ctKNxFlWpflRiGZ+vYoeqL34XeRr+8zyGoYQ3vJ7TRb63RelLpexW3RL6c2nkzSS6G7FHwEjtI+kfrSNfVkQzlW4sPqu2rarz8o+kHvhZq2vaaU1x23XhqMk8aQR/5CwWXRhODsdvPgNVLiTPHILu/KV0LRf6fJBGPuDFiWe9hZhL8M5syjcbuXsD7kKo9o9vHEf5SThbAT1uv1bhIt22OBszzQz+MNNiV6Yu2OwcmfxJGEczsYo2N4h3Mr4H4HMnGhuvqwn2UeD0I3rpF/hScKsHN+8yMKeJvQjwoMfsu3DnXFWaE6czShsF1FU6gw7SVhk45tn7qv+DuFdjsMGO7G7dEIz1nQQ3uT2ITrhTxK2w3XHzGcv/QwLXep5GK6OkZ0O7PhUGB2l34apcL3PRa/V4/XQzU//EqZOeB0nsUqP0IuEmR7ai75pMpyIF3fyBaEhpkHYS+Pno/CRH3USeRSe3FxlvtO1bjyciKW4e6AXCRMdeOpH0+r1Ltot124UQWhcAT8TuYWhLtxGa/0ePAr9DdAv6d3aSbK7fw/96J8tLOI4treVmbRJXvpR2NX6eMoz8Vf+QThesI0r7KSSZX/qV3oaRusgDNeFs9TXZDPcFZ1F0uScrsKherKwrpumsXfP0XEhUo9z6Lw09451mHFuzSE8sc/DSMf7ya41G7f+Pr30t7pxEZ6+mbvU1ejoNktzW7oP52M9Tmvf6QV/PY0zxfPf64v49yF+FOJHIX4U4kchfhTiRyF+FOJHIX4U4kchfhTiRyF+FOJHIX4U4kchfhTiRyF+FOJHIX4U4kchfhTiRyF+FOJHIX4U4kchfhTiRyF+FOJHIX4U4kchfhTiRyF+FOJHIX4U4kchfhTiRyF+FOJHIX4U4kchfhTiRyF+FOJHIX7z3wnEI+FtvjWEAAAAAElFTkSuQmCC" }} style={styles.profileImg} />
          </View>
          <View style = {{
            marginTop: 24
          }}>
            <Text style={{
              fontWeight: 'bold',
              fontSize: 16
            }}> 
              luon_vui_tuoi_official
            </Text>
            <Text style={styles.seeAll}>Xem tất cả></Text>
          </View>
        </View>

        <View style={{height: 10, backgroundColor: "#CDD1D1", width: width }} />

        <View style={[, 
          {
            justifyContent: 'space-between',
            alignSelf: 'center'

          }
        ]}>
          <Text style={[styles.hearder_text_2,{width: width - 20,justifyContent: 'space-between',
            alignSelf: 'center', marginTop: 5, marginBottom: 5}]}>Mô tả chi tiết</Text>
          <View style={{height: 1, backgroundColor: "#CDD1D1", width: width }} />
          <Text 
            style={[, 
            {
              width: width - 50,
              alignSelf: 'center',
              lineHeight: 23
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
            <Text style={[styles.hearder_text_2, {marginTop: 5, marginBottom: 5}]}>Đánh giá sản phẩm</Text>
            <View style={[, 
              {
                flexDirection: 'row', 
              }]}>
              <Rating_star width="15" height="15" value="4">
                {' '}
              </Rating_star>
              <Text>  4.0/5 (433 đánh giá)</Text>
            </View>
          </View>
          <Text
            style={[styles.seeAll, {
              margin: 4,
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
                marginBottom: 5,
                marginTop: 5
              }]}>
          <View>
            <Text style={{
              color: '#FF5C00',
              fontWeight: 'bold'
            }}>
              ngochan113
            </Text>
            <Rating_star width="10" height="10" value="4">
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
              marginBottom: 5
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
            style={[styles.slider, {marginLeft: 70, marginBottom: 5}]} //Main slider container style
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
            alignSelf: 'center'

          }
        ]}>
          <Text style={[styles.hearder_text_2, {marginTop: 5, marginBottom:5}]}>Các sản phẩm liên quan</Text>
          <Text 
            style={[styles.seeAll, {
              margin: 6,
            }]}>Xem tất cả></Text>
        </View>

        <View style={{height: 1, backgroundColor: "#CDD1D1", width: width }} />

        <ViewSlider
          renderSlides={
            <>
              <View style={styles.viewBox}>
                <Image
                  source={{
                    uri: 'http://kata.vn/userfiles/product/3078.jpg',
                  }}
                  style={{height: 400, width}}
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
          style={[styles.slider, {marginTop: 10, marginBottom: 10, marginLeft: 70}]} //Main slider container style
          height={150} //Height of your slider
          slideCount={4} //How many views you are adding to slide
          dots={true} // Pagination dots visibility true for visibile
          dotActiveColor="red" //Pagination dot active color
          dotInactiveColor="gray" // Pagination do inactive color
          dotsContainerStyle={styles.dotContainer} // Container style of the pagination dots
          //autoSlide={true} //The views will slide automatically
          //slideInterval={1000} //In Miliseconds
        />
      </ScrollView>
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
    fontSize: 20,
    fontFamily: 'Roboto',
    fontWeight: 'bold',
  },
  container: {
    backgroundColor: '#F7F7F7',
  },
  profileImg: {
    width: 55,
    height: 55,
    borderRadius: 150 / 2,
    overflow: "hidden",
    borderWidth: 3,
    borderColor: "red"
  },
  seeAll: {
    color: '#FF5C00',
  }
});

export default ProductDetails;
