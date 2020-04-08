import React from "react";
import { connect } from "react-redux";
import { Portal } from "react-native-paper";

import LocationAlarmForm from "../containers/LocationAlarm/";


const NewLocationAlarmScreen = ({navigation, newAlarm}) => {
    
    navigation.setOptions({ headerTitle: "Create a new alarm" });

    return (
        <Portal.Host>
            <LocationAlarmForm onFinished={ values => newAlarm(values) } />
        </Portal.Host>
    )
}

const mapDispatchToProps = dispatch => ({
    newAlarm: payload => dispatch({ type : "ADD_NEW_ALARM_LOCATION", payload})
})

export default connect(null, mapDispatchToProps)(NewLocationAlarmScreen);