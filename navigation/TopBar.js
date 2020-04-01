import * as React from 'react';
import { Appbar } from 'react-native-paper';
import { StyleSheet } from 'react-native';
 
export default ({scene, toggleDarkMode, isDarkModeOn}) => {
    return (
        <Appbar.Header>
            <Appbar.Content title={scene.descriptor.options.headerTitle} />
            <Appbar.Action icon="theme-light-dark" onPress={ () => toggleDarkMode(!isDarkModeOn)} />
        </Appbar.Header>);
};