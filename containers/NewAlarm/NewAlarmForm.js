import React from "react";
import { View } from "react-native";
import { Text } from "react-native-paper";

import PaginationWizard from "../Pagination/";
import LocationSelectionStep from "./LocationSelectionStep";

export default class extends React.PureComponent {

    state = {
        location: "",
        basedOn: "time",
        howLong: "",
        howFar: ""
    };
    
    onFormSubmitted = () => {

    };

    onChangeValue = (key, newValue) => {

    };

    render() {

        return (
            <PaginationWizard onSubmit={this.onFormSubmitted} onChangeValue={this.onChangeValue} stepNames={["Location", "Based on", "Length"]}>
                <PaginationWizard.Step>{LocationSelectionStep}</PaginationWizard.Step>
                <PaginationWizard.Step>{LocationSelectionStep}</PaginationWizard.Step>
            </PaginationWizard>
        )
    }
}