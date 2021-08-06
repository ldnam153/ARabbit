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
import CardSPXacNhanThanhToan from '../components/XacNhanSanPham/CardSPXacNhanThanhToan';
// import {Icon} from 'react-native-elements';
// import Rating_star from '../components/Rating_star';
// import ImageViewer from 'react-native-image-zoom-viewer';

const DATA=  {
    id: "34",
    main_img: ["https://vn-test-11.slatic.net/p/24fdbea5380491cb150541c44dac72eb.png"],
    sale_percent: "40",
    name: "Chân váy Midi dài Ulzzang Quảng Châu VVD17",
    first_price: 240000,
    price: 146250,
    star: '5',
    location: 'Hà Nội',
    number: "1",
    property:"XXL"
}

class ChiTietDonHang extends Component{
    constructor(props) {
        super(props);
        this.state={
            data: DATA
        }
      }
    
    currencyFormat(num) {
        if(typeof(num)=='number') return num.toFixed().replace(/(\d)(?=(\d{3})+(?!\d))/g, '$1,').split(',').join('.')
        return num
    }

    render() {
        return (
            <View style={{flex:1, position:'relative'}}>
                <View style={{flexDirection:'row',paddingBottom:10,alignItems:'center',paddingTop:10,backgroundColor:'white',elevation:5}}>
                    <View style={{marginLeft:15,position:'absolute'}}>
                        <TouchableOpacity>
                            <Image style={{alignSelf:'center'}} source={require('../resources/icons/back.png')}/>
                        </TouchableOpacity>
                    </View>
                    <View style={{alignItems:'center',width:'100%'}}>
                        <Text style={{fontSize:20, fontWeight:'bold'}}>
                            Đơn hàng
                        </Text>
                    </View>
                </View>

                <ScrollView contentContainerStyle={{paddingBottom: 70}}>
                    <View style={{backgroundColor:'whitesmoke'}}>
                        <View style={{backgroundColor:'white', flexDirection:'row',paddingTop:10,marginTop:5}}>
                            <View style={{marginLeft:10}}>
                                <Image style={{alignSelf:'center'}} source={require('../resources/icons/red_list.png')}/>
                            </View>
                            <View style={{paddingBottom:30,marginLeft:10}}>
                                <Text style={{fontSize:15, fontWeight:'bold'}}>Mã đơn hàng: 517275521</Text>
                                <Text style={{color:'gray'}}>Ngày đặt hàng: 21:20, 04/08/2021</Text>
                                <Text style={{fontWeight:'bold',color:'green'}}>Dự kiến Giao vào Thứ tư: 18/08</Text>
                            </View>
                        </View>

                        <View style={{backgroundColor:'white',paddingTop:10,marginTop:5,paddingBottom:10}}>
                            <View style={{flexDirection:'row'}}>
                                <View style={{marginLeft:10}}>
                                    <Image style={{alignSelf:'center'}} source={require('../resources/icons/red_truck.png')}/>
                                </View>
                                <View style={{marginLeft:10}}>
                                    <Text style={{fontSize:15, fontWeight:'bold'}}>Mã đơn hàng: 517275521</Text>
                                </View>
                            </View>

                            <View style={{paddingLeft:50,paddingBottom:10}}>
                                <Text style={{color:'grey'}}>Được giao bởi ARabbit (từ Hồ Chí Minh)</Text>
                            </View>

                            <View style={{flexDirection:'row',paddingLeft:10}}>
                                <View style={{backgroundColor:'lightgrey',width:20,height:20,borderRadius:10}}></View>
                                <View style={{marginLeft:20}}>
                                    <Text style={{fontSize:13,color:'grey'}}>Đã giao</Text>
                                </View>
                            </View>

                            <View style={{marginLeft:10,width:20,height:30}}>
                                <View style={{alignItems:'center'}}>
                                    <View style={{height:'100%',width:2,backgroundColor:'lightgrey'}}></View>
                                </View>
                            </View>

                            <View style={{flexDirection:'row',paddingLeft:10}}>
                                <View style={{backgroundColor:'lightgrey',width:20,height:20,borderRadius:10}}></View>
                                <View style={{marginLeft:20}}>
                                    <Text style={{fontSize:13,color:'grey'}}>Đang giao</Text>
                                </View>
                            </View>

                            <View style={{marginLeft:10,width:20,height:30}}>
                                <View style={{alignItems:'center'}}>
                                    <View style={{height:'100%',width:2,backgroundColor:'lightgrey'}}></View>
                                </View>
                            </View>

                            <View style={{flexDirection:'row',paddingLeft:7}}>
                                <View>
                                    <View style={{backgroundColor:'green',width:26,height:26,borderRadius:13,opacity:0.3}}>
                                    </View>
                                    <View style={{backgroundColor:'green',width:20,height:20,borderRadius:10,position:'absolute',marginLeft:3,marginTop:3}}></View>
                                </View>
                                <View style={{marginLeft:14}}>
                                    <Text style={{fontSize:13}}>Chờ xác nhận</Text>
                                    <Text style={{fontSize:13}}>21:20, Thứ Tư 04/08/2021</Text>
                                </View>
                            </View>
                        </View>

                        <View style={{backgroundColor:'white', flexDirection:'row',paddingTop:10,marginTop:5}}>
                            <View style={{marginLeft:10}}>
                                <Image style={{alignSelf:'center'}} source={require('../resources/icons/red_location.png')}/>
                            </View>
                            <View style={{paddingBottom:30,marginLeft:10, marginRight:50}}>
                                <Text style={{fontSize:15, fontWeight:'bold'}}>Địa chỉ người nhận</Text>
                                <Text>Nguyễn Anh B</Text>
                                <Text style={{color:'gray'}}>099.9999998</Text>
                                <Text style={{color:'gray'}}>227 Nguyễn Văn Cừ, phường 4, Quận 5, thành phố Hồ Chí Minh</Text>
                            </View>
                        </View>

                        <View>
                            <View style={{backgroundColor:'white', flexDirection:'row',paddingTop:10,marginTop:5}}>
                                <View style={{marginLeft:10}}>
                                    <Image style={{alignSelf:'center'}} source={require('../resources/icons/red_box.png')}/>
                                </View>
                                <View style={{paddingBottom:10,marginLeft:10,paddingRight:10}}>
                                    <Text style={{fontSize:15, fontWeight:'bold'}}>Thông tin kiện hàng</Text>
                                </View>
                            </View>
                            <CardSPXacNhanThanhToan data={this.state.data}/>
                        </View>

                        <View style={{backgroundColor:'white',marginTop:5}}>
                            <View style={{flexDirection:'row',marginTop:5,justifyContent:'space-between',marginLeft:10,marginRight:10,borderBottomWidth:1,borderBottomColor:'lightgray'}}>
                                <View>
                                    <Text style={{fontWeight:'bold'}}>Tạm tính</Text>
                                </View>
                                <View>
                                    <Text style={{fontWeight:'bold'}}>{this.currencyFormat(this.state.data.price)} VNĐ</Text>
                                </View>
                            </View>
                            <View style={{flexDirection:'row',marginTop:25,justifyContent:'space-between',marginLeft:10,marginRight:10,borderBottomWidth:1,borderBottomColor:'lightgray'}}>
                                <View>
                                    <Text style={{fontWeight:'bold'}}>Phí vận chuyển</Text>
                                </View>
                                <View>
                                    <Text style={{fontWeight:'bold'}}>{this.currencyFormat(20000)} VNĐ</Text>
                                </View>
                            </View>
                            <View style={{flexDirection:'row',marginTop:25,justifyContent:'space-between',marginLeft:10,marginRight:10,paddingBottom:10}}>
                                <View>
                                    <Text style={{fontWeight:'bold',fontSize:18}}>Thành tiền</Text>
                                </View>
                                <View style={{alignItems:'flex-end'}}>
                                    <Text style={{fontWeight:'bold',fontSize:18}}>{this.currencyFormat(20000)} VNĐ</Text>
                                    <Text style={{fontWeight:'bold'}}>Đã bao gồm VAT</Text>
                                </View>
                            </View>
                        </View>
                    </View>
                </ScrollView>

                <View style={{position:'absolute',bottom:0,flexDirection:'row',justifyContent:'space-between',width:'100%',backgroundColor:'white',elevation:5,padding:10}}>
                    <View style={{width:'49%'}}>
                        <TouchableOpacity>
                            <Text style={{borderWidth:2,borderColor:'red',borderRadius:5,width:'100%',textAlign:'center',paddingTop:10,paddingBottom:10,fontSize:17,fontWeight:'bold',color:'red'}}>Hủy Đơn</Text>
                        </TouchableOpacity>
                    </View>
                    <View style={{width:'49%'}}>
                        <TouchableOpacity>
                            <Text style={{borderWidth:2,borderColor:'red',borderRadius:5,width:'100%',textAlign:'center',paddingTop:10,paddingBottom:10,fontSize:17,fontWeight:'bold',color:'red'}}>Mua Lại</Text>
                        </TouchableOpacity>
                    </View>
                </View>

            </View>
        )
    }
}

export default ChiTietDonHang;