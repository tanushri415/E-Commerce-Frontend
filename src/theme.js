// import { red } from '@mui/material/colors';
import { alpha, createTheme, getContrastRatio } from '@mui/material';

const violetBase = '#f0c14b';
const violetMain = alpha(violetBase, 0.7);

// Create a theme instance.
const theme = createTheme({
    palette: {
        // primary: {
        //     main: '#556cd6',
        // },
        // secondary: {
        //     main: '#19857b',
        // },
        // error: {
        //     main: red.A400,
        // },
        violet: {
            main: violetMain,
            light: alpha(violetBase, 0.5),
            dark: alpha(violetBase, 0.9),
            contrastText:
                getContrastRatio(violetMain, '#fff') > 4.5 ? '#fff' : '#111',
        },
    },
});

export default theme;
