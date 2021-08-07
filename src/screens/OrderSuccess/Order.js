import React, {Component} from 'react';
import {
  StyleSheet,
  View,
  Text,
  Image,
  TouchableOpacity
} from 'react-native';
import Product from './Product';



class Order extends Component {
    constructor(props) {
        super(props)
        
        this.state = {
            orders: this.props.data
        }         
    }

  render() {
      console.log(this.props.data)
      const generateId = () => {
        return Math.floor(10000000 + Math.random() * 90000000)
    }
    return (
        <View>

            {this.state.orders.map((item, index) => {
                return (
                    <View style={styles.container} key={index}>
                        <View style={styles.header}>

                            <Text style={styles.order_id}>
                                Mã đơn hàng: {generateId()}
                            </Text>

                            <TouchableOpacity>
                                <Text style={{fontWeight: 'bold', color: '#F62424'}}>
                                    Xem đơn hàng >
                                </Text>
                            </TouchableOpacity>
                        </View>
                        
                        <View style={{height: 1, backgroundColor: "#CDD1D1", width: "100%" }} />
                        
                        <Product data = {item.products}/>
                        
                    </View>)
            })}

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
