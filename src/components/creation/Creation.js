import React, { useRef, useEffect } from 'react';
import { View, StyleSheet, TouchableOpacity, Text, Animated, TouchableWithoutFeedback, Button, TouchableHighlight } from 'react-native';
import { Feather } from '@expo/vector-icons'

function Creation({ navigation }) {
  const rotateAnim = useRef(new Animated.Value(0)).current;
  const fadeAnim = useRef(new Animated.Value(0)).current;
  const [active, setActive] = React.useState(false)
  const [modal, setModal] = React.useState(false)

  async function openModal() {
    await setActive(!active)
    fade()
    if (active) {
      Animated.timing(rotateAnim, {
        toValue: 1,
        duration: 500,
        useNativeDriver: true
      }).start();
      return
    }
    Animated.timing(rotateAnim, {
      toValue: 0,
      duration: 500,
      useNativeDriver: true
    }).start();
  };
  function fade() {
    if (!active) {
      fadeIn()
      return
    }
    fadeOut()
  }
  const fadeIn = () => {
    setModal(true)
    Animated.timing(fadeAnim, {
      toValue: 1,
      duration: 300,
      useNativeDriver: true
    }).start();
  };
  const fadeOut = () => {
    const time = setTimeout(() => setModal(!modal), 300)
    Animated.timing(fadeAnim, {
      toValue: 0,
      duration: 300,
      useNativeDriver: true
    }).start();
  };
  let spin = rotateAnim.interpolate({
    inputRange: [0, 1],
    outputRange: ['0deg', '45deg']
  })
  useEffect(() => {
    Animated.timing(rotateAnim, {
      toValue: 1,
      duration: 500,
      useNativeDriver: true
    }).start();
  }, [])
  return (
    <View style={styles.box}>
      {
        modal &&
        <Animated.View style={[styles.modal, styles.shadowProp, { opacity: fadeAnim }]}>
          <View>
            <TouchableOpacity style={styles.modalButton} onPress={() => navigation.navigate('CreateExpense')}>
              <View style={styles.modalIcon}><Feather name='minus' size={12} color="#fff" /></View>
              <Text style={styles.text}>Adicionar Despesa</Text>
            </TouchableOpacity>
            <TouchableOpacity onPress={() => navigation.navigate('AddGain')} style={styles.modalButton} >
              <View style={[styles.modalIcon, { backgroundColor: 'rgba(0, 152, 79, 0.4)' }]}><Feather name='plus' size={12} color="#fff" /></View>
              <Text style={styles.text}>Adicionar Ganho</Text>
            </TouchableOpacity>
          </View>
        </Animated.View >
      }
      <TouchableHighlight style={styles.boxButton} onPress={async () => openModal()} >
        <Animated.View style={[{ transform: [{ rotate: spin }] }
        ]}>
          <Feather name='x' size={28} color="#fff" />
        </Animated.View>
      </TouchableHighlight >
    </View >

  );
}
const styles = StyleSheet.create({
  box: {
    justifyContent: 'flex-end',
    alignItems: 'flex-end',
    position: 'absolute',
    right: 20,
    bottom: 60
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
    color: '#000000',
  },
});

export default Creation
