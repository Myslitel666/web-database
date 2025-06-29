import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import Toolbar from '@mui/material/Toolbar';
import Typography from '@mui/material/Typography';
import Button from '@mui/material/Button';
import IconButton from '@mui/material/IconButton';
import LanguageIcon from '@mui/icons-material/Language';

export const heightHeader = '55px';

export default function ButtonAppBar() {
  return (
    <Box sx={{ 
        flexGrow: 1,
        width: '100vw'
    }}>
      <AppBar 
        position="static" 
        color='white'
        sx={{ 
          boxShadow: 'none',
          borderBottom: '1px solid',
          borderColor: 'divider'
        }}
      >
        <Toolbar sx = {{
            '@media (min-width:600px)': {
              paddingLeft: '0.5rem',
              paddingRight: '0.5rem',
              minHeight: heightHeader,
              height: heightHeader,
            }
          }}>
          <LanguageIcon sx={{
            cursor: 'pointer',
            fontSize: "2.5rem",
            marginRight: "4px",
            color: 'primary.main'
          }} />
          <Typography variant="h6" component="div" sx={{ flexGrow: 1 }}>
                <Box component="span" sx={{ color: 'primary.main' }}>Web </Box>
                <Box component="span">& Database</Box>
          </Typography>
          <Button sx = {{color:'primary.main'}}>Login</Button>
        </Toolbar>
      </AppBar>
    </Box>
  );
}
