import React from "react";
import { View } from "react-native";
import { Modal, Portal, Button, Surface, Headline, Subheading, Caption } from "react-native-paper";

import renderAlarmTitle from "./renderAlarmTitle";

export default ({alarmDetails, isVisible, onAccept, onDismiss}) =>{
    console.log(alarmDetails)

    return (
    <Portal>
        <Modal visible={isVisible} onDismiss={onDismiss}>
            <Surface style={styles.container}>
            
                <Headline>Deleting alarm</Headline>

                <Subheading>Are you sure you want to delete the alarm</Subheading>
                <Caption>"{renderAlarmTitle(alarmDetails)}"</Caption>
                <Subheading style={styles.questionMark}>?</Subheading>

                <View style={styles.actionsContainer}>
                    <Button onPress={onAccept}>Accept</Button>
                    <Button onPress={onDismiss}>Cancel</Button>
                </View>
                
            </Surface>
        </Modal>
    </Portal>
    )
}

const styles = {
    container: {
        width: "85%",
        marginLeft: "auto",
        marginRight: "auto",
        padding: 10
    },
    actionsContainer: {
        flexDirection: "row",
        justifyContent: "space-between"
    },
    content: {
        paddingLeft: 30
    },
    questionMark: {
        fontSize: 25,
        fontWeight: "bold",
        textAlign: "center"
    }
}