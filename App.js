/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow strict-local
 */

import React, {Component} from 'react';
import type {Node} from 'react';
import {
  SafeAreaView,
  ScrollView,
  StatusBar,
  StyleSheet,
  Text,
  useColorScheme,
  View,
} from 'react-native';

import {
  Colors,
  DebugInstructions,
  Header,
  LearnMoreLinks,
  ReloadInstructions,
} from 'react-native/Libraries/NewAppScreen';
import Sale_frame from './src/components/Sale_frame';
import Rating_star from './src/components/Rating_star';
import HeaderKeySearch from './src/components/HeaderKeySearch';
import TabHistorySearch from './src/components/TabHistorySearch';
import ScrollViewGioHang from './src/components/GioHang/ScrollViewGioHang';
import CardSPXacNhanThanhToan from './src/components/XacNhanSanPham/CardSPXacNhanThanhToan';


// const Section = ({children, title}): Node => {
//   const isDarkMode = useColorScheme() === 'dark';
//   return (
//     <View style={styles.sectionContainer}>
//       <Text
//         style={[
//           styles.sectionTitle,
//           {
//             color: isDarkMode ? Colors.white : Colors.black,
//           },
//         ]}>
//         {title}
//       </Text>
//       <Text
//         style={[
//           styles.sectionDescription,
//           {
//             color: isDarkMode ? Colors.light : Colors.dark,
//           },
//         ]}>
//         {children}
//       </Text>
//     </View>
//   );
// };

const App: () => Node = () => {
  const isDarkMode = useColorScheme() === 'dark';

  const backgroundStyle = {
    backgroundColor: isDarkMode ? Colors.darker : Colors.lighter,
  };
  return (
    <SafeAreaView style={backgroundStyle}>
      {/* <StatusBar barStyle={isDarkMode ? 'light-content' : 'dark-content'} />
      <ScrollView
        contentInsetAdjustmentBehavior="automatic"
        style={backgroundStyle}>
        <Header />
        <View
          style={{
            backgroundColor: isDarkMode ? Colors.black : Colors.white,
          }}>
          <Section title="Step One">
            Edit <Text style={styles.highlight}>App.js</Text> to change this
            screen and then come back to see your edits.
          </Section>
          <Section title="See Your Changes">
            <ReloadInstructions />
          </Section>
          <Section title="Debug">
            <DebugInstructions />
          </Section>
          <Section title="Learn More">
            Read the docs to discover what to do next:
          </Section>
          <LearnMoreLinks />
        </View>
      </ScrollView> */}

      {/* gio hang , con thieu header voi footer*/}
      <ScrollViewGioHang isSelected={false}></ScrollViewGioHang>
      {/* xac nhan san pham */}
      {/* <CardSPXacNhanThanhToan></CardSPXacNhanThanhToan> */}

    </SafeAreaView>
  );
};

// const styles = StyleSheet.create({
//   sectionContainer: {
//     marginTop: 32,
//     paddingHorizontal: 24,
//   },
//   sectionTitle: {
//     fontSize: 24,
//     fontWeight: '600',
//   },
//   sectionDescription: {
//     marginTop: 8,
//     fontSize: 18,
//     fontWeight: '400',
//   },
//   highlight: {
//     fontWeight: '700',
//   },
// });


class App1 extends Component {
  render() {
    return (
      <View style={{flexDirection: 'column'}}>
        {/* <Sale_frame value='50'/> */}
        {/* <Rating_star width="30" height="30" value="3" /> */}
        <HeaderKeySearch placeholder="Tìm kiếm"/>
        <HeaderKeySearch placeholder="Tìm kiếm"/>
        {/* <TabHistorySearch/> */}
      </View>
    );
  }
}

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


export default App;
// export default TangGiamSL;
// export default sale_frame;
