import React from 'react';
import AppPage from '@crema/hoc/AppPage';
import asyncComponent from '@crema/utility/asyncComponent';

const Morden = asyncComponent(() => import('@crema/modules/userList/Morden'));
export default AppPage(() => <Morden />);
