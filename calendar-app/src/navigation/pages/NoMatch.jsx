import React from "react";
import Box from "@mui/material/Box"
import Toolbar from '@mui/material/Toolbar';
import Typography from '@mui/material/Typography';

const NoMatch = ({drawerWidth}) => {
  return (
    <Box
        component="main"
        sx={{ flexGrow: 1, p: 3, width: { sm: `calc(100% - ${drawerWidth}px)` } }}
      >
        <Toolbar />
        <Typography paragraph>
          404 Not Found
        </Typography>
      </Box>
  )
}

export default NoMatch;