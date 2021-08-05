import React, {Component} from 'react';
import {
  StyleSheet,
  View,
  Text,
  TouchableOpacity,
} from 'react-native';

class Footer extends Component {

    render() {
        return(

            <View  style={styles.container}>              
                <TouchableOpacity style={{flex: 4, alignItems: 'center', backgroundColor: 'white', borderColor: '#FF0000', borderWidth: 2}} >
                    <View style={styles.BottomButton}>
                        <Text style={{fontSize: 20, fontWeight: 'bold', color: '#FF0000' }}>Quay về trang chủ</Text>
                    </View>
                </TouchableOpacity>
            </View>

        );
    }
}


const styles = StyleSheet.create({
    container: {
        flexDirection: 'row', 
        position: 'absolute', 
        bottom: 0, 
        backgroundColor: 'white', 
        padding: 10,
        elevation: 10
    },
    BottomButton: {
        paddingVertical: 10
    }
});

export default Footer;