import * as React from 'react';
import { Appbar } from 'react-native-paper';
 
export default ({navigation, scene, toggleDarkMode, isDarkModeOn}) => {
    return (
        <Appbar.Header>
            {navigation.canGoBack() && <Appbar.BackAction onPress={() => navigation.pop()} />}
            <Appbar.Content title={scene.descriptor.options.headerTitle} />
            <Appbar.Action icon="theme-light-dark" onPress={ () => toggleDarkMode(!isDarkModeOn)} />
        </Appbar.Header>);
};