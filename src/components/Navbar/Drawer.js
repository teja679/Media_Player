import * as React from 'react';
import Drawer from '@mui/material/Drawer';
import { IconButton } from '@mui/material';
import MenuOutlinedIcon from '@mui/icons-material/MenuOutlined';import './styles.css'
import HomeOutlinedIcon from '@mui/icons-material/HomeOutlined';
import PlaylistPlayOutlinedIcon from '@mui/icons-material/PlaylistPlayOutlined';
import PlayCircleRoundedIcon from '@mui/icons-material/PlayCircleRounded';

export default function TemporaryDrawer({ open, setOpen }) {

  return (
    <div className='drawer'>
      <div className='menu-button'>
        <IconButton onClick={() => setOpen(!open)}>
          <MenuOutlinedIcon />
        </IconButton>
      </div>
      <Drawer className='drawer-navbar' anchor={'left'} open={open} onClose={() => setOpen(false)}>
        <div className='drawer-logo-div'>
          <MenuOutlinedIcon onClick={() => setOpen(!open)} />
          <div className='drawer-logo-flex'>
            <PlayCircleRoundedIcon />
            Media Player
          </div>
        </div>
        <div className='drawer-div'>
          <a className='links-div' href='/'>
            <HomeOutlinedIcon />
            <p className='links'>Home</p>
          </a>
          <a className='links-div' href='/playlist'>
            <PlaylistPlayOutlinedIcon />
            <p className='links'>Playlist</p>
          </a>
        </div>
      </Drawer>
    </div>
  );
}
