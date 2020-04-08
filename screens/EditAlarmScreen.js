import React from "react";
import { View, Text } from "react-native";

import LocationAlarmForm from "../containers/LocationAlarm";
import { connect } from "react-redux";

const EditAlarmScreen = ({ alarms, navigation, route: { params : { alarmId } } }) => {

    navigation.setOptions({ headerTitle: "Edit alarm" });

    const alarm = alarms.find( ({id}) => id === alarmId);

    switch(alarm.type) {
        case "location": return <LocationAlarmForm initialValues={alarm} />
    }
}

const mapStateToProps = state => ({
    alarms: state.alarms
})

export default connect(mapStateToProps)(EditAlarmScreen);

const styles = {
    root: {
        height: "100%"
    }
}