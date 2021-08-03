import React, { Component } from 'react'
import {ScrollView, View, Text, StyleSheet} from 'react-native'
import CardCHXacNhanThanhToan from '../XacNhanSanPham/CardCHXacNhanThanhToan'
import BaoGiaThanhToan from './BaoGiaThanhToan'
import CardCHThanhToan from './CardCHThanhToan'
import ChonVoucherThanhToan from './ChonVoucherThanhToan'
import DiaChiNhanHangThanhToan from './DiaChiNhanHangThanhToan'
import { connect } from 'react-redux';

class ScrollViewThanhToan extends Component {
    currencyFormat(num) {
        return num.toFixed().replace(/(\d)(?=(\d{3})+(?!\d))/g, '$1,').split(',').join('.')
    }
    render() {
        const {totalPrice,cartList} = this.props
        var tongtienship = 0
        cartList.forEach(element => {
            if(element.products.length>0)   tongtienship+=20000
        });

        return (
            <ScrollView style={{backgroundColor:'#efefef'}}>
                <DiaChiNhanHangThanhToan address="123 ABC, phường XY, quận Z, TP.HCM" goDDC={this.props.goDDC}/>

                {/*   data render   */}
                {cartList.map((shop) => {if(shop.products.length>0){return <CardCHThanhToan data={shop}/>}})}

                <ChonVoucherThanhToan goVS={this.props.goVS}/>
                <BaoGiaThanhToan tongtienhang={this.currencyFormat(totalPrice)+' VNĐ'} tongtienship={this.currencyFormat(tongtienship)+' VNĐ'}/>
            </ScrollView>
        )
    }
}

const mapStateToProps = (state) => {
    return {
        cartList: state.cartReducer.cartList.map(shop=>{return{...shop,products: shop.products.filter(p => p.isSelected !== false)}}),
        totalPrice: state.cartReducer.totalPrice,
    }
}

export default connect(mapStateToProps)(ScrollViewThanhToan)
