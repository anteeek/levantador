import React from "react";
import { View, Appearance } from "react-native";
import { Text } from "react-native-paper";

import DateTimePickerModal from "react-native-modal-datetime-picker";

export default () => {

    return (
        <View>
            <DateTimePickerModal
                isVisible={true}
                isDarkModeEnabled={true}
                mode="time"
                onConfirm={console.log}
                onCancel={console.log}
            />
        </View>
    )
}