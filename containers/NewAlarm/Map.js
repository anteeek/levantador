import React from "react";
import { ActivityIndicator, Portal } from "react-native-paper";
import { useNavigation, useTheme } from '@react-navigation/native';

import * as Permissions from 'expo-permissions';
import * as Location from 'expo-location';
import MapView, { Marker } from 'react-native-maps';

import LocationDialog from "./LocationDialog";

import {mapTheme as darkMapTheme} from "../../constants/DarkTheme";

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

    onNewMarkerLocation = newLocation => this.props.onChangeValue("location", {...this.props.markerLocation, ...newLocation})
    
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
                    onLongPress={({nativeEvent: {coordinate}}) => this.onNewMarkerLocation(coordinate)}
                    onPanDrag={ newLocation => {
                        if(newLocation.latitude === this.state.mapLocation.latitude && newLocation.longitude === this.state.mapLocation.longitude)
                            this.setState({mapLocation: newLocation})
                    }}
                >
                    <Marker coordinate={this.props.markerLocation} />
                </MapView>

                <Portal>
                    {this.state.mapLocation.latitude === 0 && this.state.mapLocation.longitude === 0 && <ActivityIndicator {...styles.spinner} />}
                </Portal>
            </>
        )
    }
}


const styles = {
    map: {
        flex: 10,
        width: "100%"
    },
    spinner: {
        size: 75,
        marginTop: "50%",
        color: "accent"
    }
}

const MapWithInjectedNavigationAndTheme = props => {
    const navigation = useNavigation();
    const theme = useTheme();

    return <Map {...props} navigation={navigation} theme={theme} />;
}

export default MapWithInjectedNavigationAndTheme;