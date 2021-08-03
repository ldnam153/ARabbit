import React, {Component} from 'react';
import {
  StyleSheet,
  View,
  Text,
  Dimensions,
  Image,
  TouchableOpacity
} from 'react-native';
import ViewSlider from 'react-native-view-slider';
import Rating_star from '../../components/Rating_star';

const {width, height} = Dimensions.get('window');
class PDHeader extends Component {
    currencyFormat(num) {
      if (typeof(num) === 'string' || num === 0)
          return ""
      return num.toFixed().replace(/(\d)(?=(\d{3})+(?!\d))/g, '$1,').split(',').join('.')
  }
    render() {
        const data = this.props.data
        return(
            <View>
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
                    <Text style={[styles.header_text, {color: '#FF5C00', marginBottom: 10}]}>{this.currencyFormat(data.price)} VNĐ</Text>
                </View>

                <View style={{height: 1, backgroundColor: "#CDD1D1", width: width }} />

                <View style = {{ flexDirection: 'row' }}>
                    <View style = {{margin: 15}}>
                        <Image source={{uri: data.shop_img}} style={styles.profileImg} />
                    </View>

                    <View style = {{ marginTop: 22}}>
                        <Text style={{fontWeight: 'bold', fontSize: 18}}> 
                            {data.shop}
                        </Text>
                        <Text style={styles.seeAll}>Xem tất cả</Text>
                    </View>
                    <Image style={{marginTop: 26, marginLeft:5}} source={require('../../resources/icons/shop_checked.png')}/>
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
    backgroundColor: 'white'
  },
  dotContainer: {
    backgroundColor: 'transparent',
    position: 'absolute',
    bottom: -10,
  },
  header_text: {
    fontSize: 24,
    fontWeight: 'bold',
    marginBottom: 5,
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
  }
});

export default PDHeader;