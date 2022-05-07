import { extendTheme, theme } from "@chakra-ui/react";


export default extendTheme({
    colors: {
        primary: theme.colors["red"],
        secondary: theme.colors["white"],
    },
    fonts: {
        heading: 'Krona One',
        body: 'Body Font Name, sans-serif',
      },
    styles: {
        global:{
            body: {
                backgroundColor: "rgb(241 241 241 / 10%)",
                
            },
        },
    },

});