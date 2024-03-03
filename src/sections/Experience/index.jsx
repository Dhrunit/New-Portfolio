import React from "react";
import { Box, Grid, Typography } from "@mui/material";
import {
  VerticalTimeline,
  VerticalTimelineElement,
} from "react-vertical-timeline-component";
import "react-vertical-timeline-component/style.min.css";
import { experienceArray } from "./helper";

const ExperienceSection = () => {
  return (
    <Grid container pb={14} id="experience">
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
            mb: 4,
          }}
        >
          My Experience so far
        </Typography>
      </Grid>
      <Grid item xl={12} lg={12} md={12} sm={12} xs={12}>
        {experienceArray.map((val, idx) => (
          <VerticalTimeline key={idx}>
            <VerticalTimelineElement
              key={idx}
              contentStyle={{
                background: "#FFF",
                color: "#000",
                borderRadius: "10px",
                boxShadow: "none",
                padding: "0",
                marginRight: 10,
              }}
              iconStyle={{
                background: "#fff",
                color: "#fff",
                marginTop: "1rem",
                width: "70px",
                height: "70px",
                left: "49.5%",
              }}
              position={idx % 2 === 0 && idx !== 1 ? "left" : "right"}
              icon={<img src={val.icon} style={val.iconStyle} alt="logo" />}
            >
              <Box px={3} py={2} sx={{ borderBottom: "2px solid #000" }}>
                <Typography
                  component="div"
                  className="content-purple font-bold"
                  sx={{ fontSize: "20px !important" }}
                >
                  {val.name}
                </Typography>
                <Typography
                  component="div"
                  className="font-bold"
                  sx={{ fontSize: "16px !important" }}
                >
                  {val.title}
                </Typography>
                <Typography component="h4" sx={{ fontSize: "14px !important" }}>
                  {val.date}
                </Typography>
                <Typography component="h4" sx={{ fontSize: "14px !important" }}>
                  {val.location}
                </Typography>
              </Box>

              <Box px={3} pb={2} mt={2}>
                <ul>
                  {val.description.map((desc) => (
                    <li key={desc} style={{ paddingBottom: "10px" }}>
                      {desc}
                    </li>
                  ))}
                </ul>
              </Box>
            </VerticalTimelineElement>
          </VerticalTimeline>
        ))}
      </Grid>
    </Grid>
  );
};

export default ExperienceSection;
