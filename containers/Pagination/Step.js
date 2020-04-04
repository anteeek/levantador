import React, { PureComponent } from 'react';
import { View, Button, StyleSheet } from 'react-native';

export default props =>  (
      <View style={styles.root}>
        <View>
            {props.children({...props, children: null})}
        </View>

      </View>
);

const styles = {
    root: {

    }
}