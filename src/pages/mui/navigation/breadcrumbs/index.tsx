import React from 'react';
import AppPage from '@crema/hoc/AppPage';
import asyncComponent from '@crema/utility/asyncComponent';

const BreadCrumbs = asyncComponent(
  () => import('@crema/modules/muiComponents/navigation/Breadcrumbs'),
);
export default AppPage(() => <BreadCrumbs />);
