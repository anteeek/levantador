import React from "react";
import { View } from "react-native";
import { FAB } from "react-native-paper";

import AlarmsList from "../containers/ExistingAlarms/AlarmsList";

export default ({navigation}) => {

    const [fabOpen, toggleFabOpen] = React.useState(false);

    return (
        <View style={styles.root}>

            <AlarmsList/>

            <FAB.Group
                open={fabOpen}
                icon={fabOpen ? 'alarm' : 'alarm-plus'}
                actions={[
                { icon: 'alarm', label: 'Traditional', onPress: () => console.log('Pressed star')},
                { icon: 'crosshairs-gps', label: 'Location-based', onPress: () => navigation.navigate("NewAlarm") },
                { icon: 'qrcode', label: 'QR-based', onPress: () => console.log('Pressed notifications') },
                ]}
                onStateChange={({open}) => toggleFabOpen(open)}
            />
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