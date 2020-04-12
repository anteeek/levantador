import React from "react";
import { View, NativeModules } from "react-native";
import { Text, Button } from "react-native-paper";

import DateTimePickerModal from "@react-native-community/datetimepicker";

export default ({values, onChangeValue}) => {

    const [isPickerVisible, togglePickerVisible] = React.useState(true);

    const setNewTime = timeStamp => {
        onChangeValue("time", timeStamp);
        togglePickerVisible(false);
    }

    return (
        <View style={styles.container}>
            {
                isPickerVisible 
                ?
                <DateTimePickerModal
                    display="spinner"
                    mode="time"
                    onChange={ event => {
                        if(event.type === "dismissed")
                            togglePickerVisible(false);
                        else {
                            const alarmDate = new Date(event.nativeEvent.timestamp);

                            if(alarmDate <= Date.now())
                                alarmDate.setDate(alarmDate.getDate() + 1);

                            NativeModules.Alarm.set("E", alarmDate.getTime());     
                            
                            
                            setNewTime(event.nativeEvent.timestamp);                
                        }
                    }}
                    onTouchCancel={() => togglePickerVisible(false)}
                    value={Date.now()}
                />
                :
                <>
                    <Text style={styles.valueNotice}>
                        Alarm's time: {values.time}
                    </Text>
                    <Button style={styles.button} mode="contained" onPress={() => togglePickerVisible(true)}>
                        Change
                    </Button>
                </>
            }
            
        </View>
    )
}

const styles = {
    container: {
        justifyContent: "center",
        height: "90%"
    },
    button: {
        width: "75%",
        marginLeft: "auto",
        marginRight: "auto",
    },
    valueNotice: {
        fontSize: 30,
        textAlign: "center",
        padding: 10
    }
}