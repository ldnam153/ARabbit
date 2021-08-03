import React, {Component} from 'react';
import {
  StyleSheet,
  View,
  Text,
  Dimensions,
  Image,
  TouchableOpacity,
  Modal,
  Alert
} from 'react-native';
import ViewSlider from 'react-native-view-slider';
import Rating_star from '../../components/Rating_star';
import { SliderBox } from "react-native-image-slider-box";
import ImageViewer from 'react-native-image-zoom-viewer';

const {width, height} = Dimensions.get('window');

class PDHeader extends Component {
    state = {
      index: 0,
      modalVisible: false
    };
    setModalVisible = (visible) => {
      this.setState({ modalVisible: visible });
    }

    render() {
        const data = this.props.data
        const images = [];
        for  (let i = 0; i < data.main_img.length; i++)  {
          const item = {url: data.main_img[i]}
          images.push(item)
        }
        return(
            <View>
                <Modal
                  visible={this.state.modalVisible}
                  transparent={true}
                  onRequestClose={() => this.setState({ modalVisible: false })}
                >
                  <ImageViewer
                    imageUrls={images}
                    index={this.state.index}
                    onSwipeDown={() => {
                      console.log('onSwipeDown');
                    }}
                    onMove={data => console.log(data)}
                    enableSwipeDown={true}
                  />
                </Modal>

                <SliderBox
                  images={data.main_img}
                  sliderBoxHeight={200}
                  onCurrentImagePressed={index => { this.setModalVisible(true);}}
                  dotColor="#FFEE58"
                  inactiveDotColor="#90A4AE"
                  paginationBoxVerticalPadding={20}
                  autoplay
                  circleLoop
                  resizeMethod={'resize'}
                  resizeMode={'cover'}
                  paginationBoxStyle={{
                    position: "absolute",
                    bottom: 0,
                    padding: 0,
                    alignItems: "center",
                    alignSelf: "center",
                    justifyContent: "center",
                    paddingVertical: 10
                  }}
                  dotStyle={{
                    width: 10,
                    height: 10,
                    borderRadius: 5,
                    marginHorizontal: 0,
                    padding: 0,
                    margin: 0,
                    backgroundColor: "rgba(128, 128, 128, 0.92)"
                  }}
                  ImageComponentStyle={{borderRadius: 15, width: '97%', marginTop: 5}}
                  imageLoadingColor="#2196F3"
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