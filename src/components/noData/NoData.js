import * as React from 'react';
import { View, StyleSheet, TouchableOpacity, Image, Text } from 'react-native';

function Header({ navigation }) {
  return (
    <View style={styles.box}>
      <Text style={styles.text}>Você ainda não possui nenhuma despesa cadastrada</Text>
      <Image
        style={styles.img}
        source={require('../../imgs/noData.png')}
      />
    </View >
  );
}
const styles = StyleSheet.create({
  box: {
    justifyContent: 'center',
    alignItems: 'center',
    paddingTop: 27
  },
  img: {
    marginTop: 27,
    width: 230,
    height: 230
  },
  text: {
    fontSize: 14,
    fontWeight: '400',
    color: '#8A8A8A'
  }
});

export default Header
