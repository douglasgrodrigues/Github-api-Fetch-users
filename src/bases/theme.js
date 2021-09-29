import { createMuiTheme } from "@material-ui/core/";
import { primaryColor, secondaryColor, elementColor, characterColor } from "../bases/colors"


const theme = createMuiTheme({
    palette: {
        primary: {
            main: primaryColor,
            contrastText: elementColor
        },
        secondary: {
            main: secondaryColor,
        },
        text:{
            primary: characterColor
        }
    }
});

export default theme 