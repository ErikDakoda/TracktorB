import React, {createContext, useCallback, useContext, useState} from 'react';
import PropTypes from 'prop-types';

const NavContext = createContext();
const NavActionsContext = createContext();

export const useNavContext = () => useContext(NavContext);

export const useNavActionsContext = () => useContext(NavActionsContext);

const NavContextProvider = ({children, siteNavConfig}) => {
  const [navConfig, updateNavConfig] = useState(siteNavConfig);

  return (
    <NavContext.Provider
      value={{ navConfig }}
    >
        {children}
    </NavContext.Provider>
  );
};

export default NavContextProvider;

NavContextProvider.propTypes = {
  children: PropTypes.node.isRequired,
  siteNavConfig: PropTypes.array.isRequired,
};
