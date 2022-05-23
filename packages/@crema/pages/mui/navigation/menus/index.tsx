import React from 'react';
import AppPage from '@crema/hoc/AppPage';
import asyncComponent from '@crema/utility/asyncComponent';

const Menu = asyncComponent(
  () => import('@crema/modules/muiComponents/navigation/Menu'),
);
export default AppPage(() => <Menu />);
