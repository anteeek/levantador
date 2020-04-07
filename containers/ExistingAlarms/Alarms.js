import React from "react";
import { View } from "react-native";
import { connect } from "react-redux";

import AlarmFilter from "./AlarmFilter";
import AlarmsList from "./AlarmsList";

class Alarms extends React.PureComponent {

    state = {
        displayedAlarms: this.props.alarms,
        selectedFilter: ""
    }

    onFilterChange = newFilter => {
        const filteredAlarms = [];

        if(this.state.selectedFilter === newFilter)
            this.setState({selectedFilter: "", displayedAlarms: this.props.alarms});
        else {
            for(const index in this.props.alarms) {
                if(this.props.alarms[index].type === newFilter)
                    filteredAlarms.push(this.props.alarms[index]);
            }
    
            this.setState({displayedAlarms: filteredAlarms, selectedFilter: newFilter});
        }
        
    }

    render() {
        return (
            <View>
                
                <AlarmFilter onFilterChange={this.onFilterChange} selectedFilter={this.state.selectedFilter} />

                <AlarmsList alarms={this.state.displayedAlarms} />
    
            </View>
        )
    }
}

const mapStateToProps = state => ({
    alarms: state.alarms  
});

export default connect(mapStateToProps, null)(Alarms);