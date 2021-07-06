import React from 'react';
import { View, Text, StatusBar, StyleSheet, ViewPropTypes } from 'react-native';

type Props = {
  darkTheme: boolean;
}

export function Header({darkTheme}: Props ) {
  return (
    <View style={[styles.header, {backgroundColor: darkTheme ? '#282B5A' : '#273FAD'}]}>
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
