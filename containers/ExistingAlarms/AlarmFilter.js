import React from "react";
import { View } from "react-native";
import { Chip } from "react-native-paper";

export default ({onFilterChange, selectedFilter}) => (
    <View style={styles.filterWrapper}>
        <Chip icon="crosshairs-gps" selected={selectedFilter === "location"} onPress={() => onFilterChange("location")} >
            Location {selectedFilter === "location" && "(selected)"}
        </Chip>
        <Chip icon="qrcode" selected={selectedFilter === "qrcode"} onPress={() => onFilterChange("qrcode")} >
            QR-Code {selectedFilter === "qrcode" && "(selected)"}
        </Chip>
        <Chip icon="alarm" selected={selectedFilter === "classic"} onPress={() => onFilterChange("classic")} >
            Classic {selectedFilter === "classic" && "(selected)"}
        </Chip>
    </View>
)

const styles = {
    filterWrapper: {
        flexDirection: "row",
        justifyContent: "space-between",
        padding: 20
    }
}