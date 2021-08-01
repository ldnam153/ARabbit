import * as React from 'react';
import { StyleSheet, Text, View, Image, TouchableOpacity , NativeEventEmitter,NativeModules} from 'react-native';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import  HomeScreen from './HomeScreen'

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

const mount = () => {
  const eventEmitter = new NativeEventEmitter(CameraModule);
  this.eventListener = eventEmitter.addListener('EventReminder', (event) => {
     console.log(event.event) 
     console.log(event.product)// "someValue"
  });

}

const unmount = () => {
  this.eventListener.remove(); //Removes the listener
}

export default function TabScreen({navigation}) {
  const goGH = () => {
      navigation.navigate('GioHang')
  }
  const goTH = () => {
      navigation.navigate('TabHistorySearch')
  }
  const goPD = () => {
      navigation.push('ProductDetails')
  }
  React.useEffect(() => {
    mount()
    return () => {
      unmount()
    }
  }, [])
  return (
   
      <Tab.Navigator
       tabBarOptions = {{
          activeTintColor: 'tomato',
          inactiveTintColor: 'gray',
         showLabel:true,
         style:{
           position: 'absolute',
           padding: 10,
            height:55,
         }
       }}
      >
        <Tab.Screen 
          name="Trang chủ"
          // component={HomeScreen} 
          children={() => <HomeScreen goGH={goGH} goTH={goTH} goPD={goPD}/>}
          options = {{ 
            tabBarLabel: 'Home',
            tabBarIcon: ({focused}) => (
              <Image source = { focused ? require( '../resources/icons/home_click.png' ) : require( '../resources/icons/home_non_click.png' )}/>
            )
          }}
        />
        <Tab.Screen name="Danh mục" component={CategoryTab} 
          options = {{ 
            tabBarLabel: 'Danh mục',
            tabBarIcon: ({focused}) => (
              <Image source = { focused ? require('../resources/icons/category_click.png') : require('../resources/icons/category.png')}/>
            )
          }}
        />
        <Tab.Screen name="camera" component={NotificationTab} 
          options = {{ 
            tabBarLabel: '',
            tabBarButton: (props)=>(
              <TouchableOpacity onPress={()=>{
                CameraModule.openCamera()
              }
                
              }>
                <Image source = {require('../resources/icons/camera_navbar.png')}
                  style ={{top:-30}}
                />
              </TouchableOpacity>
            )
          }}
        />
        <Tab.Screen name="Thông báo" component={NotificationTab} options={{ tabBarBadge: 3 }}  
          options = {{ 
            tabBarLabel: 'Thông báo',
            tabBarIcon: ({focused}) => (
              <Image source = {focused ? require('../resources/icons/notification_click.png' ):require('../resources/icons/notification.png' )} />
            ),
            tabBarBadge: 3
          }}
        />
        <Tab.Screen name="Tôi" component={UserTab} 
          options = {{ 
            tabBarLabel: 'Tôi',
            tabBarIcon: ({focused}) => (
              <Image source = {focused ?  require('../resources/icons/user_click.png' ):require('../resources/icons/user.png' )} />
            )
          }}
        />
      </Tab.Navigator>

  );
}