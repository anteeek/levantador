import React from "react";
import { View } from "react-native";
import { connect } from "react-redux";

import AlarmFilter from "./AlarmFilter";
import AlarmsList from "./AlarmsList";
import AlarmDeletionModal from "./AlarmDeletionModal";

class Alarms extends React.PureComponent {

    state = {
        displayedAlarms: this.props.alarms,
        selectedFilter: "",
        isDeletionAlarmModalVisible: false,
        idOfAlarmUnderDeletion: ""
    }

    static getDerivedStateFromProps(nextProps, prevState){
        return { displayedAlarms: Alarms.filterAlarms(nextProps.alarms, prevState.selectedFilter) };
    }

    onFilterChange = newFilter => {
        if(this.state.selectedFilter === newFilter)
            this.setState({selectedFilter: "", displayedAlarms: this.props.alarms});
        else 
            this.setState({selectedFilter: newFilter, displayedAlarms: Alarms.filterAlarms(this.props.alarms, newFilter)})    
            
    }

    static filterAlarms = (alarms, filter) => {
        if(filter === "")
            return alarms;

        const filteredAlarms = [];

        for(const index in alarms) {
            if(alarms[index].type === filter)
                filteredAlarms.push(alarms[index]);
        }

        return filteredAlarms;
    }

    onAlarmDeleteAttempt = alarmId => this.setState({isDeletionAlarmModalVisible: true, idOfAlarmUnderDeletion: alarmId});

    onAlarmDeleteAccept = () => {
        this.props.onDelete(this.state.idOfAlarmUnderDeletion);
        this.setState({isDeletionAlarmModalVisible: false, idOfAlarmUnderDeletion: ""});
    }

    onAlarmDeleteDismiss = () => this.setState({isDeletionAlarmModalVisible: false, idOfAlarmUnderDeletion: ""});

    render() {

        return (
            <View>
                
                <AlarmDeletionModal 
                    isVisible={this.state.isDeletionAlarmModalVisible}
                    onAccept={this.onAlarmDeleteAccept} 
                    onDismiss={this.onAlarmDeleteDismiss} 
                    alarmDetails={this.state.idOfAlarmUnderDeletion && this.props.alarms.find( ({id}) => id === this.state.idOfAlarmUnderDeletion)}
                />

                <AlarmFilter onFilterChange={this.onFilterChange} selectedFilter={this.state.selectedFilter} />

                <AlarmsList alarms={this.state.displayedAlarms} onDelete={this.onAlarmDeleteAttempt} />
    
            </View>
        )
    }
}

const mapStateToProps = state => ({
    alarms: state.alarms  
});

const mapDispatchToProps = dispatch => ({
    onDelete: payload => dispatch({ type: "DELETE_ALARM", payload })
})

export default connect(mapStateToProps, mapDispatchToProps)(Alarms);