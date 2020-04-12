import SharedPreferences from "react-native-shared-preferences";
import { v1 as makeUniqueId } from 'uuid';

export const makeNewLocationAlarm = ({location, basedOn, time, distance}) => {
    const newAlarm = { basedOn, location };

    if(basedOn === "time")
        newAlarm["time"] = time;
    else 
        newAlarm["distance"] = distance;

    if(newAlarm[basedOn] === "")
        newAlarm[basedOn] = "0";

    newAlarm["id"] = makeUniqueId();
    newAlarm["type"] = "location";
    newAlarm["isActive"] = true;

    return newAlarm;
}

export const makeNewClassicAlarm = newAlarm => {
    newAlarm["id"] = makeUniqueId();
    newAlarm["type"] = "classic";
    newAlarm["isActive"] = true;

    return newAlarm;
}
