import React from 'react';
import AppPage from '@crema/hoc/AppPage';
import asyncComponent from '@crema/utility/asyncComponent';

const ForgetPassword = asyncComponent(
  () => import('@crema/modules/userPages/StyledUserPages/ForgetPassword'),
);
export default AppPage(() => <ForgetPassword />);
