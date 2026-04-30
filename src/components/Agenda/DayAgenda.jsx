import React from "react";
import Box from "@mui/material/Box";
import AgendaItem from "./AgendaItem";

export default function DayAgenda({ events = [] }) {
  return (
    <Box
      sx={{
        width: "85%",
        margin: "40px auto",
        background: "#efefef",
        borderRadius: "10px",
        overflow: "hidden",
      }}
    >
      {events.map((ev, idx) => (
        <Box
          key={idx}
          sx={{
            borderBottom: idx !== events.length - 1 ? "1px solid #bbb" : "none",
          }}
        >
          <AgendaItem event={ev} />
        </Box>
      ))}
    </Box>
  );
}
