import * as React from 'react';
import { Text, View, StyleSheet, StatusBar, TouchableOpacity, Image } from 'react-native';
import Header from '../../components/header/Header'
import { Dimensions } from 'react-native';
import NotData from './NotData/index'
import MyGoals from './MyGoals';
const StatusBarHeight = StatusBar.currentHeight ? StatusBar.currentHeight + 10 : 64

function Goals({ route, navigation }) {
  const [data, setData] = React.useState([
    { name: "Nome da meta", missingTimeYear: 3, finalGoal: 6000, goalAchieved: 1000, goalAchievedPercent: 80 },
    { name: "Viagem", missingTimeYear: 3, finalGoal: 6000, goalAchieved: 1000, goalAchievedPercent: 100 },
    { name: "Curso JavaScript", missingTimeYear: 3, finalGoal: 6000, goalAchieved: 1000, goalAchievedPercent: 30 },
  ])
  return (
    <View style={styles.container}>
      <Header picture={route.params?.profile?.picture || ""}></Header>
      {
        data.length > 0 ?
          <MyGoals data={data} navigation={navigation}></MyGoals> :
          <NotData navigation={navigation}></NotData>
      }
    </View>
  );
}


const styles = StyleSheet.create({
  container: {
    flex: 1,

    paddingTop: StatusBarHeight,
    paddingHorizontal: 25,
    paddingBottom: 400,
  },
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
  },
  submitBox: {
    alignItems: 'center',
    marginTop: 64
  },
  submit: {
    width: 280,
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
  img: {
    marginTop: 27,
    width: 290,
    height: 290
  },
  initialTitle: {
    fontSize: 32,
    fontWeight: "700",
    color: "#F5831A",
    textAlign: "center"
  },
  initialSubTitle: {
    fontWeight: "400",
    font: 18,
    textAlign: "center",
    color: "#8A8A8A"
  },
  boxSubTitle: {
    marginTop: 16,
  },
  boxImage: {
    justifyContent: 'center',
    alignItems: 'center',
  }
});

export default Goals
