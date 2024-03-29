import * as React from 'react';
import { View, StyleSheet, TouchableOpacity, Image, Text } from 'react-native';

function Header({ navigation, picture }) {

  return (
    <View style={styles.box} >
      <Image
        style={styles.logo}
        source={require('../../imgs/logo.png')}
      />
      <TouchableOpacity>
        <Image
          style={styles.perfil}
          source={{ uri: picture }}
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
    width: 40,
    borderRadius: 10
  }
});

export default Header
