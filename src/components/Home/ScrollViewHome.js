import React, {Component} from 'react';
import {StyleSheet,  ScrollView} from 'react-native';
import Banner from './Banner';
import CategoryList from './CategoryList';
import SectionHome from './SectionHome';
import Recommend from './Recommend';
import product_controller from '~/controller/product_controller'

const styles = StyleSheet.create({
  container: {
    zIndex: 0,
    backgroundColor: '#EFEFEF',
    marginTop: 65,
  },
})
class ScrollViewHome extends Component {

  constructor(props) {
    super(props)
    this.state = {
        sale_list: product_controller.getSaleProducts(),
        best_seller: product_controller.getBestSellerProducts(),
        newest: product_controller.getNewestProducts(),
        recommend: product_controller.getRecommendProducts()
    }
    // console.log(this.state.sale_list);
      
}

  render() {
    return (
      <ScrollView style={styles.container} >
        <Banner/>
        <CategoryList title = {'Danh mục'}/>
        <SectionHome title = {'Giảm giá'} goPD={this.props.goPD} data={this.state.sale_list}/>
        <SectionHome title = {'Bán chạy'} goPD={this.props.goPD} data={this.state.best_seller}/>
        <SectionHome title = {'Mới nhất'} goPD={this.props.goPD} data={this.state.sale_list}/>
        <Recommend title = {'Gợi ý cho bạn'} goPD={this.props.goPD} data={this.state.recommend}/>
      </ScrollView>
    );
  }
}

export default ScrollViewHome;
