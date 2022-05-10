import React from 'react';
import { View, Text, StyleSheet } from 'react-native';

/* Theme */
import { useTheme } from '@react-navigation/native';

/* Constants */
import Constants from '../../Constants';

/* SVGs */
import Check from '../../assets/icons/check-circle.svg';
import Cross from '../../assets/icons/cross-circle.svg';

class InformationsComponent extends React.Component {

    /* Render */
    render() {
        const theme = this.props.theme;
        const styles = getStyles(theme);        

        return (
            <View style={ [this.props.style, styles.box, Constants.SHADOW(theme)] }>
                <View style={ styles.top }>
                    <Text style={ styles.text }>Informations</Text>
                </View>

                <View style={ styles.separator }></View>

                <View style={ styles.bottom }>
                    <View style={ styles.line }>
                        <Text style={ styles.text }>Connecté</Text>
                        <Check fill={ theme.colors.text } />
                    </View>
                    <View style={ styles.line }>
                        <Text style={ styles.text }>Charge</Text>
                        <Cross fill={ theme.colors.text } />
                    </View>
                    
                </View>
            </View>
        )
    }

}

const getStyles = (theme) => StyleSheet.create({
    box: {
        overflow: 'hidden',

        backgroundColor: theme.colors.background,
        borderWidth: 3,
        borderRadius: 20,
        borderColor: theme.colors.border,

        width: '43%',
        height: '100%',
    },

    line: {
        flexDirection: 'row',
        
        alignItems: 'center',
        justifyContent: 'space-between'
    },

    top: {
        padding: 10,

        backgroundColor: theme.colors.fill,
        
        alignItems: 'center',
        justifyContent: 'center',
    }, 

    separator: {
        backgroundColor: theme.colors.border,
        height: 3,
    },

    bottom: {
        backgroundColor: theme.colors.secondary,

        padding: 10,

        flex: 1,
        justifyContent: 'center',
    },

    text: {
        fontSize: Constants.normalize(18),
        color: theme.colors.text
    }
});

export default function(props) {
    const theme = useTheme();
  
    return <InformationsComponent {...props} theme={theme} />;
}