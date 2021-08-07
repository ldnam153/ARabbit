import React, {Component} from 'react';
import {
  StyleSheet,
  View,
  Text,
  Image
} from 'react-native';

export const addDays = (days) => {
    let date = new Date();
    date.setDate(date.getDate() + days);
    return date;
}

export const formatDate = (date) => {
    const dateString = date.toLocaleString('vi-VI', {
        weekday: 'short', // long, short, narrow
        day: 'numeric', // numeric, 2-digit
        year: 'numeric', // numeric, 2-digit
        month: 'numeric', // numeric, 2-digit, long, short, narrow
    })
    return dateString;
}

class Product extends Component {
    constructor(props) {
        super(props)
        
        this.state = {
            products: this.props.data,
          }
    }

    render() {
        return (
            <View>

                {this.state.products.map((item, index) => {
                return (
                    <View style={styles.container} key={index}>
                        <View style={styles.element}>
                            <Text style={styles.date}>
                                Giao vào {formatDate(addDays(3))}
                            </Text>

                            <View style={{flexDirection: 'row', marginRight: 75}}>
                                <Image source={{uri: item.main_img[0]}} style={styles.imgStyle}/>
                                <Text style={{ marginLeft: 10, fontSize: 15}}>
                                    {item.name}
                                </Text>
                            </View>

                        
                        </View>
                    </View>)
                })}

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
