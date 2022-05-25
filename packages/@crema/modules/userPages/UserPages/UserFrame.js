import React from 'react';
import Card from '@mui/material/Card';
import Box from '@mui/material/Box';
import Typography from '@mui/material/Typography';
import AppAnimate from '@crema/core/AppAnimate';
import {useThemeContext} from '@crema/utility/AppContextProvider/ThemeContextProvider';
import { Logo } from '@crema/assets/icon/Logo';

const UserFrame = ({children, title}) => {
  const {theme} = useThemeContext();

  return (
    <AppAnimate animation='transition.slideUpIn' delay={200}>
      <Box
        sx={{
          pb: 6,
          py: {xl: 8},
          display: 'flex',
          flex: 1,
          flexDirection: 'column',
          alignItems: 'center',
          justifyContent: 'center',
        }}
      >
        <Card
          sx={{
            maxWidth: 576,
            width: '100%',
            textAlign: 'center',
            padding: {xs: 8, lg: 12, xl: '48px 64px'},
            overflow: 'hidden',
            boxShadow:
              '0 10px 15px -3px rgba(0, 0, 0, 0.1), 0 4px 6px -2px rgba(0, 0, 0, 0.05)',
          }}
        >
          <Typography variant="h1" sx={{
            mb: {xs: 4, xl: 6},
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
            '.logo': {
              height: '1.4em',
              mr: 4,
            },
          }}
          >
              <Logo className='logo' color={theme.palette.primary.main} />
              {title}
          </Typography>

          {children}

        </Card>
      </Box>
    </AppAnimate>
  );
};

export default UserFrame;
