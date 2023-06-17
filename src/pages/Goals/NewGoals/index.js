import * as React from 'react';
import { Text, View, StyleSheet, StatusBar, TouchableOpacity, Image, SafeAreaView, ScrollView, FlatList } from 'react-native';
import { Dimensions } from 'react-native';
import List from './Component/List';
const StatusBarHeight = StatusBar.currentHeight ? StatusBar.currentHeight + 10 : 64

function NewGoals() {
  const data = [
    {
      label: "Casa",
      img: '../../../imgs/img-goals/key.png'
    }
  ]
  return (
    <View style={styles.container}>

      <View style={styles.boxImage}>

      </View>
      <Text style={styles.initialTitle}>
        Escolha sua Meta
      </Text>
      <View style={styles.scrollViewContainer}>
        <SafeAreaView>
          <ScrollView showsVerticalScrollIndicator={false}>
            {/* <FlatList
              data={data}
              keyExtractor={(item, index) => index}
              showsVerticalScrollIndicator={true}
              renderItem={({ item, index }) => }
            /> */}
            <List />
          </ScrollView>
        </SafeAreaView>


      </View>

      <View style={styles.submitBox}>
        <TouchableOpacity style={styles.submit} >
          <Text style={styles.textSubmit}>criar outras metas</Text>
        </TouchableOpacity>
      </View>
    </View >
  );
}


const styles = StyleSheet.create({

  container: {
    height: '100%',
    paddingTop: StatusBarHeight,
    paddingHorizontal: 25,
    paddingBottom: 400,
  },
  scrollViewContainer: {
    height: 730,
  },
  scrollViewContent: {
    paddingBottom: 400,
  },
  submitBox: {
    position: "absolute",
    bottom: 30,
    alignSelf: 'center',
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
    textAlign: "center"
  },
  img: {
    marginTop: 27,
    width: 290,
    height: 290
  },
  initialTitle: {
    fontSize: 20,
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

export default NewGoals
