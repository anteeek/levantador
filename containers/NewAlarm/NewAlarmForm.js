import React from "react";
import { View } from "react-native";
import { Text } from "react-native-paper";

import PaginationWizard from "../Pagination/";
import LocationSelectionStep from "./LocationSelectionStep";
import BasedOnStep from "./BasedOnStep";

export default class extends React.PureComponent {

    state = {
        location: {
            latitude: 0,
            longitude: 0,
            latitudeDelta: 0.5,
            longitudeDelta: 0.5
        },
        basedOn: "time",
        howLong: "",
        howFar: ""
    };
    
    onFormSubmitted = () => {
        console.log(this.state);
    };

    onChangeValue = (key, newValue) => {
        this.setState({[key]: newValue});
    };

    render() {

        return (
            <PaginationWizard 
              onSubmit={this.onFormSubmitted} 
              onChangeValue={this.onChangeValue} 
              values={this.state}
            >
                <PaginationWizard.Step>{LocationSelectionStep}</PaginationWizard.Step>
                <PaginationWizard.Step>{BasedOnStep}</PaginationWizard.Step>
            </PaginationWizard>
        )
    }
}