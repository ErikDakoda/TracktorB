import React from 'react';
import AppPage from '@crema/hoc/AppPage';
import asyncComponent from '@crema/utility/asyncComponent';

const Portal = asyncComponent(
  () => import('@crema/modules/muiComponents/utils/Portal'),
);
export default AppPage(() => <Portal />);
