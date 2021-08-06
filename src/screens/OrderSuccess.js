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


const dataRef = [
    {
        order_id: '1812719999',
        products: [
            {
                date: 'Thứ tư, 15/08',
                img: 'https://thoitrangtadi.com/wp-content/uploads/2020/10/dam-xoe-do-tay-lo-v1655.jpg',
                product_name: 'Váy đỏ tươi sành điệu cho các cô nàng - XXL'
            }
        ]
    },
    {
        order_id: '1812711989',
        products: [
            {
                date: 'Thứ bảy, 29/08',
                img: 'https://cdn.vjshop.vn/hightech/may-choi-game/ps5/sony-ps-5-1.jpg',
                product_name: 'Máy chơi game PlayStation 5 - hàng chính hãng - Standard'
            },
            {
                date: 'Thứ bảy, 29/08',
                img: 'https://images.fpt.shop/unsafe/fit-in/665x374/filters:quality(100):fill(white)/fptshop.com.vn/Uploads/Originals/2017/1/10/636196690572572328_sony-playstation-4-cuh-2006a-b01-5.jpg',
                product_name: 'Máy chơi game PlayStation 4 - hàng chính hãng - Standard'
            }
        ]
    }
];    


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
                    
                    <Order data = {dataRef}/>

                    <Recommend title = {'Có thể bạn quan tâm'} data={this.state.recommend}/>
                </ScrollView>

                <Footer/>
            </View>
        );
    }
}


export default OrderSuccess;
