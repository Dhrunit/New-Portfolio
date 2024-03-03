import { Box, Button, Grid, Typography } from "@mui/material";
import React from "react";
import { projectsArray } from "./helper";
import { PiGithubLogo } from "react-icons/pi";

const ProjectsSection = () => {
  return (
    <Grid container pb={14} id="project">
      <Grid
        item
        textAlign="left"
        sx={{
          px: { xl: 15, lg: 15, md: 4, sm: 4, xs: 2 },
        }}
        xl={12}
        lg={12}
        md={12}
        sm={12}
        xs={12}
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
            mb: 1,
          }}
        >
          Projects
        </Typography>
        <Typography className="content-shadow" fontSize={20}>
          Some of the projects I've worked on using a mix of the tech stacks I
          am familiar with.
        </Typography>
      </Grid>
      <Grid
        container
        display="flex"
        my={5}
        sx={{
          px: { xl: 15, lg: 15, md: 4, sm: 4, xs: 2 },
        }}
      >
        {projectsArray.map((project, idx) => (
          <Grid
            key={idx + 1}
            sx={{
              background: "#fff",
              borderRadius: "10px",
              transition: "all .2s ease-in-out",
              cursor: "pointer",
              ":hover": {
                boxShadow: "4px 8px 4px 0px rgba(0, 0, 0, 0.25)",
              },
            }}
            onClick={() => window.open(project.url)}
            item
            mr={2}
            xl={3.75}
            lg={3.75}
            md={12}
            sm={12}
            xs={12}
            p={3}
            mb={2}
          >
            <Box
              sx={{
                background: project.image ? `url(${project.image})` : "#D9D9D9",
                backgroundRepeat: "no-repeat",
                backgroundSize: "cover",
                height: "250px",
              }}
            />
            <Typography
              mt={1}
              fontSize={20}
              className="content-purple font-bold"
              sx={{
                textDecoration: "underline",
              }}
            >
              {project.title}
            </Typography>
            <Typography mt={1} className="content-purple">
              {project.subtext}
            </Typography>
            <Typography mt={3} className="content-purple">
              Technology: {project.technology}
            </Typography>
          </Grid>
        ))}
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
        <Button
          variant="outlined"
          color="primary"
          onClick={() => window.open(process.env.REACT_APP_GITHUB_LINK)}
          sx={{ px: 4, py: 1.5, fontSize: "14px", mb: { xs: 2 } }}
        >
          <PiGithubLogo size="25px" style={{ marginRight: "0.5rem" }} />
          More on my Github
        </Button>
      </Grid>
    </Grid>
  );
};

export default ProjectsSection;
