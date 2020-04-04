import React from "react";
import { View } from "react-native";

import Step from "./Step";

class Wizard extends React.PureComponent {

    static Step = Step;

    state = {
        index: 0
    }
    
    nextStep = () => (this.state.index !== this.props.children.length) && this.setState({index: this.state.index + 1});

    previousStep = () => (this.state.index !== 0) && this.setState({index: this.state.index - 1});

    render() {  

        return (
            <> 
                 {React.Children.map(this.props.children, (el, index) => {
                    if (index === this.state.index) {
                        return React.cloneElement(el, {
                            currentIndex: this.state.index,
                            nextStep: this.nextStep,
                            previousStep: this.previousStep,
                            isLast: this.state.index === this.props.children.length - 1,
                            onChangeValue: this.props.onChangeValue,
                            values: this.props.values,
                            onSubmit: this.props.onSubmit,
                            stepNames: this.props.stepNames
                        });
                    }

                    return null;
                })}
            </>
        )
    }
}

export default Wizard;