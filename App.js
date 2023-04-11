import { StyleSheet, Text, View, Dimensions, StatusBar } from "react-native";
import { Svg, Circle, G, Path, Line, Rect } from "react-native-svg";
import DeviceInfo from "react-native-device-info";
import { useEffect, useState } from "react";
import Carousel from "react-native-reanimated-carousel";

const width = Dimensions.get("window").width;

const SvgExample = () => {
  return (
    <Svg height="100" width="100">
      <Circle
        cx="50"
        cy="50"
        r="45"
        stroke="blue"
        strokeWidth="2.5"
        fill="green"
      />
      <Rect
        x="15"
        y="15"
        width="70"
        height="70"
        stroke="red"
        strokeWidth="2"
        fill="yellow"
      />
    </Svg>
  );
};

export default function App() {
  const [deviceName, setDeviceName] = useState();

  useEffect(() => {
    DeviceInfo.getDeviceName().then(setDeviceName);
  }, []);

  return (
    <View style={styles.container}>
      <Text>Open up App.js to start working on your app!</Text>
      <StatusBar style="auto" />
      <View style={{ flex: 1 }}>
        <Carousel
          loop
          width={width}
          height={width / 2}
          autoPlay={true}
          data={[...new Array(6).keys()]}
          scrollAnimationDuration={1000}
          onSnapToItem={(index) => console.log("current index:", index)}
          renderItem={({ index }) => (
            <View
              style={{
                flex: 1,
                borderWidth: 1,
                justifyContent: "center",
              }}
            >
              <Text style={{ textAlign: "center", fontSize: 30 }}>{index}</Text>
              <Text>{deviceName}</Text>
              <SvgExample />
            </View>
          )}
        />
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    alignItems: "center",
    justifyContent: "center",
  },
});
