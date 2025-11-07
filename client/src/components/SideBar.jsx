import { Box } from "@mui/material";

function SideBar() {
  return (
    <Box
      sx={{
        width: { sm: "14rem", lg: "16rem" },
        backgroundColor: "white",
        display: { xs: "none", lg: "block" },
      }}
    >
      salam
    </Box>
  );
}

export default SideBar;
