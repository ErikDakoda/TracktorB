import React from 'react';
import {CustomizerItemWrapper, StyledToggleButton} from '../index.style';
import Box from '@mui/material/Box';
import IntlMessages from '@crema/utility/IntlMessages';
import ToggleButtonGroup from '@mui/material/ToggleButtonGroup';
import {ThemeMode} from '@crema/shared/constants/AppEnums';
import clsx from 'clsx';
import {
  useThemeActionsContext,
  useThemeContext,
} from '@crema/utility/AppContextProvider/ThemeContextProvider';
import {useSidebarActionsContext} from '@crema/utility/AppContextProvider/SidebarContextProvider';
import {
  DarkSidebar,
  LightSidebar,
} from '@crema/utility/AppContextProvider/defaultConfig';

const ThemeModes = () => {
  const {updateThemeMode} = useThemeActionsContext();
  const {updateSidebarColorSet} = useSidebarActionsContext();
  const {themeMode, theme} = useThemeContext();

  const onModeChange = (event, themeMode) => {
    if (themeMode) {
      updateThemeMode(themeMode);
      if (themeMode === ThemeMode.LIGHT) {
        updateSidebarColorSet({
          sidebarBgColor: LightSidebar.sidebarBgColor,
          sidebarTextColor: LightSidebar.sidebarTextColor,
          sidebarMenuSelectedBgColor: LightSidebar.sidebarMenuSelectedBgColor,
          sidebarMenuSelectedTextColor:
            LightSidebar.sidebarMenuSelectedTextColor,
          sidebarHeaderColor: LightSidebar.sidebarHeaderColor,
        });
      } else {
        updateSidebarColorSet({
          sidebarBgColor: DarkSidebar.sidebarBgColor,
          sidebarTextColor: DarkSidebar.sidebarTextColor,
          sidebarMenuSelectedBgColor: DarkSidebar.sidebarMenuSelectedBgColor,
          sidebarMenuSelectedTextColor:
            DarkSidebar.sidebarMenuSelectedTextColor,
          sidebarHeaderColor: DarkSidebar.sidebarHeaderColor,
        });
      }
    }
  };

  return (
    <CustomizerItemWrapper>
      <Box component='h4' sx={{mb: 2}}>
        <IntlMessages id='customizer.themeMode' />
      </Box>
      <ToggleButtonGroup
        value={themeMode}
        exclusive
        onChange={onModeChange}
        aria-label='text alignment'
      >
        <StyledToggleButton
          value={ThemeMode.LIGHT}
          className={clsx({
            active: themeMode === ThemeMode.LIGHT,
          })}
          aria-label='left aligned'
        >
          <IntlMessages id='customizer.light' />
        </StyledToggleButton>

        <StyledToggleButton
          value={ThemeMode.DARK}
          className={clsx({
            active:
              themeMode === ThemeMode.DARK ||
              theme.palette.type === ThemeMode.DARK,
          })}
          aria-label='centered'
        >
          <IntlMessages id='customizer.dark' />
        </StyledToggleButton>
      </ToggleButtonGroup>
    </CustomizerItemWrapper>
  );
};

export default ThemeModes;
