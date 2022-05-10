import React from 'react';
import { View } from 'react-native';

/* Theme */
import { useTheme } from '@react-navigation/native';

/* Constants */
import Constants from '../Constants';

/* Image */
import BikeSVG from '../assets/bike.svg'

class BikeComponent extends React.Component {

    // Render
    render() { 
        const theme = this.props.theme;
                
        return (
            <View style={ [this.props.style] }>
                <BikeSVG fill={ theme.colors.icon } width={ Constants.normalize(217) } />
            </View>
        )
    }

}

export default function(props) {
    const theme = useTheme();
  
    return <BikeComponent {...props} theme={theme} />;
}