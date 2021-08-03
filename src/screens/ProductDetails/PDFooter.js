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
import SweetAlert from 'react-native-sweet-alert';
import { bindActionCreators } from 'redux';
import * as CartActions from "../../actions/cartAction"
import { connect } from 'react-redux';
import controller from '../../controller/product_controller'
const {width, height} = Dimensions.get('window');
class PDFooter extends Component {
    constructor(props) {
        super(props);
        this.state = { 
        selectedSize:null
        };
        this.selectionSizeOnPress = this.selectionSizeOnPress.bind(this);
    }

    selectionSizeOnPress(userType) {
        this.setState({ selectedSize: userType });
    }

 

    render() {
        const { data, actions } = this.props;
        console.log(data)
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

                        <View>{data.size.length !== 0 ? 
                            <View style={{flexDirection: 'row',  marginLeft: 10, marginRight: 10}}>
                                <Text style={{fontSize: 18, fontWeight: 'bold'}}> Size: </Text>
                                <ScrollView horizontal={true}>
                                    {data.size.map((item, index) => {
                                    return (
                                        <View style={{backgroundColor: '#BDBDBD', marginLeft: 20, alignItems: 'center',  width: 50, backgroundColor:this.state.selectedSize===item ? '#FF0000':'#BDBDBD'}}>
                                            <TouchableHighlight  onPress={() => this.selectionSizeOnPress(item)}>                
                                                <Text style={[styles.TouchableHighlightCSS, {fontWeight: 'bold', color: this.state.selectedSize===item ? '#ffff':'#000000'}]}>{item}</Text>      
                                            </TouchableHighlight>
                                        </View>)
                                    })}
                                </ScrollView>
                            </View>
                            : console.log("ahihi")}
                        </View>

                        <View style={{flexDirection: 'row', justifyContent: 'space-between', marginLeft: 10, marginRight: 30}}> 
                            <Text style={{fontSize: 18, fontWeight: 'bold'}}> Số lượng: </Text>
                            <TangGiamSL number= "1"/>
                        </View>
                    </View>
                    <TouchableOpacity disabled={(this.state.selectedSize === null && data.size.length !== 0)} style={{ alignItems: 'center', backgroundColor: this.state.selectedSize === null && data.size.length !== 0 ? '#BDBDBD' : '#FF0000' , position: 'absolute', bottom: 0,width:'100%'}} onPress={() => {
                        this.RBSheet.close();
                        SweetAlert.showAlertWithOptions({
                            title: 'Cảm ơn bạn!',
                            subTitle: 'Đã thêm sản phẩm vào giỏ hàng',
                            style: 'success',
                        },
                        callback => actions.addToCart(data.shop, data, 1, "abc"));}}>
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
    fontSize: 20
  }
});

const mapDispatchToProps = (dispatch) => {
    return {
        actions: bindActionCreators(CartActions, dispatch)
    }
}

export default connect(null, mapDispatchToProps)(PDFooter);