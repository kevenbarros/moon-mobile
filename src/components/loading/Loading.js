import * as React from 'react';
import { Text, View, StyleSheet, Animated, useWindowDimensions } from 'react-native';
import { useRef, useEffect } from 'react';

function Loading({ loading }) {
  const window = useWindowDimensions();
  const box1 = useRef(new Animated.Value(0)).current;
  const box2 = useRef(new Animated.Value(0)).current;
  Animated.loop(
    Animated.sequence([
      Animated.timing(box1, {
        toValue: -1,
        duration: 500,
        useNativeDriver: false
      }),
      Animated.timing(box2, {
        toValue: -1,
        duration: 500,
        useNativeDriver: false
      }),
      Animated.timing(box1, {
        toValue: 0,
        duration: 500,
        useNativeDriver: false
      }),
      Animated.timing(box2, {
        toValue: 0,
        duration: 500,
        useNativeDriver: false
      })
    ])

  ).start()

  let LoaderBox1 = box1.interpolate({
    inputRange: [0, 1],
    outputRange: [0, 30]
  })
  let LoaderBox2 = box2.interpolate({
    inputRange: [0, 1],
    outputRange: [0, 30]
  })
  return (
    <View style={[styles.container, { display: loading ? "flex" : "none", width: window.width, height: window.height + 50 }]}>
      <Animated.View style={[styles.box1, { marginTop: LoaderBox1 }]}>
        <View style={styles.boxBlue}></View>
        <View style={styles.boxOrange}></View>
      </Animated.View>
      <Animated.View style={[styles.box2, { marginTop: LoaderBox2 }]}>
        <View style={styles.boxOrange}></View>
        <View style={styles.boxBlue}></View>
      </Animated.View>


    </View >
  );
}

const styles = StyleSheet.create({
  container: {
    position: "absolute",
    display: "flex",
    flexDirection: "row",
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: "rgba(255, 255, 255, 0.9)",

    flex: 1,
  },
  boxBlue: {
    width: 20,
    height: 20,
    backgroundColor: "#008F98",
    margin: 2,
    borderRadius: 4
  },
  boxOrange: {
    width: 20,
    height: 20,
    backgroundColor: "#F5831A",
    margin: 2,
    borderRadius: 4
  }
});

export default Loading
