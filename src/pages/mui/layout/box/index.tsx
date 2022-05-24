import React from 'react';
import AppPage from '@crema/hoc/AppPage';
import asyncComponent from '@crema/utility/asyncComponent';

const Box = asyncComponent(
  () => import('@crema/modules/muiComponents/layout/Box'),
);
export default AppPage(() => <Box />);
