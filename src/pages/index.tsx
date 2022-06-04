import React from 'react';
import PublicPage from '@crema/hoc/PublicPage';
import asyncComponent from '@crema/utility/asyncComponent';
import path from "path";
import { promises as fsPromises } from "fs";
import { serialize } from "next-mdx-remote/serialize";
//import HomePage from './HomePage';

const HomePage = asyncComponent(() => import('./HomePage'));
export default PublicPage((props) => <HomePage {...props}/>);

export async function getStaticProps() {
  const filePath = path.resolve("./README.md");
  const source = await fsPromises.readFile(filePath, { encoding: "utf8" });
  // MDX text - can be from a local file, database, anywhere
  // Does a server-render of the source and relevant React wrappers + allow to inject React components
  const mdxSource = await serialize(source);
  return { props: { source: mdxSource } };
}

