import React, {Component} from 'react';
import {
  StyleSheet,
  View,
  Text,
  Image,
  TouchableOpacity
} from 'react-native';
import Product from './Product';


const data = {
        customer_name: "Sơn",
        total_price: "12.120.000",
        order_id: '1812719999',
};
    

class Order extends Component {

  render() {
    return (
        <View style={styles.container}>

            <View style={styles.header}>

                <Text style={styles.order_id}>
                    Mã đơn hàng: {data.order_id}
                </Text>

                <TouchableOpacity>
                    <Text style={{fontWeight: 'bold', color: '#F62424'}}>
                        Xem đơn hàng >
                    </Text>
                </TouchableOpacity>
            </View>

            <View style={{height: 1, backgroundColor: "#CDD1D1", width: "100%" }} />

            <Product/>

            <View style={{backgroundColor: "#CDD1D1", width: "100%" }} />

        </View>
    );
  }
}

const styles = StyleSheet.create({
    container: {
        backgroundColor: 'white',
        marginTop: 5
    },
    header: {
        flexDirection: 'row', 
        justifyContent: 'space-between',
        margin: 15,
        marginLeft: 10,
        marginRight: 10
    },
    see_detail: {
        marginTop: 13
    },
    order_id: {
        fontWeight: 'bold',
        fontSize: 15
    }
});

export default Order;
