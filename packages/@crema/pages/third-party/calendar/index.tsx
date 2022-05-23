import React from 'react';
import AppPage from '@crema/hoc/AppPage';
import asyncComponent from '@crema/utility/asyncComponent';

const Calendar = asyncComponent(() => import('@crema/modules/thirdParty/calendar'));
export default AppPage(() => <Calendar />);
