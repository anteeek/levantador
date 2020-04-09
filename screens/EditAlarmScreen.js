import React from "react";
import { View, Text } from "react-native";

import LocationAlarmForm from "../containers/LocationAlarm";
import ClassicAlarmForm from "../containers/ClassicAlarm";
import { connect } from "react-redux";

const EditAlarmScreen = ({ editAlarm, alarms, navigation, route: { params : { alarmId } } }) => {

    navigation.setOptions({ headerTitle: "Edit alarm" });

    const alarm = alarms.find( ({id}) => id === alarmId);

    const formComponentProps = {
        initialValues: alarm,
        onFinished: values => editAlarm({alarmId, newValues: values})
    }

    switch(alarm.type) {
        case "location": return <LocationAlarmForm {...formComponentProps} />;
        case "classic": return <ClassicAlarmForm {...formComponentProps} />;
    }
}

const mapStateToProps = state => ({
    alarms: state.alarms
})
const mapDispatchToProps = dispatch => ({
    editAlarm: payload => dispatch({ type : "EDIT_ALARM", payload})
})

export default connect(mapStateToProps, mapDispatchToProps)(EditAlarmScreen);

const styles = {
    root: {
        height: "100%"
    }
}