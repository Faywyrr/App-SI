import React from 'react';
import { StyleSheet, View } from 'react-native';

/* Constants */
import Constants from '../Constants';

/* Theme */
import { useTheme } from '@react-navigation/native';

/* Components */
import Theme from '../component/settings/ThemeComponent';
import SettingsComponent from '../component/settings/SettingsComponent';
import AboutComponent from '../component/settings/AboutComponent';

class SettingsScreen extends React.Component {

    //Render
    render() {
        const theme = this.props.theme;
        const styles = getStyles(theme);        

        return (
            <View style={ [this.props.style, styles.box] }>
                <Theme style={ [styles.item, styles.theme] } />

                <SettingsComponent style={ styles.item } name={ `Version de l'application` } value={  Constants.APP_VERSION } />
                <SettingsComponent style={ styles.item } name={ `Version du micrologiciel` } value={ 'Non connecté' } />

                <AboutComponent style={ styles.item } />
            </View>
        );
    }

}

const getStyles = (theme) => StyleSheet.create({
    box: {
        backgroundColor: theme.colors.background,
        height: '100%',
    },

    theme: {
        marginTop: 20,
    },

    item: {
        margin: '3%'
    }
});

export default function(props) {
    const theme = useTheme();
  
    return <SettingsScreen {...props} theme={theme} />;
}