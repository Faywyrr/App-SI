import React from 'react';
import { View, Text, StyleSheet } from 'react-native';

/* Theme */
import { useTheme } from '@react-navigation/native';

/* Constants */
import Constants from '../../Constants';

/* Images */

class StatsComponent extends React.Component {

    /* Render */
    render() {
        const theme = this.props.theme;
        const styles = getStyles(theme);

        return (
            <View style={ [this.props.style, styles.box, Constants.SHADOW(theme)] }>
                <View style={ styles.top }>
                    <Text style={ styles.title }>{ this.props.info }</Text>
                </View>

                <View style={ styles.separator }></View>

                <View style={ styles.bottom }>
                    <Text style={ styles.text }>{ this.props.title }</Text>
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

        width: '40%',
        height: '65%'
    },

    top: {
        padding: 10,
        backgroundColor: theme.colors.fill,
        flex: 1,
    }, 

    separator: {
        backgroundColor: theme.colors.border,
        height: 3,
    },

    bottom: {
        padding: 10,
    },

    title: {
        color: theme.colors.text, 

        textAlign: 'center',
        fontSize: Constants.normalize(20),
    },

    text: {
        color: theme.colors.text, 

        textAlign: 'center',
        fontSize: Constants.normalize(18),
    }
});

export default function(props) {
    const theme = useTheme();
  
    return <StatsComponent {...props} theme={theme} />;
}