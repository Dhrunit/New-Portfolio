import React from "react";
import AppLayout from "../../components/Core/AppLayout";
import { Box, Grid, Tab, Tabs, Tooltip, Typography } from "@mui/material";
import {
  CustomTabPanel,
  a11yProps,
  backendArrayIcon,
  frontendArrayIcon,
  skillsArray,
} from "./helper";
import { SkillsSvg } from "../../assets/images";

const SkillsSection = () => {
  const [value, setValue] = React.useState(0);

  const handleChange = (event, newValue) => {
    setValue(newValue);
  };

  return (
    <AppLayout pb={13} sx={{ px: { xs: 2 } }} id="skills">
      <Grid container>
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
            My Skills
          </Typography>
        </Grid>
        <Grid container>
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
              sx={{
                mt: 2,
                fontSize: {
                  xl: "16px",
                  lg: "16px",
                  md: "20px",
                  sm: "20px",
                  xs: "20px",
                },
                textAlign: "center",
              }}
            >
              I make production ready web applications using the technologies
              mentioned below. I learned all of them by myself which is why I
              call myself a self-taught web developer 😄.
            </Typography>
          </Grid>
        </Grid>
        <Grid container>
          <Grid
            item
            xl={12}
            lg={12}
            md={12}
            sm={12}
            xs={12}
            display="flex"
            justifyContent="center"
            flexDirection="column"
            alignItems="center"
            mt={3}
          >
            <Box>
              <Tabs
                value={value}
                onChange={handleChange}
                aria-label="basic tabs example"
              >
                {skillsArray.map((val, idx) => (
                  <Tab key={val} label={val} {...a11yProps(idx)} />
                ))}
              </Tabs>
            </Box>
            <Box>
              <CustomTabPanel value={value} index={0}>
                <Grid
                  container
                  columnSpacing={6}
                  justifyContent="center"
                  mt={4}
                  alignItems="center"
                >
                  {frontendArrayIcon.map((val) => (
                    <Grid
                      item
                      key={val.title}
                      sx={{
                        mt: {
                          xl: 0,
                          lg: 0,
                          md: 3,
                          sm: 3,
                          xs: 3,
                        },
                      }}
                    >
                      <Tooltip title={val.title} placement="top">
                        <img
                          src={val.icon}
                          style={{ ...val.style, cursor: "pointer" }}
                          alt={`${val.title}-icon`}
                        />
                      </Tooltip>
                    </Grid>
                  ))}
                </Grid>
              </CustomTabPanel>
              <CustomTabPanel value={value} index={1}>
                <Grid
                  container
                  columnSpacing={6}
                  justifyContent="center"
                  mt={-3}
                  alignItems="center"
                >
                  {backendArrayIcon.map((val) => (
                    <Grid
                      item
                      key={val.title}
                      sx={{
                        mt: {
                          xl: 0,
                          lg: 0,
                          md: 3,
                          sm: 3,
                          xs: 3,
                        },
                      }}
                    >
                      <Tooltip title={val.title} placement="top">
                        <img
                          src={val.icon}
                          style={{ ...val.style, cursor: "pointer" }}
                          alt={`${val.title}-icon`}
                        />
                      </Tooltip>
                    </Grid>
                  ))}
                </Grid>
              </CustomTabPanel>
            </Box>
          </Grid>
        </Grid>
        <Grid container justifyContent="center">
          <Grid
            item
            xl={12}
            lg={12}
            md={12}
            sm={12}
            xs={12}
            sx={{
              display: {
                xl: "flex",
                lg: "flex",
                md: "flex",
                sm: "none",
                xs: "none",
              },
            }}
            display="flex"
            justifyContent="center"
          >
            <img
              src={SkillsSvg}
              style={{ marginTop: "-1rem" }}
              alt="skills-svg"
            />
          </Grid>
        </Grid>
      </Grid>
    </AppLayout>
  );
};

export default SkillsSection;
