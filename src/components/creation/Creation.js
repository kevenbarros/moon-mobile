import React, { useRef, useEffect } from 'react';
import { View, StyleSheet, TouchableOpacity, Text, Animated } from 'react-native';
import { Feather } from '@expo/vector-icons'

function Creation({ navigation }) {

  const [active, setActive] = React.useState(false)
  function showModal() {
    setActive(!active)
  }
  return (
    <View style={styles.box}>
      {
        active &&
        <View style={[styles.modal, styles.shadowProp]}>
          <View>
            <TouchableOpacity style={styles.modalButton}>
              <View style={styles.modalIcon}><Feather name='minus' size={12} color="#fff" /></View>
              <Text style={styles.text}>Adicionar Despesa</Text>
            </TouchableOpacity>
            <TouchableOpacity style={styles.modalButton} >
              <View style={[styles.modalIcon, { backgroundColor: 'rgba(0, 152, 79, 0.4)' }]}><Feather name='plus' size={12} color="#fff" /></View>
              <Text style={styles.text}>Adicionar Ganho</Text>
            </TouchableOpacity>
          </View>
        </View >
      }
      <TouchableOpacity style={styles.boxButton} onPress={() => showModal()} >
        <View style={active && styles.rotation}>
          <Feather name='plus' size={28} color="#fff" />
        </View>
      </TouchableOpacity >
    </View >

  );
}
const styles = StyleSheet.create({
  box: {
    justifyContent: 'flex-end',
    alignItems: 'flex-end',
    marginRight: 20,
  },
  modal: {
    width: 232,
    height: 120,
    backgroundColor: '#fff',
    marginBottom: 10,
    borderRadius: 10,
    alignItems: 'center',
    justifyContent: 'center',
    elevation: 20,
    shadowColor: '#52006A',
  },
  shadowProp: {
    shadowColor: '#171717',
    shadowOffset: { width: -2, height: 4 },
    shadowOpacity: 0.2,
    shadowRadius: 3,
  },
  modalButton: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'flex-start',
    marginVertical: 14
  },
  modalIcon: {
    width: 25,
    height: 25,
    backgroundColor: 'rgba(255, 61, 0, 0.4)',
    justifyContent: 'center',
    alignItems: 'center',
    borderRadius: 50
  },
  boxButton: {
    justifyContent: 'center',
    alignItems: 'center',
    marginBottom: 20,
    backgroundColor: '#7B61FF',
    width: 48,
    height: 48,
    borderRadius: 50,
  },
  text: {
    marginLeft: 10,
    fontSize: 16,
    fontWeight: '400',
    color: '#000000'
  },
  rotation: {
    transform: [{ rotate: "45deg" }],
  }
});

export default Creation
