import React, { createContext, Dispatch, SyntheticEvent, useContext, useState } from "react";
import Router from "next/router";
import { NavConfig } from "@crema/types/NavConfig";
import { RoutesConfig, ApiRoutesConfig } from '~/types/routes';
import { LoginReqBody } from '~/pages/api/account/login';
import { SignupBody } from '~/pages/api/account/signup';

interface NavContextInterface {
  navConfig: NavConfig,
  routes: RoutesConfig,
  apiRoutes: ApiRoutesConfig,
}
const NavContext = createContext<NavContextInterface | null>(null);
export const useNavContext = () => useContext(NavContext);

interface NavActionsContextInterface {
  updateNavConfig: Dispatch<NavConfig>,
  updateRoutes: Dispatch<RoutesConfig>,
  updateApiRoutes: Dispatch<ApiRoutesConfig>,
  doLogOut: (evt: SyntheticEvent) => void,
  goLogIn: (queryParams: string) => void,
  submitLogIn: (body: LoginReqBody, redirectedFrom: string) => void,
  submitSignUp: (body: SignupBody) => void,
}
const NavActionsContext = createContext<NavActionsContextInterface | null>(null);
export const useNavActionsContext = () => useContext(NavActionsContext);

type Props = React.PropsWithChildren<{
  navConfig: NavConfig,
  routes: RoutesConfig,
  apiRoutes: ApiRoutesConfig,
}>;

const NavContextProvider = (props: Props) => {
  const [navConfig, updateNavConfig] = useState<NavConfig>(props.navConfig);
  const [routes, updateRoutes] = useState<RoutesConfig>(props.routes);
  const [apiRoutes, updateApiRoutes] = useState<ApiRoutesConfig>(props.apiRoutes);

  const doLogOut = async (evt: SyntheticEvent) => {
    evt?.preventDefault();
    await fetch(apiRoutes.account.logout.href, {
      method: apiRoutes.account.logout.method
    });
    window.location.replace(routes.home.href);
  };

  const goLogIn = async (queryParams: string) => {
    await Router.push(routes.account.login.href + (queryParams ? "?" + queryParams : ""));
  };

  async function submitLogIn(body: LoginReqBody, redirectedFrom: string) {
    const res = await fetch(apiRoutes.account.login.href, {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(body)
    });
    if (res.status === 200) {
      window.location.replace(redirectedFrom || routes.home.href);
    } else {
      throw new Error(await res.text());
    }
  }

  async function submitSignUp(body: SignupBody) {
    // @ts-ignore
    if (body.password !== body.confirmPassword) {
      throw new Error(`The passwords don't match`);
    }

      const res = await fetch(apiRoutes.account.signup.href, {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(body),
      });
      if (res.status === 200) {
        await Router.push(routes.account.verifyEmail.href);
      } else {
        throw new Error(await res.text());
      }
  }

  return (
    <NavContext.Provider
      value={{
        navConfig,
        routes,
        apiRoutes,
      }}
    >
    <NavActionsContext.Provider
      value={{
        updateNavConfig,
        updateRoutes,
        updateApiRoutes,
        doLogOut,
        goLogIn,
        submitLogIn,
        submitSignUp,
      }}
    >
      {props.children}
    </NavActionsContext.Provider>
    </NavContext.Provider>
  );
};

export default NavContextProvider;
