import React from "react";
import { View } from "react-native";
import { Text, Surface } from "react-native-paper";
import { MaterialCommunityIcons } from "@expo/vector-icons";

export default ({alarms}) => (
    <View>
        {
            alarms.map( alarm => <Alarm key={alarm.id} {...alarm} />)
        }
    </View>
)

const Alarm = props => (
    <Surface style={styles.itemWrapper}>

        <MaterialCommunityIcons name="crosshairs-gps" size={32} />

        <Text style={styles.alarmTitle}>{renderAlarmTitle(props)}</Text>

        <MaterialCommunityIcons name="pencil" size={32} onPress={() => console.log("edit alarm of id ", props.id)} />

    </Surface>
)

const renderAlarmTitle = ({type, ...details}) => {
    switch(type) {
        case "location": return `${details[details.basedOn]} ${details.basedOn === "time" ? "minutes" : "kilometers"} before ${details.location.latitude}`;
        case "classic": return `Wake me up on ${details.time}`;
        case "qrcode": return `Wake me up on ${details.time} and make me scan the code`
    }
}

const styles = {
    itemWrapper: {
        flexDirection: "row",
        margin: 20,
        padding: 10,
        height: 80,
        alignItems: 'center',
        elevation: 6,
    },
    alarmTitle: {
        paddingLeft: 15,
        width: "80%"
    }
}