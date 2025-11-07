import { Box, Typography, Button, Container, IconButton } from "@mui/material";
import MenuTabs from "./MenuTabs";
import CloseIcon from "@mui/icons-material/Close";

function Menu() {
  return (
    <Box
      component="div"
      sx={{
        width: { xs: "14rem", sm: "16rem" },
        height: "100vh",
        backgroundColor: "background.paper",
        display: { xs: "block", md: "block" },
        marginLeft: { xs: "-14rem", sm: "-16rem", md: "0rem" },
      }}
    >
      <Container sx={{ paddingTop: "2rem" }}>
        <Typography
          variant="h3"
          align="center"
          sx={{
            display: { xs: "flex", md: "block" },
            justifyContent: "center",
            alignItems: "center",
          }}
        >
          TO-DO LIST
          <IconButton
            sx={{ marginLeft: "auto", display: { xs: "block", md: "none" } }}
          >
            <CloseIcon />
          </IconButton>
        </Typography>
        <Button
          variant="contained"
          sx={{
            width: "100%",
            marginTop: "2rem",
            marginBottom: "1.5rem",
            paddingY: "0.6rem",
          }}
        >
          Add New Task
        </Button>
      </Container>
      <MenuTabs />
    </Box>
  );
}

export default Menu;
