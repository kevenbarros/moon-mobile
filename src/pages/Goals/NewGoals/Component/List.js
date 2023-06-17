import * as React from 'react';
import { View, StyleSheet, TouchableOpacity, Image, Text } from 'react-native';
import Key from '../../../../imgs/img-goals/key.png'
import Travel from '../../../../imgs/img-goals/travel.png'
import Education from '../../../../imgs/img-goals/education.png'
import Retirement from '../../../../imgs/img-goals/retirement.png'
import Birthday from '../../../../imgs/img-goals/birthday.png'
import Business from '../../../../imgs/img-goals/business.png'
import Fun from '../../../../imgs/img-goals/fun.png'
import Health from '../../../../imgs/img-goals/health.png'
function List() {
  const [renderObj, setRenderObj] = React.useState([
    {
      label: "Casa",
      img: Key
    },
    {
      label: "Viagem",
      img: Travel
    },
    {
      label: "Educação",
      img: Education
    },
    {
      label: "Aposentadoria",
      img: Retirement
    },
    {
      label: "Aniversário",
      img: Birthday
    },
    {
      label: "Negócio",
      img: Business
    },
    {
      label: "Diversão",
      img: Fun
    },
    {
      label: "Saúde",
      img: Health
    },
  ])
  return (<>
    <View style={styles.container}>

      {
        renderObj.map((e) => {
          return (<TouchableOpacity style={styles.box}>
            <Image
              style={styles.img}
              source={e.img}
            />
            <Text style={styles.label}>{e.label}</Text>
          </TouchableOpacity >)
        })
      }
    </View>

  </>
  );
}
const styles = StyleSheet.create({
  container: {
    display: "flex",
    flexDirection: "row",
    justifyContent: "space-around",
    flexWrap: "wrap",
    height: 900
  },
  box: {
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    width: 160,
    height: 184,
    flexDirection: 'column',
    paddingHorizontal: 25,
    paddingVertical: 17,
    marginBottom: 10,
    backgroundColor: '#F6F6F6',
    borderRadius: 10,
    marginVertical: 8
  },
  label: {
    fontSize: 16,
    fontWeight: '400',
    marginTop: 14,
    color: '#5B5959'
  },
  value: {
    fontSize: 16,
    fontWeight: '500',
    color: '#00984F'
  },
  valueNegative: {
    fontSize: 16,
    fontWeight: '500',
    color: '#FF3C30'
  },
  img: {
    width: 110,
    height: 120
  },
});

export default List
