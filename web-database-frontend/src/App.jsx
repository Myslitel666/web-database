import Home from './pages/Home/Home';
import Header from './components/Header';
import Navigation from './components/NavigationBox.jsx';
import { Box } from '@mui/material';
import './App.css';
import { ThemeProvider } from '@mui/material/styles';
import CssBaseline from '@mui/material/CssBaseline';
import theme from './components/theme.js';

function App() {
  return (
    <ThemeProvider theme={theme}>
      <CssBaseline /> {/* Сброс базовых стилей */}
        <Header/>
        <Box sx = {{display: 'flex'}}>
          <Navigation/>
          <Home/>
        </Box>
    </ThemeProvider>
  )
}

export default App
