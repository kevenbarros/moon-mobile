import * as React from 'react';
import { Text, View, StyleSheet, StatusBar, Image, TouchableOpacity } from 'react-native';
import Loading from '../../components/loading/Loading';
import { Usercontext } from '../../context/TesteContext'
import { useDispatch } from 'react-redux';
import { useSelector } from "react-redux";

const StatusBarHeight = StatusBar.currentHeight ? StatusBar.currentHeight + 22 : 64


import * as AuthSession from 'expo-auth-session'
import { CheckUser, LoginUser, RegisterUser } from '../../service/user';
import { useContext } from 'react';
import AsyncStorage from '@react-native-async-storage/async-storage';

const CLIENT_ID = "601601170178-lbbj728oads51iveqe0ukmdn9ta58o6p.apps.googleusercontent.com"
const REDIRECT_URI = 'https://auth.expo.io/@kevenwilliam/moon-2-0'
const RESPONSE_TYPE = 'token'
const ESCOPO = encodeURI('profile email')
const authUrl = `https://accounts.google.com/o/oauth2/v2/auth?client_id=${CLIENT_ID}&redirect_uri=${REDIRECT_URI}&response_type=${RESPONSE_TYPE}&scope=${ESCOPO}`

function Login({ navigation }) {

  const { token, setToken, setLoadingLogin, loadingLogin, setUser } = useContext(Usercontext)
  function redirect() {
    navigation.navigate('MainTab', { token: "" })
  }
  async function authGoogle() {
    try {
      const response = await AuthSession.startAsync({ authUrl })
      if (response.type) {
        setToken(response.params.access_token)
        fetchUsers(response.params.access_token, redirect)
      }
    } catch (err) {
      // gerar erro
      // navigation.navigate('MainTab')
    }
  }

  async function fetchUsers(token, cb) {
    setLoadingLogin(true)
    const responseDataUser = await fetch(`https://www.googleapis.com/oauth2/v2/userinfo?alt=json&access_token=${token}`)
    const userInfo = await responseDataUser.json()
    const objectUser = {
      email: userInfo.email,
      picture: userInfo.picture,
      name: userInfo.name,
      id_google: userInfo.id,
      locale: userInfo.locale,
      given_name: userInfo.given_name,
      family_name: userInfo.family_name
    }
    setUser(objectUser);

    const checkUserBack = await CheckUser({ id_google: objectUser.id_google })

    if (!checkUserBack.data.checkUser) {
      //register
      console.log("register")
      const register = await RegisterUser(objectUser)
      const loginPosRegister = await LoginUser({ id_google: objectUser.id_google })
      if (loginPosRegister.data.token) {
        setUser(loginPosRegister.data.person);
        setToken(loginPosRegister.data.token);
        await AsyncStorage.setItem('@token', loginPosRegister.data.token)
        await AsyncStorage.setItem('@token_google', token)
        setLoadingLogin(false)
      }
      return navigation.navigate('AddIncome')
    } else {
      //login
      console.log("login")
      const login = await LoginUser({ id_google: objectUser.id_google })
      if (login.data.token) {
        setUser(login.data.person);
        setToken(login.data.token);
        await AsyncStorage.setItem('@token', login.data.token)
        await AsyncStorage.setItem('@token_google', token)
        if (login.data.person.wage === 0) {
          return navigation.navigate('AddIncome')
        }
        cb()
      }
      setLoadingLogin(false)
    }
  };

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
      <Loading loading={loadingLogin} />
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
