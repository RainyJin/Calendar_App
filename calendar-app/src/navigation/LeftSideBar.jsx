import * as React from 'react';
import AppBar from '@mui/material/AppBar';
import Avatar from '@mui/material/Avatar';
import Box from '@mui/material/Box';
import CssBaseline from '@mui/material/CssBaseline';
import Divider from '@mui/material/Divider';
import Drawer from '@mui/material/Drawer';
import IconButton from '@mui/material/IconButton';
import InboxIcon from '@mui/icons-material/MoveToInbox';
import List from '@mui/material/List';
import ListItem from '@mui/material/ListItem';
import ListItemButton from '@mui/material/ListItemButton';
import ListItemIcon from '@mui/material/ListItemIcon';
import ListItemText from '@mui/material/ListItemText';
import MailIcon from '@mui/icons-material/Mail';
import MenuIcon from '@mui/icons-material/Menu';
import Stack from '@mui/material/Stack';
import Toolbar from '@mui/material/Toolbar';
import Typography from '@mui/material/Typography';

import CalendarMonthIcon from '@mui/icons-material/CalendarMonth';
import FolderOutlinedIcon from '@mui/icons-material/FolderOutlined';
import PermContactCalendarOutlinedIcon from '@mui/icons-material/PermContactCalendarOutlined';
import PersonIcon from '@mui/icons-material/Person';

import { Link } from 'react-router-dom'

const drawerWidth = 240;


export default function LeftSideBar(props) {

  const drawer = (
    <div>
      <Stack alignItems="center" justifyContent="center" sx={{ paddingTop: 3, paddingBottom: 4 }}>
        <Avatar sx={{ bgcolor: "#990000", width: 120, height: 120, borderRadius: 2}} variant="rounded">
          <PersonIcon sx={{ marginTop: 4, width: 140, height: 200}}/>
        </Avatar>
      </Stack>
      <List sx={{ pt: 4 }}>
        <ListItem key='Inbox' disablePadding>
          <ListItemButton component={Link} to="/Inbox">
            <ListItemIcon>
              <MailIcon sx={{ fontSize: 30, ml: 2, my: 1 }}/>
            </ListItemIcon>
            <ListItemText primary="Inbox" />
          </ListItemButton>
        </ListItem>
        <ListItem key='Calendar' disablePadding>
          <ListItemButton component={Link} to="/Calendar">
            <ListItemIcon>
              <CalendarMonthIcon sx={{ fontSize: 30, ml: 2, my: 1 }}/>
            </ListItemIcon>
            <ListItemText primary="Calendar" />
          </ListItemButton>
        </ListItem>
        <ListItem key='Lab Contacts' disablePadding>
          <ListItemButton component={Link} to="/LabContacts">
            <ListItemIcon>
              <PermContactCalendarOutlinedIcon sx={{ fontSize: 30, ml: 2, my: 1 }}/>
            </ListItemIcon>
            <ListItemText primary="Lab Contacts" />
          </ListItemButton>
        </ListItem>
        <ListItem key='Project Files' disablePadding>
          <ListItemButton component={Link} to="/ProjectFiles">
            <ListItemIcon>
              <FolderOutlinedIcon sx={{ fontSize: 30, ml: 2, my: 1 }}/>
            </ListItemIcon>
            <ListItemText primary="Project Files" />
          </ListItemButton>
        </ListItem>
      </List>
    </div>
  );


  return (
    <Box sx={{ display: 'flex' }}>
      <CssBaseline />
      <Box
        component="nav"
        sx={{ width: { sm: drawerWidth }, flexShrink: { sm: 0 } }}
        aria-label="side bar"
      >
        <Drawer
          variant="permanent"
          sx={{
            display: { xs: 'none', sm: 'block' },
            '& .MuiDrawer-paper': { boxSizing: 'border-box', width: drawerWidth },
          }}
          open
        >
          {drawer}
        </Drawer>
      </Box>
    </Box>
  );
}