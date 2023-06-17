import * as React from 'react';
import { Text, View, StyleSheet, StatusBar, Image, TouchableOpacity } from 'react-native';
import Loading from '../../components/loading/Loading';

import { useDispatch } from 'react-redux';
import { fetchUsers, setToken, setTokenGoogle, tokenGoogleAuth } from '../../store/reducers/user';
import { useSelector } from "react-redux";

const StatusBarHeight = StatusBar.currentHeight ? StatusBar.currentHeight + 22 : 64


import * as AuthSession from 'expo-auth-session'
import { CheckUser, RegisterUser } from '../../service/user';
const CLIENT_ID = "601601170178-lbbj728oads51iveqe0ukmdn9ta58o6p.apps.googleusercontent.com"
const REDIRECT_URI = 'https://auth.expo.io/@kevenwilliam/moon-2-0'
const RESPONSE_TYPE = 'token'
const ESCOPO = encodeURI('profile email')
const authUrl = `https://accounts.google.com/o/oauth2/v2/auth?client_id=${CLIENT_ID}&redirect_uri=${REDIRECT_URI}&response_type=${RESPONSE_TYPE}&scope=${ESCOPO}`
function Login({ navigation }) {
  const dispach = useDispatch();
  const { token, loading, token_google, user } = useSelector(
    (state) => state.user
  );
  function redirect() {
    navigation.navigate('MainTab', { token: "" })
  }
  async function authGoogle() {
    try {
      const response = await AuthSession.startAsync({ authUrl })
      if (response.type) {
        dispach(tokenGoogleAuth(response.params.access_token))
        dispach(fetchUsers(response.params.access_token, redirect))

      }
    } catch (err) {
      // gerar erro
      // navigation.navigate('MainTab')
    }
  }

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
        <TouchableOpacity style={styles.button} onPress={() => authGoogle()}>
          <Image
            style={styles.google}
            source={require('../../imgs/google.png')}
          />
          <Text style={styles.buttonText}>Cadastrar com o Google</Text>
        </TouchableOpacity>
        {/* <TouchableOpacity style={styles.buttonLogin} onPress={() => loginFunc()}>
          <Text style={styles.buttonLoginText}>Fazer Login</Text>
        </TouchableOpacity> */}
      </View>
      <View style={styles.decoration}></View>
      <Loading loading={loading} />
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
    position: 'relative'
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
