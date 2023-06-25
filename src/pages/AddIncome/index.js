import * as React from 'react';
import { Text, View, StyleSheet, StatusBar, Image, TouchableOpacity } from 'react-native';
import { TextInput, Switch } from 'react-native-paper';
import MaskInput, { Masks } from 'react-native-mask-input';
import { UserIncomeSave } from '../../service/user';
import { useContext } from 'react';
import { Usercontext } from '../../context/TesteContext'
const StatusBarHeight = StatusBar.currentHeight ? StatusBar.currentHeight + 22 : 64


function AddIncome({ navigation }) {
  const { user, setUser } = useContext(Usercontext)
  const [income, setIncome] = React.useState('0000')

  async function sendRequest() {
    const response = await UserIncomeSave({
      user_id: user._id, wage: Number(income.replace("R$", "").replace(/\./g, "").replace(",", "."))
    })
    if (response.status === 201) {
      setUser({ ...user, income: Number(income.replace("R$", "").replace(/\./g, "").replace(",", ".")) })
      navigation.navigate('MainTab')
    }
  }
  return (
    <View style={styles.container}>
      <View style={styles.Text}>
        <Image
          style={styles.image}
          source={require('../../imgs/moneyGif.gif')}
        />
        <Text>{user._id} teste {Number(income.replace("R$", "").replace(/\./g, "").replace(",", "."))}</Text>
        <Text style={styles.TextWelcome}>Para comerçarmos nos informe sua renda Mensal</Text>
        <View style={styles.boxInputValue}>
          <TextInput
            style={styles.inputValue}
            onChangeText={setIncome}
            value={income}
            textColor="#008F98"
            activeUnderlineColor="#F5831A"
            placeholder="R$0,00"
            render={props =>
              <MaskInput
                {...props}
                value={income}
                onChangeText={(masked, unmasked) => {
                  setIncome(masked);
                }}
                mask={Masks.BRL_CURRENCY}
              />
            }
          />
        </View>
        {income !== "0000" && <View style={styles.submitBox}>
          <TouchableOpacity style={styles.submit} onPress={() => sendRequest()}>
            <Text style={styles.textSubmit}>Começar minha jornada</Text>
          </TouchableOpacity>
        </View>}
        <TouchableOpacity style={styles.jump}>
          <Text style={styles.jump}>Pular esta etapa e informar depois</Text>
        </TouchableOpacity>
      </View>
      <View style={styles.decorationOne}></View>
      <View style={styles.decorationTwo}></View>
    </View>
  );
}
const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#FFF',
    flexDirection: 'column',
    justifyContent: 'center',
    alignItems: "center",
    paddingHorizontal: 27,
    position: 'relative'
  },
  Text: {
    marginBottom: 10
  },
  boxInputValue: {
    display: "flex",
    alignItems: "center"
  },
  inputValue: {
    width: 250,
    backgroundColor: '#FFF',
    fontWeight: "700",
    textAlign: "center",
    fontSize: 36,
  },
  image: {
    resizeMode: 'stretch',
    width: 320,
    height: 164,
  },
  TextWelcome: {
    color: '#F5831A',
    fontWeight: '800',
    fontSize: 32,
    marginBottom: 32,
    textAlign: 'center'

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
  },
  jump: {
    marginTop: 22,
    color: "#7B61FF",
    textAlign: "center",
    textDecorationLine: "underline",
    textDecorationColor: "#7B61FF",
  },
  decorationOne: {
    width: 200,
    height: 200,
    borderRadius: 85,
    backgroundColor: "#eeeeee",
    position: "absolute",
    top: "13%",
    left: "-10%",
    opacity: 0.55,
    zIndex: -10,
    transform: [{ skewX: '10deg' }, { skewY: '20deg' }]
  },
  submit: {
    width: 280,
    paddingHorizontal: 45,
    paddingVertical: 16,
    backgroundColor: "#7B61FF",
    borderRadius: 50,
  },
  submitBox: {
    alignItems: 'center',
    marginTop: 42
  },
  textSubmit: {
    textAlign: "center",
    fontSize: 16,
    color: "#FFFFFF",
    fontWeight: "500",
  },
  decorationTwo: {
    width: 120,
    height: 150,
    borderRadius: 85,
    backgroundColor: "#eeeeee",
    position: "absolute",
    right: "5%",
    top: "28%",
    opacity: 0.55,
    zIndex: -10,
    transform: [{ skewX: '15deg' }, { skewY: '22deg' }]
  }
});

export default AddIncome
