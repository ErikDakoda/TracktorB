import * as React from "react";
import PropTypes from "prop-types";
import CssBaseline from "@mui/material/CssBaseline";
import { CacheProvider } from "@emotion/react";
import createEmotionCache from "@crema/utility/createEmotionCache";
import AppContextProvider from "@crema/utility/AppContextProvider";
import { Provider } from "react-redux";
import AppThemeProvider from "@crema/utility/AppThemeProvider";
import AppStyleProvider from "@crema/utility/AppStyleProvider";
import AppLocaleProvider from "@crema/utility/AppLocaleProvider";
import { useStore } from "@crema/redux/store"; // Client-side cache, shared for the whole session of the user in the browser.
import templateConfig, {
  backgroundDark,
  backgroundLight,
  siteTheme,
  textDark,
  textLight
} from "~/lib/templateConfig";
import siteNavConfig from "~/lib/siteNavConfig";
import { routes } from "~/lib/routes";
import { apiRoutes } from "~/lib/api/apiRoutes";

import "@crema/services";
//import "@crema/shared/vendors/index.css";

// Client-side cache, shared for the whole session of the user in the browser.
const clientSideEmotionCache = createEmotionCache();

export default function CremaMuiThemeProvider(props) {
  const { emotionCache = clientSideEmotionCache, pageProps, children } = props;
  const store = useStore(pageProps.initialReduxState);

  return (
    <CacheProvider value={emotionCache}>
      <AppContextProvider
        templateConfig={templateConfig}
        backgroundDark={backgroundDark}
        backgroundLight={backgroundLight}
        siteTheme={siteTheme}
        textDark={textDark}
        textLight={textLight}
        siteNavConfig={siteNavConfig}
        siteRoutes={routes}
        siteApiRoutes={apiRoutes}
      >
        <Provider store={store}>
          <AppThemeProvider>
            <AppStyleProvider>
              <AppLocaleProvider>

                <CssBaseline enableColorScheme />
                {children}

              </AppLocaleProvider>
            </AppStyleProvider>
          </AppThemeProvider>
        </Provider>
      </AppContextProvider>
    </CacheProvider>
  );
}

CremaMuiThemeProvider.propTypes = {
  children: PropTypes.object,
  emotionCache: PropTypes.object,
  pageProps: PropTypes.object.isRequired
};
