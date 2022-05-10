import React from 'react';
import { Text, Appearance } from 'react-native';

/* Constants */
import Constants from './Constants';
import Themes from './Themes';

/* React Navigation */
import { NavigationContainer, useTheme } from '@react-navigation/native';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';

/* Screens */
import YourBike from './screens/YourBikeScreen';
import Statistics from './screens/StatisticsScreen';
import Settings from './screens/SettingsScreen';
import Location from './screens/LocationScreen';

/* Storage */
import AsyncStorage from '@react-native-async-storage/async-storage';

export const Tab = createBottomTabNavigator();
export const ThemeContext = React.createContext();

class Home extends React.Component {

    loaded = false;

    state = {
        theme: Themes.LIGHT
    };

    setTheme = async (newTheme) => {
        if(this.state.theme != newTheme) {
            this.setState({ theme: newTheme });
            await AsyncStorage.setItem(Constants.THEME_KEY, newTheme.name);
        }
    };

    async componentDidMount() {
        this.loaded = true;
        
        const theme = await getDefaultTheme();
        this.setState({ theme: theme });
    }

    /* Render */
    render() {
        if(!this.loaded) return null;

        const themeData = { theme: this.state.theme, toggleTheme: this.toggleTheme, setTheme: this.setTheme };

        return (
            <ThemeContext.Provider value={ themeData }>
                <NavigationContainer theme={ this.state.theme }>
                    <Tab.Navigator screenOptions={({ route }) => {
                    /* Theme */
                    const theme = useTheme();

                    return ({
                        /* Header */
                        headerTitleAlign: 'center',
                        headerShadowVisible: true,
                        headerStyle: {
                            backgroundColor: theme.colors.background,
                            elevation: 10,
                            shadowOpacity: 0.2,
                            shadowColor: theme.colors.shadow,
                        },
                        headerTitle: () => {
                            return <Text style={ { fontSize: Constants.normalize(22), color: theme.colors.text } }>{ Constants.ICONS[route.name].FRIENDLY_NAME }</Text>;
                        },

                        /* Tab Bar */
                        tabBarStyle: {
                            backgroundColor: theme.colors.background,
                        },
                        /* Icons */
                        tabBarIcon: ({ focused, color, size }) => {
                            return Constants.ICONS[route.name].IMAGE(size - 5, theme.colors.icon);
                        },
                        /* Label */
                        tabBarLabel: ({ focused, color, position }) => {
                            return <Text style={ { fontSize: Constants.normalize(14), color: theme.colors.text } }>{ Constants.ICONS[route.name].FRIENDLY_NAME }</Text>
                        },
                        /* Backgroud */
                        tabBarActiveBackgroundColor: theme.colors.fill
                    })}}>
                        <Tab.Screen name='Home' component={ YourBike } />
                        <Tab.Screen name='Statistics' component={ Statistics } />
                        <Tab.Screen name='Location' component={ Location } />
                        <Tab.Screen name='Settings' component={ Settings } />
                    </Tab.Navigator>
                </NavigationContainer>                
            </ThemeContext.Provider>
        );
    }

}

const getDefaultTheme = async () => {
    const value = await AsyncStorage.getItem(Constants.THEME_KEY);
    if(value != null)
        return value == 'dark' ? Themes.DARK : Themes.LIGHT;

    return Appearance.getColorScheme() == 'dark' ? Themes.DARK : Themes.LIGHT;
};

export default Home;