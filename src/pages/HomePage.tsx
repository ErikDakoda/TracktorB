import Home from "~/components/home";
//import { useForm } from "react-hook-form";
import path from "path";
import { promises as fsPromises } from "fs";
import { muiMdComponents } from "~/components/layout/muiMdComponents";
import { PageLayout } from "~/components/layout";
import { Box } from "@mui/material";
import { MDXRemote, MDXRemoteSerializeResult } from "next-mdx-remote";
import { serialize } from "next-mdx-remote/serialize";

// inject both the custom components + default components like h1, p, etc.
const components = { ...muiMdComponents };
const Index = ({ source }: { source: MDXRemoteSerializeResult }) => {
  if (!source) {
    return <>No source</>
  }
  const readMeContent = <MDXRemote {...source} components={components} />;
  return (
    <PageLayout>
      <main>
        <Home />
        <Box
          sx={{
            borderLeft: "1px solid",
            paddingLeft: "24px",
            borderImageSource: "linear-gradient(10deg, #e1009855, #3f77fa55)",
            borderImageSlice: 1,
            borderColor: "#3f77fa",
          }}
        >
          {readMeContent}
        </Box>
      </main>
    </PageLayout>
  );
};

export default Index;
