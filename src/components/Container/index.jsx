import React from "react";
import FOG from "vanta/dist/vanta.fog.min";
import { Box } from "@mui/material";

const Container = ({ children }) => {
  const [vantaEffect, setVantaEffect] = React.useState(0);
  const vantaRef = React.useRef(null);
  React.useEffect(() => {
    if (!vantaEffect) {
      setVantaEffect(
        FOG({
          el: vantaRef.current,
          highlightColor: "#9494FF",
          midtoneColor: "#0000FF",
          lowlightColor: "#88E2BF",
          baseColor: "#FFC947",
          blurFactor: 1.2,
          speed: 1,
          zoom: 0.5,
        })
      );
      document.body.vantaRef = vantaRef.current;
    }
    return () => {
      if (vantaEffect) vantaEffect.destroy();
      document.body.vantaRef = null;
    };
  }, [vantaEffect]);

  return (
    <Box position="relative">
      <Box
        ref={vantaRef}
        sx={{
          overflowY: "hidden",
          position: "fixed",
          top: 0,
          left: 0,
          width: "100%",
          height: "100%",
          zIndex: -1,
        }}
      />
      <Box>{children}</Box>
    </Box>
  );
};

export default Container;
