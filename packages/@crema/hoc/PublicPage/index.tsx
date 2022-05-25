import React from "react";
import {compose} from 'redux';
import withLayout from '../AppPage/withLayout';
import withData from '../DefaultPage/withData';

export default function PublicPage(element: () => React.ReactElement<any>): React.ReactElement<any> {
  // @ts-ignore
  return compose(withData, withLayout)(element);
}
