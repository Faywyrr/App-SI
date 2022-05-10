import { Dimensions, PixelRatio, Platform } from 'react-native';

/* SVGs */
import Home from './assets/navBar/home.svg';
import Stats from './assets/navBar/stats.svg';
import Location from './assets/navBar/location.svg';
import Settings from './assets/navBar/settings.svg';

const Constants = {

    APP_VERSION: '1.0',
    THEME_KEY: 'Theme',

    /* Shadow */
    SHADOW: (theme) => ({
        shadowColor: theme.colors.shadow,
        shadowOffset: {
            width: 0,
            height: 3,
        },
        shadowOpacity: 0.29,
        shadowRadius: 4.65,
        
        elevation: 7,
    }),

    /* Icons */
    ICONS: {
        Home: {
            IMAGE: (size, color) => <Home fill={ color } width={ size } height={ size } />,
            FRIENDLY_NAME: 'Votre Vélo'
        },

        Statistics: {
            IMAGE: (size, color) => <Stats fill={ color } width={ size } height={ size } />,
            FRIENDLY_NAME: 'Statistiques'
        },

        Location: {
            IMAGE: (size, color) => <Location fill={ color } width={ size } height={ size } />,
            FRIENDLY_NAME: 'Localisation'
        },

        Settings: {
            IMAGE: (size, color) => <Settings fill={ color } width={ size } height={ size } />,
            FRIENDLY_NAME: 'Paramètres'
        }
    },


    /* Functions */
    normalize: (size) => { /* From https://stackoverflow.com/questions/33628677/react-native-responsive-font-size */
        const scale = Dimensions.get('window').width / 320;
        const newSize = size * scale;
        /*if (Platform.OS === 'ios') {
            return Math.round(PixelRatio.roundToNearestPixel(newSize)) - 2;
        } else {*/
            return Math.round(PixelRatio.roundToNearestPixel(newSize)) - 2;
        //}
    },

};

export default Constants;