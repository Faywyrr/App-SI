import React from 'react';
import { View, Pressable, StyleSheet, Text } from 'react-native';

/* Theme */
import { useTheme } from '@react-navigation/native';
import Themes from '../../Themes';

/* Constants */
import Constants from '../../Constants';

/* SVG */
import Sun from '../../assets/icons/sun.svg';

/* Context */
import { ThemeContext } from '../../Home';

class LightThemeComponent extends React.Component {

    /* Render */
    render() {
        const theme = this.props.theme;
        const styles = getStyles(theme);
        
        return (
            <View style={ [this.props.style, styles.view] }>
                <Pressable onPress={ () => this.context.setTheme(Themes.LIGHT) } style={ styles.box } android_ripple={ { color: theme.colors.border, borderless: true } }>
                    <Sun fill={ theme.colors.text } />
                    <Text style={ styles.text }>Mode Clair</Text>
                </Pressable>                
            </View>
        )
    }

}

const getStyles = (theme) => StyleSheet.create({
    view: {
        borderRadius: 32,
        borderWidth: 3,
        borderColor: theme.colors.border,

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
        color: theme.colors.text,
        fontSize: Constants.normalize(16),
    }
});

export default function(props) {
    const theme = useTheme();
    LightThemeComponent.contextType = ThemeContext;
  
    return <LightThemeComponent {...props} theme={theme} />;
}