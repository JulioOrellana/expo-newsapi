// import * as WebBrowser from 'expo-web-browser';
import * as React from 'react';
import { StyleSheet, View } from 'react-native';


const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
  },
});

export default function HomeScreen() {
  return (
    <View style={styles.container}></View>
  );
}


// function handleLearnMorePress() {
//   WebBrowser.openBrowserAsync('https://docs.expo.io/versions/latest/workflow/development-mode/');
// }

