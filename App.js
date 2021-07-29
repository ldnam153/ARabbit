import * as React from 'react';
import { NavigationContainer } from '@react-navigation/native';

import ResultKeywordScreen from './src/screens/ResultKeywordScreen';
import { createStackNavigator,CardStyleInterpolators } from '@react-navigation/stack'
import GioHang from '~/screens/GioHang'
import XacNhanSanPham from '~/screens/XacNhanSanPham'
import ThanhToan from '~/screens/ThanhToan'
import CheckoutDoiDiaChiScreen from '~/screens/Checkout/CheckoutDoiDiaChiScreen'
import CheckoutThemDiaChiScreen from '~/screens/Checkout/CheckoutThemDiaChiScreen'
import CheckoutSuaDiaChiScreen from '~/screens/Checkout/CheckoutSuaDiaChiScreen'

import TabScreen from '~/screens/TabScreen';

const Stack = createStackNavigator();
function MyStack() {
  return (
    <Stack.Navigator screenOptions={{
      headerShown: false,
      gestureEnabled: true,
      gestureDirection: 'horizontal',
      cardStyleInterpolator: CardStyleInterpolators.forHorizontalIOS,
    }}>
      <Stack.Screen name="TabScreen" component={TabScreen} />
      <Stack.Screen name="GioHang" component={GioHang} />
      <Stack.Screen name="XacNhanSanPham" component={XacNhanSanPham} />
      <Stack.Screen name="CheckoutDoiDiaChiScreen" component={CheckoutDoiDiaChiScreen} />
      <Stack.Screen name="CheckoutThemDiaChiScreen" component={CheckoutThemDiaChiScreen} />
      <Stack.Screen name="CheckoutSuaDiaChiScreen" component={CheckoutSuaDiaChiScreen} />
      <Stack.Screen name="ThanhToan" component={ThanhToan} />
    </Stack.Navigator>
  );
}

export default class App extends React.Component {
  render() {
    return (
      <NavigationContainer>
        <MyStack />
      </NavigationContainer>
    );
  }
}


// export default ResultKeywordScreen;
// export default TangGiamSL;
// export default sale_frame;
