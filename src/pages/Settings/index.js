import * as React from 'react';
import { useContext } from 'react';
import { Text, View, StyleSheet, StatusBar, Image } from 'react-native';
import { Usercontext } from '../../context/TesteContext';
import { Feather } from '@expo/vector-icons'
import { TouchableOpacity } from 'react-native';

const StatusBarHeight = StatusBar.currentHeight ? StatusBar.currentHeight + 22 : 64

function Settings() {
  const { user } = useContext(Usercontext)
  const list = [
    { title: "Meus dados", icon: "user", navegation: "" },
    { title: "Categorias", icon: "list", navegation: "" },
    { title: "Alertas", icon: "bell", navegation: "" },
    { title: "Ajuda", icon: "life-buoy", navegation: "" },
    { title: "Sobre", icon: "help-circle", navegation: "" },
    { title: "Sair", icon: "log-out", navegation: "" },
  ]
  return (
    <View style={styles.container}>
      <View style={styles.boxHeader}>
        <View style={styles.borderPerfil}>
          <Image
            style={styles.perfil}
            source={{ uri: user.picture }}
          />
          <View style={styles.premium}>
            <Image source={require('../../imgs/crown.png')}></Image>
          </View>
        </View>
        <View>
          <Text style={styles.titleName}>{user.name}</Text>
          <Text style={styles.subTitleName}>Usuário Premium</Text>
        </View>
        <View style={styles.decorationOne}></View>
        <View style={styles.decorationTwo}></View>
        <View style={styles.decorationThree}></View>
      </View>

      <View style={styles.body}>
        <TouchableOpacity style={styles.share}>
          <View style={styles.TextShare} >
            <Text style={styles.titleShare}>Convide seus amigos</Text>
            <Text style={styles.subTitleShare}>Ajude seus amigos a conseguir seus objetivos financeiros e chegar a lua</Text>
          </View>
          <Image
            style={styles.imgShare}
            source={require('../../imgs/share.png')}
          />
        </TouchableOpacity>
        <View>
          {
            list.map((e, i) => {
              return <TouchableOpacity style={styles.itemList}>
                <View style={styles.iconBehave}>
                  <Feather name={e.icon} size={27} color={"#5B5959"} />
                  <Text key={i} style={{ marginLeft: 14 }}>{e.title}</Text>
                </View>

                <Feather name="chevron-right" size={27} color={"#5B5959"} />

              </TouchableOpacity>
            })
          }
        </View>
      </View>

    </View>

  );
}
const styles = StyleSheet.create({
  container: {
    flex: 1,
    // paddingTop: StatusBarHeight,
    backgroundColor: '#FFFFFF',
  },
  boxHeader: {
    backgroundColor: "#FF9432",
    paddingTop: StatusBarHeight,
    paddingBottom: 28,
    borderBottomEndRadius: 30,
    borderBottomLeftRadius: 30,
    display: "flex",
    paddingHorizontal: 27,
    flexDirection: "row",
    alignItems: "center",
    position: "relative"
  },
  borderPerfil: {
    marginRight: 25,
    position: "relative"
  },
  perfil: {
    height: 90,
    width: 90,
    borderRadius: 50,
    borderWidth: 4,
    borderColor: '#fff',
  },
  titleName: {
    fontSize: 20,
    fontWeight: "800",
    color: "#FFFFFF",
    marginVertical: 4,

  },
  subTitleName: {
    marginVertical: 4,
    fontWeight: "600",
    fontSize: 16,
    color: "#fff"
  },
  premium: {
    position: "absolute",
    top: -5,
    right: -5,
    backgroundColor: "#fff",
    width: 30,
    height: 30,
    borderRadius: 50,
    display: "flex",
    justifyContent: "center",
    alignItems: "center"
  },
  body: {
    paddingHorizontal: 26,
  },
  share: {
    backgroundColor: "#EFEFEF",
    display: "flex",
    borderRadius: 20,
    marginTop: 22,
    padding: 20,
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center"
  },
  imgShare: {
    width: 60,
    height: 60
  },
  TextShare: {
    width: "80%"
  },
  titleShare: {
    fontSize: 16,
    fontWeight: "600",
    color: "#484747"
  },
  subTitleShare: {
    fontWeight: "500",
    fontSize: 12,
    marginTop: 8,
    color: "#848484"
  },
  decorationOne: {
    position: "absolute",
    width: 139,
    height: 121,
    top: 20,
    left: -10,
    borderRadius: 30,
    rotation: -30,
    backgroundColor: "#D9D9D91A",
    zIndex: -10,
  },
  decorationTwo: {
    position: "absolute",
    width: 139,
    height: 121,
    top: 20,
    left: "45%",
    borderRadius: 30,
    rotation: -20,
    backgroundColor: "#D9D9D91A",
    zIndex: -10,
  },
  decorationThree: {
    position: "absolute",
    width: 139,
    height: 121,
    bottom: -10,
    right: 5,
    borderRadius: 30,
    rotation: -30,
    backgroundColor: "#D9D9D91A",
    zIndex: -10,
  },
  itemList: {
    display: "flex",
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-between",
    paddingBottom: 22,
    borderBottomWidth: 1,
    borderBottomColor: "#EAEAEA",
    marginTop: 22
  },
  iconBehave: {
    display: "flex",
    flexDirection: "row",
    alignItems: "center"
  }
})
export default Settings
