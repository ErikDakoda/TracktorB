import React from 'react';
import AppPage from '@crema/hoc/AppPage';
import asyncComponent from '@crema/utility/asyncComponent';

const Editing = asyncComponent(
  () => import('@crema/modules/muiComponents/datagrid/Editing'),
);
export default AppPage(() => <Editing />);
