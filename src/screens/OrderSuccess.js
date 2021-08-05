import React, {Component} from 'react';
import {
  StyleSheet,
  View,
  Text,
  Image,
  ScrollView
} from 'react-native';
import Banner from './OrderSuccess/Banner'
import Footer from './OrderSuccess/Footer'
import Order from './OrderSuccess/Order'
import Recommend from '../../src/components/Home/Recommend'
import product_controller from '../../src/controller/product_controller'

const data = {
        customer_name: "Sơn",
        total_price: "12.120.000",
        order_id: '1812719999',
        date: 'Thứ tư, 15/08',
        img: 'https://thoitrangtadi.com/wp-content/uploads/2020/10/dam-xoe-do-tay-lo-v1655.jpg',
        product_name: 'Váy đỏ tươi sành điệu cho các nàng - XXL'
    };
    

class OrderSuccess extends Component {

    constructor(props) {
        super(props)
        this.state = {        
            recommend: product_controller.getRecommendProducts()
        }
    }

    render() {
        return (
            <View style= {{backgroundColor: "#CDD1D1"}}>
                <ScrollView>
                    <Banner/>
                    
                    <Order/>

                    <Recommend title = {'Có thể bạn quan tâm'} data={this.state.recommend}/>
                </ScrollView>
            </View>
        );
    }
}


export default OrderSuccess;
