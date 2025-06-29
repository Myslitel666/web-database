import { Box, Typography, Stack } from "@mui/material";

export default function SourceCard({ src, title, info }) {
    return (
        <Box 
            sx={{
                display: 'flex',
                alignItems: 'center',
                p: '1rem',
                border: '1px solid',
                borderColor: 'divider',
                height: '7.5rem',
                borderRadius: '0.75rem',
                cursor: 'pointer',
                transition: 'background-color 0.2s ease',
                ':hover': {
                    backgroundColor: 'action.hover'
                }
            }}
        >
            <img 
                src={src} 
                alt={title} 
                style={{ 
                    width: '4.5rem', 
                    height: '4.5rem',
                    marginRight: '0.66rem' 
                }} 
            />
            <Stack spacing={0.5}>
                <Typography variant="h6">{title}</Typography>
                <Typography variant="body2" color="text.secondary">{info}</Typography>
            </Stack>
        </Box>
    );
}
