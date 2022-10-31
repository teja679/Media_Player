import './styles.css'
import MenuRoundedIcon from '@mui/icons-material/MenuRounded';
import PlayCircleRoundedIcon from '@mui/icons-material/PlayCircleRounded';
import SearchRoundedIcon from '@mui/icons-material/SearchRounded';
import KeyboardVoiceRoundedIcon from '@mui/icons-material/KeyboardVoiceRounded';
import NotificationsIcon from '@mui/icons-material/Notifications';
import PeopleAltIcon from '@mui/icons-material/PeopleAlt';

const Navbar = () => {
  return (
    <div className='navbar'>
    <div className='logo-div'>
        <MenuRoundedIcon />
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
