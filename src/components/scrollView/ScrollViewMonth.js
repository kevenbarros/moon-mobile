import * as React from 'react';
import { View, ScrollView, StyleSheet, TouchableOpacity, Text, SafeAreaView, FlatList } from 'react-native';
import { useContext } from 'react';
import { Usercontext } from '../../context/TesteContext'
import { useRef } from 'react';
import { useEffect } from 'react';

const Month = [
  'Janeiro',
  'Fevereiro',
  'Março',
  'Abril',
  'Maio',
  'Junho',
  'Julho',
  'Agosto',
  'Setembro',
  'Outubro',
  'Novembro',
  'Dezembro',
  '',
  ''
]

function ScrollViewMonth({ navigation }) {
  const { fecthingLoading, filterMonth, setFilterMonth } = useContext(Usercontext)
  const flatListRef = useRef(null);
  const month = new Date().getMonth()

  function layout() {
    flatListRef.scrollToIndex({ index: 2 })
  }
  return (
    <SafeAreaView>
      <ScrollView style={styles.scrollView} horizontal={true} showsHorizontalScrollIndicator={false}>
        {/* <View onLayout={() => layout()}> */}
        <FlatList
          ref={flatListRef}
          data={Month}
          horizontal={true}
          keyExtractor={(item, index) => index}
          showsVerticalScrollIndicator={false}
          renderItem={({ item, index }) => <TouchableOpacity ><Text style={month === index ? styles.currentMonth : styles.TextMonth}>{item}</Text></TouchableOpacity>}
        />
        {/* </View> */}
      </ScrollView>
    </SafeAreaView >
  );
}
const styles = StyleSheet.create({
  scrollView: {
    marginBottom: 23,
  },
  TextMonth: {
    fontSize: 16,
    fontWeight: '600',
    marginHorizontal: 20,
    color: '#8A8A8A'
  },
  currentMonth: {
    color: '#008F98',
    fontSize: 16,
    fontWeight: '600',
    marginHorizontal: 20,
  }
});

export default ScrollViewMonth
