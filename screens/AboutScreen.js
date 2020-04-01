import React from 'react';
import { StyleSheet } from 'react-native';
import { Text } from "react-native-paper";
import { ScrollView } from 'react-native-gesture-handler';

export default function AboutScreen() {
  return (
    <ScrollView style={styles.container} contentContainerStyle={styles.contentContainer}>
      <Text>Just get to work already!</Text>
    </ScrollView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fafafa',
  },
  contentContainer: {
    paddingTop: 15,
  }
});
