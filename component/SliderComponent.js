import React from 'react';
import { StyleSheet, View } from 'react-native';
import { Slider } from '@miblanchard/react-native-slider';

/* Theme */
import { useTheme } from '@react-navigation/native';


class SliderComponent extends React.Component {

    // Render
    render() {
        const theme = this.props.theme;
        const styles = getStyles(theme);        

        return (
            <View style={ [styles.box, this.props.style] }>
                <Slider value={ 1 } step={ 1 } minimumValue={ 1 } maximumValue={ 10 } minimumTrackTintColor={ theme.colors.slider } containerStyle={ styles.container } trackStyle={ styles.track } thumbStyle={ styles.thumb } />
            </View>
        );
    }

}

const getStyles = (theme) => StyleSheet.create({
    track: {
        height: 45,
        backgroundColor: theme.colors.fill
    },

    thumb: {
        borderRadius: 4,
        borderWidth: 3,
        borderColor: theme.colors.slider,

        height: 45,
        width: 45,

        backgroundColor: theme.colors.background
    }
});

export default function(props) {
    const theme = useTheme();
  
    return <SliderComponent {...props} theme={theme} />;
}