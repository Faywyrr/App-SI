import React from 'react';
import { StyleSheet, Text, View } from 'react-native';

/* Theme */
import { useTheme } from '@react-navigation/native';

/* Components */
import Stats from '../component/box/StatsComponent';
import SliderComponent from '../component/SliderComponent';

class StatisticsScreen extends React.Component {

    //Render
    render() {
        const theme = this.props.theme;
        const styles = getStyles(theme);

        return (
            <View style={ [this.props.style, styles.box] }>

                <View style={ styles.statistics }>
                    <Stats style={ styles.stats } title={ 'Vitesse' } info={ '0\nKM / H' } />
                    <Stats style={ styles.stats } title={ 'Distance' } info={ '6 KM\n300 M' } />
                    <Stats style={ styles.stats } title={ 'Durée' } info={ '0 H\n34 MIN' } />
                </View>

                <SliderComponent style={ styles.slider } />

            </View>
        );
    }

}

const getStyles = (theme) => StyleSheet.create({
    box: {
        flexDirection: 'column',
        alignItems: 'center',

        backgroundColor: theme.colors.background,
        height: '100%',
    },

    statistics: {
        marginTop: 20,

        flexDirection: 'row',
        flexWrap: 'wrap',
        alignItems: 'center',
        justifyContent: 'space-around'
    },  

    stats: {
        margin: 10,
    },

    slider: {
        position: 'absolute',
        width: '70%',

        bottom: '10%',
    }
});

export default function(props) {
    const theme = useTheme();
  
    return <StatisticsScreen {...props} theme={theme} />;
}