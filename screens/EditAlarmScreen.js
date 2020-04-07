import React from "react";
import { View, Text } from "react-native";

export default ({navigation, route: { params : { alarmId } } }) => {

    return (
        <View style={styles.root}>

            <Text>Editing alarm of id {alarmId}</Text>
            
        </View>
    )
}

const styles = {
    root: {
        height: "100%"
    }
}