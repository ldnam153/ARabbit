import * as React from 'react';
import { StyleSheet, Text, View, Image, TouchableOpacity , NativeModules} from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import  HomeScreen from './src/screens/HomeScreen'
import ResultKeywordScreen from './src/screens/ResultKeywordScreen';
import { createStackNavigator,CardStyleInterpolators } from '@react-navigation/stack'
import GioHang from '~/screens/GioHang'
import XacNhanSanPham from '~/screens/XacNhanSanPham'
import ThanhToan from '~/screens/ThanhToan'
import CheckoutDoiDiaChiScreen from '~/screens/Checkout/CheckoutDoiDiaChiScreen'
import CheckoutThemDiaChiScreen from '~/screens/Checkout/CheckoutThemDiaChiScreen'
import CheckoutSuaDiaChiScreen from '~/screens/Checkout/CheckoutSuaDiaChiScreen'

const CameraModule = NativeModules.CameraModule;
function CategoryTab() {
  return (
    <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
      <Text>CategoryTab!</Text>
    </View>
  );
}
function NotificationTab() {
  return (
    <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
      <Text>NotificationTab!</Text>
    </View>
  );
}
function UserTab() {
  return (
    <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
      <Text>UserTab!</Text>
    </View>
  );
}

const Tab = createBottomTabNavigator();



// export default function App() {
//   return (
//     <NavigationContainer>
//       <Tab.Navigator
//        tabBarOptions = {{
//           activeTintColor: 'tomato',
//           inactiveTintColor: 'gray',
//          showLabel:true,
//          style:{
//            position: 'absolute',
//            padding: 10,
//             height:55,
//          }
//        }}
//       >
//         <Tab.Screen 
//           name="Trang chủ"
//           component={HomeScreen} 
//           options = {{ 
//             tabBarLabel: 'Home',
//             tabBarIcon: ({focused}) => (
//               <Image source = { focused ? require( './src/resources/icons/home_click.png' ) : require( './src/resources/icons/home_non_click.png' )}/>
//             )
//           }}
//         />
//         <Tab.Screen name="Danh mục" component={CategoryTab} 
//           options = {{ 
//             tabBarLabel: 'Danh mục',
//             tabBarIcon: ({focused}) => (
//               <Image source = { focused ? require('./src/resources/icons/category_click.png') : require('./src/resources/icons/category.png')}/>
//             )
//           }}
//         />
//         <Tab.Screen name="camera" component={NotificationTab} 
//           options = {{ 
//             tabBarLabel: '',
//             tabBarButton: (props)=>(
//               <TouchableOpacity onPress={()=>CameraModule.openCamera()}>
//                 <Image source = {require('./src/resources/icons/camera_navbar.png')}
//                   style ={{top:-30}}
//                 />
//               </TouchableOpacity>
//             )
//           }}
//         />
//         <Tab.Screen name="Thông báo" component={NotificationTab} options={{ tabBarBadge: 3 }}  
//           options = {{ 
//             tabBarLabel: 'Thông báo',
//             tabBarIcon: ({focused}) => (
//               <Image source = {focused ? require('./src/resources/icons/notification_click.png' ):require('./src/resources/icons/notification.png' )} />
//             ),
//             tabBarBadge: 3
//           }}
//         />
//         <Tab.Screen name="Tôi" component={UserTab} 
//           options = {{ 
//             tabBarLabel: 'Tôi',
//             tabBarIcon: ({focused}) => (
//               <Image source = {focused ?  require('./src/resources/icons/user_click.png' ):require('./src/resources/icons/user.png' )} />
//             )
//           }}
//         />
//       </Tab.Navigator>
//     </NavigationContainer>
//   );
// }

const Stack = createStackNavigator();
function MyStack() {
  return (
    <Stack.Navigator screenOptions={{
      headerShown: false,
      gestureEnabled: true,
      gestureDirection: 'horizontal',
      cardStyleInterpolator: CardStyleInterpolators.forHorizontalIOS,
    }}>
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
