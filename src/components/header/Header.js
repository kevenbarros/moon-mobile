import * as React from 'react';
import { View, StyleSheet, TouchableOpacity, Image, Text } from 'react-native';
import { useDispatch, useSelector } from 'react-redux';

function Header({ navigation, picture }) {
  const { user, token, token_google, createExpenseLoading } = useSelector(
    (state) => state.user
  );
  console.log("foto", picture)
  return (
    <View style={styles.box} >
      <Image
        style={styles.logo}
        source={require('../../imgs/logo.png')}
      />
      {createExpenseLoading && <Text>oiii</Text>}
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
