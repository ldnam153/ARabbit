import * as React from 'react';
import { NavigationContainer } from '@react-navigation/native';

import { createStackNavigator,CardStyleInterpolators } from '@react-navigation/stack'
import GioHang from '~/screens/GioHang'
import XacNhanSanPham from '~/screens/XacNhanSanPham'
import ThanhToan from '~/screens/ThanhToan'
import ProductDetails from '~/screens/ProductDetails'
import FeedBackProduct from '~/screens/FeedBackProduct'
import CheckoutDoiDiaChiScreen from '~/screens/Checkout/CheckoutDoiDiaChiScreen'
import CheckoutThemDiaChiScreen from '~/screens/Checkout/CheckoutThemDiaChiScreen'
import CheckoutSuaDiaChiScreen from '~/screens/Checkout/CheckoutSuaDiaChiScreen'
import VouchersScreen from '~/screens/Checkout/VouchersScreen'
import TabScreen from '~/screens/TabScreen';
import TabHistorySearch from '~/screens/TabHistorySearch';
import ResultKeywordScreen from '~/screens/ResultKeywordScreen';
import OrderSuccess from '~/screens/OrderSuccess';

const Stack = createStackNavigator();
function MyStack() {
  return (
    <Stack.Navigator screenOptions={{
      headerShown: false,
      gestureEnabled: true,
      gestureDirection: 'horizontal',
      cardStyleInterpolator: CardStyleInterpolators.forHorizontalIOS,
    }}>
      <Stack.Screen name="Home" component={TabScreen} />
      <Stack.Screen name="ProductDetails" component={ProductDetails}/>
      <Stack.Screen name="FeedBackProduct" component={FeedBackProduct}/>
      <Stack.Screen name="TabHistorySearch" component={TabHistorySearch}/>
      <Stack.Screen name="ResultKeywordScreen" component={ResultKeywordScreen}/>
      <Stack.Screen name="GioHang" component={GioHang} />
      <Stack.Screen name="XacNhanSanPham" component={XacNhanSanPham} />
      <Stack.Screen name="CheckoutDoiDiaChiScreen" component={CheckoutDoiDiaChiScreen} />
      <Stack.Screen name="CheckoutThemDiaChiScreen" component={CheckoutThemDiaChiScreen} />
      <Stack.Screen name="CheckoutSuaDiaChiScreen" component={CheckoutSuaDiaChiScreen} />
      <Stack.Screen name="VouchersScreen" component={VouchersScreen} />
      <Stack.Screen name="ThanhToan" component={ThanhToan} />
      <Stack.Screen name="OrderSuccess" component={OrderSuccess} />
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
