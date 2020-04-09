import { v1 as makeUniqueId } from 'uuid';
import _ from "lodash";

import { makeNewClassicAlarm, makeNewLocationAlarm } from "./newAlarms"
import { getStateWithEditedAlarmOfId, getStateWithDeletedAlarmOfId } from "./manageExistingAlarms";

const defaultAlarmsState = []

export default (state=defaultAlarmsState, action) => {

    switch(action.type) {
        case "ADD_NEW_ALARM_LOCATION": {
            const newState = [...state, makeNewLocationAlarm(action.payload)];
            return newState || state;
        }
        case "ADD_NEW_CLASSIC_ALARM": {
            const newState = [...state, makeNewClassicAlarm(action.payload)];
            return newState || state;
        }
        case "DELETE_ALARM": {
            const newState = getStateWithDeletedAlarmOfId(state, action.payload);

            return newState || state;
        }
        case "EDIT_ALARM": {
            console.log(action);
            const newState = getStateWithEditedAlarmOfId(state, action.payload);

            return newState || state;
        }
        default: return state;
    }
}