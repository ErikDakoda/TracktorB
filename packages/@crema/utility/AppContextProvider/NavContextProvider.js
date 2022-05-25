import React, { createContext, useContext, useState } from "react";
import Router from "next/router";
import PropTypes from "prop-types";

const NavContext = createContext();
const NavActionsContext = createContext();

export const useNavContext = () => useContext(NavContext);

export const useNavActionsContext = () => useContext(NavActionsContext);

const NavContextProvider = ({ children, siteNavConfig, siteRoutes, siteApiRoutes }) => {
  const [navConfig, updateNavConfig] = useState(siteNavConfig);
  const [routes, updateRoutes] = useState(siteRoutes);
  const [apiRoutes, updateApiRoutes] = useState(siteApiRoutes);

  const doLogOut = async (evt) => {
    evt?.preventDefault();
    await fetch(apiRoutes.account.logout.href, {
      method: apiRoutes.account.logout.method
    });
    window.location.replace(routes.home.href);
  };

  const goLogIn = (queryParams) => {
    Router.push(routes.account.login.href + (queryParams ? "?" + queryParams : ""));
  };

  async function submitLogIn(body, redirectedFrom) {
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

  async function submitSignUp(body) {
    if (body.password !== body.confirmPassword) {
      throw new Error(`The passwords don't match`);
    }

      const res = await fetch(apiRoutes.account.signup.href, {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(body),
      });
      if (res.status === 200) {
        Router.push(routes.account.verifyEmail.href);
      } else {
        throw new Error(await res.text());
      }
  }

  return (
    <NavContext.Provider
      value={{
        navConfig,
        updateNavConfig,
        routes,
        updateRoutes,
        apiRoutes,
        updateApiRoutes,
        doLogOut,
        goLogIn,
        submitLogIn,
        submitSignUp,
      }}
    >
      {children}
    </NavContext.Provider>
  );
};

export default NavContextProvider;

NavContextProvider.propTypes = {
  children: PropTypes.node.isRequired,
  siteNavConfig: PropTypes.array.isRequired,
  siteRoutes: PropTypes.object.isRequired
};
