import { StatusBar } from 'expo-status-bar';
import React from 'react';
import { StyleSheet, Text, View  } from 'react-native';
import {WebView} from 'react-native-webview'

export default function App() {
  return (
       <WebView
        source={{
          uri: 'https://www.apnakonnect.com/media/media-1684139666273-264779424-WhatsApp%20Video%202023-05-15%20at%201.13.13%20PM.mp4',
        }}
        style={styles.container}
        />
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
