import React from "react";
import AppLayout from "../../components/Core/AppLayout";
import { Button, Grid, Typography } from "@mui/material";
import { EmailIcon, FileCopyIcon, HeroSvg } from "../../assets/images";

const HeroSection = () => {
  return (
    <AppLayout mt={2} pb={13} sx={{ px: { xs: 2 } }} id="home">
      <Grid container alignItems="center">
        <Grid item textAlign="center" xl={12} lg={12} md={12} sm={12} xs={12}>
          <Typography
            className="content-shadow"
            sx={{
              fontSize: {
                xl: "30px",
                lg: "30px",
                md: "30px",
                sm: "30px",
                xs: "20px",
              },
            }}
          >
            Hi there 👋, I am a{" "}
            <span className="content-purple font-bold">Full Stack</span>{" "}
            <span className="content-light-yellow font-bold">
              Software Developer
            </span>
          </Typography>
        </Grid>
        <Grid
          item
          xl={12}
          lg={12}
          md={12}
          sm={12}
          xs={12}
          display="flex"
          justifyContent="center"
        >
          <Typography
            className="content-shadow"
            fontSize={18}
            mt={1}
            maxWidth="600px"
            textAlign="center"
            sx={{
              fontSize: {
                xl: "18px",
                lg: "18px",
                md: "18px",
                sm: "18px",
                xs: "14px",
              },
            }}
          >
            having experience of building Web applications with MERN Stack and
            some other cool libraries and frameworks.
          </Typography>
        </Grid>
        <Grid item mt={3} xl={12} lg={12} md={12} sm={12} xs={12}>
          <Grid container justifyContent="center" columnGap={4}>
            <Grid item>
              <Button
                variant="outlined"
                color="primary"
                onClick={() => window.open(process.env.REACT_APP_RESUME_LINK)}
                sx={{ px: 4, py: 1.5, fontSize: "14px", mb: { xs: 2 } }}
              >
                <FileCopyIcon sx={{ mr: 1.5 }} />
                My Resume
              </Button>
            </Grid>
            <Grid item>
              <a href="#contact">
                <Button
                  variant="outlined"
                  color="primary"
                  sx={{ px: 4, py: 1.5, fontSize: "14px" }}
                >
                  <EmailIcon sx={{ mr: 1.5 }} /> Contact me
                </Button>
              </a>
            </Grid>
          </Grid>
        </Grid>
        <Grid
          item
          xl={12}
          lg={12}
          md={12}
          sm={12}
          xs={12}
          display="flex"
          justifyContent="center"
          sx={{
            mt: {
              lg: -17,
              md: -17,
              sm: -17,
              xs: -8,
            },
          }}
        >
          <img src={HeroSvg} alt="hero-img" />
        </Grid>
      </Grid>
    </AppLayout>
  );
};

export default HeroSection;
