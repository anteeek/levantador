import React from "react";
import * as Permissions from 'expo-permissions';
import * as Location from 'expo-location';
import MapView, { Marker } from 'react-native-maps';

import LocationDialog from "./LocationDialog";

import { mapTheme as darkMapTheme } from "../../constants/DarkTheme";

import { withNavigation, withTheme } from "../hookHelpers";


//TODO: add selecting location based on user text input
class Map extends React.PureComponent {

    state = {
        isDialogActive: false,
        
        mapLocation: this.props.markerLocation
    };

    async componentDidMount() {
        const permissionsGranted = await this.areLocationPermissionsGranted();

        if(!permissionsGranted) 
            this.setState({isDialogActive: true});
        else if(this.props.markerLocation.latitude === 0 && this.props.markerLocation.longitude === 0)
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
    
        this.setState({mapLocation: coords});

        this.onNewMarkerLocation(coords);
    }

    areLocationPermissionsGranted = async () => {
        const { status } = await Permissions.getAsync(Permissions.LOCATION);
        return status === "granted";
    }    

    onNewMarkerLocation = newLocation => this.props.onChangeValue("location", newLocation);
    
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
                    onLongPress={(event) => this.onNewMarkerLocation(event.nativeEvent.coordinate)}
                    onRegionChangeComplete={ newLocation => this.setState({mapLocation: newLocation}) }
                >
                    <Marker coordinate={this.props.markerLocation} />
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


export default withNavigation(withTheme(Map));