import React from 'react';
import AppPage from '@crema/hoc/AppPage';
import asyncComponent from '@crema/utility/asyncComponent';

const SpeedDial = asyncComponent(
  () => import('@crema/modules/muiComponents/navigation/SpeedDial'),
);
export default AppPage(() => <SpeedDial />);

