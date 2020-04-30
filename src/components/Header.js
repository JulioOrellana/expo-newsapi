import PropTypes from 'prop-types';
import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import Colors from '../constants/Colors';

const styles = StyleSheet.create({
  headerContainer: {
    marginTop: 20,
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
})

export default Header = ({ headerText }) => (
  <View style={styles.headerContainer}>
    <Text style={styles.headerText}>{headerText}</Text>
  </View>
)

Header.propTypes = {
  headerText: PropTypes.string,
}

Header.defaultProps = {
  headerText: '',
}