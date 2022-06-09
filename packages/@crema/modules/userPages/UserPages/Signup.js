import React from "react";
import Button from "@mui/material/Button";
import Checkbox from "@mui/material/Checkbox";
import FormControlLabel from "@mui/material/FormControlLabel";
import { Form, Formik } from "formik";
import * as yup from "yup";
import IntlMessages from "@crema/utility/IntlMessages";
import Box from "@mui/material/Box";
import { Fonts } from "@crema/shared/constants/AppEnums";
import { grey } from "@mui/material/colors/index";
import AppTextField from "@crema/core/AppFormComponents/AppTextField";
import UserFrame from "./UserFrame";
import {
  useNavActionsContext,
  useNavContext
} from "@crema/utility/AppContextProvider/NavContextProvider";
import NextMuiTextLink from "~/components/ui/NextMuiTextLink";

const validationSchema = yup.object({
  name: yup.string().required(<IntlMessages id="validation.nameRequired" />),
  email: yup
    .string()
    .email(<IntlMessages id="validation.emailFormat" />)
    .required(<IntlMessages id="validation.emailRequired" />),
  password: yup
    .string()
    .required(<IntlMessages id="validation.passwordRequired" />),
  confirmPassword: yup
    .string()
    .required(<IntlMessages id="validation.reTypePassword" />)
});

const Signup = () => {
  const { routes } = useNavContext();
  const { submitSignUp } = useNavActionsContext();

  return (
    <UserFrame title={<IntlMessages id="common.signup" />}>

      <Formik
        validateOnChange={true}
        initialValues={{
          name: "",
          email: "",
          password: "",
          confirmPassword: ""
        }}
        validationSchema={validationSchema}
        onSubmit={async (data, { setErrors }) => {
          if (data.password !== data.confirmPassword) {
            setErrors({
              confirmPassword: (
                <IntlMessages id="validation.passwordMisMatch" />
              )
            });
          } else {
            try {
              await submitSignUp(data);
            } catch (error) {
              console.error("An error occurred submitting the sign up form:", error);
              setErrors({ email: error.message });
            }
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
                label={<IntlMessages id="common.name" />}
                name="name"
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
                label={<IntlMessages id="common.password" />}
                name="password"
                type="password"
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
                label={<IntlMessages id="common.retypePassword" />}
                name="confirmPassword"
                type="password"
                variant="outlined"
                sx={{
                  width: "100%"
                }}
              />
            </Box>

            <Box
              sx={{
                mb: { xs: 5, xl: 6 },
                display: "flex",
                flexDirection: "column",
                flexWrap: "wrap",
                alignItems: "center"
              }}
            >
              <Box>
                <FormControlLabel control={<Checkbox />} label={
                  <>
                    <IntlMessages id="common.iAgreeTo" /> <NextMuiTextLink href={routes.common.terms.href}>
                      <IntlMessages id="common.termConditions" />
                  </NextMuiTextLink>
                  </>
                } />
              </Box>
            </Box>
            <Button
              variant="contained"
              color="primary"
              disabled={isSubmitting}
              sx={{
                width: "100%",
                height: 44
              }}
              type="submit"
            >
              <IntlMessages id="common.signup" />
            </Button>
          </Form>
        )}
      </Formik>

      <Box
        sx={{
          mt: { xs: 3, xl: 4 },
          textAlign: "center",
          color: grey[700],
          fontSize: 14,
          fontWeight: Fonts.BOLD
        }}
      >
        <Box component="span" sx={{ mr: 1 }}>
          <IntlMessages id="common.alreadyHaveAccount" />
        </Box>
        <Box
          component="span"
          sx={{
            color: "primary.main",
            fontWeight: Fonts.MEDIUM,
            cursor: "pointer"
          }}
        >
          <NextMuiTextLink href={routes.account.login.href}>
            <IntlMessages id="common.signInHere" />
          </NextMuiTextLink>
        </Box>
      </Box>
    </UserFrame>
  );
};

export default Signup;
