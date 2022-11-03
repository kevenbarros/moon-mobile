import * as React from 'react';
import { View, StyleSheet, TouchableOpacity, Image, Text } from 'react-native';

function List({ navigation, label, value }) {
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
    <TouchableOpacity style={styles.box}>
      <Text style={styles.label}>{label}</Text>
      <Text style={value >= 0 ? styles.value : styles.valueNegative}>{valueMask(value)}</Text>
    </TouchableOpacity >
  );
}
const styles = StyleSheet.create({
  box: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
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
    color: '#8A8A8A'
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
  }
});

export default List
