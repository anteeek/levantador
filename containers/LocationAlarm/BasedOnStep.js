import React from "react";
import { View } from "react-native";
import { Headline, RadioButton, Text } from "react-native-paper";
import { useTheme } from "@react-navigation/native";

export default (props) => {
    
    const theme = useTheme();
    
    return (
    <View style={styles.root}>
        <Headline style={styles.headline}>Wake me up...</Headline>

        <View style={styles.buttonsContainer}>
            <RadioButton.Group 
                labelStyle={{color: theme.colors.accent}}
                value={props.values.basedOn}
                onValueChange={newValue => props.onChangeValue("basedOn", newValue)}
            >
                <RadioButton.Item
                    value="time"
                    label={<Text style={styles.label}>X minutes before destination</Text>}
                />
                
                <RadioButton.Item
                    value="distance"
                    label={<Text style={styles.label}>X meters before destination</Text>}
                />
            </RadioButton.Group>
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
