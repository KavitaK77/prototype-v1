import React from "react";
import Box from "@mui/material/Box";
import Typography from "@mui/material/Typography";
import SpeakerCard from "./SpeakerCard";

export default function AgendaItem({ event }) {
  return (
    <Box
      sx={{
        display: "grid",
        gridTemplateColumns: "220px 1fr", // fixed time column
        padding: "20px 30px",
        alignItems: "flex-start",
      }}
    >
      {/* LEFT: TIME */}
      <Typography
        sx={{
          fontSize: "1rem",
          fontWeight: 700,
          color: "#000",
        }}
      >
        {event.time}
      </Typography>

      {/* RIGHT: CONTENT */}
      <Box sx={{ textAlign: "left" }}>
        <Typography
          sx={{
            fontSize: "1rem",
            fontWeight: 700,
            color: "#01b5cf",
            marginBottom: "4px",
          }}
        >
          {event.title}
        </Typography>

        {event.subtitle && (
          <Typography
            sx={{
              fontSize: "0.9rem",
              marginBottom: "12px",
              color: "#000",
              fontWeight: 600,
            }}
          >
            {event.subtitle}
          </Typography>
        )}

        {/* SPEAKERS */}
        {event.speakers?.map((s, i) => (
          <SpeakerCard key={i} speaker={s} />
        ))}
      </Box>
    </Box>
  );
}
