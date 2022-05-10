import React from 'react';
import { StyleSheet, View } from 'react-native';

/* Theme */
import { useTheme } from '@react-navigation/native';

/* Constants */
import Constants from '../Constants';

/* SVGs */
import BluetoothIcon from '../assets/bluetooth-icon.svg';
import Signal from '../assets/icons/signal.svg';

class BluetoothStatusComponent extends React.Component {

    // Render
    render() { 
        const theme = this.props.theme;
        const styles = getStyles(theme);

        return (
            <View style={ [ this.props.style, { backgroundColor: this.props.active ? '#86F370' : '#EF5245' }, styles.box, Constants.SHADOW(theme)] }>
                <BluetoothIcon style={ styles.bluetooth } height='40%' width='40%' fill='black'/>
                <Signal style={ styles.signal } height='60%' width='60%' fill='black'/>
            </View>
        )
    }

}

const getStyles = (theme) => StyleSheet.create({
    box: {
        width: '17%',
        height: '11.5%',

        /*borderWidth: 3,
        borderColor: theme.colors.border,*/
        borderRadius: 20
    },

    bluetooth: {
        resizeMode: 'contain',

        position: 'absolute',
        top: 4,
        left: 4
    },

    signal: {
        resizeMode: 'contain',

        position: 'absolute',
        bottom: 2,
        right: 2
    }
});

export default function(props) {
    const theme = useTheme();
  
    return <BluetoothStatusComponent {...props} theme={theme} />;
}