import { extendTheme, theme } from "@chakra-ui/react";


export default extendTheme({
    colors: {
        primary: theme.colors["red"],
        secondary: theme.colors["white"],
        green:  ["#00DA23"],
        black:  ["#000000"],
        pink:  ["#E31CB8"],
        purple:  ["#5827C1"],
        aqua:  ["#65D8D1"],
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
            Text:{
                marginInlineStart: "1rem"
            }
        },
    },

});