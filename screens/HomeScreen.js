import React from 'react';
import { StyleSheet, View } from 'react-native';
import { Text } from "react-native-paper";
import { ScrollView } from 'react-native-gesture-handler';


export default function HomeScreen() {
  return (
    <View style={styles.container}>

      <ScrollView style={styles.container} contentContainerStyle={styles.contentContainer}>

          <Text>sample text</Text>

      </ScrollView>


    </View>
  );
}

HomeScreen.navigationOptions = {
  header: null,
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
  },
  contentContainer: {
    paddingTop: 30,
  }
});
