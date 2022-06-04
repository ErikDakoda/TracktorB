import React, {
  Dispatch,
  createContext,
  useCallback,
  useContext,
  useEffect,
  useState
} from "react";
import PropTypes from "prop-types";
import { LayoutDirection, ThemeMode } from "@crema/shared/constants/AppEnums";
import { TemplateConfig } from "@crema/types/TemplateConfig";
import { Theme } from '@mui/material/styles';
import { PaletteMode } from "@mui/material";

interface ThemeContextInterface {
  theme: Theme,
  themeStyle: string,
  themeMode: string,
}
const ThemeContext = createContext<ThemeContextInterface | null>(null);
export const useThemeContext = () => useContext(ThemeContext);

interface ThemeActionsContextInterface {
  updateTheme: Dispatch<Theme>,
  updateThemeStyle: Dispatch<string>,
  updateThemeMode: Dispatch<PaletteMode>,
}
const ThemeActionsContext = createContext<ThemeActionsContextInterface | null>(null);
export const useThemeActionsContext = () => useContext(ThemeActionsContext);

type Props = React.PropsWithChildren<{
  templateConfig: TemplateConfig,
  siteTheme: { theme: Theme },
}>;

const ThemeContextProvider = ({
                                children,
                                templateConfig,
                                siteTheme,
                              }: Props) => {
  const [theme, setTheme] = useState<Theme>(siteTheme.theme);
  const [themeMode, updateThemeMode] = useState<PaletteMode>(templateConfig.themeMode);
  const [themeStyle, updateThemeStyle] = useState<string>(templateConfig.themeStyle);

  const updateTheme = useCallback((theme) => {
    setTheme(theme);
  }, []);

  useEffect(() => {
    theme.palette = {
      ...theme.palette,
      mode: themeMode === ThemeMode.DARK ? 'dark' : 'light',
      background:
        themeMode === ThemeMode.DARK ? templateConfig.backgroundDark : templateConfig.backgroundLight,
      text: themeMode === ThemeMode.DARK ? templateConfig.textDark : templateConfig.textLight
    };
    updateTheme(theme);
  }, [themeMode, theme, updateTheme]);

  useEffect(() => {
    if (theme.direction === LayoutDirection.RTL) {
      document.body.setAttribute("dir", LayoutDirection.RTL);
    } else {
      document.body.setAttribute("dir", LayoutDirection.LTR);
    }
  }, [theme]);

  return (
    <ThemeContext.Provider
      value={{
        theme,
        themeStyle,
        themeMode
      }}
    >
      <ThemeActionsContext.Provider
        value={{
          updateTheme,
          updateThemeStyle,
          updateThemeMode
        }}
      >
        {children}
      </ThemeActionsContext.Provider>
    </ThemeContext.Provider>
  );
};

export default ThemeContextProvider;
