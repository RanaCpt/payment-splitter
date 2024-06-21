import { createTheme } from "@mui/material";

const theme = createTheme({
    palette: {
        mode: 'dark',
        primary: {
            main: '#90caf9'
        },
        secondary: {
            main: '#f44336'
        }
    },
    components:{
        MuiAppBar:{
            styleOverrides:{
                root:{
                    backgroundColor: '#333'
                }
            }
        },
        MuTabs:{
            styleOverrides:{
                root:{
                    marginBottom: '1rem'
                }
            }
        },
        MuiTab:{
            styleOverrides:{
                root:{
                    textTransform: 'none'
                }
            }
        },
        MuiListItem:{
            styleOverrides: {
                root:{
                    border: '1px solid #555'
                }
            }
        }
    }
});

export default theme;