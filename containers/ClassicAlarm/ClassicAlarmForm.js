import React from "react";

import PaginationWizard from "../Pagination/";

import TimeSelectionStep from "./TimeSelectionStep";
import HasSnoozeStep from "./HasSnoozeStep";

import { withNavigation } from "../hookHelpers";

class NewAlarmForm extends React.PureComponent {

    state = this.props.initialValues || {
        time: "6:30",
        hasSnooze: false
    }
    
    onFormSubmitted = () => {
        const { time, hasSnooze } = this.state;

        this.props.onFinished({ time, hasSnooze });

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
                <PaginationWizard.Step>{TimeSelectionStep}</PaginationWizard.Step>
                <PaginationWizard.Step>{HasSnoozeStep}</PaginationWizard.Step>
            </PaginationWizard>
        )
    }
}

export default withNavigation(NewAlarmForm);