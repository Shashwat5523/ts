import React from 'react'
import "./sidebar.css"
import DashboardCustomizeRoundedIcon from '@mui/icons-material/DashboardCustomizeRounded';
import TableChartRoundedIcon from '@mui/icons-material/TableChartRounded';
import BarChartRoundedIcon from '@mui/icons-material/BarChartRounded';
import FormatListBulletedRoundedIcon from '@mui/icons-material/FormatListBulletedRounded';
import AccountBoxRoundedIcon from '@mui/icons-material/AccountBoxRounded';
import ChatBubbleRoundedIcon from '@mui/icons-material/ChatBubbleRounded';
import LogoutRoundedIcon from '@mui/icons-material/LogoutRounded';
import { Link } from 'react-router-dom';
import logo from '../../logo.png'

const Sidebar = () => {
  return (
    <div className='sidebar'>
        <div className='header'>
            <Link to="/" style={{textDecoration:"none"}}>
                <img src={logo} alt="" />
            </Link>
        </div>
        <hr/>
        <div className='center'>
            <ul>
                <p className='main'>
                    HOME
                    <Link to="/" style={{textDecoration:"none"}}>
                    <li>
                    <DashboardCustomizeRoundedIcon className='ic'/>
                    <span className='sp'>Dashboard</span>
                </li>
                    </Link>
                </p>
                <p className='Menu'>MENU 
                <Link to="/tables" style={{textDecoration:"none"}}>
                <li>
                    <TableChartRoundedIcon className='ic'/>
                    <span className='sp'>Tables</span>
                </li>
                </Link>
                <li>
                    <BarChartRoundedIcon className='ic'/>
                    <span className='sp'>Charts</span>
                </li>
                <Link to="/form" style={{textDecoration:"none"}}>
                <li>
                    <FormatListBulletedRoundedIcon className='ic'/>
                    <span className='sp'>Form Elements</span>
                </li>
                </Link>
               
                <li>
                    <AccountBoxRoundedIcon className='ic'/>
                    <span className='sp'>Icons</span>
                </li>
                <li>
                    <ChatBubbleRoundedIcon className='ic'/>
                    <span className='sp'>Chat WIth Us</span>
                </li>
                </p>
                <p className='contact'>
                    USER
                    <li>
                    <LogoutRoundedIcon className='ic'/>
                    <span className='sp'>Logout</span>
                </li></p>
            </ul>
        </div>
        <div className='footer'>color</div>
    </div>
  )
}

export default Sidebar;