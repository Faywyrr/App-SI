import React from 'react';
import { View, Text, StyleSheet } from 'react-native';

/* Theme */
import { useTheme } from '@react-navigation/native';

/* Constants */
import Constants from '../../Constants';

/* Images */
import Battery1 from '../../assets/icons/battery/battery-1.svg';
import Battery2 from '../../assets/icons/battery/battery-2.svg';
import Battery3 from '../../assets/icons/battery/battery-3.svg';
import Battery4 from '../../assets/icons/battery/battery-4.svg';

class BatteryComponent extends React.Component {

    /* Render */
    render() {
        const theme = this.props.theme;
        const styles = getStyles(theme);

        return (
            <View style={ [this.props.style, styles.box, Constants.SHADOW(theme)] }>
                <View style={ styles.top }>
                    <Text style={ styles.text }>Batterie</Text>
                </View>

                <View style={ styles.separator }></View>

                <View style={ styles.bottom }>
                    <Battery3 fill={ theme.colors.text } style={ styles.battery }></Battery3>
                    <Text style={ styles.text }>65%</Text>
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
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'space-around'
    },

    battery: {
    },

    text: {
        fontSize: Constants.normalize(18),
        color: theme.colors.text
    }
});

export default function(props) {
    const theme = useTheme();
  
    return <BatteryComponent {...props} theme={theme} />;
}