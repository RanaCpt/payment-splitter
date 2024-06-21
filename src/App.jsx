import {
  ThemeProvider, CssBaseline,
  Container, Typography,
  AppBar,Toolbar
} from '@mui/material'
import theme from './theme/theme'
import { AppProvider } from './contexts/AppContext'
import CurrencySelector from './components/CurrencySelector';
import TabsComponent from './components/Tabs';


function App() {

  return (
    <ThemeProvider theme={theme}>
      <CssBaseline />
      <AppProvider>
        <AppBar position="static">
          <Toolbar>
            <Typography variant="h6" sx={{ flexGrow: 1 }}>Select Currency</Typography>
            <CurrencySelector/>
          </Toolbar>
        </AppBar>
        <Container>
          <TabsComponent/>
        </Container>
      </AppProvider>
    </ThemeProvider>
  );

};

export default App
