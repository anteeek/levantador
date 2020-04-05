import React from 'react';
import { View, } from 'react-native';
import {Button} from "react-native-paper";

export default props =>  {

    return (
      <View style={styles.root}>
        <View>
            {props.children({...props, children: null})}
        </View>
        <View>
            <PaginationNavigation {...props} />
        </View>
      </View>
)};

const PaginationNavigation = ({previousStep, nextStep, currentIndex, isLast, onSubmit}) => (
    <View style={styles.paginationNavigation}>
                <Button 
                    icon="skip-previous-circle-outline" 
                    mode="outlined" style={styles.button} 
                    onPress={previousStep}
                    disabled={currentIndex === 0}
                >
                    Previous
                </Button>
                <View style={{flex: 2}}/>
                <Button 
                    icon="skip-next-circle-outline" 
                    mode="outlined" 
                    style={styles.button}
                    onPress={isLast ? onSubmit : nextStep}
                >
                    {isLast ? "Submit" : "Next"}
                </Button>
    </View>
)

const styles = {
    root: {
        height: "100%",
        justifyContent: "space-between"
    },
    paginationNavigation: {
        width: "90%",
        marginLeft: "auto",
        marginRight: "auto",
        marginBottom: 20,
        flexDirection: "row",
        justifyContent: "space-around"
    },
    button: {
        flex: 5
    }
}