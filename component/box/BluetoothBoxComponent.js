import React from 'react';
import { View, Text, Pressable, StyleSheet, Platform, Linking } from 'react-native';

/* Theme */
import { useTheme } from '@react-navigation/native';

/* Constants */
import Constants from '../../Constants';

/* SVG */
import BluetoothIcon from '../../assets/bluetooth-icon.svg';

class BluetoothBoxComponent extends React.Component {

    /* Render */
    render() {
        const theme = this.props.theme;
        const styles = getStyles(theme);

        return (
            <View style={ [styles.box, Constants.SHADOW(theme)] }>
                <Text style={ styles.text }>{ 'Le bluetooth n\'est pas activé !\nActivez le pour continuer !' }</Text>

                <View style={ styles.view }>
                    <Pressable onPress={ () => openBluetoothSettings() } style={ styles.button } android_ripple={ { color: '#808080', borderless: true } }>
                        <Text style={ styles.buttonText }>Paramètres Bluetooth</Text>
                        <BluetoothIcon fill='#FFFFFF' style={ styles.image } />
                    </Pressable>
                </View>

            </View>
        )
    }

}

const openBluetoothSettings = () => {
    Linking.openSettings()

}

const getStyles = (theme) => StyleSheet.create({
    box: {
        backgroundColor: theme.colors.background,
        paddingTop: 20,
        paddingBottom: 20,
        padding: 20,
        borderWidth: 3,
        borderRadius: 20,
        borderColor: theme.colors.border,

        height: 170
    },

    text: {
        fontSize: Constants.normalize(20),
        color: theme.colors.text,
    },

    view: {
        position: 'absolute',
        right: 20,
        bottom: 20,

        backgroundColor:'#333333',
        height: 45,
        borderRadius: 10,
    },

    button: {
        flex: 1,

        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'space-between',
        color: theme.colors.text,
        padding: 10,
    },

    buttonText: {
        color: '#FFFFFF',
        fontSize: Constants.normalize(17),
        textAlign: 'right',
    },

    image: {
        marginLeft: 10,
        height: '90%',
        resizeMode: 'contain',
    }
});

export default function(props) {
    const theme = useTheme();
  
    return <BluetoothBoxComponent {...props} theme={theme} />;
}