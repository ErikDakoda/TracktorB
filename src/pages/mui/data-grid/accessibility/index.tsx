import React from 'react';
import AppPage from '@crema/hoc/AppPage';
import asyncComponent from '@crema/utility/asyncComponent';

const Accessibility = asyncComponent(
  () => import('@crema/modules/muiComponents/datagrid/Accessibility'),
);
export default AppPage(() => <Accessibility />);
