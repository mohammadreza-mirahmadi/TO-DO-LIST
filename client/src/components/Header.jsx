import {
  Box,
  Button,
  InputAdornment,
  inputBaseClasses,
  TextField,
  Typography,
} from "@mui/material";
import SearchIcon from "@mui/icons-material/Search";
import MenuIcon from "@mui/icons-material/Menu";

const months = [
  "Jan",
  "Feb",
  "Mar",
  "Apr",
  "May",
  "jun",
  "Jul",
  "Aug",
  "Sep",
  "Oct",
  "Now",
  "Dec",
];

function Header({ setOpenMenu }) {
  const handleToggleButton = (e) => {
    if (e.currentTarget.classList.contains("openMenu")) {
      e.currentTarget.classList.toggle("openMenu");
      setOpenMenu("-14rem");
    } else {
      e.currentTarget.classList.toggle("openMenu");
      setOpenMenu("0rem");
    }
  };
  const CurrentDate = new Date();
  return (
    <Box
      sx={{
        display: "flex",
        justifyContent: "space-between",
        flexDirection: "row",
        alignItems: "center",
        flexWrap: "wrap-reverse",
        // height: "6rem",
        marginTop: "1rem",
        textAlign: "center",
      }}
      no
    >
      <TextField
        id="outlined"
        placeholder="Search Task"
        variant="outlined"
        size="small"
        sx={{
          // flexGrow: "1",
          width: { xs: "100%", md: "25%" },
          backgroundColor: "background.paper",
          borderRadius: "5px",
          marginTop: "1rem",
          "& .MuiOutlinedInput-root": {
            border: "none",
            "& fieldset": {
              border: "none",
            },
            "&:hover fieldset": {
              border: "none",
            },
            "&.Mui-focused fieldset": {
              border: "2px solid",
              borderColor: "text.secondary",
            },
          },
        }}
        slotProps={{
          input: {
            endAdornment: (
              <InputAdornment position="end">
                <SearchIcon sx={{ fontSize: "1.2rem", cursor: "pointer" }} />
              </InputAdornment>
            ),
          },
        }}
      />
      {/* <Box
        sx={{
          display: "flex",
          alignItems: "center",
          justifyContent: "space-between",
          flexGrow: { xs: "1", md: "2" },
          width: "100%",
        }}
      > */}
      <Button
        aria-label="Menu"
        color="text.secondary"
        sx={{ display: { xs: "block", md: "none" }, marginRight: "auto" }}
        onClick={handleToggleButton}
      >
        <MenuIcon />
      </Button>
      <Box sx={{ marginRight: { xs: "auto", md: "0" } }}>
        <Typography sx={{ display: { sm: "block", md: "none" } }} variant="h3">
          TO-DO LIST
        </Typography>
        <Typography color="text.secondary" variant="body1">
          {CurrentDate.getFullYear()}, {months[CurrentDate.getMonth()]}{" "}
          {CurrentDate.getDate()}
        </Typography>
      </Box>
      <Button
        variant="contained"
        sx={{
          position: { xs: "fixed", sm: "static" },
          right: "1.6rem",
          bottom: "1.6rem",
        }}
      >
        Add New Task
      </Button>
    </Box>
    // </Box>
  );
}

export default Header;
