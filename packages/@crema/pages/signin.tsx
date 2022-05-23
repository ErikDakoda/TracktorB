import React from 'react';
import AppPage from '@crema/hoc/DefaultPage/index';
import asyncComponent from '@crema/utility/asyncComponent';

const SignIn = asyncComponent(() => import('@crema/modules/auth/Signin/index'));
export default AppPage(() => <SignIn />);
