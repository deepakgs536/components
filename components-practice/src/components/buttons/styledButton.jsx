import { Button, styled } from "@mui/material";
import { alpha } from "@mui/material/styles";

// StyledButton with common properties extracted
const StyledButton = styled(Button)(({ theme, ...props }) => {
    const { variant = 'filled', size = 'large' , startIcon = '', disabled = false } = props;

    
    const commonStyles = {
        fontSize: '14px',
        textTransform: 'none',
        whiteSpace: 'nowrap',
        justifyContent: startIcon ? 'flex-start' : 'center',
    
        // Full width only when no startIcon and size is large
        ...(variant && size === 'large' && !startIcon && {
            width: '100%',
        }),
    
        // Auto width with inline-flex when startIcon is present
        ...(startIcon && variant && {
            width: 'max-content',              // Explicitly set to auto
            display: 'inline-flex',      // Ensures it wraps around content
            padding: '5px 15px',         // Custom padding
        }),
    
        // Small size button padding
        ...(size === 'small' && {
            width: 'max-content', 
            padding: '2px 15px',
        }),
        
        '&:focus': {
            outline: 'none',
        },
    
        ...(disabled && {
            pointerEvents: 'none',
        }),
    };
    

    return {
        ...commonStyles, // Apply common styles

        ...(variant === 'outlined' && {
            backgroundColor: theme.palette.secondary.textColor, // White background for outlined variant
            border: `2px solid ${theme.palette.success.main}`, // Set the border
            color: theme.palette.success.main,

            '&:hover': {
                border: `2px solid ${alpha(theme.palette.success.main,2)}`,
                backgroundColor: alpha(theme.palette.success.main, 0.1), // Light gray background on hover
            },

            ...(disabled && {
                backgroundColor: theme.palette.secondary.textColor,
                color: theme.palette.text.disabled,
                border: `2px solid ${theme.palette.text.disabled}`, // Change border color when disabled
            }),
        }),

        ...(variant === 'filled' && {
            backgroundColor: theme.palette.success.main,
            color: theme.palette.secondary.textColor,
            border: `2px solid ${theme.palette.success.main}`,

            '&:hover': {
                backgroundColor: alpha(theme.palette.success.main, 0.8),
                border: `2px solid ${theme.palette.success.main}`, // Darker background on hover
            },

            '&.Mui-disabled': {
                backgroundColor: theme.palette.text.disabled, // Background color when disabled
                color: theme.palette.secondary.textColor,
                border: `2px solid ${theme.palette.text.disabled}`, // Text color when disabled
            },
        }),
        
    };
});

export default StyledButton;
