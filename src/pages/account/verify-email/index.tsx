import React from "react";
import { Typography, Alert } from "@mui/material";
import { getDefaultPageLayout } from "~/components/layout/PageLayout";
import UserFrame from "@crema/modules/userPages/UserPages/UserFrame";
import PublicPage from "@crema/hoc/PublicPage";


export const VerifyEmailPage = () => {
  const isDev = process.env.NEXT_PUBLIC_NODE_ENV === "development";
  return (
    <UserFrame title="One last thing before you can log in">
      <Typography sx={{mt: 8}}>
        We've sent you an email with a verification link. Check your inbox and
        click on this link to verify your account.
      </Typography>
      {isDev && (
        <Alert severity="warning" sx={{mt: 8, textAlign: 'left'}}>
          <strong>
            During development, the content of the mail will be displayed in
            your server console.
          </strong>
        </Alert>
      )}
    </UserFrame>
  );
};

VerifyEmailPage.getLayout = getDefaultPageLayout;

export default PublicPage(() => <VerifyEmailPage />);
