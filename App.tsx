/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 */

import React, {useEffect, useState} from 'react';
import {
  SafeAreaView,
  ScrollView,
  StatusBar,
  Text,
  useColorScheme,
  View,
  Dimensions,
} from 'react-native';
import Carousel from 'react-native-reanimated-carousel';

import {Colors, Header} from 'react-native/Libraries/NewAppScreen';
import DeviceInfo from 'react-native-device-info';

const width = Dimensions.get('window').width;

function App(): JSX.Element {
  const isDarkMode = useColorScheme() === 'dark';
  const [deviceName, setDeviceName] = useState<string>();

  useEffect(() => {
    DeviceInfo.getDeviceName().then(setDeviceName);
  }, []);

  const backgroundStyle = {
    backgroundColor: isDarkMode ? Colors.darker : Colors.lighter,
  };

  return (
    <SafeAreaView style={backgroundStyle}>
      <StatusBar
        barStyle={isDarkMode ? 'light-content' : 'dark-content'}
        backgroundColor={backgroundStyle.backgroundColor}
      />
      <ScrollView
        contentInsetAdjustmentBehavior="automatic"
        style={backgroundStyle}>
        <Header />
        <View
          style={{
            backgroundColor: isDarkMode ? Colors.black : Colors.white,
          }}>
          <Text>{deviceName}</Text>
          <View style={{flex: 1}}>
            <Carousel
              loop
              width={width}
              height={width / 2}
              autoPlay={true}
              data={[...new Array(6).keys()]}
              scrollAnimationDuration={1000}
              onSnapToItem={index => console.log('current index:', index)}
              renderItem={({index}) => (
                <View
                  style={{
                    flex: 1,
                    borderWidth: 1,
                    justifyContent: 'center',
                  }}>
                  <Text style={{textAlign: 'center', fontSize: 30}}>
                    {index}
                  </Text>
                </View>
              )}
            />
          </View>
        </View>
      </ScrollView>
    </SafeAreaView>
  );
}

export default App;
