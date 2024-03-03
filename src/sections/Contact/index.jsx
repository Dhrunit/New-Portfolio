import { Box, Grid, Tooltip, Typography } from "@mui/material";
import React from "react";
import { footerIcons } from "./helper";
import { DP } from "../../assets/images";

const ContactSection = () => {
  return (
    <>
      <Grid
        container
        pb={14}
        id="contact"
        py={5}
        sx={{
          px: { xl: 15, lg: 15, md: 7, sm: 5, xs: 5 },
          minHeight: "320px",
          background: "var(--highlightColor)",
        }}
      >
        <Grid item xl={8} lg={8} md={12} sm={12} xs={12} mt={2}>
          <Typography fontSize={18}>
            I would love to help you with your project or maybe you just want to
            say Hi 👋 and have a quick chat? My inbox is open for all 😁{" "}
          </Typography>
          <Box display="flex" mt={3}>
            {footerIcons.map((icon, idx) => (
              <Tooltip key={idx} title={icon.title}>
                <Box
                  mr={2}
                  p={1}
                  sx={{
                    display: "flex",
                    justifyContent: "center",
                    alignItems: "center",
                    cursor: "pointer",
                    transition: "all 0.2s",
                    ":hover": {
                      background: "var(--baseColor)",
                      svg: {
                        color: "var(--highlightColor)",
                      },
                      borderRadius: "50%",
                    },
                  }}
                  onClick={() => window.open(icon.link)}
                >
                  {icon.icon}
                </Box>
              </Tooltip>
            ))}
          </Box>
        </Grid>
        <Grid
          item
          xl={4}
          lg={4}
          md={4}
          sm={4}
          xs={4}
          position="absolute"
          sx={{
            bottom: "1.25%",
            right: "5%",
            display: {
              xl: "block",
              lg: "block",
              md: "none",
              sm: "none",
              xs: "none",
            },
          }}
        >
          <Box ml={5}>
            <img style={{ width: "350px" }} src={DP} alt="my-profile" />
          </Box>
        </Grid>
      </Grid>
      <Grid
        container
        px={15}
        sx={{
          background: "var(--highlightColor)",
          px: { xl: 15, lg: 15, md: 7, sm: 5, xs: 5 },
        }}
      >
        <Grid
          item
          xl={12}
          lg={12}
          md={12}
          sm={12}
          xs={12}
          pb={5}
          display="flex"
          justifyContent="center"
        >
          <Typography fontSize={18}>
            Designed and developed by Dhrunit Prajapati with ❤️
          </Typography>
        </Grid>
      </Grid>
    </>
  );
};

export default ContactSection;
