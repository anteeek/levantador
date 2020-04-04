import React, { useEffect, useState } from "react";
import {View, Dimensions} from "react-native";
import {Text} from "react-native-paper";


export default () =>{
    
    
    return (
        <View style={styles.container}>
            


            <Text style={styles.callToAction}>Select a location</Text>
        </View>
)}



const styles = {
    container: {
        marginTop: "2%",
        height: "80%",
        alignItems: 'center',
        justifyContent: 'center',
      },
      callToAction: {
          fontSize: 20,
          flex: 1
      }
}