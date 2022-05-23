import asyncComponent from '@crema/utility/asyncComponent';

export default asyncComponent(
  () => import('@crema/modules/errorPages/Error404/index'),
);
