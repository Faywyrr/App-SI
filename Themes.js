const Themes = {
    LIGHT: {
        name: 'light',
        dark: false,
        colors: {
          primary: '#FFFFFF',
          secondary: '#FFFFFF',
          fill: '#EEEEEE',
          background: '#FFFFFF',
          text: '#333333',
          icon: '#333333',
          border: '#333333',
          shadow: '#000000',
          slider: '#868BBC',
          /*notification: 'rgb(255, 69, 58)',
          card: 'rgb(255, 255, 255)',*/
        },
    },

    DARK: {
      name: 'dark',
      dark: true,
      colors: {
        primary: '#1e1e1e',
        secondary: '#1e1e1e',
        fill: '#111111',
        background: '#1e1e1e',
        text: '#FFFFFF',
        icon: '#FFFFFF',
        border: '#808080',
        shadow: '#808080',
        slider: '#868BBC',
        /*notification: 'rgb(255, 69, 58)',
        card: 'rgb(255, 255, 255)',*/
      },
    }
};

export default Themes;