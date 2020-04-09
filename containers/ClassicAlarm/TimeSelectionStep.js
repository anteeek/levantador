import React from "react";
import { View } from "react-native";
import { Appearance } from "react-native-appearance"
import { Text, Button } from "react-native-paper";

import DateTimePickerModal from "@react-native-community/datetimepicker";

export default ({values, onChangeValue}) => {

    const [isPickerVisible, togglePickerVisible] = React.useState(true);

    const setNewTime = timeStamp => {
        const tempDate = new Date(timeStamp);

        onChangeValue("time", `${tempDate.getHours()}:${tempDate.getMinutes()}`);
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
                        else 
                            setNewTime(event.nativeEvent.timestamp);                
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