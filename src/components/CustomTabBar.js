import React from 'react';
import { TouchableOpacity, View, StyleSheet, } from 'react-native';
import { Feather } from '@expo/vector-icons'
import Creation from '../components/creation/Creation'
const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    alignItems: 'center',
    justifyContent: 'center'
  },
  navContainer: {
    position: 'absolute',
    alignItems: 'flex-end',
    bottom: 0,
  },
  navBar: {
    flexDirection: "row",
    backgroundColor: "#008F98",
    width: '100%',
    justifyContent: 'space-evenly',
  },
  iconBehave: {
    padding: 15
  }
});

export default ({ state, navigation }) => {
  const [buttonState, setButtonState] = React.useState('Home')
  const goTo = (screenName) => {
    setButtonState(screenName)
    navigation.navigate(screenName);
  }

  return (
    <View style={styles.navContainer}>
      <Creation />
      <View style={styles.navBar}>
        <TouchableOpacity onPress={() => goTo('Mic')} style={styles.iconBehave} >
          <Feather name='mic' size={27} color={buttonState == 'Mic' ? "#FF9432" : "#fff"} />
        </TouchableOpacity>
        <TouchableOpacity onPress={() => goTo('Home')} style={styles.iconBehave}>
          <Feather name='home' size={27} color={buttonState == 'Home' ? "#FF9432" : "#fff"} />
        </TouchableOpacity>
        <TouchableOpacity onPress={() => goTo('Goals')} style={styles.iconBehave}>
          <Feather name='send' size={27} color={buttonState == 'Goals' ? "#FF9432" : "#fff"} />
        </TouchableOpacity>
        <TouchableOpacity onPress={() => goTo('Statistics')} style={styles.iconBehave}>
          <Feather name='pie-chart' size={27} color={buttonState == 'Statistics' ? "#FF9432" : "#fff"} />
        </TouchableOpacity>
        <TouchableOpacity onPress={() => goTo('Settings')} style={styles.iconBehave}>
          <Feather name='settings' size={27} color={buttonState == 'Settings' ? "#FF9432" : "#fff"} />
        </TouchableOpacity>
      </View>
    </View>
  );
}
