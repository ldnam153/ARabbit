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

const {width, height} = Dimensions.get('window');
class PDBody extends Component {
    render() {
        const data = this.props.data
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