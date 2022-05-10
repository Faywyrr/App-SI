import React from 'react';
import { View, StyleSheet, Text, Pressable } from 'react-native';

/* Theme */
import { useTheme } from '@react-navigation/native';
import Themes from '../../Themes';

/* Constants */
import Constants from '../../Constants';

/* SVG */
import Moon from '../../assets/icons/moon.svg';

/* Context */
import { ThemeContext } from '../../Home';

class DarkThemeComponent extends React.Component {

    /* Render */
    render() {
        const theme = this.props.theme;
        const styles = getStyles(theme);

        return (
            <View style={ [this.props.style, styles.view] }>
                <Pressable onPress={ () => this.context.setTheme(Themes.DARK) } style={ styles.box } android_ripple={ { color: '#808080', borderless: true } }>
                    <Moon fill='white' />
                    <Text style={ styles.text }>Mode Sombre</Text>
                </Pressable>
            </View>
        )
    }

}

const getStyles = (theme) => StyleSheet.create({
    view: {
        borderRadius: 32,
        backgroundColor: '#333333',

        height: '150%',
        width: '44.5%',

        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'center'
    },

    box: {
        width: '100%',

        flexDirection: 'row',
        justifyContent: 'space-evenly',
        alignItems: 'center',
    },

    text: {
        color: 'white',
        fontSize: Constants.normalize(16)
    }
});

export default function(props) {
    const theme = useTheme();
    DarkThemeComponent.contextType = ThemeContext;

    return <DarkThemeComponent {...props} theme={theme} />;
}