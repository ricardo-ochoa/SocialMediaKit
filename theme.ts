import { extendTheme, theme } from "@chakra-ui/react";


export default extendTheme({
    colors: {
        primary: theme.colors["purple"],
        secondary: theme.colors["red"],
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