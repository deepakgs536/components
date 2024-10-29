import { styled } from '@mui/material/styles';
import IconButton from '@mui/material/IconButton';
import { alpha } from '@mui/material/styles';
import { Typography } from '@mui/material';

// Define and export the styled Notification Icon Button
export const StyledNotificationIcon = styled(IconButton)(({ theme }) => ({
    pointerEvents: 'none', // Disable pointer events if you want it unclickable
    color: theme.palette.primary.main, // Accessing theme's primary color
    backgroundColor: alpha(theme.palette.primary.light, 0.15),
    borderRadius: '5px',
    padding: '5px',
}));

// Define and export the styled Close Icon Button
export const StyledCloseIcon = styled(IconButton)(({ theme }) => ({
    color: theme.palette.text.secondary, // Accessing theme's primary color
    backgroundColor: 'transparent',
    borderRadius: '50%',
    padding: '5px',
    margin:'0',
    '&:focus':{
        outline:'none',
    }
}));

export const StyledDateTime = styled(Typography)(({ theme }) => ({
    color: theme.palette.text.disabled, // Accessing theme's primary color
    fontSize:'14px',
}));

export const StyledNotificationFrom = styled(Typography)(({ theme }) => ({
    padding:'0',
    margin:'0',
    color: theme.palette.text.primary, // Accessing theme's primary color
    fontSize:'16px',
}));

export const StyledNotificationContainer = {
    width: '350px', 
    padding: '10px', 
    position: 'relative', 
    transition: 'background-color 0.3s', 
    backgroundColor: 'transparent'
}

export default StyledNotificationIcon; // Optionally keep the default export for the notification icon
