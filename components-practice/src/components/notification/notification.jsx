import React, { useState } from 'react';
import { Stack, IconButton, Typography } from '@mui/material';
import NotificationsOutlinedIcon from '@mui/icons-material/NotificationsOutlined';
import CloseOutlinedIcon from '@mui/icons-material/CloseOutlined';
import { StyledNotificationIcon, 
    StyledCloseIcon, 
    StyledDateTime, 
    StyledNotificationFrom , 
    StyledNotificationContainer 
} from './notificationStyles';

const NotificationComponent = (props) => {
    const {date , time , fromName , fromNameRole} = props;
  const [isHovered, setIsHovered] = useState(false); // State to track hover status

  return (
    <Stack
      direction="row"
      alignItems="flex-start"
      spacing={2}
      component='notification'
      sx={StyledNotificationContainer}
      onMouseEnter={() => setIsHovered(true)} // Set hover state to true
      onMouseLeave={() => setIsHovered(false)} // Set hover state to false
    >
      <StyledNotificationIcon>
        <NotificationsOutlinedIcon />
      </StyledNotificationIcon>

      <Stack spacing={0.5} width='100%'>
        <Stack direction="row" alignItems="center" width='100%' justifyContent='space-between'>
          <StyledDateTime>
            {date.day} {date.month} {date.year} {time.hour}:{time.minute} {time.noon}
          </StyledDateTime>
          {/* Always render the close icon but adjust visibility */}
          <StyledCloseIcon
            sx={{
              opacity: isHovered ? 1 : 0,  // Change opacity based on hover
              visibility: isHovered ? 'visible' : 'hidden', // Control visibility
              transition: 'opacity 0.3s', // Smooth transition for opacity only
            }}
          >
            <CloseOutlinedIcon />
          </StyledCloseIcon>
        </Stack>
        <Stack>
          <StyledNotificationFrom>
            New Notification from <span style={{ fontWeight: 'bold' }}>{fromName}</span>
          </StyledNotificationFrom>
          <StyledNotificationFrom>
            ({fromNameRole})
          </StyledNotificationFrom>
        </Stack>
      </Stack>
    </Stack>
  );
};

export default NotificationComponent;
