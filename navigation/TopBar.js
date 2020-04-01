import * as React from 'react';
import { Appbar } from 'react-native-paper';
import { StyleSheet } from 'react-native';
 
export default (props) => console.log(props) || (
    <Appbar.Header>
        {props.navigation.canGoBack() && <Appbar.Content title="go bakc" />}
        <Appbar.Content title={props.scene.descriptor.options.headerTitle} />
    </Appbar.Header>
);