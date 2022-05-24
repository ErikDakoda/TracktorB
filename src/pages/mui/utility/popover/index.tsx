import React from 'react';
import AppPage from '@crema/hoc/AppPage';
import asyncComponent from '@crema/utility/asyncComponent';

const Popover = asyncComponent(
  () => import('@crema/modules/muiComponents/utils/Popover'),
);
export default AppPage(() => <Popover />);
