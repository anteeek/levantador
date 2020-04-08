import React from "react";
import {View} from "react-native";
import {Headline, Paragraph} from "react-native-paper";

import Map from "./Map";

export default (props) =>{
        
    return (
        <View style={styles.container}>
            
            <Map onChangeValue={props.onChangeValue} markerLocation={props.values.location} />

            <Headline style={styles.callToAction}>
                Select the location
            </Headline>

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