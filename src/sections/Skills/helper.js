import { Box, Typography } from "@mui/material";
import {
  AwsIcon,
  BootstrapIcon,
  CssIcon,
  ExpressJsIcon,
  FigmaIcon,
  GitIcon,
  HtmlIcon,
  JavaScriptIcon,
  MaterialUiIcon,
  MongoDbIcon,
  NextIcon,
  NginxIcon,
  NodeJsIcon,
  ReactIcon,
  ReduxIcon,
  TypeScriptIcon,
  VueIcon,
} from "../../assets/images";

export function CustomTabPanel(props) {
  const { children, value, index, ...other } = props;

  return (
    <Box
      role="tabpanel"
      hidden={value !== index}
      id={`simple-tabpanel-${index}`}
      aria-labelledby={`simple-tab-${index}`}
      {...other}
    >
      {value === index && (
        <Box sx={{ p: 3 }}>
          <Typography component="div">{children}</Typography>
        </Box>
      )}
    </Box>
  );
}

export function a11yProps(index) {
  return {
    id: `simple-tab-${index}`,
    "aria-controls": `simple-tabpanel-${index}`,
  };
}

export const skillsArray = ["Front end", "Back end & others"];

export const frontendArrayIcon = [
  { title: "HTML", icon: HtmlIcon, style: { width: "60px", height: "60px" } },
  { title: "CSS", icon: CssIcon, style: { width: "60px", height: "60px" } },
  { title: "Figma", icon: FigmaIcon, style: { width: "60px", height: "60px" } },
  {
    title: "JavaScript",
    icon: JavaScriptIcon,
    style: { width: "60px", height: "60px" },
  },
  {
    title: "TypeScript",
    icon: TypeScriptIcon,
    style: { width: "60px", height: "60px" },
  },
  { title: "React", icon: ReactIcon, style: { width: "60px", height: "60px" } },
  { title: "Vue", icon: VueIcon, style: { width: "50px", height: "50px" } },
  {
    title: "Material UI",
    icon: MaterialUiIcon,
    style: { width: "55px", height: "50px" },
  },
  {
    title: "Bootstrap",
    icon: BootstrapIcon,
    style: { width: "80px", height: "60px" },
  },
  { title: "NextJs", icon: NextIcon, style: { width: "60px", height: "60px" } },
  { title: "Redux", icon: ReduxIcon, style: { width: "60px", height: "60px" } },
];
export const backendArrayIcon = [
  { title: "Aws", icon: AwsIcon, style: { width: "60px", height: "60px" } },
  { title: "Nginx", icon: NginxIcon, style: { width: "60px", height: "60px" } },
  {
    title: "Mongodb",
    icon: MongoDbIcon,
    style: { width: "150px", height: "150px" },
  },
  {
    title: "ExpressJs",
    icon: ExpressJsIcon,
    style: { width: "60px", height: "60px" },
  },
  {
    title: "NodeJs",
    icon: NodeJsIcon,
    style: { width: "60px", height: "60px" },
  },
  { title: "Git", icon: GitIcon, style: { width: "60px", height: "60px" } },
];
