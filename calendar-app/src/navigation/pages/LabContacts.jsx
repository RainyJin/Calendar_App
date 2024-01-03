import React from "react";
import Box from "@mui/material/Box"
import Toolbar from '@mui/material/Toolbar';
import Typography from '@mui/material/Typography';

const LabContacts = ({drawerWidth}) => {
  return (
    <Box sx={{ display: 'flex' }}>
      <Box
        component="main"
        sx={{ flexGrow: 1, p: 3, width: { sm: `calc(100% - ${drawerWidth}px)` } }}
      >
        <Toolbar />
        <Typography paragraph>
          Contacts
        </Typography>
      </Box>
    </Box>
    
  )
}

export default LabContacts;