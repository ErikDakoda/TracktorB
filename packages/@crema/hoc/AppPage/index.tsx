import {compose} from 'redux';
import withLayout from './withLayout';
import withData from './withData';

const AppPage = compose(withData, withLayout);
export default AppPage;
