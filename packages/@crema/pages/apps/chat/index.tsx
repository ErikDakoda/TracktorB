import React from 'react';
import AppPage from '@crema/hoc/AppPage';
import asyncComponent from '@crema/utility/asyncComponent';

const Chat = asyncComponent(() => import('@crema/modules/apps/Chat'));
export default AppPage(() => <Chat />);
