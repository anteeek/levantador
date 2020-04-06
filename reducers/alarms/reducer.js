const defaultAlarmsState = {
    alarms: []
}

export default (state=defaultAlarmsState, action) => {
    
    switch(action.type) {
        case "ADD_NEW_ALARM": {
            const newAlarm = makeNewAlarm(action.payload);

            const newState = {...state, alarms: [...state.alarms, newAlarm]};
            return newState || state;
        } break;
        default: return state;
    }

    return state;
}

const makeNewAlarm = ({location, basedOn, time, distance}) => {
    const newAlarm = { basedOn, location };

    if(basedOn === "time")
        newAlarm["time"] = time;
    else 
        newAlarm["distance"] = distance;

    if(newAlarm[basedOn] === "")
        newAlarm[basedOn] = 0;

    newAlarm[basedOn] = Number(newAlarm[basedOn]);

    return newAlarm;
}