import React from "react";
import { View } from "react-native";
import { Headline, TextInput } from "react-native-paper";

export default ({values: { time, distance, basedOn }, onChangeValue}) => {
        
    return (
    <View style={styles.root}>
        <Headline style={styles.headline}>Alright, we'll wake you up when you are...</Headline>

        <View style={styles.inputWrapper}>
            <TextInput
                keyboardType="numeric"
                fontSize={50}
                style={styles.input}
                value={basedOn === "time" ? time : distance}
                onChangeText={newValue => {
                    if(newValue.match(/^[0-9]*$/gm))
                      onChangeValue(basedOn, newValue)}   
                }
            />
        </View>
        
        <Headline style={styles.headline}>{`${basedOn === "time" ? "minutes" : "kilometers"} before reaching destination`}</Headline>
    </View>
    )
}

const styles = {
    root: {
        padding: "5%",
    },
    headline: {
        textAlign: "center",
        fontSize: 40,
        fontWeight: "bold",
        paddingTop: 20
    },
    inputWrapper: {
        flexDirection: "row",
        justifyContent: "center"
    },
    input: {
        fontSize: 130,
        width: "100%",
        height: 200,
        flexDirection: "row",
        justifyContent: "center"
    }
}
