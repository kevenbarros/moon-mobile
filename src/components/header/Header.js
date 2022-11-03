import * as React from 'react';
import { View, StyleSheet, TouchableOpacity, Image } from 'react-native';

function Header({ navigation, setData }) {
  return (
    <View style={styles.box} >
      <Image
        style={styles.logo}
        source={require('../../imgs/logo.png')}
      />
      <TouchableOpacity onPress={() => setData([])}>
        <Image
          style={styles.perfil}
          source={require('../../imgs/Mock-ft-perf.png')}
        />
      </TouchableOpacity>

    </View >
  );
}
const styles = StyleSheet.create({
  box: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginBottom: 20
  },
  logo: {
    width: 35,
    height: 37
  },
  perfil: {
    height: 40,
    width: 40
  }
});

export default Header
