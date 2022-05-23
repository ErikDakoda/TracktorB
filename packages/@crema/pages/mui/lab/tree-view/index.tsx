import React from 'react';
import asyncComponent from '@crema/utility/asyncComponent';
import AppPage from '@crema/hoc/AppPage';

const TreeView = asyncComponent(
  () => import('@crema/modules/muiComponents/lab/TreeView'),
);
export default AppPage(() => <TreeView />);
