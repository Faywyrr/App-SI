import React from 'react';
import { StyleSheet, Text, View } from 'react-native';

/* Theme */
import { useTheme } from '@react-navigation/native';

class LocationScreen extends React.Component {

    //Render
    render() {
        const theme = this.props.theme;
        const styles = getStyles(theme);

        return (
            <View style={ [this.props.style, styles.box] }>
                <Text>WIP</Text>
            </View>
        );
    }

}

const getStyles = (theme) => StyleSheet.create({
    box: {
        backgroundColor: theme.colors.background,
        height: '100%'
    },
});

export default function(props) {
    const theme = useTheme();
  
    return <LocationScreen {...props} theme={theme} />;
}