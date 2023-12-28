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

const drawerWidth = 240;


export default function LeftSideBar(props) {

  const drawer = (
    <div>
      <Stack alignItems="center" justifyContent="center" sx={{ paddingTop: 3, paddingBottom: 4 }}>
        <Avatar sx={{ bgcolor: "#990000", width: 120, height: 120, borderRadius: 2}} variant="rounded">
          <PersonIcon sx={{ marginTop: 4, width: 140, height: 200}}/>
        </Avatar>
      </Stack>
      <List>
        <ListItem key='Inbox' >
          <ListItemButton>
            <ListItemIcon>
              <MailIcon sx={{ fontSize: 30 }}/>
            </ListItemIcon>
            <ListItemText primary="Inbox" />
          </ListItemButton>
        </ListItem>
        <ListItem key='Calendar'>
          <ListItemButton>
            <ListItemIcon>
              <CalendarMonthIcon sx={{ fontSize: 30 }}/>
            </ListItemIcon>
            <ListItemText primary="Calendar" />
          </ListItemButton>
        </ListItem>
        <ListItem key='Lab Contacts'>
          <ListItemButton>
            <ListItemIcon>
              <PermContactCalendarOutlinedIcon sx={{ fontSize: 30 }}/>
            </ListItemIcon>
            <ListItemText primary="Lab Contacts" />
          </ListItemButton>
        </ListItem>
        <ListItem key='Project Files'>
          <ListItemButton>
            <ListItemIcon>
              <FolderOutlinedIcon sx={{ fontSize: 30 }}/>
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
      <AppBar
        position="fixed"
        sx={{
          width: { sm: `calc(100% - ${drawerWidth}px)` },
          ml: { sm: `${drawerWidth}px` },
        }}
      >
        <Toolbar>
          <Typography variant="h6" noWrap component="div">
            Responsive drawer
          </Typography>
        </Toolbar>
      </AppBar>
      <Box
        component="nav"
        sx={{ width: { sm: drawerWidth }, flexShrink: { sm: 0 } }}
        aria-label="mailbox folders"
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
      <Box
        component="main"
        sx={{ flexGrow: 1, p: 3, width: { sm: `calc(100% - ${drawerWidth}px)` } }}
      >
        <Toolbar />
        <Typography paragraph>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod
          tempor incididunt ut labore et dolore magna aliqua. Rhoncus dolor purus non
          enim praesent elementum facilisis leo vel. Risus at ultrices mi tempus
          imperdiet. Semper risus in hendrerit gravida rutrum quisque non tellus.
          Convallis convallis tellus id interdum velit laoreet id donec ultrices.
          Odio morbi quis commodo odio aenean sed adipiscing. Amet nisl suscipit
          adipiscing bibendum est ultricies integer quis. Cursus euismod quis viverra
          nibh cras. Metus vulputate eu scelerisque felis imperdiet proin fermentum
          leo. Mauris commodo quis imperdiet massa tincidunt. Cras tincidunt lobortis
          feugiat vivamus at augue. At augue eget arcu dictum varius duis at
          consectetur lorem. Velit sed ullamcorper morbi tincidunt. Lorem donec massa
          sapien faucibus et molestie ac.
        </Typography>
        <Typography paragraph>
          Consequat mauris nunc congue nisi vitae suscipit. Fringilla est ullamcorper
          eget nulla facilisi etiam dignissim diam. Pulvinar elementum integer enim
          neque volutpat ac tincidunt. Ornare suspendisse sed nisi lacus sed viverra
          tellus. Purus sit amet volutpat consequat mauris. Elementum eu facilisis
          sed odio morbi. Euismod lacinia at quis risus sed vulputate odio. Morbi
          tincidunt ornare massa eget egestas purus viverra accumsan in. In hendrerit
          gravida rutrum quisque non tellus orci ac. Pellentesque nec nam aliquam sem
          et tortor. Habitant morbi tristique senectus et. Adipiscing elit duis
          tristique sollicitudin nibh sit. Ornare aenean euismod elementum nisi quis
          eleifend. Commodo viverra maecenas accumsan lacus vel facilisis. Nulla
          posuere sollicitudin aliquam ultrices sagittis orci a.
        </Typography>
      </Box>
    </Box>
  );
}