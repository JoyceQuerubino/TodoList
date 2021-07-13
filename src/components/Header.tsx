import React, { useContext } from 'react';
import { View, Text, StatusBar, StyleSheet } from 'react-native';
import { ThemeContext } from '../pages/Home';




export function Header() {
  const nightMode = useContext(ThemeContext);

  return (
    <View style={[styles.header, {backgroundColor: nightMode ? '#282B5A' : '#273FAD'}]}>
      <Text style={styles.headerText}>to.</Text>
      <Text style={[styles.headerText, { fontFamily: 'Poppins-SemiBold' }]}>do</Text>
    </View>
  )
}

const styles = StyleSheet.create({
  header: {
    paddingTop: StatusBar.currentHeight,
    paddingBottom: 44,
    backgroundColor: '#273FAD',
    justifyContent: 'center',
    alignItems: 'center',
    flexDirection: 'row'
  },
  headerText: {
    fontSize: 24,
    color: '#FFF',
    fontFamily: 'Poppins-Regular',
  }, 
  nightMode:{
    backgroundColor: '#282B5A', 
    paddingTop: StatusBar.currentHeight,
    paddingBottom: 44,
    justifyContent: 'center',
    alignItems: 'center',
    flexDirection: 'row'

  }
});
