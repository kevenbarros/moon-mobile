import * as React from 'react';
import { Text, View, StyleSheet, StatusBar, TouchableOpacity, Image } from 'react-native';
import { Dimensions } from 'react-native';
const StatusBarHeight = StatusBar.currentHeight ? StatusBar.currentHeight + 10 : 64

function NotData({ navigation }) {
  const [data, setData] = React.useState([])
  return (
    <>
      <View>
        <View style={styles.boxImage}>
          <Image
            style={styles.img}
            source={require('../../../imgs/metas.png')}
          />
        </View>
        <View>
          <Text style={styles.initialTitle}>
            Até onde deseja chegar?
          </Text>
          <View style={styles.boxSubTitle}>
            <Text style={styles.initialSubTitle}>
              Para chegar a lua.
            </Text>
            <Text style={styles.initialSubTitle}>
              você precisa de um planejamento antes!
            </Text>
          </View>
          <View style={styles.submitBox}>
            <TouchableOpacity style={styles.submit} onPress={() => navigation.navigate('NewGoals')}>
              <Text style={styles.textSubmit}>Partiu, criar minhas metas</Text>
            </TouchableOpacity>
          </View>
        </View>
      </View>
    </>
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

export default NotData
