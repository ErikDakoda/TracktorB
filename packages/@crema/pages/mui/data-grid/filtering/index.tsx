import React from 'react';
import AppPage from '@crema/hoc/AppPage';
import asyncComponent from '@crema/utility/asyncComponent';

const Filtering = asyncComponent(
  () => import('@crema/modules/muiComponents/datagrid/Filtering'),
);
export default AppPage(() => <Filtering />);
