import { Grid } from "@mui/material";
import React from "react";

const AppLayout = ({ children, ...props }) => {
  return (
    <Grid
      container
      px={10}
      sx={{ maxWidth: "100vw", px: { md: 8, sm: 8, xs: 3 } }}
      {...props}
    >
      {children}
    </Grid>
  );
};

export default AppLayout;
