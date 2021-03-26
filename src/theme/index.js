import { createMuiTheme } from '@material-ui/core/styles';
import { red } from '@material-ui/core/colors';

const theme = createMuiTheme({
    palette: {
        primary: {
            main: '#317bc3',
        },
        secondary: {
            main: '#ff1744'
        },
        error: {
            main: red.A400,
        },
        background: {
            default: '#fff',
        },
    },
    typography: {
        fontFamily: 'Proxima Nova, sans-serif',
    },
    overrides: {
        MuiTextField: {
            root: {
                fontSize: '23px'
            },
        },
    }
});

export default theme;