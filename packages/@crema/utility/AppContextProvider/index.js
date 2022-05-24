import React from "react";
import PropTypes from "prop-types";
import ThemeContextProvider from "./ThemeContextProvider";
import LocaleContextProvider from "./LocaleContextProvide";
import LayoutContextProvider from "./LayoutContextProvider";
import SidebarContextProvider from "./SidebarContextProvider";

const AppContextProvider = ({
                              children,
                              templateConfig,
                              backgroundDark,
                              backgroundLight,
                              siteTheme,
                              textDark,
                              textLight
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
            {children}
          </SidebarContextProvider>
        </LayoutContextProvider>
      </LocaleContextProvider>
    </ThemeContextProvider>
  );
};

export default AppContextProvider;

AppContextProvider.propTypes = {
  children: PropTypes.node.isRequired
};
