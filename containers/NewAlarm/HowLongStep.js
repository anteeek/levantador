import React from "react";
import { View } from "react-native";
import { Headline, TextInput } from "react-native-paper";
import { useTheme } from "@react-navigation/native";

export default () => {
    
    const theme = useTheme();
    
    return (
    <View style={styles.root}>
        <Headline style={styles.headline}>Alright, we'll wake you up when you are...</Headline>

        <View style={styles.buttonsContainer}>
            <TextInput
                label="Phone number"
                keyboardType="numeric"
            />
        </View>
        

    </View>)
}

const styles = {
    root: {
        padding: "5%"
    },
    headline: {
        fontSize: 30,
        fontWeight: "bold"
    },
    buttonsContainer: {
        paddingTop: "30%"
    },
    label: {
        fontSize: 20
    }
}
