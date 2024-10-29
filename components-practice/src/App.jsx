
import { Box, Stack, ThemeProvider } from '@mui/material';
import StyledButton from './components/buttons/styledButton';
import LightTheme from './components/lightTheme';
import AcUnitIcon from '@mui/icons-material/AcUnit';
import StyledIconButton from './components/buttons/styledIconButton'
import SignUpWithGoogle from './components/buttons/signUpWithGoogle'
import Notification from './components/notification/notification';
function App() {
  return (
    <>
    <ThemeProvider theme={LightTheme}>
      <Box sx={{width:'200px' ,display:'flex', flexDirection:'column', rowGap:'20px'}}>
        
        <StyledButton variant='outlined' size='large' disabled={false} startIcon={<AcUnitIcon/>}>
          Button
        </StyledButton>
        <StyledButton variant='outlined' size='large' disabled={true} startIcon={<AcUnitIcon/>}>
          Button
        </StyledButton>
        <StyledButton variant='filled' size='large' disabled={false}>
          Button
        </StyledButton>
        <StyledButton variant='outlined' size='large' disabled={false}>
          Button
        </StyledButton>
        <StyledButton variant='filled' size='small' disabled={false}>
          Button
        </StyledButton>

      </Box>
      <Box sx={{width:'200px' ,display:'flex', flexDirection:'column', rowGap:'20px' , my:'20px'}}>

        <StyledIconButton size='large' disabled={false}>
          <AcUnitIcon/>
        </StyledIconButton>
        <StyledIconButton size='small' disabled={false}>
          <AcUnitIcon/>
        </StyledIconButton>

      </Box>
      <Box sx={{width:'300px' , my:'20px'}}>
      <SignUpWithGoogle/>
      </Box>


      <Notification
        date={{
            day: '16',
            month: 'Feb',
            year: '2024'
        }}
        time={{
            hour: 12,
            minute: '50',
            noon: 'AM'
        }}
        fromName="Srikrishna"
        fromNameRole="Chief of Engineering"
        />

      
    </ThemeProvider>
    </>
  )
}

export default App ;
