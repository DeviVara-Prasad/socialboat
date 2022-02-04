import React from 'react';
import Button from '@mui/material/Button';
import Menu from '@mui/material/Menu';
import MenuItem from '@mui/material/MenuItem';
import {Box} from '@mui/material';
import { purple, red } from '@mui/material/colors';
export default function ProfileTab({profileData}) {
  const [anchorEl, setAnchorEl] = React.useState(null);
  const open = Boolean(anchorEl);
  const handleClick = (event) => {
    setAnchorEl(event.currentTarget);
  };
  const handleClose = () => {
    window.location.href="/Edit";
  };
  const handleClo = () => {
    window.location.href="/Login";
  };

  return (
    <Box >
      <Button
        id="basic-button"
        aria-controls={open ? 'basic-menu' : undefined}
        aria-haspopup="true"
        aria-expanded={open ? 'true' : undefined}
        onClick={handleClick}
        backgroundColor="primary"
      > <div style={
         { color: "white",}
      }>
        {profileData.name}</div>
      </Button>
      <Menu
        id="basic-menu"
        anchorEl={anchorEl}
        open={open}
        MenuListProps={{
          'aria-labelledby': 'basic-button',
        }}
      >
        <MenuItem onClick={handleClose}>Edit</MenuItem>
        <MenuItem onClick={handleClo} >Logout</MenuItem>
      </Menu>
    </Box>
  );
}