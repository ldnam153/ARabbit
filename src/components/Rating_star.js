import React, { Component } from 'react';

import { StyleSheet,Text, View, Image} from 'react-native';

const styles = (size1,size2) => StyleSheet.create({
    change_size: {
        width: size1,
        height: size2,
        marginLeft: 5
    }
});

const styles_ctn=StyleSheet.create({
    container: {
        flexDirection: 'row'
    }
});

class Rating_star extends Component {
    constructor(props) {
        super(props);
        this.state={
            num_yl_star: Number(props.value),
            num_grey_star: 5 - Number(props.value),
            height: Number(props.height),
            width: Number(props.width)
        }
      }
    list_star(){
        let arr=[];
        for (let i=0;i<this.state.num_yl_star;i++)
        {
            arr.push(<Image key={i} source={require('../resources/icons/yellow_star.png')} style={styles(this.state.width,this.state.height).change_size}/>);
        }
        for (let i=0;i<this.state.num_grey_star;i++)
        {
            arr.push(<Image key={i+this.state.num_yl_star} source={require('../resources/icons/grey_star.png')} style={styles(this.state.width,this.state.height).change_size}/>);
        }
        return arr;
    }
    render() {
        var list_star=this.list_star();
        return (
            <View style={styles_ctn.container}>
                {list_star.map((item,index)=>{
                    return item;
                })}
                {/* <Image source={require('../resources/icons/yellow_star.png')} style={styles.change_size}/> */}
            </View>
        )
    }
}

export default Rating_star;