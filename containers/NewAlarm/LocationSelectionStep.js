import React from "react";
import {View} from "react-native";
import {Headline, Paragraph} from "react-native-paper";

import Map from "./Map";

export default () =>{
    
    
    return (
        <View style={styles.container}>
            
            <Map/>

            <Headline style={styles.callToAction}>
                Select a location
            </Headline>
            <Paragraph>
                (the marker is draggable, just hold it for a second!)
            </Paragraph>

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
          flex: 1
      }
}