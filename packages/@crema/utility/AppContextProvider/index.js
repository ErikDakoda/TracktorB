import React from "react";
import PropTypes from "prop-types";
import ThemeContextProvider from "./ThemeContextProvider";
import LocaleContextProvider from "./LocaleContextProvider";
import LayoutContextProvider from "./LayoutContextProvider";
import SidebarContextProvider from "./SidebarContextProvider";
import NavContextProvider from "./NavContextProvider";

const AppContextProvider = ({
                              children,
                              templateConfig,
                              backgroundDark,
                              backgroundLight,
                              siteTheme,
                              textDark,
                              textLight,
                              siteNavConfig,
                              siteRoutes,
  siteApiRoutes,
                            }) => {
  return (
    <ThemeContextProvider
      templateConfig={templateConfig}
      backgroundDark={backgroundDark}
      backgroundLight={backgroundLight}
      siteTheme={siteTheme}
      textDark={textDark}
      textLight={textLight}
    >
      <LocaleContextProvider templateConfig={templateConfig}>
        <LayoutContextProvider templateConfig={templateConfig}>
          <SidebarContextProvider templateConfig={templateConfig}>
            <NavContextProvider siteNavConfig={siteNavConfig}
                                siteRoutes={siteRoutes}
                                siteApiRoutes={siteApiRoutes}
            >
              {children}
            </NavContextProvider>
          </SidebarContextProvider>
        </LayoutContextProvider>
      </LocaleContextProvider>
    </ThemeContextProvider>
  );
};

export default AppContextProvider;

AppContextProvider.propTypes = {
  children: PropTypes.node.isRequired,
  templateConfig: PropTypes.object.isRequired,
  backgroundDark: PropTypes.object.isRequired,
  backgroundLight: PropTypes.object.isRequired,
  siteTheme: PropTypes.object.isRequired,
  textDark: PropTypes.object.isRequired,
  textLight: PropTypes.object.isRequired,
  siteNavConfig: PropTypes.array.isRequired,
  siteRoutes: PropTypes.object.isRequired,
  siteApiRoutes: PropTypes.object.isRequired,
};
