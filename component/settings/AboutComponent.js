import React from 'react';
import { Pressable, View, StyleSheet, Text, Linking } from 'react-native';

/* Theme */
import { useTheme } from '@react-navigation/native';

/* Constants */
import Constants from '../../Constants';

/* SVGs */
import ChevronDown from '../../assets/chevron-down.svg';
import ChevronUp from '../../assets/chevron-up.svg';

//TODO: Animation
class AboutComponent extends React.Component {

    state = {
        open: false
    }

    /* Render */
    render() {
        const theme = this.props.theme;
        const styles = getStyles(theme);        

        return (
            <View style={ [this.props.style, styles.view] }>
                <Pressable onPress={ () => this.setState({ open: !this.state.open }) } style={ styles.box } android_ripple={ { color: theme.colors.border, borderless: true } }>
                    <View style={ styles.line }>
                        <Text style={ styles.text }>À propos</Text>
                        { this.state.open ? <ChevronUp height={ '100%' } fill={ theme.colors.text }/> : <ChevronDown height={ '100%' } fill={ theme.colors.text }/> }
                    </View>
                    
                    { this.state.open && <Text style={ [styles.text, styles.about] }>
                        {`Aucune donnée n'est récoltée.\nCrée entièrement par `}
                        <Text style={ styles.link } onPress={() => Linking.openURL('https://faywyrr.me') }>Faywyrr</Text>
                        {`.\nMerci à Alex pour le logo.`}
                    </Text> }
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
        padding: 10,
    },

    line: {
        flexDirection: 'row',
        justifyContent: 'space-between',
    },

    boxOpen: {
        
    },

    text: {
        color: theme.colors.text,
        fontSize: Constants.normalize(18),
    },

    link: {
        color: '#5499C7'
    },

    about: {
        marginTop: '3%'
    }, 
});

export default function(props) {
    const theme = useTheme();
  
    return <AboutComponent {...props} theme={theme} />;
}