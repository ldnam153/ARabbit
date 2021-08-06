import React, {Component} from 'react';
import {
  StyleSheet,
  View,
  Text,
  Image
} from 'react-native';


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
                    <View style={styles.container}>
                        <View style={styles.element}>
                            <Text style={styles.date}>
                                Giao vào {item.date}
                            </Text>

                            <View style={{flexDirection: 'row', marginRight: 75}}>
                                <Image source={{uri: item.img}} style={styles.imgStyle}/>
                                <Text style={{ marginLeft: 10, fontSize: 15}}>
                                    {item.product_name}
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
