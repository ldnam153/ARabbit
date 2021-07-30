import React, {Component} from 'react';
import {StyleSheet,  ScrollView} from 'react-native';
import Banner from './Banner';
import CategoryList from './CategoryList';
import SectionHome from './SectionHome';
import Recommend from './Recommend';
const styles = StyleSheet.create({
  container: {
    zIndex: 0,
    backgroundColor: 'gray',
    marginTop: 65,
  },
})
class ScrollViewHome extends Component {


  render() {
    return (
      <ScrollView style={styles.container} >
        <Banner/>
        <CategoryList title = {'Danh mục'}/>
        <SectionHome title = {'Giảm giá'} goPD={this.props.goPD}/>
        <SectionHome title = {'Bán chạy'} goPD={this.props.goPD}/>
        <SectionHome title = {'Mới nhất'} goPD={this.props.goPD}/>
        <Recommend title = {'Gợi ý cho bạn'} goPD={this.props.goPD}/>
      </ScrollView>
    );
  }
}

export default ScrollViewHome;
