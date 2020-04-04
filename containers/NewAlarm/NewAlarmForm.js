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
            <View>
                <PaginationWizard onSubmit={this.onFormSubmitted} onChangeValue={this.onChangeValue}>
                    <PaginationWizard.Step>{LocationSelectionStep}</PaginationWizard.Step>
                </PaginationWizard>
            </View>
        )
    }
}