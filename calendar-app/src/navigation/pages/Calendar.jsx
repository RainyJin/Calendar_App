import React from "react";
import Box from "@mui/material/Box"
import Toolbar from '@mui/material/Toolbar';
import Typography from '@mui/material/Typography';
import FullCalendar from '@fullcalendar/react';
import dayGridPlugin from '@fullcalendar/daygrid';

const Calendar = ({drawerWidth}) => {
  return (
    <Box sx={{ display: 'flex' }}>
      <Box
        component="main"
        sx={{ mt: 10, height: 600, width: 1800 }}
      >
        <FullCalendar
          height={700}
          plugins={[ dayGridPlugin ]} 
          initialView="dayGridWeek" 
          headerToolbar={{ left: 'prev next today',
          center: 'title',
          right: 'dayGridWeek,dayGridDay' }} 
          />
      </Box>
    </Box>
  )
}

export default Calendar;