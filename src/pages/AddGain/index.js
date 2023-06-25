import * as React from 'react';
import { useState } from 'react';
import { Text, View, StyleSheet, StatusBar, TouchableOpacity, Pressable, Platform, SafeAreaView, ScrollView, useWindowDimensions } from 'react-native';
import { Feather } from '@expo/vector-icons'
import DateTimePicker from '@react-native-community/datetimepicker';
import { formateDate } from '../../helpers/common'
import DropDownPicker from 'react-native-dropdown-picker';
import { TextInput, Switch } from 'react-native-paper';
import MaskInput, { Masks } from 'react-native-mask-input';
import Loading from '../../components/loading/Loading';
import { Usercontext } from '../../context/TesteContext';
import { useContext } from 'react';
import { CreateGain } from '../../service/gain';
const StatusBarHeight = StatusBar.currentHeight ? StatusBar.currentHeight + 10 : 64

function AddGain({ navigation }) {
  const window = useWindowDimensions();
  const { fecthingNotLoading, user } = useContext(Usercontext)

  //loading
  const [loadingState, setLoadingState] = useState(false)
  // data de vencimento 
  const [mode, setMode] = React.useState('date')
  const [showDate, setShowDate] = React.useState(false)

  //mais informações
  const [showInformations, setShowInformations] = React.useState(false)

  //outros campos
  const [date, setDate] = React.useState(new Date())
  const [accountValue, setAccountValue] = React.useState('0000')
  const [description, setDescription] = React.useState('')
  const [paymenTerms, setPaymenTerms] = useState("Avista");
  const [installmentsTime, setInstallmentsTime] = useState("Mensal");
  const [paid, setPaid] = React.useState(false);
  const [prohibited, setProhibited] = React.useState('');
  const [numberInstallments, setNumberInstallments] = React.useState('');

  //select perido de parcelas
  const [openInstallmentsTime, setOpenInstallmentsTime] = useState(false);
  const [listinstallmentsTime, setListInstallmentsTime] = useState([
    { label: 'Mensal', value: 'Mensal' },
    { label: 'Semanal', value: 'Semanal' },
    { label: 'Trimestral', value: 'Trimestral' },
    { label: 'Anual', value: 'Anual' },
  ]);

  //selct pagamento
  const [openPaymenTerms, setOpenPaymenTerms] = useState(false);
  const [listPaymenTerms, setListPaymenTerms] = useState([
    { label: 'Avista', value: 'Avista' },
    { label: 'Parcelado', value: 'Parcelado' },
    { label: 'Despesa recorrente', value: 'Despesa recorrente' },
  ]);

  function changeDate(event, selectedDate) {
    const currentDate = selectedDate || date
    setShowDate(Platform.OS === 'ios')
    setDate(currentDate)
  }
  function showMode(currentMode) {
    setShowDate(true)
    setMode(currentMode)
  }

  const onToggleSwitch = () => setPaid(!paid);

  async function sendRequest() {
    setLoadingState(true)
    const response = await CreateGain({
      description: description,
      value: Number(accountValue.replace("R$", "").replace(/\./g, "").replace(",", ".")),
      date: date,
      paymentConditions: paymenTerms,
      paidGain: paid,
      valueRecurrence: Number(accountValue.replace("R$", "").replace(/\./g, "").replace(",", ".")) / numberInstallments,
      qtdInstallments: 1,
      id_user: user._id
    })
    if (response.status == 201) {
      navigation.navigate('MainTab')
    }
    fecthingNotLoading()
    setLoadingState(false)
  }

  return (
    <View style={styles.container}>
      <View style={styles.headerBox}>
        <View style={styles.headerContent}>
          <TouchableOpacity onPress={() => navigation.navigate('Home')}>
            <Feather name='chevron-left' size={27} color="#fff" />
          </TouchableOpacity>
          <Text style={styles.headerText}>Adicionar Ganhos</Text>
        </View>
      </View>
      <View style={[{ height: window.height - 50 }]}>
        <SafeAreaView>
          <ScrollView showsVerticalScrollIndicator={false}>
            <View style={styles.bodyBox}>
              {/* valor */}
              <View style={styles.boxInputValue}>
                <TextInput
                  label="Valor do Ganho"
                  style={styles.inputValue}
                  onChangeText={setAccountValue}
                  value={accountValue}
                  textColor="#F5831A"
                  activeUnderlineColor="#008F98"
                  placeholder="R$0,00"
                  render={props =>
                    <MaskInput
                      {...props}
                      value={accountValue}
                      onChangeText={(masked, unmasked) => {
                        setAccountValue(masked);
                      }}
                      mask={Masks.BRL_CURRENCY}
                    />
                  }
                />
              </View>
              {/* descrição */}
              <View style={styles.boxInput}>
                <TextInput
                  label="Descrição"
                  style={styles.input}
                  textColor="#000"
                  onChangeText={setDescription}
                  value={description}
                  mode="flat"
                  activeUnderlineColor="#008F98"
                />
              </View>
              {/* data de vencimento */}
              <View style={styles.boxInput}>
                <Text style={styles.label}>Data do Recebimento</Text>
                <Pressable style={[styles.buttonDate, { borderBottomColor: `${showDate ? "#008F98" : "#BDBDBD"}` }]} onPress={() => showMode('date')}>
                  <Text style={styles.inputCalendar}>{formateDate(date)}</Text>
                </Pressable>
                {
                  showDate && (<DateTimePicker value={date} testID="teste" mode={mode} is24Hour={true} display="default" onChange={changeDate}></DateTimePicker>)
                }

              </View>
              {/* condiçoes de pagamento */}
              <View style={styles.boxInput}>
                <Text style={styles.labelDropDown}>Condição de pagamento</Text>
                <DropDownPicker
                  open={openPaymenTerms}
                  setOpen={setOpenPaymenTerms}
                  value={paymenTerms}
                  setValue={setPaymenTerms}
                  items={listPaymenTerms}
                  setItems={setListPaymenTerms}
                  textStyle={{
                    fontSize: 16
                  }}
                  labelStyle={{
                    fontSize: 18
                  }}
                  style={{
                    zIndex: 1,
                    height: 0,
                    borderBottomColor: `${openPaymenTerms ? "#008F98" : "#BDBDBD"}`,
                    borderRadius: 0,
                    borderWidth: 0,
                    borderBottomWidth: 1,
                    paddingVertical: 0,
                    paddingTop: 12,
                    paddingLeft: 0,

                  }}
                  listItemLabelStyle={{
                    color: "#5B5959"
                  }}
                  dropDownContainerStyle={{
                    marginTop: 2,
                    borderWidth: 0,
                    borderRadius: 10,
                    borderColor: "#008F98",
                    elevation: 20,
                    paddingHorizontal: 10,
                    paddingVertical: 10
                  }}
                  theme="LIGHT"
                />
              </View>
              {/* caso não seja parcelado */}
              {paymenTerms !== "Parcelado" && <View >
                <View style={styles.boxInputSwitch}>
                  <Text style={[styles.inputSwitch, { color: `${paid ? '#00984F' : '#BE3128'}` }]}>{paid ? 'Despesa Paga' : 'Despesa Não Paga'}</Text>
                  <Switch value={paid} thumbColor={paid ? '#00984F' : '#BE3128'} onValueChange={onToggleSwitch} />
                </View>
              </View>}
              {/* caso seja parcelado */}
              {
                paymenTerms === "Parcelado" && <>
                  <View style={styles.boxInputDouble}>
                    {/* entrada */}
                    <View style={[{ width: window.width / 2.5 }]}>
                      <TextInput
                        label="Entrada"
                        style={styles.input}
                        textColor="#000"
                        onChangeText={setProhibited}
                        value={prohibited}
                        mode="flat"
                        activeUnderlineColor="#008F98"
                      />
                    </View>
                    {/* quantidade de parcelas */}
                    <View style={[{ width: window.width / 2.5 }]}>
                      <TextInput
                        label="Qtd de parcelas"
                        style={styles.input}
                        textColor="#000"
                        onChangeText={setNumberInstallments}
                        value={numberInstallments}
                        mode="flat"
                        activeUnderlineColor="#008F98"
                      />
                    </View>
                  </View>
                  <View style={styles.boxInput}>
                    {/* Condição de pagamento */}
                    <Text style={styles.labelDropDown}>Condição de pagamento</Text>
                    <DropDownPicker
                      open={openInstallmentsTime}
                      setOpen={setOpenInstallmentsTime}
                      value={installmentsTime}
                      setValue={setInstallmentsTime}
                      items={listinstallmentsTime}
                      setItems={setListInstallmentsTime}
                      textStyle={{
                        fontSize: 16
                      }}
                      labelStyle={{
                        fontSize: 18
                      }}
                      style={{
                        zIndex: 1,
                        height: 0,
                        borderBottomColor: `${openInstallmentsTime ? "#008F98" : "#BDBDBD"}`,
                        borderRadius: 0,
                        borderWidth: 0,
                        borderBottomWidth: 1,
                        paddingVertical: 0,
                        paddingTop: 12,
                        paddingLeft: 0,

                      }}
                      listItemLabelStyle={{
                        color: "#5B5959"
                      }}
                      dropDownContainerStyle={{
                        marginTop: 0,
                        borderWidth: 0,
                        borderRadius: 10,
                        borderColor: "#008F98",
                        elevation: 20,
                        paddingHorizontal: 10,
                        paddingVertical: 10
                      }}
                      theme="LIGHT"
                    />
                  </View>
                </>
              }
            </View>
            {/* botão de enviar */}
            <View style={styles.submitBox}>
              <TouchableOpacity style={styles.submit} onPress={() => sendRequest()}>
                <Text style={styles.textSubmit}>Salvar minha Despesa</Text>
              </TouchableOpacity>
            </View>
          </ScrollView>
        </SafeAreaView>
      </View>
      <Loading loading={loadingState} />
    </View >
  );
}
const styles = StyleSheet.create({
  container: {
    flex: 1,
    paddingBottom: 400,
    backgroundColor: '#fff',
  },
  headerBox: {
    height: 90,
    backgroundColor: '#008F98',
    paddingTop: StatusBarHeight,
    paddingHorizontal: 25,
  },
  headerContent: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between'
  },
  headerText: {
    fontSize: 16,
    color: '#fff',
    fontWeight: '600'
  },
  bodyBox: {
    paddingHorizontal: 26,
    paddingVertical: 36,
  },
  boxInputDouble: {
    display: "flex",
    flexDirection: "row",
    justifyContent: "space-between",
    marginBottom: 43,
    marginTop: 20
  },
  boxInput: {
    marginBottom: 43
  },
  boxInputValue: {
    marginBottom: 33
  },
  boxInputCompany: {
    marginTop: 30
  },
  boxInputSwitch: {
    display: "flex",
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    marginTop: 20
  },
  inputSwitch: {
    fontSize: 18,
  },
  inputValue: {
    backgroundColor: '#fff',
    fontSize: 36,
    fontWeight: '700',
    paddingHorizontal: 0
  },
  input: {
    backgroundColor: '#fff',
    paddingHorizontal: 0,
    fontSize: 18
  },
  label: {
    fontSize: 12,
    color: "#49454f"
  },
  labelDropDown: {
    marginBottom: -18,
    zIndex: 1000,
    fontSize: 12,
    color: "#49454f"
  },
  inputCalendar: {
    fontSize: 18
  },
  AddInformationLine: {
    display: 'flex',
    alignItems: "center",
  },
  AddInformation: {
    color: "#5B5959",
    fontSize: 16,
    borderBottomColor: "#5B5959",
    borderBottomWidth: 1,
    marginTop: 30
  },
  submitBox: {
    alignItems: 'center',
    marginBottom: 50
  },
  submit: {
    width: 250,
    paddingHorizontal: 45,
    paddingVertical: 16,
    backgroundColor: "#7B61FF",
    borderRadius: 50,
  },
  textSubmit: {
    fontSize: 16,
    color: "#FFFFFF",
    fontWeight: "500",
  },
  buttonDate: {
    borderBottomWidth: 1,
    paddingBottom: 5,
    borderColor: '#BDBDBD',
  }
})
export default AddGain
