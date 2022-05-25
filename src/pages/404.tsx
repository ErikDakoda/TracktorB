import asyncComponent from '@crema/utility/asyncComponent';
import PublicPage from "@crema/hoc/PublicPage";

const Error404 = asyncComponent(
  () => import('@crema/modules/errorPages/Error404/index'),
);
export default PublicPage(() => <Error404/>);
