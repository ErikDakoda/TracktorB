import React from 'react';
import AppPage from '@crema/hoc/AppPage';
import asyncComponent from '@crema/utility/asyncComponent';

const Links = asyncComponent(
  () => import('@crema/modules/muiComponents/navigation/Links'),
);
export default AppPage(() => <Links />);
