import React from "react";
import { View } from "react-native";
import { FAB, Portal } from "react-native-paper";

import Alarms from "../containers/ExistingAlarms/Alarms";

export default ({navigation}) => {

    const [fabOpen, toggleFabOpen] = React.useState(false);

    return (
        <View style={styles.root}>
            <Portal.Host>

            <Alarms />
            
            <FAB.Group
                open={fabOpen}
                icon={fabOpen ? 'alarm' : 'alarm-plus'}
                actions={[
                { icon: 'alarm', label: 'Traditional', onPress: () => console.log('Pressed star')},
                { icon: 'crosshairs-gps', label: 'Location-based', onPress: () => navigation.navigate("NewLocationAlarm") },
                { icon: 'qrcode', label: 'QR-based', onPress: () => console.log('Pressed notifications') },
                ]}
                onStateChange={({open}) => toggleFabOpen(open)}
            />

            </Portal.Host>
        </View>
    )
}

const styles = {
    root: {
        height: "100%"
    },
    fab: {
        position: 'absolute',
        margin: 25,
        right: 0,
        bottom: 0,
    },
}