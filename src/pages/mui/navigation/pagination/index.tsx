import React from 'react';
import AppPage from '@crema/hoc/AppPage';
import asyncComponent from '@crema/utility/asyncComponent';

const Pagination = asyncComponent(
  () => import('@crema/modules/muiComponents/navigation/Pagination'),
);
export default AppPage(() => <Pagination />);
