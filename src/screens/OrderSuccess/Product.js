import React, {Component} from 'react';
import {
  StyleSheet,
  View,
  Text,
  Image
} from 'react-native';

const data = {
        customer_name: "Sơn",
        total_price: "12.120.000",
        order_id: '1812719999',
        date: 'Thứ tư, 15/08',
        img: 'https://thoitrangtadi.com/wp-content/uploads/2020/10/dam-xoe-do-tay-lo-v1655.jpg',
        product_name: 'Váy đỏ tươi sành điệu cho các cô nàng - XXL'
    };
    

class Product extends Component {
    constructor(props) {
        super(props)
        
        this.state = {
            products: this.props.data,
          }
          
    }

    render() {
        return (
            <View style={styles.container}>
                <View style={styles.element}>
                    <Text style={styles.date}>
                        Giao vào {data.date}
                    </Text>

                    <View style={{flexDirection: 'row', marginRight: 75}}>
                        <Image source={{uri: data.img}} style={styles.imgStyle}/>
                        <Text style={{ marginLeft: 10, fontSize: 15}}>
                            {data.product_name}
                        </Text>
                    </View>

                   
                </View>
            </View>
        );
    }
}

const styles = StyleSheet.create({
    container: {
        backgroundColor: 'white',
        marginTop: 1
    },
    element: {
        marginBottom: 20,
        marginTop: 20,
        marginLeft: 30,
        marginRight: 30,
    },
    see_detail: {
        marginTop: 13
    },
    date: {
        fontWeight: 'bold',
        marginBottom: 10
    },
    imgStyle:{
        width: 90,
        height: 90,
    }
});

export default Product;
