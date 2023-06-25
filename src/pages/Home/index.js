import * as React from 'react';
import { Text, View, StyleSheet, StatusBar, FlatList, TouchableOpacity, ScrollView, SafeAreaView } from 'react-native';
import Creation from "../../components/creation/Creation"
import ScrollViewMonth from '../../components/scrollView/ScrollViewMonth';
import { Feather } from '@expo/vector-icons'
import { Dimensions } from 'react-native';
import Header from '../../components/header/Header'
import HighlightedField from '../../components/highlightedField/HighlightedField'
import NoData from '../../components/noData/NoData'
import List from '../../components/list/List';
import Loading from '../../components/loading/Loading';
import { useContext } from 'react';
import { Usercontext } from '../../context/TesteContext'

const StatusBarHeight = StatusBar.currentHeight ? StatusBar.currentHeight + 10 : 64

function Home({ route, navigation }) {
  const { user, fecthingLoading, fecthingNotLoading, listGeneralData, loadingGeneral } = useContext(Usercontext)

  React.useEffect(() => {
    if (route && route?.name === "Home") {
      if (listGeneralData && !listGeneralData.length) {
        fecthingLoading()
      } else {
        fecthingNotLoading()
      }
    }
  }, [route])
  return (
    <View style={styles.container}>
      <Header picture={user.picture || ""}></Header>
      <View style={styles.containerMonth}>
        <TouchableOpacity style={styles.iconBehave} >
          <Feather name='chevron-left' size={27} color="#8A8A8A" />
        </TouchableOpacity>
        <View style={styles.ScrollViewMonth}>
          <ScrollViewMonth />
        </View>
        <TouchableOpacity style={styles.iconBehave} >
          <Feather name='chevron-right' size={27} color="#8A8A8A" />
        </TouchableOpacity>
      </View>
      <View>
        <HighlightedField title="Saldo agora" buttons={true} value={6504}></HighlightedField>
        <View style={styles.balancesAndExpenses}>
          <HighlightedField title="Saldo Mensal" buttons={false} value={10000}></HighlightedField>
          <HighlightedField title="Gastos Mensais" buttons={false} value={1000}></HighlightedField>
        </View>
      </View>
      <Text style={styles.textHistory}>{"Histórico de Despesas"}</Text>
      <View style={styles.line}></View>
      <View style={styles.decoration}></View>
      {
        listGeneralData.length === 0 ? <NoData /> :
          <SafeAreaView>
            <ScrollView showsVerticalScrollIndicator={false}>
              <FlatList
                data={listGeneralData}
                keyExtractor={(item, index) => index}
                showsVerticalScrollIndicator={true}
                renderItem={({ item, index }) => <List label={item.description} value={item.value} key={index} />}
              /></ScrollView>
          </SafeAreaView>
      }
      <Creation navigation={navigation}></Creation>
      <Loading loading={loadingGeneral} />
    </View>
  );
}

const styles = StyleSheet.create({
  containerMonth: {
    flexDirection: 'row',
  },
  ScrollViewMonth: {
    width: Dimensions.get('window').width - 110
  },
  balancesAndExpenses: {
    flexDirection: 'row',
    justifyContent: 'space-between'
  },
  container: {
    height: '100%',
    paddingTop: StatusBarHeight,
    paddingHorizontal: 25,
    paddingBottom: 400,
    backgroundColor: '#fff'
  },
  scrollView: {
  },
  TextMonth: {
    fontSize: 16,
    fontWeight: '600',
    marginHorizontal: 20,
  },
  textHistory: {
    fontWeight: '500',
    fontSize: 16,
    color: '#000000',
    marginVertical: 15
  },
  line: {
    width: '100%',
    height: 1,
    backgroundColor: '#D9D9D9'
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

export default Home
