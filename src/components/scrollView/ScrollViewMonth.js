import * as React from 'react';
import { ScrollView, StyleSheet, TouchableOpacity, Text, SafeAreaView, FlatList } from 'react-native';

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
  const month = new Date().getMonth()
  return (
    <SafeAreaView>
      <ScrollView style={styles.scrollView} horizontal={true} showsHorizontalScrollIndicator={false}>
        <FlatList
          style={styles.FlatList}
          data={Month}
          horizontal={true}
          keyExtractor={(item, index) => index}
          showsVerticalScrollIndicator={false}
          renderItem={({ item, index }) => <TouchableOpacity><Text style={month === index ? styles.currentMonth : styles.TextMonth}>{item}</Text></TouchableOpacity>}
        />
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
    color: '#5B5959',
    fontSize: 16,
    fontWeight: '600',
    marginHorizontal: 20,
  }
});

export default ScrollViewMonth
