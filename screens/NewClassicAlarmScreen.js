import React from "react";
import { connect } from "react-redux";
import { Portal } from "react-native-paper";

import ClassicAlarmForm from "../containers/ClassicAlarm/";

const NewClassicAlarmScreen = ({navigation, newAlarm}) => {
    
    navigation.setOptions({ headerTitle: "Create a new alarm" });

    return (
        <Portal.Host>
            <ClassicAlarmForm onFinished={ values => newAlarm(values) } />
        </Portal.Host>
    )
}

const mapDispatchToProps = dispatch => ({
    newAlarm: payload => dispatch({ type : "ADD_NEW_CLASSIC_ALARM", payload})
})

export default connect(null, mapDispatchToProps)(NewClassicAlarmScreen);