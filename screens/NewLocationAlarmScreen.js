import React from "react";
import { Portal } from "react-native-paper";

import LocationAlarmForm from "../containers/LocationAlarm/";


export default ({navigation}) => {
    
    navigation.setOptions({ headerTitle: "Create a new alarm" });
    
    return (
        <Portal.Host>
            <LocationAlarmForm />
        </Portal.Host>
    )
}