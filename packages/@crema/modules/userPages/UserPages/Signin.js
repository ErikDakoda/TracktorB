import React from "react";
import Button from "@mui/material/Button";
import { Checkbox } from "@mui/material";
import { Form, Formik } from "formik";
import GitHubIcon from "@mui/icons-material/GitHub";
import TwitterIcon from "@mui/icons-material/Twitter";
import FacebookIcon from "@mui/icons-material/Facebook";
import IconButton from "@mui/material/IconButton";
import * as yup from "yup";
import IntlMessages from "@crema/utility/IntlMessages";
import { useIntl } from "react-intl";
import Box from "@mui/material/Box";
import { grey } from "@mui/material/colors";
import { Fonts } from "@crema/shared/constants/AppEnums";
import AppTextField from "@crema/core/AppFormComponents/AppTextField";
import UserFrame from "@crema/modules/userPages/UserPages/UserFrame";
import { useNavContext } from "@crema/utility/AppContextProvider/NavContextProvider";
import FormControlLabel from "@mui/material/FormControlLabel";
import NextMuiTextLink from "~/components/ui/NextMuiTextLink";

const validationSchema = yup.object({
  email: yup
    .string()
    .email(<IntlMessages id="validation.emailFormat" />)
    .required(<IntlMessages id="validation.emailRequired" />),
  password: yup
    .string()
    .required(<IntlMessages id="validation.passwordRequired" />)
});

const Signin = () => {
  const { messages } = useIntl();
  const { submitLogIn, routes } = useNavContext();

  return (
    <UserFrame title={<IntlMessages id="common.login" />}>

      <Formik
        validateOnChange={true}
        initialValues={{
          email: "",
          password: ""
        }}
        validationSchema={validationSchema}
        onSubmit={async (data, { setErrors }) => {
          try {
            await submitLogIn(data);
          } catch (error) {
            console.error("An error occurred submitting the log in form:", error);
            setErrors({ email: error.message });
          }
        }}
      >
        {({ isSubmitting }) => (
          <Form
            sx={{
              textAlign: "left"
            }}
            noValidate
            autoComplete="off"
          >
            <Box
              sx={{
                mb: { xs: 3, xl: 4 }
              }}
            >
              <AppTextField
                placeholder={messages["common.email"]}
                label={<IntlMessages id="common.email" />}
                name="email"
                variant="outlined"
                sx={{
                  width: "100%"
                }}
              />
            </Box>

            <Box
              sx={{
                mb: { xs: 3, xl: 4 }
              }}
            >
              <AppTextField
                type="password"
                placeholder={messages["common.password"]}
                label={<IntlMessages id="common.password" />}
                name="password"
                variant="outlined"
                sx={{
                  width: "100%"
                }}
              />
            </Box>

            <Box
              sx={{
                mb: { xs: 3, xl: 4 },
                display: "flex",
                flexDirection: { xs: "column", sm: "row" },
                alignItems: { xs: "center", sm: "space-evenly" },
                justifyContent: { xs: "center", sm: "space-evenly" },
              }}
            >
              <FormControlLabel control={<Checkbox />} label={<IntlMessages id="common.rememberMe" />} />
              <NextMuiTextLink href={routes.account.forgottenPassword.href}>
                  <IntlMessages id="common.forgetPassword" />
              </NextMuiTextLink>
            </Box>
            <Button
              variant="contained"
              color="primary"
              type="submit"
              disabled={isSubmitting}
              sx={{
                width: "100%",
                height: 44
              }}
            >
                <IntlMessages id="common.login" />
            </Button>
          </Form>
        )}
      </Formik>

      <Box
        sx={{
          mt: { xs: 3, xl: 4 },
          mb: { xs: 2, xl: 4 },
          display: "flex",
          flexDirection: { xs: "column", sm: "row" },
          justifyContent: { sm: "center" },
          alignItems: { sm: "center" }
        }}
      >
        <Box
          component="span"
          sx={{
            mr: 4,
            color: grey[600],
            fontSize: 14
          }}
        >
          <IntlMessages id="common.orLoginWith" />
        </Box>
        <Box display="inline-block">
          <IconButton>
            <FacebookIcon
              sx={{
                color: "text.secondary"
              }}
            />
          </IconButton>
          <IconButton>
            <GitHubIcon
              sx={{
                color: "text.secondary"
              }}
            />
          </IconButton>
          <IconButton>
            <TwitterIcon
              sx={{
                color: "text.secondary"
              }}
            />
          </IconButton>
        </Box>
      </Box>

      <Box
        sx={{
          color: grey[700],
          fontSize: 14,
          fontWeight: Fonts.BOLD
        }}
      >
        <Box
          component="span"
          sx={{
            mr: 2
          }}
        >
          <IntlMessages id="common.dontHaveAccount" />
        </Box>
        <Box
          component="span"
          color="primary.main"
          sx={{
            width: "100%",
            height: 44
          }}
        >
          <NextMuiTextLink href={routes.account.signup.href}>
            <IntlMessages id="common.signup" />
          </NextMuiTextLink>
        </Box>
      </Box>
    </UserFrame>
  );
};

export default Signin;
