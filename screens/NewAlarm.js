import React from "react";
import { View } from "react-native";
import { Text } from "react-native-paper";

import NewAlarmForm from "../containers/NewAlarm/";


export default ({navigation}) => {
    
    navigation.setOptions({ headerTitle: "Create a new alarm" });
    
    return (
        <View>
            <NewAlarmForm />
        </View>
    )
}