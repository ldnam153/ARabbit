import React, {Component} from 'react';
import {
  StyleSheet,
  View,
  Text,
  Dimensions,
  Image,
  ScrollView,
  TouchableOpacity,
  TouchableHighlight
} from 'react-native';
import RBSheet from "react-native-raw-bottom-sheet";
import TangGiamSL from '../../components/GioHang/TangGiamSL';

const {width, height} = Dimensions.get('window');
class PDFooter extends Component {
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

    render() {
        const data = this.props.data;
        return(
            <View>
                <View style={{flexDirection: 'row', position: 'absolute', bottom: 48, backgroundColor: 'white'}}>
                    <TouchableOpacity style={styles.chat_cart_bt}>
                        <View style={styles.BottomButton}>
                        <Image style = {{width: 25, height: 25}}  source={require('../../resources/icons/chat_red.png')} />
                        </View>
                    </TouchableOpacity>
                    <TouchableOpacity style={styles.chat_cart_bt} onPress={() => {this.RBSheet.open();}}>
                        <View style={styles.BottomButton}>
                        <Image style = {{width: 25, height: 25}}  source={require('../../resources/icons/cart_add.png')} />
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
                    height={data.color.length !==0 ? 300 : 240}
                    duration={250}
                    >

                    <View style={{justifyContent: 'space-between', flexDirection: 'column', height: data.color.length !==0 ? 240 : 170}}>
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

                        <View>{data.color.length !== 0 ? 
                            <View style={{flexDirection: 'row',  marginLeft: 10, marginRight: 10}}>
                                <Text style={{fontSize: 18, fontWeight: 'bold'}}> Màu sắc: </Text>
                                <ScrollView horizontal={true}>
                                    {data.color.map((item, index) => {
                                    return (
                                    <TouchableHighlight onPress={() => this.selectionOnPress(item)}>
                                        <Text style={[styles.TouchableHighlightCSS, { backgroundColor:this.state.selectedButton===item ? 'red':'gray'}]}>{item}</Text>
                                    </TouchableHighlight>)
                                    })}
                                </ScrollView>
                            </View>
                            : console.log("ahihi")}
                        </View>

                        <View>{data.size.length !== 0 ? 
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
                            : console.log("ahihi")}
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
  header_text: {
    fontSize: 24,
    fontWeight: 'bold',
    marginBottom: 5,
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

  TouchableHighlightCSS: {
    fontSize: 20, 
    marginLeft: 20,
  }
});

export default PDFooter;