import React from 'react';
import { StyleSheet, Text, View } from 'react-native';

/* Theme */
import { useTheme } from '@react-navigation/native';

/* Components */
import Bike from '../component/BikeComponent';
import Informations from '../component/box/InformationsComponent';
import Battery from '../component/box/BatteryComponent';
import BluetoothStatus from '../component/BluetoothStatusComponent';
import SliderComponent from '../component/SliderComponent';

class YourBikeScreen extends React.Component {

    //Render
    render() {
        const theme = this.props.theme;
        const styles = getStyles(theme);

        return (
            <View style={ [this.props.style, styles.box] }>
                <BluetoothStatus style={ styles.bluetooth } active={ true } />
                <Bike style={ styles.bike }/>

                <View style={ styles.infos }>
                    <Informations />
                    <Battery />
                </View>

                <SliderComponent style={ styles.slider } />
            </View>
        );
    }

}

const getStyles = (theme) => StyleSheet.create({
    box: {
        backgroundColor: theme.colors.background,
        height: '100%',

        alignItems: 'center',
        flexDirection: 'column',

    },

    bike: {
        position: 'absolute',
        bottom: '60%',

        display: 'none',
        position: 'absolute',
    },

    bluetooth: {
        position: 'absolute',
        
        top: '4%',
        left: '4%'
    },

    infos: {
        width: '100%',
        paddingLeft: '5%',
        paddingRight: '5%',

        position: 'absolute',
        bottom: '30%',

        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'center',
    },

    slider: {
        position: 'absolute',
        width: '70%',

        bottom: '10%',
    }

});

export default function(props) {
    const theme = useTheme();
  
    return <YourBikeScreen {...props} theme={theme} />;
}