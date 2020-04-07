import React from "react";
import { Portal } from "react-native-paper";

import NewAlarmForm from "../containers/NewAlarm/";


export default ({navigation}) => {
    
    navigation.setOptions({ headerTitle: "Create a new alarm" });
    
    return (
        <Portal.Host>
            <NewAlarmForm />
        </Portal.Host>
    )
}