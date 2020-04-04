import React from "react";
import { useNavigation, useTheme } from '@react-navigation/native';

import * as Permissions from 'expo-permissions';
import * as Location from 'expo-location';
import MapView, {Marker, Callout} from 'react-native-maps';

import LocationDialog from "./LocationDialog";

import {mapTheme as darkMapTheme} from "../../constants/DarkTheme";


class Map extends React.PureComponent {

    state = {
        isDialogActive: false,
        
        mapLocation: {
            latitude: 37.78825,
            longitude: -122.4324,
            latitudeDelta: 0.5,
            longitudeDelta: 0.5
        },
        markerLocation:  {
            latitude: 37.78825,
            longitude: -122.4324,
            latitudeDelta: 0.5,
            longitudeDelta: 0.5
        }
        
    };

    async componentDidMount() {
        const permissionsGranted = await this.areLocationPermissionsGranted();

        if(!permissionsGranted) 
            this.setState({isDialogActive: true});
        else 
            await this.setLocation();
    }

    onDialogAccept = async () => {
        this.setState({isDialogActive: false});

        const userGrantedPermissions = await this.askForLocationPermission();

        if(userGrantedPermissions)
            await this.setLocation();
        else 
            this.setState({isDialogActive: true});
    }

    askForLocationPermission = async () => {
        const { status } = await Permissions.askAsync(Permissions.LOCATION);
        
        return status === "granted";
    }

    setLocation = async () => {
        const { coords } = await Location.getCurrentPositionAsync({});

        coords.latitudeDelta = coords.longitudeDelta = 0.5;
    
        this.setState({mapLocation: coords, markerLocation: coords});
    }

    areLocationPermissionsGranted = async () => {
        const { status } = await Permissions.getAsync(Permissions.LOCATION);
        return status === "granted";
    }    

    onNewMarkerLocation = newLocation =>{ 
        console.log(newLocation);
        this.setState({markerLocation: {newLocation}})
    }

    render() {

        return (
            <>
                <LocationDialog 
                    isActive={this.state.isDialogActive} 
                    onDismiss={() => this.props.navigation.navigate("Root", {screen: "Home"})}
                    onAccept={this.onDialogAccept}
                />
        
                <MapView 
                    style={styles.map}
                    customMapStyle={this.props.theme.dark ? darkMapTheme : []}
                    region={this.state.mapLocation}
                    showsUserLocation={true}
                    onRegionChangeComplete={ newLocation => this.setState({mapLocation: newLocation})}
                >
                <Marker
                    coordinate={this.state.markerLocation}
                />
                    
                </MapView>
            </>
        )
    }
}

const styles = {
    map: {
        flex: 10,
        width: "100%"
    }
}

const MapWithInjectedNavigationAndTheme = props => {
    const navigation = useNavigation();
    const theme = useTheme();

    return <Map {...props} navigation={navigation} theme={theme} />;
}

export default MapWithInjectedNavigationAndTheme;