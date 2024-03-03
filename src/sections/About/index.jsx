import React from "react";
import AppLayout from "../../components/Core/AppLayout";
import { Grid, Tooltip, Typography } from "@mui/material";
import { AboutMeSvg } from "../../assets/images";
import { languageArray } from "./helper";

const AboutSection = () => {
  return (
    <AppLayout pb={13} sx={{ px: { xs: 2 } }} id="about">
      <Grid container alignItems="center">
        <Grid item textAlign="center" xl={12} lg={12} md={12} sm={12} xs={12}>
          <Typography
            className="content-shadow font-bold"
            sx={{
              textDecoration: "underline",
              fontSize: {
                xl: "36px",
                lg: "36px",
                md: "36px",
                sm: "36px",
                xs: "30px",
              },
            }}
          >
            About me
          </Typography>
        </Grid>
      </Grid>
      <Grid
        container
        display="flex"
        mt={10}
        className="content-light-shadow"
        sx={{
          pl: { xl: 8, lg: 8, md: 2, sm: 2, xs: 2 },
        }}
      >
        <Grid item xl={6} lg={6} md={6} sm={12} xs={12} px={2}>
          <Grid item xl={12} lg={12} md={12} sm={12} xs={12}>
            <Typography fontSize={12}>Who am I?</Typography>
          </Grid>
          <Grid item xl={12} lg={12} md={12} sm={12} xs={12} mb={2}>
            <Typography fontSize={22}>
              My name is{" "}
              <span className="content-blue font-bold">Dhrunit Prajapati,</span>{" "}
              a passionate{" "}
              <span className="content-yellow font-bold">
                Full stack Web developer
              </span>{" "}
              with over <span className="content-blue font-bold">3 years</span>{" "}
              of industry experience.
            </Typography>
          </Grid>
          <Grid item xl={12} lg={12} md={12} sm={12} xs={12} mb={2}>
            <Typography fontSize={15}>
              with a love for creating innovative and user-friendly web
              applications. My journey in the world of technology began with a
              fascination for computers, and over the years, it has evolved into
              a fulfilling career that I am truly passionate about. Music,
              learning new tech, and exploring diverse cuisines are my favorite
              pastimes.
            </Typography>
          </Grid>
          <Grid item xl={12} lg={12} md={12} sm={12} xs={12} mb={2}>
            <Typography fontSize={15}>
              Currently, I am based in the vibrant city of Ahmedabad, Gujarat,
              where the tech community is thriving, and innovation is constantly
              in the air. Being part of this ecosystem fuels my passion and
              desire to contribute positively to the world of technology.
            </Typography>
          </Grid>
          <Grid item xl={12} lg={12} md={12} sm={12} xs={12} mb={4}>
            <Typography fontSize={15}>
              I am always excited to connect with like-minded individuals,
              collaborate on exciting projects, and contribute my expertise to
              make a meaningful impact in the digital realm. If you'd like to
              chat about development, design, or even the best restaurants in
              town, feel free to reach out! Let's create something remarkable
              together!
            </Typography>
          </Grid>
          <Grid
            item
            xl={12}
            lg={12}
            md={12}
            sm={12}
            xs={12}
            sx={{ borderTop: "2px solid var(--blue)" }}
          >
            <Typography className="content-blue font-bold" fontSize={25} py={2}>
              Languages/Softwares I love
            </Typography>

            {languageArray.map((val, idx) => (
              <Tooltip title={val.title} key={idx}>
                <img
                  className="hover-icons"
                  style={{ cursor: "pointer" }}
                  src={val.icon}
                  alt={val.title}
                />
              </Tooltip>
            ))}
          </Grid>
        </Grid>
        <Grid
          item
          xl={6}
          lg={6}
          md={6}
          sm={12}
          xs={12}
          display="flex"
          justifyContent="center"
          sx={{
            mt: { xl: 0, lg: 0, md: 0, sm: 6, xs: 6 },
          }}
        >
          <img src={AboutMeSvg} alt="hero-img" />
        </Grid>
      </Grid>
    </AppLayout>
  );
};

export default AboutSection;
