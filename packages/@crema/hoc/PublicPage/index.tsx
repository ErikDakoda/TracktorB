import React from "react";
import {compose} from 'redux';
import withLayout from '../AppPage/withLayout';
import withData from './withData';

export default function PublicPage(element: (props: object) => React.ReactElement<any>): React.ReactElement<any> {
  // @ts-ignore
  return compose(withLayout)(element);
}
