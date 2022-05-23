import React from 'react';
import AppPage from '@crema/hoc/AppPage';
import asyncComponent from '@crema/utility/asyncComponent';

const Switches = asyncComponent(
  () => import('@crema/modules/muiComponents/inputs/Switches'),
);
export default AppPage(() => <Switches />);
