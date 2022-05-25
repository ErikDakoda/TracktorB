import * as React from "react";
import { NextMuiLink } from "@vulcanjs/next-mui";

const NextMuiTextLink = (props) => {
  return <NextMuiLink {...props} underline="hover" sx={{ fontWeight: 'bold' }}/>;
}

export default NextMuiTextLink;
