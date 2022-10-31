import * as React from 'react';
import Drawer from '@mui/material/Drawer';
import { IconButton } from '@mui/material';
import MenuOpenRoundedIcon from '@mui/icons-material/MenuOpenRounded';
import './styles.css'
import HomeOutlinedIcon from '@mui/icons-material/HomeOutlined';
import PlaylistPlayOutlinedIcon from '@mui/icons-material/PlaylistPlayOutlined';
import PlayCircleRoundedIcon from '@mui/icons-material/PlayCircleRounded';

export default function TemporaryDrawer({ open, setOpen }) {

  return (
    <div className='drawer'>
      <div className='menu-button'>
        <IconButton onClick={() => setOpen(!open)}>
          <MenuOpenRoundedIcon color='primary' />
        </IconButton>
      </div>
      <Drawer className='drawer-navbar' anchor={'left'} open={open} onClose={() => setOpen(false)}>
        <div className='drawer-logo-div'>
          <MenuOpenRoundedIcon color='primary' />
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
