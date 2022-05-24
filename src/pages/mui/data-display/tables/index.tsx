import React from 'react';
import AppPage from '@crema/hoc/AppPage';
import asyncComponent from '@crema/utility/asyncComponent';

const Tables = asyncComponent(
  () => import('@crema/modules/muiComponents/dataDisplay/Table'),
);
export default AppPage(() => <Tables />);
