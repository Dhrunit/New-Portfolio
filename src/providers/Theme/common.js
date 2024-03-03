export const commonTheme = {
  typography: {
    fontFamily: "OutfitRegular",
    h1: {
      fontWeight: 300,
      fontSize: "96px",
      letterSpacing: "-1.5px",
    },
    h2: {
      fontWeight: 300,
      fontSize: "60px",
      letterSpacing: "-0.5px",
    },
    h3: {
      fontWeight: 400,
      fontSize: "48px",
      letterSpacing: "0px",
    },
    h4: {
      fontWeight: 400,
      fontSize: "34px",
      letterSpacing: "0.25px",
    },
    h5: {
      fontWeight: 400,
      fontSize: "24px",
      letterSpacing: "0px",
    },
    h6: {
      fontWeight: 500,
      fontSize: "20px",
      letterSpacing: "0.15px",
    },
    subtitle1: {
      fontWeight: 400,
      fontSize: "16px",
      letterSpacing: "0.15px",
    },
    subtitle2: {
      fontWeight: 500,
      fontSize: "14px",
      letterSpacing: "0.1px",
    },
    body1: {
      fontWeight: 400,
      fontSize: "16px",
      letterSpacing: "0.15px",
    },
    body2: {
      fontWeight: 400,
      fontSize: "14px",
      letterSpacing: "0.15px",
    },
    caption: {
      fontWeight: 400,
      fontSize: "12px",
      letterSpacing: "0.4px",
    },
    overline: {
      fontWeight: 400,
      fontSize: "1px",
      letterSpacing: "0.4px",
      textTransform: "uppercase",
    },
    button: {
      fontWeight: 500,
      textTransform: "none",
      letterSpacing: "0.15px",
    },
  },
  components: {
    MuiTab: {
      styleOverrides: {
        root: {
          fontSize: "15px",
          "&:hover": {
            backgroundColor: "rgba(255, 255, 255, 0.08)",
          },
        },
      },
    },
    MuiButton: {
      variants: [
        {
          props: { size: "large" },
          style: { fontSize: "15px" },
        },
        {
          props: { size: "medium" },
          style: { fontSize: "14px" },
        },
        {
          props: { size: "small" },
          style: { fontSize: "13px" },
        },
      ],
      styleOverrides: {
        root: {
          "&.MuiButton-outlined": {
            "&:hover": {
              background: "white",
              color: "var(--purple)",
            },
            borderWidth: "2px",
            borderRadius: "60px",
          },
        },
      },
    },
  },
};
