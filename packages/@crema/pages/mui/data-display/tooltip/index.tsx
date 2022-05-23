import React from 'react';
import AppPage from '@crema/hoc/AppPage';
import asyncComponent from '@crema/utility/asyncComponent';

const Tooltip = asyncComponent(
  () => import('@crema/modules/muiComponents/dataDisplay/Tooltip'),
);
export default AppPage(() => <Tooltip />);
