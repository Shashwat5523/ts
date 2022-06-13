import React from 'react'
import "./navbar.css"
import SearchRoundedIcon from '@mui/icons-material/SearchRounded';
import NotificationsRoundedIcon from '@mui/icons-material/NotificationsRounded';
import NoteRoundedIcon from '@mui/icons-material/NoteRounded';
import AutoGraphRoundedIcon from '@mui/icons-material/AutoGraphRounded';
import FiberNewRoundedIcon from '@mui/icons-material/FiberNewRounded';
import AddBoxRoundedIcon from '@mui/icons-material/AddBoxRounded';
import LanguageRoundedIcon from '@mui/icons-material/LanguageRounded';

const Navbar = () => {
  return (
    <div className='navbar'>
      <div className="wrapper">
        <div className="search">
          <input type='text' placeholder='Search'/>
          <SearchRoundedIcon className='icon'/>
        </div>
        <div className="items">
          <div className="icons">
            <LanguageRoundedIcon className='fig'/>
            English
          </div>
          <div className="icons">
            <FiberNewRoundedIcon className='fig'/>
          </div>
          <div className="icons">
            <AutoGraphRoundedIcon className='fig'/>
          </div>
          <div className="icons">
            <AddBoxRoundedIcon className='fig'/>
          </div>
          <div className="icons">
            <NoteRoundedIcon className='fig'/>
          </div>
          <div className="icons">
            <NotificationsRoundedIcon className='fig'/>
          </div>
          <div className="icons">
           <img
           src='./images/shashwat-photo.jpg'
           alt=''
           className='pic'
           />
          </div>
        </div>
      </div>
    </div>
  )
}

export default Navbar;