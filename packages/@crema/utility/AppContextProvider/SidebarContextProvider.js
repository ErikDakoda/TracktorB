import React, {createContext, useCallback, useContext, useState} from 'react';
import PropTypes from 'prop-types';

const SidebarContext = createContext();
const SidebarActionsContext = createContext();

export const useSidebarContext = () => useContext(SidebarContext);

export const useSidebarActionsContext = () => useContext(SidebarActionsContext);

const SidebarContextProvider = ({children, templateConfig}) => {
  const [menuStyle, updateMenuStyle] = useState(
    templateConfig.sidebar.menuStyle,
  );
  const [sidebarColorSet, updateSidebarColorSet] = useState(
    templateConfig.sidebar.colorSet,
  );
  const [isSidebarBgImage, updateImage] = useState(
    templateConfig.sidebar.isSidebarBgImage,
  );
  const [sidebarBgImage, setSidebarImage] = useState(
    templateConfig.sidebar.sidebarBgImage,
  );

  const setSidebarBgImage = useCallback((isSidebarBgImage) => {
    updateImage(isSidebarBgImage);
  }, []);

  const updateSidebarBgImage = useCallback((sidebarBgImage) => {
    setSidebarImage(sidebarBgImage);
  }, []);

  return (
    <SidebarContext.Provider
      value={{
        ...sidebarColorSet,
        menuStyle,
        isSidebarBgImage,
        sidebarBgImage,
        borderColor: templateConfig.sidebar.borderColor,
      }}
    >
      <SidebarActionsContext.Provider
        value={{
          updateMenuStyle,
          updateSidebarColorSet,
          setSidebarBgImage,
          updateSidebarBgImage,
        }}
      >
        {children}
      </SidebarActionsContext.Provider>
    </SidebarContext.Provider>
  );
};

export default SidebarContextProvider;

SidebarContextProvider.propTypes = {
  children: PropTypes.node.isRequired,
  templateConfig: PropTypes.object.isRequired,
};
