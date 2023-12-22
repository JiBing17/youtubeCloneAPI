// Importing necessary components from React and Material-UI
import React from "react";
import { Stack } from "@mui/material";

// Importing categories constant from a local file
import { categories } from "../utils/constants";

// SideBar Component - Displays categories as buttons with icons
const SideBar = ({ selectedCategory, setSelectedCategory }) => (
  // Stack layout for displaying categories vertically on smaller screens
  <Stack
    direction="row"
    sx={{
      overflowY: "auto",
      height: { sx: "auto", md: "95%" },
      flexDirection: { md: "column" },
    }}
  >
    {/* Mapping through each category to display as a component in the Sidebar */}
    {categories.map((category) => (
      // Button for each category
      <button
        className="category-btn"
        onClick={() => setSelectedCategory(category.name)}
        style={{
          // Styling based on whether the category is selected or not
          background: category.name === selectedCategory && "#FC1503",
          color: "white",
        }}
        key={category.name}
      >
        {/* Icon for the category */}
        <span style={{ color: category.name === selectedCategory ? "white" : "red", marginRight: "15px" }}>
          {category.icon}
        </span>
        {/* Name of the category */}
        <span style={{ opacity: category.name === selectedCategory ? "1" : "0.8" }}>
          {category.name}
        </span>
      </button>
    ))}
  </Stack>
);

// Exporting SideBar as the default component
export default SideBar;
