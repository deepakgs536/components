import React from 'react';
import { Typography, Button, styled } from '@mui/material';
import { alpha } from '@mui/material/styles';
import GoogleLogo from './googlelogo.png';

const GoogleSignUpButton = styled(Button)(({ theme }) => ({
    minWidth:'250px',
    width: '100%',
    position: 'relative', // To allow absolute positioning of the icon
    padding: '10px',
    backgroundColor: alpha(theme.palette.text.disabled, 0.13),
    color: theme.palette.text.primary,
    borderRadius: '5px',
    fontSize: '14px',
    textTransform: 'none',

    '&:focus': {
        outline: 'none',
    },
    '&:hover': {
        backgroundColor: alpha(theme.palette.text.disabled, 0.2),
    },
    '&.Mui-disabled': {
        opacity: 0.9,
        pointerEvents: 'none',
    },
}));

const GoogleIcon = ({ disabled }) => (
    <img 
        src={GoogleLogo} 
        alt="Google Logo" 
        style={{
            width: '24px', 
            height: '24px', 
            position: 'absolute', 
            left: '10px', 
            opacity: disabled ? 0.5 : 1 // Change opacity based on disabled prop
        }} 
    />
);

const StyledGoogleIcon = styled(GoogleIcon)({
    position: 'absolute',
    left: '10px', // Position the icon 10px from the left edge of the button
});

const SignUpWithGoogle = ({ disabled }) => {
    return (
        <GoogleSignUpButton disabled={disabled}>
            <StyledGoogleIcon disabled={disabled} /> {/* Pass disabled prop to icon */}
            <Typography>Sign Up with Google</Typography>
        </GoogleSignUpButton>
    );
};

export default SignUpWithGoogle;
