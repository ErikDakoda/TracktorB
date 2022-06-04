/**
 * MDX Layout, to be used with markdown file known in advance, for instance README.md
 *
 * For dynamic content, use next-mdx-remote setup instead (see how docs are handled)
 */
import {
  Typography,
  Table,
  TableBody,
  TableHead,
  // TableCell,
  TableRow,
  Link,
  Paper,
  Divider,
} from "@mui/material";
import vnColors from "~/lib/style/colors";

// @see https://mdxjs.com/table-of-components
// NOTE: those components are also used by next-mdx-remote based pages
export const muiMdComponents = {
  p: (props: object) => <Typography {...props} />,
  h1: (props: object) => <Typography variant="h1" {...props} />,
  h2: (props: object) => <Typography variant="h2" {...props} />,
  h3: (props: object) => <Typography variant="h3" {...props} />,
  h4: (props: object) => <Typography variant="h4" {...props} />,
  h5: (props: object) => <Typography variant="h5" {...props} />,
  h6: (props: object) => <Typography variant="h6" {...props} />,
  //thematicBreak: Typography,
  //blockquote: Typography,
  //ul: List,
  // ol: (props) => (
  //   <p>
  //     - <Typography component={"span"} variant="body2" {...props} />
  //   </p>
  // ),
  // li: (props: object) => (
  //   <li>
  //     <Typography component="span" variant="body2" {...props} />
  //   </li>
  // ),
  table: Table,
  thead: TableHead,
  tbody: TableBody,
  tr: TableRow,
  // th/td will give SyntaxError: Arg string terminates parameters early for unknown reasons
  // "th/td": TableCell,
  pre: (props: object) => (
    <Paper
      elevation={1}
      sx={{
        mb: "1em",
        mt: "1em",
        px: 3,
        py: 1,
        "& pre": { my: 0 },
        backgroundColor: (theme) => theme.palette.grey["50"], // "primary.main",
        borderLeft: `2px solid ${vnColors.pinkGraphql}`,
        borderRight: `2px solid ${vnColors.lightBlueReact}`,
      }}
    >
      <pre {...props} />
    </Paper>
  ),
  code: (props: object) => (
    <Typography
      sx={{
        color: vnColors.darkBlueApollo, // "primary.main",
      }}
    >
      <code {...props} />
    </Typography>
  ),
  inlineCode: (props: object) => (
    <Typography
      component="span"
      sx={{
        backgroundColor: (theme) => theme.palette.grey["50"], // "primary.main",
        color: vnColors.darkBlueApollo, // "primary.main",
      }}
    >
      <code {...props} />
    </Typography>
  ),
  // em: Typography,
  // strong: Typography,
  //del: Typography,
  //inlineCode: Typography,
  hr: (props: object) => <Divider sx={{ my: 2 }} {...props} />,
  a: (props: object) => <Link {...props} />,
  // TODO: didn't find a way to override image styling...
  img: (props: object) => (
    // eslint-disable-next-line @next/next/no-img-element
    <img
      alt="Image from markdown content with no alt text"
      {...props}
      style={{ maxWidth: "100%" }}
    />
  ),
};
