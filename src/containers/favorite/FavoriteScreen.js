import * as React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import { useSafeArea } from 'react-native-safe-area-context';
import Colors from '../../constants/Colors';
import { Dictionary } from '../../lib/dictionary';

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: Colors.backgroundColor,
  },
  headerContainer: {
    marginVertical: 20,
    marginHorizontal: 20,
    padding: 10,
    justifyContent: 'center',
    alignContent: 'center',
    borderBottomColor: Colors.tintColor,
    borderBottomWidth: 1,
  },
  headerText: {
    fontSize: 24,
    textAlign: 'center',
    fontWeight: 'bold',
    fontFamily: 'space-mono',
  },
});

export default Favorite = () => {
  const insets = useSafeArea()
  return (
    <View style={[styles.container, { paddingTop: insets.top }]}>
      <View style={styles.headerContainer}>
        <Text style={styles.headerText}>{Dictionary.favorite.headerTitle}</Text>
      </View>
    </View>
  )
}


