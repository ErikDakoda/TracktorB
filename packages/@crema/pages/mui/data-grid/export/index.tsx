import React from 'react';
import AppPage from '@crema/hoc/AppPage';
import asyncComponent from '@crema/utility/asyncComponent';

const Export = asyncComponent(
  () => import('@crema/modules/muiComponents/datagrid/Export'),
);
export default AppPage(() => <Export />);
