import * as React from 'react';
import { Text, View, StyleSheet, StatusBar, TouchableOpacity, Image, SafeAreaView, ScrollView } from 'react-native';
import { Dimensions } from 'react-native';
import { Feather } from '@expo/vector-icons'

function MyGoals({ data = [], navigation }) {
  function valueMask(value) {
    let number
    number = value.toFixed(2).split(".");
    if (value > 99) {
      number[0] = "R$ " + number[0].split(/(?=(?:...)*$)/).join(".");
    } else {
      number[0] = "R$ " + number[0]
    }
    return number.join(",");
  }
  return (
    <View style={styles.container}>
      <SafeAreaView style={styles.containerScroll}>
        <ScrollView showsVerticalScrollIndicator={false} contentContainerStyle={styles.scrollViewContent}>
          {
            data.map((goal) => {
              return <View style={styles.boxCard}>
                <View style={styles.boxInfos}>
                  <View style={styles.boxInfosTitle}>
                    <Text style={styles.title}>{goal.name}</Text>
                    <Text style={styles.time}>faltam {goal.missingTimeYear} anos</Text>
                  </View>
                  <Text style={styles.money}>{`${valueMask(goal.goalAchieved)} de ${valueMask(goal.finalGoal)}`}</Text>
                </View>
                <View style={styles.boxGraphics}>
                  <View style={styles.boxImgProgress}>
                    {
                      !(goal.goalAchievedPercent === 100) && <Image
                        style={styles.img}
                        source={require('../../../imgs/flag.png')}
                      />
                    }
                  </View>
                  <View style={{
                    ...styles.progress,
                    height: `${goal.goalAchievedPercent}%`,
                    backgroundColor: `${goal.goalAchievedPercent === 100 ? "#00984F" : "#FF9432"}`,
                  }}
                  >
                    {
                      !(goal.goalAchievedPercent === 100) ? <Text style={styles.progressText}>{goal.goalAchievedPercent}%</Text> : <Image
                        style={styles.img}
                        source={require('../../../imgs/flag-complete.png')}
                      />
                    }
                  </View>
                </View>
              </View>
            })
          }
        </ScrollView>
      </SafeAreaView>
      <TouchableOpacity style={styles.submit} onPress={() => navigation.navigate('NewGoals')}>
        <View style={styles.boxText}>
          <Feather name='plus' size={28} color="#fff" />

          <Text style={styles.textSubmit} onPress={() => navigation.navigate('NewGoals')}>criar nova meta</Text>
        </View>

      </TouchableOpacity>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    height: Dimensions.get('window').height - 64 - 64,
  },
  scrollViewContent: {
    height: "130%"
  },
  boxCard: {
    display: "flex",
    marginVertical: 8,
    paddingHorizontal: 20,
    paddingVertical: 18,
    height: 200,
    backgroundColor: "#F6F6F6",
    flexDirection: "row",
    justifyContent: "space-between",
    borderRadius: 20
  },
  boxInfos: {
    display: "flex",
    flexDirection: "column",
    justifyContent: "space-between",
    alignItems: "flex-start",
    height: "100%",
  },
  title: {
    fontSize: 18,
    color: "#5B5959",
    fontWeight: "600",
    marginBottom: 9
  },
  time: {
    fontSize: 14,
    fontWeight: "400",
    color: "#8A8A8A"
  },
  money: {
    fontSize: 16,
    fontWeight: "400",
    color: "#5B5959"
  },
  boxGraphics: {
    width: 34,
    height: "100%",
    backgroundColor: "#EAE4E4",
    borderRadius: 20,
    position: "relative"
  },
  progress: {
    position: "absolute",
    bottom: 0,
    width: "100%",
    height: "40%",
    backgroundColor: "#FF9432",
    borderRadius: 20,
    display: "flex",
    justifyContent: "center",
    alignItems: "center"
  },
  progressText: {
    color: "#fff",
    fontSize: 14,
    fontWeight: "600"
  },
  boxImgProgress: {
    position: "absolute",
    top: 10,
    alignSelf: "center",
    zIndex: 100
  },
  submit: {
    position: "absolute",
    alignSelf: "center",
    bottom: 20,
    width: 220,
    paddingHorizontal: 45,
    paddingVertical: 12,
    backgroundColor: "#7B61FF",
    borderRadius: 50,
  },
  boxText: {
    display: "flex",
    flexDirection: "row",
    justifyContent: "center",
    alignItems: "center"
  },
  textSubmit: {
    fontSize: 16,
    textAlign: "center",
    color: "#FFFFFF",
    fontWeight: "500",
    marginLeft: 8
  },

});

export default MyGoals
