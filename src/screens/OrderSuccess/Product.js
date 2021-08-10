import React, {Component} from 'react';
import {
  StyleSheet,
  View,
  Text,
  Image
} from 'react-native';

export const addDays = (days) => {
    var date = new Date();
    date.setDate(date.getDate() + days);
    date = date.getDate()+'/'+(date.getMonth()+1)+'/'+date.getFullYear();
    return date;
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
                                Giao vào {addDays(3)}
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
