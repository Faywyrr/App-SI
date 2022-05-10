import React from 'react';
import { Pressable, View, StyleSheet, Text } from 'react-native';

/* Theme */
import { useTheme } from '@react-navigation/native';

/* Constants */
import Constants from '../../Constants';

class SettingsComponent extends React.Component {

    /* Render */
    render() {
        const theme = this.props.theme;
        const styles = getStyles(theme);        

        return (
            <View style={ [this.props.style, styles.view] }>
                <Pressable style={ styles.box } android_ripple={ { color: theme.colors.border, borderless: true } }>
                    <Text style={ styles.text }>{ this.props.name }</Text>
                    <Text style={ styles.text }>{ this.props.value }</Text>
                </Pressable>
            </View>
        )
    }

}

const getStyles = (theme) => StyleSheet.create({
    view: {
        borderWidth: 3,
        borderRadius: 8,
        borderColor: theme.colors.border,
    },

    box: {
        flexDirection: 'row',
        justifyContent: 'space-between',

        padding: 10,
    },

    text: {
        color: theme.colors.text,
        fontSize: Constants.normalize(18),
    },
});

export default function(props) {
    const theme = useTheme();
  
    return <SettingsComponent {...props} theme={theme} />;
}