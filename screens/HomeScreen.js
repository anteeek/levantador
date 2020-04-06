import React from 'react';
import { View } from 'react-native';
import { Title, Button } from "react-native-paper";


export default ({navigation}) => (
    <View style={styles.container}>

        <View style={styles.titleContainer}>
          <Title style={styles.title}>It's been a while! What are we going to do today?</Title>
        </View>

        <Button mode="contained" style={styles.button} onPress={() => navigation.navigate("Alarms")}>
          Select an existing alarm
        </Button>
        
        <Button mode="contained" style={styles.button} onPress={() => navigation.navigate("NewAlarm")}>
          Create a new alarm
        </Button>

    </View>
  );

const styles = {
  container: {
    flex: 1
  },
  titleContainer: {
    height: 90,
    marginTop: 20,
  },
  title: {
    fontSize: 30,
    fontWeight: "900",
    textAlign: "center"
  },
  button: {
    width: "70%",
    marginTop: 20,
    marginLeft: "auto",
    marginRight: "auto"
  }
}