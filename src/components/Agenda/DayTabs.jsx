import React from "react";
import Box from "@mui/material/Box";
import Button from "@mui/material/Button";

export default function DayTabs({ value, onChange, labels = [] }) {
  return (
    <Box sx={{ display: "flex", justifyContent: "center", mb: 2 }}>
      <Box sx={{ display: "flex", gap: 1 }}>
        {labels.map((l, i) => (
          <Button
            key={i}
            onClick={(e) => onChange && onChange(e, i)}
            sx={{
              backgroundColor: value === i ? "rgb(6,180,207)" : "#777",
              color: "#fff",
              borderRadius: "4px",
              textTransform: "none",
              "&:hover": {
                backgroundColor: value === i ? "rgb(6,160,190)" : "#666",
              },
              fontSize: "0.8rem",
              padding: "6px 20px",
              fontWeight: "bold",
              fontFamily: '"Arial", sans-serif',
            }}
            variant="contained"
          >
            {l}
          </Button>
        ))}
      </Box>
    </Box>
  );
}
