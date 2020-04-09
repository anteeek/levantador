import React from "react";
import { View } from "react-native";
import { Text, Button } from "react-native-paper";

export default ({values, onChangeValue}) => {
    return (
        <View style={styles.container}>
            <Text style={styles.question}>
                Should we let you have a snooze?
            </Text>
            <View style={styles.buttonsContainer}>
                <Button mode={values.hasSnooze ? "contained" : "outlined"} onPress={() => onChangeValue("hasSnooze", true)}>
                    Sure
                </Button>
                <Button mode={values.hasSnooze ? "outlined" : "contained"} onPress={() => onChangeValue("hasSnooze", false)}>
                    No!
                </Button>
            </View>
        </View>
    )
}

const styles = {
    container: {
        height: "90%",
        justifyContent: "center"
    },
    question: {
        fontSize: 30,
        height: 90,
        textAlign: "center"
    },
    buttonsContainer: {
        width: "75%",
        flexDirection: "row",
        justifyContent: "space-around",
        marginLeft: "auto",
        marginRight: "auto"
    }
}