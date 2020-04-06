import { v1 as makeUniqueId } from 'uuid';

const defaultAlarmsState = []

export default (state=defaultAlarmsState, action) => {

    switch(action.type) {
        case "ADD_NEW_ALARM_LOCATION": {
            const newState = [...state, makeNewLocationAlarm(action.payload)];
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
        newAlarm[basedOn] = 0;

    newAlarm[basedOn] = Number(newAlarm[basedOn]);

    newAlarm["id"] = makeUniqueId();
    newAlarm["type"] = "location";
    newAlarm["isActive"] = true;

    return newAlarm;
}