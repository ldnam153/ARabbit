import * as React from 'react';
import { StyleSheet, Text, View, Image, TouchableOpacity , NativeModules} from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import  HomeScreen from './src/screens/HomeScreen'
import ResultKeywordScreen from './src/screens/ResultKeywordScreen';



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

// class App extends Component {
//   render() {
//     return (
//       <View>
//         {/* <Sale_frame value='50'/> */}
//         <Rating_star width='30' height='30' value='3'/>
//       </View>
//     );
//   }
// }


export default ResultKeywordScreen;
// export default TangGiamSL;
// export default sale_frame;
