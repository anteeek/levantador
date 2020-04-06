import React from "react";
import { useNavigation, useTheme } from '@react-navigation/native';

export const withTheme = Component => {
    return props => 
    {
        const theme = useTheme();
        return (
         <Component {...props} theme={theme} />
        )
}
}

export const withNavigation = Component => {
    return props => 
    {
        const navigation = useNavigation();
        return (
         <Component {...props} navigation={navigation} />
        )
}
}