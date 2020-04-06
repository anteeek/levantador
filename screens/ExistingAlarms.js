import React from "react";
import { View } from "react-native";
import { Text } from "react-native-paper";

import AlarmsList from "../containers/ExistingAlarms/AlarmsList";

export default ({navigation}) => (
    <View>
        <AlarmsList/>
    </View>
)