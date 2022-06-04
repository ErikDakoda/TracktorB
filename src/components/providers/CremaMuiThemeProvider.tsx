import React from "react";
import PropTypes from "prop-types";
import CssBaseline from "@mui/material/CssBaseline";
import { CacheProvider, EmotionCache } from "@emotion/react";
import createEmotionCache from "@crema/utility/createEmotionCache";
import AppContextProvider from "@crema/utility/AppContextProvider";
import { Provider } from "react-redux";
import AppThemeProvider from "@crema/utility/AppThemeProvider";
import AppStyleProvider from "@crema/utility/AppStyleProvider";
import AppLocaleProvider from "@crema/utility/AppLocaleProvider";
import { GlobalAppStyle } from "~/components/layout/AppLayout";
import { useStore } from "@crema/redux/store"; // Client-side cache, shared for the whole session of the user in the browser.
import { siteTheme, templateConfig } from "~/config/templateConfig";
import navConfig from "~/config/navConfig";
import { routes } from "~/lib/routes";
import { apiRoutes } from "~/lib/api/apiRoutes";

import "@crema/services";

// Client-side cache, shared for the whole session of the user in the browser.
const clientSideEmotionCache = createEmotionCache();

type Props = React.PropsWithChildren<{
  emotionCache?: EmotionCache,
  pageProps: { initialReduxState: object },
}>;

export default function CremaMuiThemeProvider(props: Props): JSX.Element {
  const { emotionCache = clientSideEmotionCache, pageProps, children } = props;
  const store = useStore(pageProps.initialReduxState);

  return (
    <CacheProvider value={emotionCache}>
      <AppContextProvider
        templateConfig={templateConfig}
        siteTheme={siteTheme}
        navConfig={navConfig}
        routes={routes}
        apiRoutes={apiRoutes}
      >
        <Provider store={store}>
          <AppThemeProvider>
            <AppStyleProvider>
              <AppLocaleProvider>
                <>
                  <CssBaseline enableColorScheme />
                  <GlobalAppStyle>
                    {children}
                  </GlobalAppStyle>
                </>
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
