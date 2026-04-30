import React from "react";
import Avatar from "@mui/material/Avatar";
import Typography from "@mui/material/Typography";
import Box from "@mui/material/Box";

export default function SpeakerCard({ speaker }) {
  if (!speaker) return null;

  return (
    <Box
      sx={{
        display: "flex",
        alignItems: "center",
        gap: 3,
        marginBottom: "16px",
      }}
    >
      {/* IMAGE */}
      <Avatar
        src={speaker.avatar}
        alt={speaker.name}
        sx={{
          width: 130,
          height: 130,
          border: "2px solid #01b5cf", // ✅ matches screenshot ring
        }}
      />

      {/* TEXT */}
      <Box>
        <Typography
          sx={{
            fontSize: "1rem",
            fontWeight: 700,
            color: "#01b5cf",
          }}
        >
          {speaker.name}
        </Typography>

        <Typography
          sx={{
            fontSize: "0.8rem",
            color: "#000",
            fontWeight: 600,
          }}
        >
          {speaker.role}
        </Typography>
      </Box>
    </Box>
  );
}
