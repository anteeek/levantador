import React from "react";
import { View } from "react-native";

import { connect } from "react-redux";

const AlarmsList = ({alarms}) => {

    console.log(alarms);

    return (
        <View>

        </View>
    )
}

const mapStateToProps = state => ({
    alarms: state.alarms
});

export default connect(mapStateToProps, null)(AlarmsList);