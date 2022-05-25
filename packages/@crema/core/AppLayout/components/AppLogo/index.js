import React from "react";
import { useThemeContext } from "@crema/utility/AppContextProvider/ThemeContextProvider";
import PropTypes from "prop-types";
import { Box } from "@mui/material";
import { alpha } from "@mui/material/styles";
import { Logo } from '@crema/assets/icon/Logo';
import { LogoText } from '@crema/assets/icon/LogoText';
import Link from "next/link";
import { initialUrl } from "@crema/shared/constants/AppConst";

const AppLogo = () => {
  const { theme } = useThemeContext();

  return (
    <Link href={initialUrl}>
      <Box
        sx={{
          height: { xs: 56, sm: 70 },
          padding: 2.5,
          display: "flex",
          flexDirection: "row",
          cursor: "pointer",
          alignItems: "baseline",
          justifyContent: "center",
          "& svg": {
            height: { xs: 30, sm: 40 }
          },
          "& .logo": {
            marginRight: 2,
          }
        }}
        className="app-logo"
      >
          <Logo color={theme.palette.primary.main} className="logo" />
          <LogoText color={alpha(theme.palette.text.primary, 0.8)}/>
      </Box>
    </Link>
  );
};

export default AppLogo;
AppLogo.propTypes = {
  color: PropTypes.string
};
