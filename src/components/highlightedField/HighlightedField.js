import * as React from 'react';
import { View, StyleSheet, TouchableOpacity, Image, Text } from 'react-native';
import { Feather } from '@expo/vector-icons'

function HighlightedField({ title, value, buttons }) {
  function valueMask(value) {
    const number = value.toFixed(2).split(".");
    number[0] = "R$ " + number[0].split(/(?=(?:...)*$)/).join(".");
    return number.join(",");
  }
  return (
    <TouchableOpacity style={buttons ? styles.box : styles.boxSecondary}>
      <View style={styles.data}>
        <Text style={buttons ? styles.title : styles.titleSecondary}>{title}</Text>
        <Text style={buttons ? styles.value : styles.valueSecondary}>{valueMask(value)}</Text>
      </View>
      <View style={buttons ? styles.button : styles.hidden}>
        <Feather name='plus' size={17} color="#FF9432" />
      </View>
      <View style={buttons ? styles.decoration : styles.hidden}></View>
    </TouchableOpacity >
  );
}
const styles = StyleSheet.create({
  box: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    marginBottom: 8,
    backgroundColor: '#FF9432',
    paddingHorizontal: 20,
    borderRadius: 20,
    position: 'relative'
  },
  boxSecondary: {
    width: '49%',
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    marginBottom: 8,
    backgroundColor: '#FFA048',
    paddingHorizontal: 20,
    borderRadius: 20,
    position: 'relative'
  },
  decoration: {
    backgroundColor: '#FFA048',
    width: '100%',
    height: '100%',
    position: 'absolute',
    borderRadius: 20,
    borderTopEndRadius: 50,
    borderBottomEndRadius: 50,
    zIndex: -1
  },
  data: {
    marginVertical: 17
  },
  button: {
    alignItems: 'center',
    justifyContent: 'center',
    width: 30,
    height: 30,
    borderRadius: 50,
    backgroundColor: '#fff'
  },
  title: {
    fontWeight: '600',
    fontSize: 14,
    color: '#FFFFFF',
    marginBottom: 7
  },
  titleSecondary: {
    fontWeight: '400',
    fontSize: 14,
    color: '#FFFFFF',
    marginBottom: 7
  },
  value: {
    fontSize: 18,
    color: '#FFFFFF',
    fontWeight: '700',
  },
  valueSecondary: {
    fontSize: 18,
    color: '#FFFFFF',
    fontWeight: '600',
  },
  hidden: {
    display: 'none'
  }
});

export default HighlightedField
