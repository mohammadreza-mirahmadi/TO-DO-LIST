import { Tab, Tabs } from "@mui/material";
import { useState } from "react";
import MenuTabDropDown from "./MenuTabDropdown";
import KeyboardArrowRightIcon from "@mui/icons-material/KeyboardArrowRight";

function MenuTabs() {
  const [tabValue, setTabValue] = useState(0);
  const [showDropdown, setShowDropdown] = useState({
    display: "none",
    transform: "translateY(-20px)",
  });
  const tabs = [
    { id: 1, text: "All Tasks" },
    { id: 2, text: "Important Tasks" },
    { id: 3, text: "Completed Tasks" },
    { id: 4, text: "Uncompleted Tasks" },
    { id: 5, text: "Directories" },
  ];

  const handleOpenDropDown = (e) => {
    if (e.target.children[0].style.transform === "rotate(90deg)") {
      e.target.children[0].style.transform = "rotate(0)";
      setShowDropdown({ display: "none", transform: "translateY(-20px)" });
    } else {
      e.target.children[0].style.transform = "rotate(90deg)";
      setShowDropdown({ display: "block", transform: "translateY(0)" });
    }
  };

  return (
    <Tabs
      value={tabValue}
      onChange={(e, newValue) => setTabValue(newValue)}
      orientation="vertical"
      variant="scrollable"
      indicatorColor=""
      sx={{
        maxHeight: "80vh",
        overflowY: "auto",
        "& .MuiTab-root": {
          display: "block",
          textAlign: "start",
          minHeight: "0.6rem",
          textTransform: "capitalize",
          color: "text.secondary",
          "&:hover": {
            color: "error.main",
          },
          "&.Mui-selected": {
            color: "error.main",
            borderRight: "0.2rem solid",
            borderRightColor: "error.main",
            backgroundColor: "primary.light",
          },
        },
      }}
    >
      {tabs.map((tab) =>
        tab.id === 5 ? (
          <Tab
            icon={
              <KeyboardArrowRightIcon
                sx={{
                  fontSize: "0.9rem",
                  // transform: "rotate(90deg)"
                }}
              />
            }
            iconPosition="start"
            label={tab.text}
            sx={{
              "&  .MuiTab-icon": {
                marginRight: "2px",
                marginBottom: "-3px",
              },
            }}
            onClick={handleOpenDropDown}
          />
        ) : (
          <Tab key={tabs.id} label={tab.text} />
        )
      )}
      <MenuTabDropDown
        style={{
          display: showDropdown.display,
          transform: showDropdown.transform,
        }}
      />
    </Tabs>
  );
}

export default MenuTabs;
