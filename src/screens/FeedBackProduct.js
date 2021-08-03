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
  TouchableOpacity,
  Modal
} from 'react-native';
import {Icon} from 'react-native-elements';
import Rating_star from '../components/Rating_star';
import ImageViewer from 'react-native-image-zoom-viewer';

const {width, height} = Dimensions.get('window');

class FeedBackProduct extends Component {
  state = {
      index: 0,
      modalVisible: false,
      img: []
    };

  setModalVisible = (visible) => {
    this.setState({ modalVisible: visible });
  }
  render() {
    var data =  this.props.route.params.data || this.props.data
    const goBack = () => {
      this.props.navigation.goBack()
    }
    
    const images_arr = []
    for  (let i = 0; i < data.accessor.length; i++)  {
      const images = [];
      for  (let j = 0; j < data.accessor[i].img.length; j++)  {
        const item = {url: data.accessor[i].img[j]}
        images.push(item)
      }
      images_arr.push(images)
    }
    var img = images_arr[1]

    return (
      <View >
        <Modal
            visible={this.state.modalVisible}
            transparent={true}
            onRequestClose={() => this.setState({ modalVisible: false })}
        >
            <ImageViewer
            imageUrls={this.state.img}
            index={this.state.index}
            onSwipeDown={() => {
                console.log('onSwipeDown');
            }}
            onMove={data => console.log(data)}
            enableSwipeDown={true}
            />
        </Modal>

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
          {data.accessor.map((item, index) => {
            return (
              <View>
                <View style={styles.main_view}>
                  <View>
                    <Text style={styles.nameStyle}>
                      {item.name}
                    </Text>                                
                    <Rating_star width="11" height="11" value= {item.star}/>
                  </View>
                  <Text>{item.date}</Text>
                </View>

                <View>
                  <Text style={styles.textStyle}>
                    {item.content}
                  </Text>
                  <ScrollView style={{backgroundColor: 'white', height: 370, width: width, marginLeft: 10}}  horizontal={true}>
                    {item.img.map((it, ind) => {
                      return (
                          <TouchableOpacity style={styles.feedBackImg} onPress={() => {this.state.img = images_arr[index]; this.setModalVisible(true)}}>
                            <Image
                                source={{uri: it}}
                                style={styles.imgStyle}
                            />
                          </TouchableOpacity>)
                      })}
                  </ScrollView>
                </View>

                <View style={{height: 10, backgroundColor: "#CDD1D1", width: width }} />
              </View>)
            })}

        </ScrollView>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  main_view: {
    flexDirection: 'row', 
    width: width - 20,
    justifyContent: 'space-between',
    alignSelf: 'center',
    marginBottom: 10,
    marginTop: 10,
    marginLeft: 5
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
  imgStyle: {
    width: 200, 
    height: 300 
  },
  nameStyle: {
    color: '#FF5C00',
    fontWeight: 'bold',
    fontSize: 17
  },
  textStyle: { 
    width: width - 70,
    alignSelf: 'center',
    marginBottom: 10,
    lineHeight: 19
  },
  feedBackImg: {
    padding: 5
  },
});

export default FeedBackProduct;
