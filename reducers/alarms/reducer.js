import { v1 as makeUniqueId } from 'uuid';
import _ from "lodash";

const defaultAlarmsState = []

export default (state=defaultAlarmsState, action) => {

    switch(action.type) {
        case "ADD_NEW_ALARM_LOCATION": {
            const newState = [...state, makeNewLocationAlarm(action.payload)];
            return newState || state;
        }
        case "DELETE_ALARM": {
            const alarmId = action.payload;

            const newState = [...state];
            _.remove(newState, ({id}) => id === alarmId);

            return newState || state;
        }
        default: return state;
    }
}

const makeNewLocationAlarm = ({location, basedOn, time, distance}) => {
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