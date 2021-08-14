import React, { Component } from 'react'
import {ScrollView, View, Text, StyleSheet} from 'react-native'
import CardCHXacNhanThanhToan from '../XacNhanSanPham/CardCHXacNhanThanhToan'
import BaoGiaThanhToan from './BaoGiaThanhToan'
import CardCHThanhToan from './CardCHThanhToan'
import ChonVoucherThanhToan from './ChonVoucherThanhToan'
import DiaChiNhanHangThanhToan from './DiaChiNhanHangThanhToan'
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import * as CartActions from "../../actions/cartAction"
import PhuongThucThanhToan from './PhuongThucThanhToan'

class ScrollViewThanhToan extends Component {
    currencyFormat(num) {
        return num.toFixed().replace(/(\d)(?=(\d{3})+(?!\d))/g, '$1,').split(',').join('.')
    }
    constructor(props) {
        super(props);
        this.state = {
            totalPayment: 0,
            totalDiscountValue: 0
        }
    }
    componentDidMount() {
        const discount = (initialValue, discountValue) => {
            return Math.floor(+initialValue * +discountValue / 100)
        }

        const {voucherIndex, listVoucher, totalPrice, cartList} = this.props;
        var tongtienship = 0
        cartList.forEach(element => {
            if(element.products.length>0)   tongtienship+=20000
        });
        const voucher = listVoucher[voucherIndex];
        const totalDiscountValue = voucherIndex !== null ? discount(voucher.type === "V1" ? tongtienship : totalPrice, voucher.discountValue) : 0;
        const totalValue = +totalPrice + +tongtienship - totalDiscountValue;
        const { actions } = this.props;
        this.setState({totalPayment: totalValue})
        actions.updateTotalPayment(totalValue);
    }
    componentDidUpdate(prevProps, prevState) {
        if (prevProps.voucherIndex !== this.props.voucherIndex) {
            const discount = (initialValue, discountValue) => {
                return Math.floor(+initialValue * +discountValue / 100)
            }
    
            const {voucherIndex, listVoucher, totalPrice, cartList} = this.props;
            var tongtienship = 0
            cartList.forEach(element => {
                if(element.products.length>0)   tongtienship+=20000
            });
            const voucher = listVoucher[voucherIndex];
            const totalDiscountValue = voucherIndex !== null ? discount(voucher.type === "V1" ? tongtienship : totalPrice, voucher.discountValue) : 0;
            const totalValue = +totalPrice + +tongtienship - totalDiscountValue;
            const { actions } = this.props;
            this.setState({totalPayment: totalValue})
            actions.updateTotalPayment(totalValue);
        }
    }
    render() {
        const {totalPrice,cartList,message,receiver,picked_index} = this.props
        var tongtienship = 0
        cartList.forEach(element => {
            if(element.products.length>0)   tongtienship+=20000
        });

        const discount = (initialValue, discountValue) => {
            return Math.floor(+initialValue * +discountValue / 100)
        }

        const {voucherIndex, listVoucher} = this.props;
        const voucher = listVoucher[voucherIndex];
        const totalDiscountValue = voucherIndex !== null ? discount(voucher.type === "V1" ? tongtienship : totalPrice, voucher.discountValue) : 0;
        const totalValue = +totalPrice + +tongtienship - totalDiscountValue;
        const curAdd = receiver[picked_index]
        return (
            <ScrollView style={{backgroundColor:'#efefef'}}>
                <DiaChiNhanHangThanhToan address={curAdd.address+', '+curAdd.ward+', '+curAdd.district+', '+curAdd.city} goDDC={this.props.goDDC}/>

                {/*   data render   */}
                {cartList.map((shop,index) => {if(shop.products.length>0){return <CardCHThanhToan data={shop} all={message} key={index}/>}})}

                <ChonVoucherThanhToan goVS={this.props.goVS}/>
                <PhuongThucThanhToan/>
                <BaoGiaThanhToan tongtienhang={this.currencyFormat(totalPrice)} tongtienship={this.currencyFormat(tongtienship)} totalDiscountValue={this.currencyFormat(totalDiscountValue)} totalValue={this.currencyFormat(totalValue)}/>
            </ScrollView>
        )
    }
}

const mapStateToProps = (state) => {
    return {
        cartList: state.cartReducer.cartList.map(shop=>{return{...shop,products: shop.products.filter(p => p.isSelected !== false)}}),
        totalPrice: state.cartReducer.totalPrice,
        voucherIndex: state.voucherReducer.activeVoucher,
        listVoucher: state.voucherReducer.listVoucher,
        message: state.cartReducer.message,
        receiver: state.addressReducer.receiver,
        picked_index: state.addressReducer.picked_index,
    }
}

const mapDispatchToProps = (dispatch) => {
    return {
        actions: bindActionCreators(CartActions, dispatch)
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(ScrollViewThanhToan)
