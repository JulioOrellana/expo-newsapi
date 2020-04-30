import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import { Dictionary } from '../lib/dictionary';

const styles = StyleSheet.create({
  container: {
    alignItems: 'center',
  },
})

export default NoNews = () => (
  <View style={styles.container}>
    <Text>{Dictionary.main.noNews}</Text>
  </View>
)