import { Tab, Tabs } from "@mui/material";
import { useState } from "react";
import MenuTabDropDown from "./MenuTabDropdown";
import KeyboardArrowRightIcon from "@mui/icons-material/KeyboardArrowRight";

function MenuTabs() {
  const [tabValue, setTabValue] = useState(0);
  const tabs = [
    { id: 1, text: "All Tasks" },
    { id: 2, text: "Important Tasks" },
    { id: 3, text: "Completed Tasks" },
    { id: 4, text: "Uncompleted Tasks" },
    { id: 5, text: "Directories" },
  ];

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
          />
        ) : (
          <Tab key={tabs.id} label={tab.text} />
        )
      )}
      <MenuTabDropDown />
    </Tabs>
  );
}

export default MenuTabs;
