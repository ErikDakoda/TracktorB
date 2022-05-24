import React from "react";
import { useThemeContext } from "@crema/utility/AppContextProvider/ThemeContextProvider";
import PropTypes from "prop-types";
import { Box } from "@mui/material";
import { alpha } from "@mui/material/styles";
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
          alignItems: "center",
          justifyContent: "center",
          "& svg": {
            height: { xs: 30, sm: 40 }
          }
        }}
        className="app-logo"
      >
        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 100 100">
          <path fill={theme.palette.primary.main}
                d="M87.4,29.8C85.8,14,72.4,1.6,56.1,1.6H45.3c-17.4,0-31.5,14.1-31.5,31.5v27.4h2.1c6.3,0,11.4,5.1,11.4,11.4   c0,2.5-0.9,4.8-2.3,6.7h4.2c6.3,0,11.4,5.1,11.4,11.4c0,2.6-1,5.1-2.5,7c14.5,4.6,29.3-1.5,29.3-1.5c11.8-4.5,20.2-16,20.2-29.4   l0,0c0-2.3-1.8-4.1-4.1-4.1H67.3c-2.3,0-4.1,1.8-4.1,4.1l0,0c0,3.9-3.2,7.1-7.1,7.1H45.3c-3.9,0-7.1-3.2-7.1-7.1v-33   c0-3.9,3.2-7.1,7.1-7.1h6.8c2.1,0,3.8,1.7,3.8,3.8v15c0,3.3,2.2,6.4,5.5,7c4.4,0.9,8.2-2.5,8.2-6.7v-5.8c0-1.2,1-2.2,2.2-2.2   c1.2,0,2.2,1,2.2,2.2v1.2c0,3.3,2.2,6.4,5.5,7c4.4,0.9,8.2-2.5,8.2-6.7v-3.6v-4.1L87.4,29.8z" />
        </svg>
        <Box
          sx={{
            mt: 1,
            "& svg": {
              height: { xs: 25, sm: 30 }
            }
          }}
        >
          <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 100 29.7">
            <g fill={alpha(theme.palette.text.primary, 0.8)}>
              <path d="M19.5,13h-7.4v-5c0-1.4-0.1-2.3-0.2-2.7c-0.2-0.4-0.5-0.5-1-0.5c-0.6,0-1,0.2-1.2,0.7
			C9.5,5.9,9.4,6.8,9.4,8.3v13.2c0,1.4,0.1,2.3,0.2,2.7s0.5,0.6,1.1,0.6c0.6,0,0.9-0.2,1.1-0.6c0.2-0.4,0.3-1.4,0.3-3v-3.6h7.4v1.1
			c0,2.9-0.2,5-0.6,6.3c-0.4,1.2-1.3,2.3-2.8,3.2c-1.4,0.9-3.2,1.4-5.3,1.4c-2.2,0-4-0.4-5.4-1.2c-1.4-0.8-2.3-1.9-2.8-3.3
			C2.2,23.8,2,21.8,2,19v-8.3C2,8.6,2.1,7.1,2.2,6c0.1-1,0.6-2,1.3-3c0.7-1,1.7-1.7,2.9-2.2C7.6,0.3,9,0,10.7,0c2.2,0,4,0.4,5.4,1.3
			s2.4,1.9,2.8,3.2c0.4,1.3,0.7,3.2,0.7,5.9V13z" />
              <path d="M20.9,0.6h5.2c3.5,0,5.9,0.1,7.1,0.4c1.2,0.3,2.2,1,3,2.1c0.8,1.1,1.2,2.9,1.2,5.3c0,2.2-0.3,3.7-0.8,4.5
			c-0.6,0.8-1.6,1.2-3.3,1.4c1.5,0.4,2.5,0.9,3,1.5c0.5,0.6,0.8,1.2,0.9,1.7c0.1,0.5,0.2,1.9,0.2,4.2v7.5h-6.9v-9.5
			c0-1.5-0.1-2.5-0.4-2.8c-0.2-0.4-0.9-0.5-1.9-0.5v12.8h-7.4V0.6z M28.3,5.5v6.3c0.8,0,1.4-0.1,1.8-0.3c0.3-0.2,0.5-1,0.5-2.2V7.7
			c0-0.9-0.2-1.5-0.5-1.8C29.8,5.6,29.2,5.5,28.3,5.5z" />
              <path
                d="M40.5,0.6h12.4v5.7h-4.9v5.4h4.6v5.4h-4.6v6.3h5.4v5.7H40.5V0.6z" />
              <path d="M77.8,0.6v28.5h-6.5l0-19.2l-2.6,19.2h-4.6l-2.7-18.8l0,18.8h-6.5V0.6h9.6c0.3,1.7,0.6,3.7,0.9,6.1l1.1,7.2
			l1.7-13.3H77.8z" />
              <path d="M93.7,0.6L98,29.1h-7.6L90,24h-2.6l-0.4,5.1h-7.7L83,0.6H93.7z M89.8,18.9c-0.4-3.2-0.8-7.2-1.1-12
			c-0.8,5.5-1.2,9.4-1.4,12H89.8z" />
            </g>
          </svg>
        </Box>
      </Box>
    </Link>
  );
};

export default AppLogo;
AppLogo.propTypes = {
  color: PropTypes.string
};
