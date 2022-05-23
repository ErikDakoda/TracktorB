import React from 'react';
import AppPage from '@crema/hoc/AppPage';
import asyncComponent from '@crema/utility/asyncComponent';

const Grid = asyncComponent(
  () => import('@crema/modules/muiComponents/layout/Grid'),
);
export default AppPage(() => <Grid />);
