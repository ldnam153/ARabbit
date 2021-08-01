import React, { Component } from 'react'
import { Image, ScrollView, StyleSheet, TouchableOpacity, View, Text} from 'react-native'
import CheckBox from '@react-native-community/checkbox';
import CardCHGioHang from './CardCHGioHang';
import data from '../../data/data';

const styles = StyleSheet.create({
    container: {
        height:55,
        flexDirection: 'row',
        alignItems: 'center',
        backgroundColor: 'white',
        borderBottomWidth: 0.5,
        borderBottomColor: '#b4b4b4',
        marginVertical: 3,
    },
    header:{
        fontSize:18,
        fontWeight: 'bold',
    },
    xoa: {
        position: 'absolute',
        top:15,
        right:15,
    }
})

class ScrollViewGioHang extends Component {
    constructor(props) {
        super(props)

        const data = [
            {
                isSelected: true,
                shop: 'GameStop',
                products: [
                    {
                        id: 1,
                        isSelected : true,
                        image: require('~/resources/imgs/ps5.jpg'),
                        name: 'Máy chơi game PlayStation 5 hàng chính hãng',
                        property: 'Standard',
                        properties: ['Normal','Standard','Premium'],
                        price: '7.000.000 VNĐ',
                        number: 1,
                        remain: 4,
                    },
                    {
                        id: 2,
                        isSelected : true,
                        image: require('~/resources/imgs/ps4.jpg'),
                        name: 'Máy chơi game PlayStation 4 thế hệ mới',
                        property: 'Premium',
                        properties: ['Normal','Standard','Premium'],
                        price: '5.550.000 VNĐ',
                        number: 1,
                        remain: 2,
                    }
                ]
            },
            {
                isSelected: true,
                shop: 'UwU Shop',
                products: [
                    {
                        id: 3,
                        isSelected : true,
                        image: require('~/resources/imgs/vaydo.jpg'),
                        name: 'Váy đỏ tươi sành điệu cho các nàng',
                        property: 'XXL',
                        properties: ['M','L','XL','XXL'],
                        price: '120.000 VNĐ',
                        number: 1,
                        remain: 1,
                    }
                ]
            },
            {
                isSelected: false,
                shop: 'Cholesterol Shop',
                products: [
                    {
                        id: 4,
                        isSelected : false,
                        image: require('~/resources/imgs/tatay.jpg'),
                        name: 'Tạ tay bọc cao su Tuấn Vũ cao cấp bảo hành trọn đời',
                        property: '8kg',
                        properties: ['6kg','8kg','10kg'],
                        price: '700.000 VNĐ',
                        number: 2,
                        remain: 12,
                    }
                ]
            }
        ]
    
        this.state = {
            isSelected : props.isSelected,
            data: data,
        }
    }
    
    render() {
        const checkbox = {
            true: '#F62424',
            false: '#F62424'
        }
        
        return (
            <ScrollView style={{backgroundColor:'#b4b4b4'}}>
                <View style={styles.container}>
                    <CheckBox 
                        value= {this.state.isSelected}
                        onValueChange= {newVal => this.setState({isSelected: newVal})}
                        tintColors= {checkbox}
                        onTintColor = '#F62424'
                        onCheckColor = '#F62424'
                        style = {styles.checkbox}>
                    </CheckBox>
                    <Text style={styles.header}>Tất cả</Text>
                    <View style={styles.xoa}>
                        <TouchableOpacity>
                            <Image source={require('~/resources/icons/trash.png')}></Image>
                        </TouchableOpacity>
                    </View>
                </View>
                {/*   data render   */}
                {this.state.data.map((shop) => { if(shop.products.length>0) return (<CardCHGioHang data={shop} />)})}
            </ScrollView>
        )
    }
}

export default ScrollViewGioHang
