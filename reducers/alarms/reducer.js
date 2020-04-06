const defaultAlarmsState = {
    alarms: []
}

export default (state=defaultAlarmsState, action) => {
    
    switch(action.type) {
        case "ADD_NEW_ALARM": {
            const newState = {...state, alarms: [...state.alarms, action.payload]};
            return newState || state;
        } break;
        default: return state;
    }

    return state;
}