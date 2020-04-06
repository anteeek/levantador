import React from "react";
import { View } from "react-native";
import { connect } from "react-redux";

import AlarmsList from "./AlarmsList";

const Alarms = ({alarms}) => {

    return (
        <View>
            
            <AlarmsList alarms={alarms} />

        </View>
    )
}

const mapStateToProps = state => ({
    alarms: state.alarms  
});

export default connect(mapStateToProps, null)(Alarms);