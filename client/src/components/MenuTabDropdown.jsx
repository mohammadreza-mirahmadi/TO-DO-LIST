import { Box, Button, Tab } from "@mui/material";
import KeyboardArrowRightIcon from "@mui/icons-material/KeyboardArrowRight";
import DeleteIcon from "@mui/icons-material/Delete";
import EditIcon from "@mui/icons-material/Edit";

function MenuTabDropDown({ style }) {
  // TODO: fix the problem of tabs moving when using dropdown

  return (
    <Box
      sx={{
        display: style.display,
        transform: style.transform,
        transition: "all 2s ease-in", // TODO: fix transition
      }}
    >
      <Tab
        icon={
          <>
            <DeleteIcon sx={{ fontSize: "1.2rem" }} />
            <EditIcon sx={{ fontSize: "1.2rem" }} />
          </>
        }
        iconPosition="end"
        label={"Main"}
        sx={{
          // TODO: There should be space between miniBtns and text
          "& .MuiTab-icon": { marginBottom: "-3px", marginLeft: "4px" },
          justifyContent: "space-between",
          width: "100%",
        }}
      />
      {/* TODO: fix styles of button */}
      <Button
        variant="outlined"
        color="error.main"
        sx={{ border: "1px dashed text.secondary" }}
      >
        + New
      </Button>
    </Box>
  );
}

export default MenuTabDropDown;
