import React, {Component} from 'react';
import {
  StyleSheet,
  View,
  Text,
  Image
} from 'react-native';
import { connect } from 'react-redux';

const data = {
        customer_name: "Sơn",
        total_price: "12.120.000"
    };
    

class Banner extends Component {

  render() {
    const { totalPayment } = this.props;
    const currencyFormat = (num) => {
        return num.toFixed().replace(/(\d)(?=(\d{3})+(?!\d))/g, '$1,').split(',').join('.')
    }
    return (
      <View style= {styles.container}>
        
        <View style={styles.banner}>
            <View style = {{flex: 1}}>
                <Image style = {{width: 90, height: 110, marginTop: 120}} source={ require('../../resources/icons/fire_left.png')}/>
            </View>
            <View style = {{flex: 2, alignItems: 'center', marginTop: 50}}> 
                <Image style = {{width: 70, height: 70}} source={ require('../../resources/icons/Vector.png')}/>
                
                <Text style = {styles.thanks_text}>Cảm ơn {data.customer_name}!</Text>
                
                <Text style = {styles.thanks_text}>Đặt hàng thành công</Text>
            </View>
            <View style = {{flex: 1}}>
                <Image style = {{width: 130, height: 180, marginBottom: 150}} source={ require('../../resources/icons/file_right.png')}/>
            </View>
        </View>

        <View style={styles.price_view}>

            <Text style={{marginTop: 10}}>
                Tổng số tiền cần thanh toán
            </Text>

            <Text style= {styles.total_price_text}>
                {currencyFormat(totalPayment)} VNĐ
            </Text>
        </View>

      </View>
    );
  }
}

const styles = StyleSheet.create({
    container: {
        backgroundColor: '#FF0000',

    },
    total_price_text: {
        color: '#F62424',
        fontWeight: 'bold',
        fontSize: 24,
        marginBottom: 10
    },
    price_view: {
        backgroundColor: 'white', 
        width: '100%', 
        alignItems: 'center',
    },
    banner: {
        height: 230,
        flexDirection: 'row'
    },
    thanks_text: {
        fontSize: 20,
        fontWeight: 'bold',
        color: 'white',
        padding: 5
    }
});

const mapStateToProps = (state) => {
    return {
        totalPayment: state.cartReducer.totalPayment
    }
}

export default connect(mapStateToProps)(Banner);
