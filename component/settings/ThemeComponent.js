import React from 'react';
import { View, StyleSheet, Text } from 'react-native';

/* Theme */
import { useTheme } from '@react-navigation/native';

/* Constants */
import Constants from '../../Constants';

/* Components */
import DarkTheme from './DarkThemeComponent';
import LightTheme from './LightThemeComponent';

class Theme extends React.Component {

    /* Render */
    render() {
        const theme = this.props.theme;
        const styles = getStyles(theme);        

        return (
            <View style={ [this.props.style, styles.box] }>
                <Text style={ styles.text}>Thème</Text>

                <View style={ styles.themes }>
                    <DarkTheme />
                    <LightTheme />
                </View>

            </View>
        )
    }

}

const getStyles = (theme) => StyleSheet.create({
    box: {
        borderWidth: 3,
        borderRadius: 8,
        borderColor: theme.colors.border,

        justifyContent: 'space-between',
    },

    text: {
        color: theme.colors.text,
        padding: '3%',

        fontSize: Constants.normalize(20)
    },

    themes: {
        alignItems: 'center',
        flexDirection: 'row',
        justifyContent: 'space-between',

        padding: '5%',
    }
});

export default function(props) {
    const theme = useTheme();
  
    return <Theme {...props} theme={theme} />;
}