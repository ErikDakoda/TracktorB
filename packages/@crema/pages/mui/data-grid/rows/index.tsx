import React from 'react';
import AppPage from '@crema/hoc/AppPage';
import asyncComponent from '@crema/utility/asyncComponent';

const Rows = asyncComponent(
  () => import('@crema/modules/muiComponents/datagrid/Rows'),
);
export default AppPage(() => <Rows />);
