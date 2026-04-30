import React from "react";
import DelegateButton from "./DelegateButton/DelegateButton";
import DayTabs from "./DayTabs";
import DayAgenda from "./DayAgenda";
import { day1, day2 } from "./../../data/agenda";
import { Box, Typography } from "@mui/material";

export default function Agenda() {
  const [value, setValue] = React.useState(0);

  return (
    <Box
      sx={{
        pb: "5px",
        display: "flex",
        flexDirection: "column",
        gap: "1.5rem",
      }}
    >
      <Typography
        align="center"
        className="sectionTitle"
        sx={{ fontSize: "1.5rem", mb: "1.5rem", fontWeight: "bold" }}
      >
        Conference Agenda
      </Typography>
      <DelegateButton />
      <DayTabs
        value={value}
        onChange={(e, v) => setValue(v)}
        labels={["DAY 1 - April 23, 2026", "DAY 2 - April 24, 2026"]}
      />
      <Box>
        {value === 0 && <DayAgenda events={day1} />}
        {value === 1 && <DayAgenda events={day2} />}
      </Box>
    </Box>
  );
}
