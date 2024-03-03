import React from "react";
import {
  Box,
  Collapse,
  Grid,
  Hidden,
  IconButton,
  Typography,
} from "@mui/material";
import { CloseIcon, MenuIcon, NavSvg } from "../../assets/images";
import { navItems } from "./helper";
import AppLayout from "../Core/AppLayout";

const Navbar = () => {
  const [openDrawer, setOpenDrawer] = React.useState(false);
  return (
    <AppLayout alignItems="center">
      <Hidden only={["sm", "xs"]}>
        <Grid item xl={4} lg={4} md={4} sm={4} xs={4}>
          <Typography
            component="a"
            href="#home"
            className="font-bold content-shadow"
            display="flex"
            alignItems="center"
            fontSize={30}
            sx={{ cursor: "pointer", color: "white" }}
          >
            Dhrunit
            <span
              className="font-bold content-purple"
              style={{ marginLeft: "0.25rem" }}
            >
              Prajapati
            </span>
            <img src={NavSvg} alt="hero-logo" />
          </Typography>
        </Grid>
        <Grid item xl={8} lg={8} md={8} sm={8} xs={8}>
          <Grid
            container
            alignItems="center"
            justifyContent="flex-end"
            columnGap={4}
          >
            {navItems.map((nav, idx) => (
              <Grid item display="flex" key={idx}>
                <Typography
                  component="a"
                  href={nav.id}
                  className="nav-link"
                  px={2}
                  py={1}
                  sx={{ cursor: "pointer" }}
                >
                  {nav.title}
                </Typography>
              </Grid>
            ))}
          </Grid>
        </Grid>
      </Hidden>
      <Hidden only={["xl", "lg", "md"]}>
        <Grid item xl={10} lg={10} md={10} sm={10} xs={10} mt={2}>
          <Typography
            component="a"
            href="#home"
            className="font-bold content-shadow"
            display="flex"
            alignItems="center"
            sx={{
              cursor: "pointer",
              color: "white",
              fontSize: {
                xs: "20px",
              },
            }}
          >
            Dhrunit
            <span
              className="font-bold content-purple"
              style={{ marginLeft: "0.25rem" }}
            >
              Prajapati
            </span>
            <Box
              sx={{
                display: {
                  xs: "none",
                },
              }}
            >
              <img src={NavSvg} alt="hero-logo" />
            </Box>
          </Typography>
        </Grid>
        <Grid
          item
          xl={2}
          lg={2}
          md={2}
          sm={2}
          xs={2}
          mt={2}
          display="flex"
          justifyContent="flex-end"
        >
          <IconButton
            onClick={() => setOpenDrawer(!openDrawer)}
            sx={{ color: "white" }}
          >
            {openDrawer ? <CloseIcon /> : <MenuIcon />}
          </IconButton>
        </Grid>
      </Hidden>
      <Collapse in={openDrawer} sx={{ width: "100%" }}>
        <Grid
          container
          alignItems="center"
          justifyContent="center"
          columnGap={4}
          flexDirection="column"
        >
          {navItems.map((nav, idx) => (
            <Grid
              item
              display="flex"
              key={idx}
              xl={12}
              lg={12}
              md={12}
              sm={12}
              xs={12}
            >
              <Typography
                component="a"
                href={nav.id}
                className="nav-link"
                px={2}
                py={1}
                my={1}
                sx={{ cursor: "pointer" }}
              >
                {nav.title}
              </Typography>
            </Grid>
          ))}
        </Grid>
      </Collapse>
    </AppLayout>
  );
};

export default Navbar;
