import React, {Component} from 'react';
import {
  StyleSheet,
  View,
  Text,
  Dimensions,
  Image,
  ScrollView,
  TouchableOpacity,
} from 'react-native';
import Rating_star from '../../components/Rating_star';
import ProductBar from '../../components/ProductBar';
import dataRef from "../../data/data";

const {width, height} = Dimensions.get('window');
class PDBody extends Component {
    
    render() {
        const data = this.props.data

        const relatedProduct = [];
        for(let i = 0; i < data.related.length; i++)
            relatedProduct.push(dataRef.getProduct(data.related[i]))
        return(
            <View>
                <View style={[, {justifyContent: 'space-between', alignSelf: 'center'}]}>
                    <Text style={[styles.hearder_text_2,{width: width - 20,justifyContent: 'space-between', alignSelf: 'center',}]}>Mô tả chi tiết</Text>
                    <View style={{height: 1, backgroundColor: "#CDD1D1", width: width }} />
                    <Text 
                        style={[, 
                        {
                            width: width - 50,
                            alignSelf: 'center',
                            lineHeight: 23,
                            marginBottom: 20
                        }]}>
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
                    <TouchableOpacity onPress={this.props.goFP}>
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
                    <Text style={[, {width: width - 70, alignSelf: 'center', marginBottom: 10, lineHeight: 19}]}>
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
                    {
                        
                        relatedProduct.map((item, index) => {
                        return (
                            <View style={styles.RelatedProduct}>
                                <ProductBar
                                    imgUrl = {item.main_img[0]}
                                    num_star= {item.star}
                                    percent_sale = {item.sale_percent}
                                    name_product = {item.name}
                                    sale_price = {item.price}
                                    location = {item.location}
                                    num_sales = {item.sold}
                                    real_price = {item.first_price}
                                    goPD={this.props.goPD}
                                />
                            </View>)
                        })}
                </ScrollView>
            </View>
        );
    }
}

const styles = StyleSheet.create({
  hearder_text_2: {
    fontSize: 21,
    fontFamily: 'Roboto',
    fontWeight: 'bold',
    marginTop: 10,
    marginBottom: 10
  },
  seeAll: {
    color: '#FF5C00',
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
});

export default PDBody;