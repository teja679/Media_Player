import './styles.css'
import PlayCircleRoundedIcon from '@mui/icons-material/PlayCircleRounded';
import SearchRoundedIcon from '@mui/icons-material/SearchRounded';
import KeyboardVoiceRoundedIcon from '@mui/icons-material/KeyboardVoiceRounded';
import NotificationsIcon from '@mui/icons-material/Notifications';
import PeopleAltIcon from '@mui/icons-material/PeopleAlt';
import { useState } from 'react';
import TemporaryDrawer from './Drawer';

const Navbar = () => {
    const [open, setOpen] = useState(false)
  return (
    <div className='navbar'>
    <div className='logo-div'>
        {/* <MenuRoundedIcon /> */}
        <TemporaryDrawer open={open} setOpen={setOpen} />
        <div className='logo-flex'>
            <PlayCircleRoundedIcon />
            Media Player
        </div>
    </div>
    <div className='searchbar-div'>
        <div className='search-div'>
            <input type='text' placeholder='Search' />
            <SearchRoundedIcon />
        </div>
            <KeyboardVoiceRoundedIcon />
    </div>
    <div className='user-div'>
        <NotificationsIcon />
        <PeopleAltIcon />
    </div>
    </div>
  )
}

export default Navbar
