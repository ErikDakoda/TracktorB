import React from 'react';
import AppPage from '@crema/hoc/AppPage';
import asyncComponent from '@crema/utility/asyncComponent';

const Flat = asyncComponent(() => import('@crema/modules/userList/Flat'));
export default AppPage(() => <Flat />);
