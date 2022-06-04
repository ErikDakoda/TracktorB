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
                              siteTheme,
                              navConfig,
                              routes,
                              apiRoutes
                            }) => {
  return (
    <ThemeContextProvider
      templateConfig={templateConfig}
      siteTheme={siteTheme}
    >
      <LocaleContextProvider templateConfig={templateConfig}>
        <LayoutContextProvider templateConfig={templateConfig}>
          <SidebarContextProvider templateConfig={templateConfig}>
            <NavContextProvider navConfig={navConfig}
                                routes={routes}
                                apiRoutes={apiRoutes}
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
  siteTheme: PropTypes.object.isRequired,
  navConfig: PropTypes.array.isRequired,
  routes: PropTypes.object.isRequired,
  apiRoutes: PropTypes.object.isRequired
};
