import React, {createContext, useContext, useEffect, useState} from 'react';
import PropTypes from 'prop-types';
import {useThemeActionsContext, useThemeContext} from './ThemeContextProvider';
import {LayoutDirection} from '@crema/shared/constants/AppEnums';

const LocaleContext = createContext();
const LocaleActionsContext = createContext();

export const useLocaleContext = () => useContext(LocaleContext);

export const useLocaleActionsContext = () => useContext(LocaleActionsContext);

const LocaleContextProvider = ({children, templateConfig}) => {
  const [locale, updateLocale] = useState(templateConfig.locale);
  const {theme} = useThemeContext();
  const {updateTheme} = useThemeActionsContext();

  useEffect(() => {
    if (
      templateConfig.rtlLocale.includes(locale.locale) &&
      theme.direction === LayoutDirection.LTR
    ) {
      updateTheme({
        ...theme,
        direction: LayoutDirection.RTL,
      });
    } else if (
      !templateConfig.rtlLocale.includes(locale.locale) &&
      theme.direction === LayoutDirection.RTL
    ) {
      updateTheme({
        ...theme,
        direction: LayoutDirection.LTR,
      });
    }
  }, [locale, theme, updateTheme]);

  return (
    <LocaleContext.Provider
      value={{
        locale,
        rtlLocale: templateConfig.rtlLocale,
      }}
    >
      <LocaleActionsContext.Provider
        value={{
          updateLocale,
        }}
      >
        {children}
      </LocaleActionsContext.Provider>
    </LocaleContext.Provider>
  );
};

export default LocaleContextProvider;

LocaleContextProvider.propTypes = {
  children: PropTypes.node.isRequired,
  templateConfig: PropTypes.object.isRequired,
};
