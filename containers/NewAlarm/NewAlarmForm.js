import React from "react";

import { connect } from "react-redux";

import PaginationWizard from "../Pagination/";
import LocationSelectionStep from "./LocationSelectionStep";
import BasedOnStep from "./BasedOnStep";
import HowLongStep from "./HowLongStep";

import { withNavigation } from "../hookHelpers";

class NewAlarmForm extends React.PureComponent {

    state = {
        location: {
            latitude: 0,
            longitude: 0,
            latitudeDelta: 0.5,
            longitudeDelta: 0.5
        },
        basedOn: "time",
        time: "5",
        distance: "1"
    };
    
    onFormSubmitted = () => {
        const {location, basedOn, time, distance} = this.state;

        this.props.newAlarm({location, basedOn, time, distance});

        this.props.navigation.navigate("Alarms");
    };

    onChangeValue = (key, newValue) => this.setState({[key]: newValue});

    render() {

        return (
            <PaginationWizard 
              onSubmit={this.onFormSubmitted} 
              onChangeValue={this.onChangeValue} 
              values={this.state}
            >
                <PaginationWizard.Step>{LocationSelectionStep}</PaginationWizard.Step>
                <PaginationWizard.Step>{BasedOnStep}</PaginationWizard.Step>
                <PaginationWizard.Step>{HowLongStep}</PaginationWizard.Step>
            </PaginationWizard>
        )
    }
}

const mapDispatchToProps = dispatch => ({
    newAlarm: payload => dispatch({ type : "ADD_NEW_ALARM", payload})
})

export default connect(null, mapDispatchToProps)(withNavigation(NewAlarmForm));