import React, { Component } from 'react'
import { StyleSheet, Text, TouchableOpacity, View } from 'react-native'
import {connect} from 'react-redux'
class ChonVoucherThanhToan extends Component {
    constructor(props) {
        super(props)
        
    }
    
    render() {
        var shortName = "Chọn voucher"
        var style = styles.tag
        if (this.props.voucher != null){
            shortName = this.props.vouchers[this.props.voucher].shortName
            style = styles.tagActive
        }
        return (
            <View style={styles.container}>
                <Text style={{fontSize: 16}}>
                    Chọn voucher
                </Text>
                <TouchableOpacity style={styles.inner} onPress={this.props.goVS}>
                    <Text style={style}>{shortName}</Text>
                    <Text style={{fontSize: 20}}> &gt; </Text>
                </TouchableOpacity>
            </View>
        )
    }
}

const styles = StyleSheet.create({
    container: {
        marginBottom: 5,
        flexDirection: 'row',
        padding: 5,
        justifyContent: 'space-between',
        alignItems: 'center',
        backgroundColor: 'white'
    },
    inner: {
        flexDirection: 'row',
        justifyContent: 'flex-end',
    },
    tag: {
        borderWidth: 0.75,
        fontSize: 15,
        borderColor: 'black',
        borderRadius:3,
        padding:3
    },
    tagActive: {
        borderWidth: 0.75,
        fontSize: 15,
        borderColor: 'red',
        borderRadius:3,
        padding:3
    }
})
const mapStateToProps = (state) => {
    return{
        voucher: state.voucherReducer.activeVoucher,
        vouchers: state.voucherReducer.listVoucher
    }
}
export default connect(mapStateToProps) (ChonVoucherThanhToan)
