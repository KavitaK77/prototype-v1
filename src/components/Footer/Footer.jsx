import React from "react";
import { Box, Typography } from "@mui/material";

const Footer = () => (
  <Box
    sx={{
      bgcolor: "#111",
      color: "#ccc",
      py: 4,
      mt: "auto",
      borderTop: "1px solid #333",
    }}
  >
    <Typography variant="body2" textAlign="center">
      © {new Date().getFullYear()} Clone. All rights reserved.
    </Typography>
  </Box>
);

export default Footer;
