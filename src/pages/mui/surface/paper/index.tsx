import React from 'react';
import AppPage from '@crema/hoc/AppPage';
import asyncComponent from '@crema/utility/asyncComponent';

const Paper = asyncComponent(
  () => import('@crema/modules/muiComponents/surfaces/Paper'),
);
export default AppPage(() => <Paper />);
