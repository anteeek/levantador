import React, { useEffect, useState } from "react";
import { useNavigation } from '@react-navigation/native';


import * as Permissions from 'expo-permissions';
import * as Location from 'expo-location';
import MapView, {Marker} from 'react-native-maps';

import LocationDialog from "./LocationDialog";


export default ({ onLocationChange }) =>{ 

    const { navigate } = useNavigation();

    const [mapLocation, setMapLocation] = useState({
        latitude: 37.78825,
        longitude: -122.4324
    });

    const [isDialogActive, setDialogActive] = useState(false);

    useEffect(() => {
        const setInitialDialogState = async () => {
            const permissionsGranted = await areLocationPermissionsGranted();
            
            if(permissionsGranted === false)
                setDialogActive(true);
        }
        setInitialDialogState();
    }, []);


    return (
    <>
        <LocationDialog 
                isActive={isDialogActive} 
                onDismiss={() => navigate("Root", {screen: "Home"})}
                onAccept={() => onDialogAccept(setDialogActive, setLocation)}
            />

        <MapView 
            style={styles.map}
            region={mapLocation}
        >
            
        </MapView>
    </>
)}

const styles = {
    map: {
        
    }
}

const onDialogAccept = async (setDialogActive, setLocation) => {
    try {
        setDialogActive(false);
        const {coords: {latitude, longitude}} = await getLocation();

        setLocation({latitude, longitude});
    } catch(e) {
        setDialogActive(true);
    }
}

const areLocationPermissionsGranted = async () => {
    const { status } = await Permissions.getAsync(Permissions.LOCATION);
    return status === "granted";
}

const getLocation = async () => {
    let { status } = await Permissions.askAsync(Permissions.LOCATION);
    if (status !== 'granted') 
        throw new Error("Location permissions not granted");

    return await Location.getCurrentPositionAsync({});
}