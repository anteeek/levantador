import _ from "lodash";

export const getStateWithDeletedAlarmOfId = (state, alarmId) => {
    const newState = [...state];
    _.remove(newState, ({id}) => id === alarmId);

    return newState;
}

export const getStateWithEditedAlarmOfId = (state, {alarmId, newValues}) => {
    const newState = [...state];

    const editedAlarm = _.find(newState, ({id}) => id === alarmId);
    _.remove(newState, ({id}) => id === alarmId);

    Object.entries(newValues).forEach( ([key, value]) => editedAlarm[key] = value);
    newState.push(editedAlarm);

    return newState;
}