import React from 'react';
import AppPage from '@crema/hoc/AppPage';
import asyncComponent from '@crema/utility/asyncComponent';

const Components = asyncComponent(
  () => import('@crema/modules/muiComponents/datagrid/Components'),
);
export default AppPage(() => <Components />);
