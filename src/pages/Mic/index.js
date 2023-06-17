import React, { useRef, useEffect } from 'react';
import { Text, View, StyleSheet, StatusBar, TouchableOpacity, Animated } from 'react-native';
import Header from '../../components/header/Header'
import { Feather } from '@expo/vector-icons'
import * as Speech from 'expo-speech';
import { UserAll } from '../../service/user';

const StatusBarHeight = StatusBar.currentHeight ? StatusBar.currentHeight + 10 : 64
function Mic({ route }) {
  const loaderOne = useRef(new Animated.Value(0)).current;
  const loaderTwo = useRef(new Animated.Value(0)).current;
  const [textReative, setTextReative] = React.useState(true)
  const [data, setData] = React.useState(false)

  function recording() {
    const thingToSay = '';
    Speech.speak(thingToSay);
    setData(!data)
    Animated.timing(loaderOne, {
      toValue: 1,
      duration: 1000,
      useNativeDriver: false
    }).start()
    Animated.loop(
      Animated.timing(loaderTwo, {
        toValue: 1,
        duration: 1500,
        useNativeDriver: false
      }),
    ).start()
  }
  function stop() {
    Animated.timing(loaderOne, {
      toValue: 0,
      duration: 500,
      useNativeDriver: false
    }).start()
    Animated.loop(
      Animated.timing(loaderTwo, {
        toValue: 1,
        duration: 500,
        useNativeDriver: false
      }),
    ).stop()
  }

  let variableLoaderOne = loaderOne.interpolate({
    inputRange: [0, 1],
    outputRange: ["60%", "100%"]
  })
  let variableLoaderTwo = loaderTwo.interpolate({
    inputRange: [0, 1],
    outputRange: ["60%", "100%"]
  })

  return (
    <View style={styles.container}>
      <View style={styles.header}>
        <Header picture={route.params.profile.picture}></Header>
      </View>
      <View style={styles.boxMic}>
        <View style={styles.loaderMic}>
          <Animated.View style={[styles.loaderMicOne, { width: variableLoaderOne, height: variableLoaderOne }]}>
            <Animated.View style={[styles.loaderMicTwo, { width: variableLoaderTwo, height: variableLoaderTwo }]}>
              <TouchableOpacity style={styles.mic} onPressOut={() => stop()} onPressIn={() => recording()}><Feather name='mic' size={63} color="#fff" /></TouchableOpacity>
            </Animated.View>
          </Animated.View>
        </View>
        <Text style={styles.text}>Segure para falar suas despesas de hoje!</Text>
        <TouchableOpacity
          style={[styles.button, { backgroundColor: data ? '#7B61FF' : '#ECECEC' }]}>
          <Text style={styles.textButton}>Guardar meus dados</Text></TouchableOpacity>
        {/* <TouchableOpacity
          style={[styles.button, { backgroundColor: data ? '#7B61FF' : '#ECECEC' }]}>
          <Text style={styles.textButton} onPress={() => stopRecording()}>para meus dados</Text></TouchableOpacity> */}
      </View>

    </View >
  );
}
const styles = StyleSheet.create({
  container: {
    height: '100%',
    paddingTop: StatusBarHeight,
    paddingHorizontal: 25,
    paddingBottom: 400,
    backgroundColor: '#fff',
  },
  header: {

  },
  boxMic: {
    justifyContent: 'center',
    alignItems: 'center',
    position: 'relative',
    top: '25%'
  },
  mic: {
    backgroundColor: '#F5831A',
    justifyContent: 'center',
    alignItems: 'center',
    borderRadius: 100,
    width: 200,
    height: 200,
  },
  text: {
    fontSize: 14,
    color: '#8A8A8A',
    marginTop: 50
  },
  button: {
    marginTop: 90,
    paddingVertical: 16,
    paddingHorizontal: 50,
    borderRadius: 50,
    backgroundColor: '#ECECEC'
  },
  textButton: {
    fontSize: 16,
    fontWeight: '500',
    color: '#D1D0D0'
  },
  active: {
    backgroundColor: '#7B61FF'
  },
  loaderMic: {
    alignItems: 'center',
    justifyContent: 'center',
    height: 280,
    width: 280,
  },
  loaderMicOne: {
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: "rgba(245, 131, 26, 0.2);",
    borderRadius: 150,
  },
  loaderMicTwo: {
    alignItems: 'center',
    justifyContent: 'center',
    borderRadius: 150,
    backgroundColor: "rgba(245, 131, 26, 0.2);"
  }
})
export default Mic
