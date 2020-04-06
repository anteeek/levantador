import React from "react";
import { View } from "react-native";
import { Text, Surface } from "react-native-paper";

export default ({alarms}) => (
    <View>
        {
            alarms.map( alarm => <Alarm key={alarm.id} {...alarm} />)
        }
    </View>
)

const Alarm = props => console.log(props) || (
    <Surface style={styles.itemWrapper}>
        <Text>{props.id}</Text>
    </Surface>
)

const styles = {
    itemWrapper: {
        flexDirection: "row",
        justifyContent: "center",
        margin: 20,
        padding: 8,
        height: 80,
        alignItems: 'center',
        justifyContent: 'center',
        elevation: 6,
    }
}