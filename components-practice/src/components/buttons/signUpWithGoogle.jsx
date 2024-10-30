import React from 'react';
import { Typography, Button, styled } from '@mui/material';
import { alpha } from '@mui/material/styles';
import GoogleLogo from '../../assets/googleLogos.png';

const GoogleSignUpButton = styled(Button)(({ theme }) => ({
    minWidth: '250px',
    width: '100%',
    position: 'relative',
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

const GoogleIcon = ({ src , disabled }) => (
    <img 
        src={src} 
        alt="Google Logo" 
        style={{
            width: '24px', 
            height: '24px', 
            position: 'absolute', 
            left: '10px', 
            opacity: disabled ? 0.5 : 1
        }} 
    />
);

const StyledGoogleIcon = styled(GoogleIcon)({
    position: 'absolute',
    left: '10px',
});

const SignUpWithGoogle = ({ iconSrc, text, disabled }) => {
    return (
        <GoogleSignUpButton disabled={disabled}>
            <StyledGoogleIcon src={iconSrc} disabled={disabled} />
            <Typography>{text}</Typography>
        </GoogleSignUpButton>
    );
};

export default SignUpWithGoogle;
