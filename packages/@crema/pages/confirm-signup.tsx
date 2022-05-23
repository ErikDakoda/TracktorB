import React from 'react';
import AppPage from '@crema/hoc/DefaultPage/index';
import asyncComponent from '@crema/utility/asyncComponent';

const ConfirmSignup = asyncComponent(
  () => import('@crema/modules/auth/ConfirmSignupAwsCognito'),
);
export default AppPage(() => <ConfirmSignup />);
