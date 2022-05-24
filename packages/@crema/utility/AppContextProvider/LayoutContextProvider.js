import React, {createContext, useCallback, useContext, useState} from 'react';
import PropTypes from 'prop-types';

const LayoutContext = createContext();
const LayoutActionsContext = createContext();

export const useLayoutContext = () => useContext(LayoutContext);

export const useLayoutActionsContext = () => useContext(LayoutActionsContext);

const LayoutContextProvider = ({children, templateConfig}) => {
  const [layoutType, updateLayoutType] = useState(templateConfig.layoutType);
  const [navStyle, setNavStyle] = useState(templateConfig.navStyle);
  const [footerType, setFooterType] = useState(templateConfig.footerType);
  const [footer, setFooter] = useState(templateConfig.footer);
  const [headerType, setHeaderType] = useState(templateConfig.headerType);

  const updateNavStyle = useCallback((navStyle) => {
    setNavStyle(navStyle);
  }, []);

  return (
    <LayoutContext.Provider
      value={{
        navStyle,
        footerType,
        footer,
        layoutType,
        headerType,
      }}
    >
      <LayoutActionsContext.Provider
        value={{
          setFooter,
          setFooterType,
          updateNavStyle,
          updateLayoutType,
          setHeaderType,
        }}
      >
        {children}
      </LayoutActionsContext.Provider>
    </LayoutContext.Provider>
  );
};

export default LayoutContextProvider;

LayoutContextProvider.propTypes = {
  children: PropTypes.node.isRequired,
};
