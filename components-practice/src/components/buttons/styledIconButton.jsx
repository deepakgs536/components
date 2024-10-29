import { IconButton, styled } from "@mui/material";
import { alpha } from "@mui/material/styles"; // Import alpha for opacity handling

// StyledIconButton with specified styles
const StyledIconButton = styled(IconButton)(({ theme, size = 'large', disabled = true }) => ({
    width: 'max-content', 
    textTransform: 'none', // Set width to auto
    '&:focus': {
            outline: 'none',
        },
    // Default styles for the button
    ...(size === 'large' && {
        borderRadius: '5px',
        padding: '10px 12px',
        backgroundColor: theme.palette.success.main, // Use theme for success color
        color: theme.palette.secondary.textColor,
        '&:hover': {
            backgroundColor: alpha(theme.palette.success.main, 0.8), // Darker on hover
        },
        '&.Mui-disabled': {
                backgroundColor: theme.palette.text.disabled, // Background color when disabled
                color: theme.palette.secondary.textColor, // Text color when disabled
        },
    }),

    // Styles for small size
    ...(size === 'small' && {
        borderRadius: '50%',
        padding: '8px', // Adjust padding for small size if necessary
        color: theme.palette.success.main,
        backgroundColor: alpha(theme.palette.success.main, 0.1),
        '&:hover': {
            backgroundColor: alpha(theme.palette.success.main, 0.25), // Change background color on hover
        },
        '&.Mui-disabled': {
                backgroundColor: alpha(theme.palette.text.disabled,0.15), // Background color when disabled
                color: theme.palette.text.disabled, // Text color when disabled
        },
    }),

    // Styles when disabled
    
}));

export default StyledIconButton;
