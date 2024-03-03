import { createTheme } from "@mui/material";
import { commonTheme, darkTheme } from "../providers/Theme/index";

const MuiTheme = createTheme({ ...commonTheme, palette: darkTheme });
export default MuiTheme;
