import React from "react";
import { ScrollView, View } from "react-native";
import { Text, Surface, Switch } from "react-native-paper";
import { MaterialCommunityIcons } from "@expo/vector-icons";
import { useNavigation, useTheme } from "@react-navigation/native";

import {renderTitle, getIcon} from "./alarmChipStrings";

export default ({alarms, onDelete, onSwitchActivity}) => {

    const navigation = useNavigation();
    const theme = useTheme();

    return  (
        <ScrollView>
            {
                alarms.map( alarm => (
                <Alarm
                    {...alarm} 
                    key={alarm.id}
                    theme={theme}
                    onEdit={() => navigation.navigate("EditAlarm", { alarmId: alarm.id } )} 
                    onDelete={() => onDelete(alarm.id)}
                    onSwitchActivity={() => onSwitchActivity(alarm.id, !alarm.isActive)}
                />)
                )
            }
        </ScrollView>
    )
}

const Alarm = props => (
    <Surface style={styles.itemWrapper}>

        <View style={styles.iconsWrapper}>
            <MaterialCommunityIcons name={getIcon(props)} size={32} color={props.theme.colors.primary} />
            <Switch 
                value={props.isActive}
                onValueChange={props.onSwitchActivity}
            />
        </View>

        <Text style={styles.alarmTitle}>{renderTitle(props)}</Text>

        <View>
            <MaterialCommunityIcons name="pencil" size={32} onPress={props.onEdit} color={props.theme.colors.primary} />
            <MaterialCommunityIcons name="delete" size={32} onPress={props.onDelete} color={props.theme.colors.primary} />
        </View>

    </Surface>
)

const styles = {
    itemWrapper: {
        flexDirection: "row",
        margin: 10,
        padding: 10,
        height: 80,
        alignItems: 'center',
        elevation: 6,
    },
    alarmTitle: {
        paddingLeft: 15,
        paddingRight: 15,
        width: "80%"
    },
    iconsWrapper: {
        alignItems: "center"
    }
}