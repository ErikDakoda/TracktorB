import React from 'react';
import AppPage from '@crema/hoc/AppPage';
import asyncComponent from '@crema/utility/asyncComponent';

const Standard = asyncComponent(
  () => import('@crema/modules/userList/Standard'),
);
export default AppPage(() => <Standard />);
