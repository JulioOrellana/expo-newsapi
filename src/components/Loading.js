import PropTypes from 'prop-types'
import React from 'react'
import { ActivityIndicator, StyleSheet, Text, View } from 'react-native'
import Colors from '../constants/Colors'

const styles = StyleSheet.create({
  container: {
    justifyContent: 'center',
    alignItems: 'center',
    marginTop: 20,
    flexDirection: 'row',
  },
  loadingText: {
    color: Colors.textBlack,
    fontSize: 20,
    marginRight: 10,
  },
})

export const Loading = ({ color, showLoading, showLoadingText, loadingText }) => (
  <View style={styles.container}>
    {showLoadingText && <Text style={styles.loadingText}>{loadingText}</Text>}
    {showLoading && <ActivityIndicator size="large" color={color} />}
  </View>
)

Loading.propTypes = {
  color: PropTypes.string,
  showLoading: PropTypes.bool,
  showLoadingText: PropTypes.bool,
  loadingText: PropTypes.string,
}

Loading.defaultProps = {
  color: Colors.tintColor,
  showLoading: true,
  showLoadingText: false,
  loadingText: '',
}