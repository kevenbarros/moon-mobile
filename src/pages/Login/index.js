import * as React from 'react';
import { Text, View, StyleSheet, StatusBar, Image, TouchableOpacity } from 'react-native';

const StatusBarHeight = StatusBar.currentHeight ? StatusBar.currentHeight + 22 : 64

function Login({ navigation }) {
  return (
    <View style={styles.container}>
      <View style={styles.Text}>
        <Image
          style={styles.image}
          source={require('../../imgs/fg.png')}
        />
        <Text style={styles.TextWelcome}>Bem vindo ao MOON</Text>
        <Text style={styles.auxiliaryText}>Vamos começar sua jornada finançeira até a lua,  Prepare seu foguete e coloque seu capacete</Text>
      </View>
      <View style={styles.buttons}>
        <TouchableOpacity style={styles.button} onPress={() => navigation.navigate('Register')}>
          <Image
            style={styles.google}
            source={require('../../imgs/google.png')}
          />
          <Text style={styles.buttonText}>Cadastrar com o Google</Text>
        </TouchableOpacity>
        <TouchableOpacity style={styles.buttonLogin} onPress={() => navigation.navigate('MainTab')}>
          <Text style={styles.buttonLoginText}>Fazer Login</Text>
        </TouchableOpacity>
      </View>
      <View style={styles.decoration}></View>
    </View>
  );
}
const styles = StyleSheet.create({
  container: {
    flex: 1,
    paddingTop: StatusBarHeight,
    backgroundColor: '#F5831A',
    paddingVertical: 50,
    flexDirection: 'column',
    justifyContent: 'center',
    paddingHorizontal: 27,
  },
  Text: {
    alignContent: "center",
    justifyContent: 'center',
    marginBottom: 40
  },
  image: {
    resizeMode: 'stretch',
    width: 365,
    height: 365,
  },
  TextWelcome: {
    color: '#FFFFFF',
    fontWeight: '800',
    fontSize: 32,
    marginBottom: 32,
    textAlign: 'center'

  },
  auxiliaryText: {
    color: '#FFFFFF',
    fontWeight: '600',
    fontSize: 18,
    marginBottom: 32,
    textAlign: 'center'
  },
  button: {
    borderRadius: 50,
    backgroundColor: "#fff",
    marginBottom: 19,
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center'

  },
  buttonLogin: {
    borderRadius: 50,
    borderWidth: 2,
    borderColor: '#fff',
    backgroundColor: "#F5831A",
    marginBottom: 19,
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center'
  },
  buttonText: {
    color: '#F5831A',
    paddingVertical: 15,
    fontSize: 20,
    fontWeight: '600',
    textAlign: 'center'
  },
  buttonLoginText: {
    color: '#fff',
    paddingVertical: 13,
    fontSize: 22,
    fontWeight: '600',
    textAlign: 'center'
  },
  google: {
    resizeMode: 'stretch',
    width: 26,
    height: 26,
    marginRight: 10
  },
  decoration: {
    position: 'absolute',
    width: 60,
    height: 160,
    backgroundColor: '#D9D9D926',
    borderRadius: 50,
    top: -50,
    right: 0,
    rotation: 50
  }
});

export default Login
