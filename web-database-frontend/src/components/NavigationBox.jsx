import Box from '@mui/material/Box';
import CssBaseline from '@mui/material/CssBaseline';
import { heightHeader } from './Header';
import NavigationMenu from './NavigationMenu';

export default function NavigationBox() {

  return (
    <Box         
        sx={{ 
            height: `calc(100vh - ${heightHeader} - 1px)`,
            width: '20rem',
            overflowY: 'auto', // Добавляем вертикальную прокрутку
        }}  
    >
      <CssBaseline />
      <NavigationMenu></NavigationMenu>
    </Box>
  );
}