import { StatusBar } from 'expo-status-bar';
import React from 'react';
import { StyleSheet, Text, View  } from 'react-native';
import {WebView} from 'react-native-webview'

export default function App() {
  return (
       <WebView
        source={{
          uri: 'https://apnakonnect.com/media/post_files-48e76dc4-bd1c-489a-9f55-57bbff208eb11683926341971-VID-20230323-WA0049.mp4',
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
